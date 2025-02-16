
export const EmployerPricing = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 w-full px-16 py-20 max-md:px-5">
      <h2 className="text-[40px] font-bold leading-[48px] text-center mb-16 bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent">
        Flexible Hiring Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-8 bg-white rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-all flex flex-col">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Starter</h3>
          <p className="text-4xl font-bold mb-6 text-purple-700">₹9,999<span className="text-base font-normal text-gray-600">/month</span></p>
          <ul className="space-y-4 mb-8 flex-grow text-gray-600">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Up to 5 job postings
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Basic candidate filtering
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Email support
            </li>
          </ul>
          <button className="bg-white border-2 border-purple-200 px-6 py-3 rounded-lg hover:bg-purple-50 transition-all mt-auto">
            Get Started
          </button>
        </div>
        <div className="p-8 bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col relative">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 text-sm rounded-full">
            Most Popular
          </span>
          <h3 className="text-2xl font-bold mb-4 text-white">Professional</h3>
          <p className="text-4xl font-bold mb-6 text-white">₹24,999<span className="text-base font-normal text-purple-200">/month</span></p>
          <ul className="space-y-4 mb-8 flex-grow text-purple-100">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Up to 15 job postings
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Advanced candidate filtering
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Priority support
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Featured job listings
            </li>
          </ul>
          <button className="bg-white text-purple-900 px-6 py-3 rounded-lg hover:bg-purple-50 transition-all mt-auto font-semibold">
            Get Started
          </button>
        </div>
        <div className="p-8 bg-white rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-all flex flex-col">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Enterprise</h3>
          <p className="text-4xl font-bold mb-6 text-purple-700">Custom</p>
          <ul className="space-y-4 mb-8 flex-grow text-gray-600">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Unlimited job postings
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Custom filtering options
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Dedicated account manager
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              API access
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Custom integration
            </li>
          </ul>
          <button className="bg-white border-2 border-purple-200 px-6 py-3 rounded-lg hover:bg-purple-50 transition-all mt-auto">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};
