import React,{createContext,useContext,useEffect,useState} from "react";
const CartContext=createContext();
const CartProvider =({children})=>{
  //load cart from localStorage 
  const [cartItems,setCartItems]=useState(()=>{
    try{
      const savedCart=localStorage.getItem("stively-cart");
      return savedCart?JSON.parse(savedCart):[];
    }catch(error){
      return [];
    }
  });

  // Save cart when changes
  useEffect(()=>{
    localStorage.setItem("stively-cart",JSON.stringify(cartItems));
  },[cartItems]);

  const addToCart=(product,quantity=1,size = "")=>{
    setCartItems((previousItems)=>{
      const existingItem= previousItems.find(
        (item)=>
          item.id===product.id &&
          item.size===size
      );

      // product already exists
      if (existingItem){
        return previousItems.map((item) =>
          item.id===product.id && item.size===size
            ? {...item,quantity: item.quantity + quantity}:item
        );
      }
      // New product
      return [
        ...previousItems,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          discountPercentage: product.discountPercentage || 0,
          thumbnail: product.thumbnail,
          size,
          quantity,
        },
      ];
    });
  };

  // remove
  const removeFromCart=(id,size = "")=>{
    setCartItems((previousItems)=>
      previousItems.filter(
        (item) =>
          !(item.id===id && item.size===size)
      )
    );
  };

  const updateQuantity=(id,size,quantity)=>{
    if(quantity<1) {
      return;
    }
    setCartItems((previousItems)=>
      previousItems.map((item)=>
        item.id===id && item.size===size?{...item,quantity}:item
      )
    );
  };
  // clear
  const clearCart=()=>{
    setCartItems([]);
  };

  // subtotal
  const subtotal=cartItems.reduce((total,item)=>{
    const discountedPrice=item.price-(item.price * item.discountPercentage)/100;
    return total+discountedPrice*item.quantity;
  },0);

  //dicount
  const discount=cartItems.reduce((total, item)=>{
    const itemDiscount=(item.price*item.discountPercentage)/100;
    return total+itemDiscount* item.quantity;
  }, 0);

  //deleviry
  // Free delivery for orders of $100 or more
  const deliveryCharge =
    subtotal === 0
      ? 0
      : subtotal >= 100
        ? 0
        : 10;

  // total
  const finalTotal= subtotal + deliveryCharge;
  const totalItems= cartItems.reduce(
    (total,item)=>total+item.quantity,
    0
  );
  return (
    <CartContext.Provider
      value={{
        cartItems,addToCart,removeFromCart,
        updateQuantity,clearCart,subtotal,
        discount,deliveryCharge, finalTotal,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart=()=>{
  return useContext(CartContext);
};
export default CartProvider;