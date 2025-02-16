
export const EmployerBenefits = () => {
  return (
    <section className="bg-white w-full px-16 py-20 max-md:px-5">
      <h2 className="text-[40px] font-bold leading-[48px] text-center mb-16 bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent">
        Why Choose VIT Job Portal?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-lg hover:shadow-xl transition-all">
          <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Quality Candidates</h3>
          <p className="text-gray-600">
            Access a curated pool of talented VIT students and alumni with relevant skills and qualifications.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-lg hover:shadow-xl transition-all">
          <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Efficient Hiring</h3>
          <p className="text-gray-600">
            Streamlined recruitment process with easy job posting, application management, and candidate screening.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 shadow-lg hover:shadow-xl transition-all">
          <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Brand Visibility</h3>
          <p className="text-gray-600">
            Showcase your company culture and opportunities to a targeted audience of motivated professionals.
          </p>
        </div>
      </div>
    </section>
  );
};
