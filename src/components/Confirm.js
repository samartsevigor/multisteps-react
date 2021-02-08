import React from 'react';

const Confirm = ({user, nextStep, prevStep}) => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:w-3/5 md:w-2/3 lg:w-1/2 sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Confirm</h2>
              </div>
            </div>
            <div className="text-gray-700">
                <div className="mt-2">
                  <div className="px-4 py-2 font-semibold">First Name</div>
                  <div className="px-4 py-2">{user.firstName}</div>
                </div>
                <div className="mt-2">
                  <div className="px-4 py-2 font-semibold">Last Name</div>
                  <div className="px-4 py-2">{user.lastName}</div>
                </div>
                <div className="mt-2">
                  <div className="px-4 py-2 font-semibold">Email</div>
                  <div className="px-4 py-2">{user.email}</div>
                </div>
                <div className="mt-2">
                  <div className="px-4 py-2 font-semibold">Occupation.</div>
                  <div className="px-4 py-2">{user.occupation}</div>
                </div>
                <div className="mt-2">
                  <div className="px-4 py-2 font-semibold">City</div>
                  <div className="px-4 py-2">{user.city}</div>
                </div>
                <div className="mt-2">
                  <div className="px-4 py-2 font-semibold">Bio</div>
                  <div className="px-4 py-2">{user.bio}</div>
                </div>
            </div>
            <div className="pt-4 flex items-center space-x-4">
              <button
                className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
                onClick={prevStep}
              >
                Prev
              </button>
              <button
                className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                onClick={nextStep}
              >Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;