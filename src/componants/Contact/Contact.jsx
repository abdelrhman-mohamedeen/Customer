import React from "react";

const Contact = () => {
  const contactData = {
    name: "Abdelrhman",
    phone: "01200115584",
    email: "abdelrhmanmohamedeen@gmail.com",
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-500 shadow-lg transform -skew-y-12 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-orange-100 shadow-3xl sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-teal-600 mb-4">
                Contact Us
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex items-center">
                  <span className="font-semibold mr-2 text-teal-600">
                    Name:
                  </span>
                  <span className="text-lg font-medium text-teal-800">
                    {contactData.name}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2 text-teal-600">
                    Phone:
                  </span>
                  <span className="text-lg font-medium text-teal-800">
                    {contactData.phone}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2 text-teal-600">
                    Email:
                  </span>
                  <span className="text-lg font-medium text-teal-800">
                    {contactData.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
