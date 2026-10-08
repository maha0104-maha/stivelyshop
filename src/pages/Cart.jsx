import React from "react";
import {Link} from "react-router-dom";
import {FiMinus,FiPlus,FiTrash2} from "react-icons/fi";
import {useCart} from "../context/CartContext";
import EmptyState from "../components/EmptyState";
const Cart=()=>{
  const {cartItems,removeFromCart,updateQuantity,subtotal,discount,deliveryCharge,finalTotal} = useCart();
  if (cartItems.length===0){
    return (
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500">
            Shopping Cart
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-900">
            Your Cart
          </h1>
        </div>
        <EmptyState
          title="Your cart is empty"
          message="Looks like you haven't added anything to your cart yet."
        />
        <div className="flex justify-center">
          <Link
            to="/search"
            className="rounded-full bg-gray-900 px-5 py-2.5 text-xs font-medium text-white transition hover:bg-gray-700">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500">
          Shopping Cart
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">
          Your Cart
        </h1>
        <p className="mt-1 text-xs text-gray-500">
          {cartItems.length}{" "}
          {cartItems.length ===1?"item":"items"} in your cart
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {cartItems.map((item)=>{
            const discountedPrice=item.price-(item.price*item.discountPercentage)/100;
            return (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-4 rounded-xl border border-gray-200 p-3 sm:p-4">
                <Link
                  to={`/products/${item.id}`}
                  className="h-24 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-28 sm:w-24" >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex justify-between gap-3">
                    <div className="min-w-0">
                      <Link
                        to={`/products/${item.id}`}
                        className="text-sm font-medium text-gray-900 hover:underline">
                        {item.title}
                      </Link>
                    {item.size && (
                        <p className="mt-1 text-[10px] text-gray-500">
                          Size: {item.size}
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(item.id, item.size)
                      }
                      className="shrink-0 text-gray-400 transition hover:text-red-500"
                      aria-label={`Remove ${item.title}`}>
                      <FiTrash2 className="h-4 w-4" />
                    </button>

                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900">
                      ${discountedPrice.toFixed(2)}
                    </span>
                    {item.discountPercentage > 0 && (
                      <span className="text-[10px] text-gray-400 line-through">
                        ${item.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center rounded-md border border-gray-300">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.size,
                            item.quantity-1
                          )
                        }
                        disabled={item.quantity=== 1}
                        className="p-1.5 text-gray-600 transition hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
                        aria-label="Decrease quantity">
                        <FiMinus className="h-3 w-3" />
                      </button>
                      <span className="min-w-7 text-center text-xs">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.size,
                            item.quantity+1
                          )
                        }
                        className="p-1.5 text-gray-600 transition hover:text-black"
                        aria-label="Increase quantity">
                        <FiPlus className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                      ${(discountedPrice*item.quantity).toFixed(2)}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        <aside className="h-fit rounded-xl border border-gray-200 p-5">
          <h2 className="text-base font-semibold text-gray-900">
            Order Summary
          </h2>

          <div className="mt-5 space-y-3 text-xs">
            {/* subtotal */}
            <div className="flex justify-between">
              <span className="text-gray-500">
                Subtotal
              </span>

              <span className="font-medium text-gray-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">
                Discount
              </span>
              <span className="font-medium text-green-600">
                -${discount.toFixed(2)}
              </span>
            </div>

            {/* delivery */}
            <div className="flex justify-between">
              <span className="text-gray-500">
                Delivery
              </span>
              <span className="font-medium text-gray-900">
                {deliveryCharge===0
                  ?"FREE"
                  :`$${deliveryCharge.toFixed(2)}`}
              </span>
            </div>
          </div>

          <div className="my-5 border-t border-gray-200" />
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-900">
              Total
            </span>
            <span className="text-lg font-semibold text-gray-900">
              ${finalTotal.toFixed(2)}
            </span>
          </div>
          <Link
            to="/checkout"
            className="mt-5 block rounded-full bg-gray-900 px-5 py-3 text-center text-xs font-medium text-white transition hover:bg-gray-700">
            Proceed to Checkout
          </Link>
          <Link
            to="/search"
            className="mt-3 block text-center text-xs text-gray-500 transition hover:text-gray-900">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
};

export default Cart;