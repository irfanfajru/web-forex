"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
export default function PriceCard({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [isRef, setIsRef] = useState(false);
  // const inputRef = (e) => {
  //   if (e.target.value) return setIsRef(true);
  //   return setIsRef(false);
  // };
  const closeModal = () => {
    setIsOpen(false);
    // setIsRef(false);
  };
  return (
    <>
      {/* card */}
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          {item.title}
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">Rp</span>
          <span className="text-5xl font-extrabold tracking-tight">
            {item.price}K
          </span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>
        {/* <p className="text-base font-normal mt-2">
          Get Rp {item.refPrice}K/month with the referral code
        </p> */}
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Choose plan
        </button>
      </div>
      {/* modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center font-medium leading-6 text-gray-900"
                  >
                    Checkout your plan
                  </Dialog.Title>
                  <div className="mt-10 grid grid-cols-2">
                    <p>Plan</p>
                    <p>: {item.title}</p>
                    <p>Price</p>
                    <p>: Rp {item.price}K/month</p>
                    {/* <p>Referral</p>
                    <p>: {isRef ? "Yes" : "No"}</p> */}
                  </div>
                  <hr></hr>
                  <div className="mt-2 grid grid-cols-2">
                    <p>Total</p>
                    <p>: Rp {item.price * item.month}K</p>
                  </div>
                  {/* referral code */}
                  {/* <div className="mt-4">
                    <label
                      for="referralcode"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Referral Code (Optional)
                    </label>
                    <input
                      onChange={inputRef}
                      type="text"
                      name="referralcode"
                      id="referralcode"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                    ></input>
                  </div> */}
                  <div className="mt-4">
                    <button
                      type="button"
                      className="mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                      onClick={closeModal}
                    >
                      Pay Now
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
