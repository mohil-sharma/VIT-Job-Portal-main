
export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 to-blue-900 flex w-full max-w-full flex-col items-center justify-center px-16 py-28 max-md:px-5">
      <div className="max-w-[768px] w-full text-center">
        <h2 className="text-[40px] font-bold leading-[48px] text-white">
          Ready to Start Your Career Journey?
        </h2>
        <p className="text-lg text-purple-100 mt-6">
          Join thousands of students and alumni who have found their dream careers through VIT Job Portal
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <button className="bg-white text-purple-900 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-50 transition-all font-semibold">
            Sign Up Now
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
