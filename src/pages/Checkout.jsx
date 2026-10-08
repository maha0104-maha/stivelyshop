import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Input from "../components/Input";
import { useCart } from "../context/CartContext";
const Checkout=()=>{
  const navigate=useNavigate();
  const {cartItems,subtotal,discount,deliveryCharge,finalTotal,clearCart}=useCart();
  const [formData,setFormData]=useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [paymentMethod,setPaymentMethod]=useState("cod");
  const [errors,setErrors]=useState({});
  const handleChange=(e)=>{
    const {name,value }=e.target;
    setFormData((previous)=>({
      ...previous,
      [name]: value,
    }));
    setErrors((previous)=>({
      ...previous,
      [name]: "",
    }));
  };
  const validateForm=()=>{
    const newErrors={};
    if(!formData.fullName.trim()){
      newErrors.fullName="Full name is required";
    }

    if(!formData.email.trim()){
      newErrors.email = "Email is required";
     }else if(
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ){
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()){
      newErrors.phone="Phone number is required";
    }else if (!/^[0-9]{10}$/.test(formData.phone)){
      newErrors.phone ="Enter a valid 10-digit phone number";
    }
    if (!formData.address.trim()){
      newErrors.address ="Address is required";
    }
    if (!formData.city.trim()) {
      newErrors.city ="City is required";
    }
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }
    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^[0-9]{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Enter a valid 6-digit pincode";
    }
    setErrors(newErrors);

   return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    if (cartItems.length === 0) {
      return;
    }
    const orderId = `STV-${Date.now().toString().slice(-8)}`;
    const orderData = {
      orderId,
      customer: formData,
      paymentMethod,
      items: cartItems,
      subtotal,
      discount,
      deliveryCharge,
      finalTotal,
    };
    sessionStorage.setItem(
      "stively-last-order",
      JSON.stringify(orderData)
    );
    // clear cart
    clearCart();
    //then  confirmation page
    navigate("/order-confirmation");
  };
  //empty
  if (cartItems.length === 0) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500">
            Checkout
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-900">
            Your cart is empty
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Add products to your cart before checking out.
          </p>
          <button type="button"
            onClick={() => navigate("/search")}
            className="mt-6 rounded-full bg-gray-900 px-6 py-3 text-xs font-medium text-white transition hover:bg-gray-700">
            Continue Shopping
          </button>
        </div>
      </main>
    );
  }
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500">
          Checkout
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">
          Complete Your Order
        </h1>
      </div>
      <form
        onSubmit={handlePlaceOrder}
        className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <section>
          <div className="rounded-xl border border-gray-200 p-5 sm:p-6">
            <h2 className="text-base font-semibold text-gray-900">
              Shipping Information
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Input
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  error={errors.fullName}
                  required/>
              </div>
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                error={errors.email}
                required />
              <Input
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit phone number"
                error={errors.phone}
                required/>
              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="mb-1.5 block text-xs font-medium text-gray-900">
                  Address
                  <span className="ml-1 text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House number, street, area"
                  className={`w-full resize-none rounded-lg border px-3 py-2.5 text-sm outline-none transition ${
                    errors.address
                      ?"border-red-400 focus:border-red-500"
                      :"border-gray-300 focus:border-gray-900"
                  }`} />
                {errors.address &&(
                  <p className="mt-1 text-xs text-red-500">
                    {errors.address}
                  </p>
                )}
              </div>
              <Input
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                error={errors.city}
                required
              />
              <Input
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                error={errors.state}
                required
              />
              <Input
                label="Pincode"
                name="pincode"
                type="text"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="6-digit pincode"
                error={errors.pincode}
                required
              />
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-gray-200 p-5 sm:p-6">
            <h2 className="text-base font-semibold text-gray-900">
              Payment Method
            </h2>
            <div className="mt-5 space-y-3">
              <label
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition ${
                  paymentMethod==="cod"
                    ?"border-gray-900"
                    :"border-gray-200 hover:border-gray-400"
                }`}>
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod==="cod"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Cash on Delivery
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Pay when your order arrives.
                  </p>
                </div>
              </label>
              <label
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition ${
                  paymentMethod==="card"
                    ?"border-gray-900"
                    :"border-gray-200 hover:border-gray-400"
                }`}>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod==="card"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Credit/Debit Card
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Demo payment option.
                  </p>
                </div>
              </label>

              {/* UPI */}

              <label
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition ${
                  paymentMethod === "upi"
                    ? "border-gray-900"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <input type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod ==="upi"}
                  onChange={(e)=>
                    setPaymentMethod(e.target.value)
                  }
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    UPI
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Demo UPI payment option.
                  </p>
                </div>
              </label>
            </div>
          </div>
        </section>

        {/* summary */}
        <aside className="h-fit rounded-xl border border-gray-200 p-5 lg:sticky lg:top-24">
          <h2 className="text-base font-semibold text-gray-900">
            Order Summary
          </h2>
          <div className="mt-5 space-y-4">
            {cartItems.map((item)=>{
              const discountedPrice=item.price-(item.price*item.discountPercentage)/100;
              return (
                <div key={`${item.id}-${item.size}`}className="flex gap-3">
                  <div className="h-14 w-12 shrink-0 overflow-hidden rounded-md bg-gray-100">
                    <img
                         src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-medium text-gray-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[10px] text-gray-500">
                      Qty: {item.quantity}
                      {item.size&&`  Size: ${item.size}`}
                    </p>
                  </div>
                  <p className="text-xs font-medium text-gray-900">
                    $
                    {(discountedPrice*item.quantity).toFixed(2)}
                  </p>
                </div>
              );
            })}
          </div>

         <div className="my-5 border-t border-gray-200" />
          {/* price details */}
          <div className="space-y-3 text-xs">
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
            <div className="flex justify-between">
              <span className="text-gray-500">
                Delivery
              </span>
              <span className="font-medium text-gray-900">
                {deliveryCharge === 0
                  ? "FREE"
                  : `$${deliveryCharge.toFixed(2)}`}
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
          <button type="submit"
            className="mt-5 w-full rounded-full bg-gray-900 px-5 py-3 text-xs font-medium text-white transition hover:bg-gray-700">
            Place Order
          </button>

        </aside>

      </form>
    </main>
  );
};

export default Checkout;