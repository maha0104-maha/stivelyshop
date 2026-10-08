import React from "react";
import {Link} from "react-router-dom";
import {FiCheck} from "react-icons/fi";

const OrderConfirmation=()=>{
  const savedOrder=sessionStorage.getItem("stively-last-order");
  const order=savedOrder?JSON.parse(savedOrder):null;
  if (!order){
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            No Recent Order
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            We couldn't find a recent order.
          </p>
          <Link to="/" className="mt-6 inline-block rounded-full bg-gray-900 px-6 py-3 text-xs font-medium text-white transition hover:bg-gray-700">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }
  const totalItems=order.items.reduce(
    (total,item)=>total+item.quantity,0);
  const paymentName=
    order.paymentMethod==="cod"
      ? "Cash on Delivery"
      : order.paymentMethod === "upi"
        ? "UPI"
        : "Credit / Debit Card";
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white">
          <FiCheck className="h-7 w-7" />
        </div>
        <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
          Order Confirmed
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-gray-900">
          Thank You!
        </h1>
       <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
          Your order has been successfully placed.
          Thank you for shopping with StivelyShop.
        </p>
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Order ID
            </p>
            <p className="mt-2 text-lg font-semibold tracking-wide text-gray-900">
              {order.orderId}
            </p>
          </div>
          <div className="my-5 border-t border-gray-200" />
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">
              Payment Method
            </span>
            <span className="font-medium text-gray-900">
              {paymentName}
            </span>
          </div>
          <div className="mt-4 flex justify-between text-xs">
            <span className="text-gray-500">
              Items
            </span>
            <span className="font-medium text-gray-900">
              {totalItems}
            </span>
          </div>
          <div className="mt-4 flex justify-between text-xs">
            <span className="text-gray-500">
              Delivery
            </span>
            <span className="font-medium text-gray-900">
              {order.deliveryCharge === 0
                ? "FREE"
                : `$${order.deliveryCharge.toFixed(2)}`}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-semibold text-gray-900">
              Total
            </span>
            <span className="text-lg font-semibold text-gray-900">
              ${order.finalTotal.toFixed(2)}
            </span>
          </div>
        
        <div className="mt-4 rounded-xl border border-gray-200 p-5 text-left">
          <h2 className="text-sm font-semibold text-gray-900">
            Shipping Information
          </h2>
          <p className="mt-3 text-xs font-medium text-gray-900">
            {order.customer.fullName}
          </p>
          <p className="mt-1 text-xs leading-5 text-gray-500">
            {order.customer.address}
            <br />
            {order.customer.city}, {order.customer.state}
            <br />
            {order.customer.pincode}
          </p>
          <p className="mt-2 text-xs text-gray-500">
            {order.customer.email}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            {order.customer.phone}
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link to="/"className="rounded-full bg-gray-900 px-6 py-3 text-xs font-medium text-white transition hover:bg-gray-700">
            Continue Shopping
          </Link>
          <Link to="/search" className="rounded-full border border-gray-300 px-6 py-3 text-xs font-medium text-gray-700 transition hover:border-gray-900">
            Browse Products
          </Link>
        </div>
      </div>
    
    </main>
  );
};

export default OrderConfirmation;