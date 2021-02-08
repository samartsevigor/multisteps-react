import React from 'react';

const Success = () => {
  return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:w-3/5 md:w-2/3 lg:w-1/2 sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div>
                <div className="flex justify-center"><img src="https://i.imgur.com/QOi7Nie.png" width="80"/></div>
                <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Thanks for your confirmation</h2>
                <p className="text-gray-500 text-base text-center">Please check your email and click the confirmation link</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Success;