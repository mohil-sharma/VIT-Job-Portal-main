
export const EmployerHero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 min-h-[600px] w-full max-w-full px-16 py-20 max-md:px-5">
      <div className="flex flex-wrap items-center justify-between gap-12">
        <div className="flex-1 min-w-[300px] space-y-6">
          <div className="inline-block px-4 py-1 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
            For Employers
          </div>
          <h1 className="text-[56px] font-bold leading-[67px] bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent max-md:text-[40px] max-md:leading-[48px]">
            Find Top VIT Talent for Your Company
          </h1>
          <p className="text-lg text-gray-600">
            Connect with qualified candidates from VIT's talent pool. Post jobs, review applications, and build your dream team.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-800 transition-all">
              Post a Job
            </button>
            <button className="bg-white border-2 border-purple-200 px-6 py-3 rounded-lg hover:bg-purple-50 transition-all">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 min-w-[300px]">
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
            alt="Team collaboration"
            className="w-full rounded-2xl object-cover aspect-video shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
