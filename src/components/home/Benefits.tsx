
export const Benefits = () => {
  return (
    <section className="bg-white flex w-full max-w-full flex-col items-stretch justify-center px-16 py-28 max-md:px-5">
      <div className="flex w-full gap-20 justify-between items-start flex-wrap max-md:max-w-full">
        <div className="flex flex-col items-stretch max-w-[600px]">
          <h2 className="text-[40px] font-bold leading-[48px] bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent max-md:max-w-full">
            Benefits of Using VIT Job Portal
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-md:max-w-full">
            Discover the advantages of using our platform for your career journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[600px] w-full">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-lg hover:shadow-xl transition-all">
            <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Easy Application</h3>
            <p className="text-gray-600 mt-2">Apply to multiple jobs with a single profile</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-lg hover:shadow-xl transition-all">
            <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Verified Employers</h3>
            <p className="text-gray-600 mt-2">Connect with trusted companies and organizations</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 shadow-lg hover:shadow-xl transition-all">
            <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Career Resources</h3>
            <p className="text-gray-600 mt-2">Access guides, tips, and professional advice</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-lg hover:shadow-xl transition-all">
            <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Personalized Alerts</h3>
            <p className="text-gray-600 mt-2">Get notified about relevant opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};
