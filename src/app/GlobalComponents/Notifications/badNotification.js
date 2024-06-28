import React from 'react'
import { Fragment, useContext } from "react";
import { Transition } from "@headlessui/react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { FaCheck } from "react-icons/fa";


export default function BadNotification({ show, title, desc, onClose }) {


  return (
    <>
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 z-10 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center mb-20 space-y-4 mt-12 sm:items-end">
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaCheck
                      className="h-7 w-7 text-light-red-I"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-md font-Jost text-gray-900">{title}</p>
                    <p className="mt-1 font-Poppins text-sm text-black">
                      {desc}
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-mid-blue-I focus:ring-offset-2"
                      onClick={() => {
                        onClose();
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
