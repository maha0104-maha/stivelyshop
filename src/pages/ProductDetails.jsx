import React, {useState} from "react";
import {useParams,Link} from "react-router-dom";
import {FiMinus,FiPlus,FiShoppingBag,FiStar} from "react-icons/fi";
import useProduct from "../hooks/useProduct";
import useProducts from "../hooks/useProducts";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";
import {useCart} from "../context/CartContext";
const ProductDetails=()=>{
  const {id} = useParams();
  const { product, loading,error} = useProduct(id);
  const { products, loading: productsLoading,} = useProducts();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const {addToCart}=useCart()
  if (loading) {
    return <Loader message="Loading product details..." />;
  }
  if (error) {
    return (
      <ErrorState
        title="Unable to load product"
        message="Something went wrong while fetching this product."
      />
    );
  }

  if (!product) {
    return (
      <EmptyState
        title="Product not found"
        message="The product you're looking for doesn't exist."
      />
    );
  }
  const discountedPrice=product.price-(product.price * product.discountPercentage) / 100;
  const sizes = ["S", "M", "L", "XL"];
  const relatedProducts = products.filter((item) =>
        item.category === product.category &&
        item.id !== product.id
    ).slice(0, 4);

 return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-gray-100">
          <img src={product.images?.[0]||product.thumbnail} alt={product.title} className="aspect-square w-full object-cover"/>
        </div>
        <div className="flex  flex-col justify-center">
          <p className="text-[10px] font-medium uppercase  tracking-[0.18em] text-gray-500">
            {product.category}
          </p>
          <h1 className="mt-2 text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl">
            {product.title}
          </h1>
          <div className="mt-3 flex items-center gap-2">
             <p className="flex flex-row items-center gap-1 mt-1 text-[10px] text-gray-500">
                     <FiStar className="h-3.5 w-3.5"/>
                     <span>{product.rating}</span>
            </p>
            <span className="text-xs text-gray-400">
              ({product.reviews?.length||0} reviews)
            </span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xl font-semibold text-gray-900">
              ${discountedPrice.toFixed(2)}
            </span>
            {product.discountPercentage> 0 && (
              <>
                <span className="text-sm text-gray-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
                <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-700">
                  {product.discountPercentage.toFixed(0)}% OFF
                </span>
              </>
            )}
          </div>
          <p className="mt-4 max-w-lg text-xs leading-6 text-gray-600">
            {product.description}
          </p>
          <div className="mt-5">
            <p className="mb-2 text-xs font-medium text-gray-900">
              Select Size
            </p>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button key={size} type="button"
                  onClick={()=>setSelectedSize(size)}
                  className={`h-8 w-10 rounded-md border text-xs transition ${
                    selectedSize===size
                      ?"border-gray-900 bg-gray-900 text-white"
                      :"border-gray-300 text-gray-700 hover:border-gray-900"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <p className="mb-2 text-xs font-medium text-gray-900">
              Quantity
            </p>
            <div className="flex w-fit items-center rounded-md border border-gray-300">
              <button type="button"
                onClick={()=>
                  setQuantity((previous)=>
                    Math.max(1,previous-1)
                  )
                }
                className="p-2 text-gray-600 hover:text-black"
                aria-label="Decrease quantity"
              >
                <FiMinus className="h-3.5 w-3.5" />
              </button>
              <span className="min-w-8 text-center text-xs">
                {quantity}
              </span>
              <button
                type="button"
                onClick={()=>
                  setQuantity((previous)=>previous+1)}
                className="p-2 text-gray-600 hover:text-black"
                aria-label="Increase quantity">
                <FiPlus className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* cart */}
          <button
            type="button"
            onClick={() =>{if (!selectedSize) {
               alert("Please select a size");
              return;
             }
           addToCart(product, quantity, selectedSize);
            }}
            className="mt-6 flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-xs font-medium text-white transition hover:bg-gray-700">
            <FiShoppingBag className="h-3.5 w-3.5" />
            Add to Cart
          </button>

        </div>
      </div>

      {/* related products*/}
      {!productsLoading&&relatedProducts.length>0&&(
        <section className="mt-14 border-t border-gray-200 pt-10">
          <div className="mb-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500">
              You may also like
            </p>
            <h2 className="mt-1 text-xl font-semibold text-gray-900">
              Related Products
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4">
            {relatedProducts.map((item)=>(
              <Link key={item.id} to={`/products/${item.id}`} className="group" >

                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100">
                  <img src={item.thumbnail} alt={item.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                  {item.discountPercentage > 0 && (
                    <span className="absolute left-2 top-2 rounded-full bg-white px-2 py-1 text-[9px] font-medium text-gray-900 shadow-sm">
                      {item.discountPercentage.toFixed(0)}% OFF
                    </span>
                  )}
                </div>
                {/* product Info */}
                <div className="mt-2">
                  <h3 className="truncate text-xs font-medium text-gray-900">
                    {item.title}
                  </h3>
                  <p className="flex flex-row items-center gap-1 mt-1 text-[10px] text-gray-500">
                     <FiStar className="h-3.5 w-3.5"/>
                     <span>{item.rating}</span>
                  </p>
                  <p className="mt-1 text-xs font-semibold text-gray-900">
                    $
                    {(item.price -(item.price*item.discountPercentage)/100).toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

    </main>
  );
};

export default ProductDetails;