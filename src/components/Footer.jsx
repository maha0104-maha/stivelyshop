import React from "react";
import {Link}  from "react-router-dom"
import {FiInstagram,FiFacebook,FiTwitter,FiMail} from "react-icons/fi"

const Footer=()=>{
    return(
        <footer className="mt-16 border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-8">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
               <div>
               <Link to="/"  className="text-xl font-semibold tracking-tight text-gray-900">
                 StivelyShop</Link>
                     <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
                            Discover fashion that fits your style,your everyday life and your journey
                     </p>
                        {/*icons*/}
                        <div className="mt-5 flex items-center gap-4">
                            <a href="#"  aria-label="Instagram" className="text-gray-500 transition hover:text-gray-900">
                                 <FiInstagram className="h-5 w-5" />
                            </a>
                            <a href="#"  aria-label="FaceBook" className="text-gray-500 transition hover:text-gray-900">
                                 <FiFacebook className="h-5 w-5" />
                            </a>
                            <a href="#"  aria-label="Twitter" className="text-gray-500 transition hover:text-gray-900">
                                 <FiTwitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                            Shop
                        </h3>
                                <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
                        <Link to="/search" className="transition hover:text-gray-900">
                            All Products
                        </Link>
                        <Link to="/search?category=womens-dresses"className="transition hover:text-gray-900">
                            Women
                        </Link>
                        <Link to="/search?category=mens-shirts"className="transition hover:text-gray-900">
                            Men
                        </Link>
                        <Link to="/search?category=shoes" className="transition hover:text-gray-900" >
                            Shoes
                         </Link>
                                </div>
                            </div>
                                        <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                            Customer Care
                            </h3>

                        <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
                        <Link to="/" className="transition hover:text-gray-900" >
                            About Us
                        </Link>
                        <Link to="/cart" className="transition hover:text-gray-900">
                            Cart
                        </Link>
                        <Link to="/checkout"className="transition hover:text-gray-900">
                            Checkout
                        </Link>
                        <Link t0="/" className="transition hover:text-gray-900">
                            Contact Us
                        </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                        Stay Connected
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-gray-500">
                        Get updates about new products and offers.
                        </p>

                        <div className="mt-4 flex items-center gap-2">
                        <div className="flex h-10 flex-1 items-center rounded-md border border-gray-300 px-3">
                            <FiMail className="mr-2 h-4 w-4 text-gray-400" />
                            <input type="email" placeholder="Your email"className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"/>
                        </div>
                        <button type="button"className="h-10 rounded-md bg-gray-900 px-4 text-sm font-medium text-white transition hover:bg-gray-700" >
                            Join
                        </button>
                        </div>
                    </div>
                    </div>
                    <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                         {new Date().getFullYear()} StivelyShop.All rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <a href="#" className="hover:text-gray-900">
                        Privacy Policy
                        </a>

                        <a href="#" className="hover:text-gray-900">
                        Terms & Conditions
                        </a>
                    </div>
        </div>
      </div>
    </footer>
  );

}

export default Footer;