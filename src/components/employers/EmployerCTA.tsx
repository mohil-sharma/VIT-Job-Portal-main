
export const EmployerCTA = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 to-blue-900 w-full px-16 py-20 max-md:px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[40px] font-bold leading-[48px] text-white mb-6">
          Ready to Find Your Next Great Hire?
        </h2>
        <p className="text-lg mb-8 text-purple-100">
          Join hundreds of companies that trust VIT Job Portal for their hiring needs.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-purple-900 px-8 py-4 rounded-lg shadow-lg hover:bg-purple-50 transition-all font-semibold">
            Post Your First Job
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
};
