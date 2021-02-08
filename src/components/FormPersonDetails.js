import React from 'react';
import { useForm } from "react-hook-form";

const FormPersonDetails = ({nextStep, prevStep, handleChange, user}) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = () => nextStep();
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:w-3/5 md:w-2/3 lg:w-1/2 sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Enter person details</h2>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">Occupation</label>
                  <input type="text"
                         name="occupation"
                         className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                         onChange={handleChange}
                         ref={register({ required: true })}
                         value={user.occupation}
                         placeholder="Occupation"/>
                  {errors.occupation && <span className="text-red-600">Occupation is required</span>}
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">City</label>
                  <input type="text"
                         name="city"
                         className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                         onChange={handleChange}
                         ref={register({ required: true })}
                         value={user.city}
                         placeholder="City"/>
                  {errors.city && <span className="text-red-600">City is required</span>}
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Bio</label>
                  <input type="text"
                         name="bio"
                         className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                         onChange={handleChange}
                         ref={register({ required: true })}
                         value={user.bio}
                         placeholder="Bio"/>
                  {errors.bio && <span className="text-red-600">Bio is required</span>}
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
                  onClick={handleSubmit(onSubmit)}
                >Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPersonDetails;