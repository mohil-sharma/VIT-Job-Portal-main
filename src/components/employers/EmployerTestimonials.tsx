
export const EmployerTestimonials = () => {
  return (
    <section className="bg-white w-full px-16 py-20 max-md:px-5">
      <h2 className="text-[40px] font-bold leading-[48px] text-center mb-16 bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent">
        What Employers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 shadow-lg">
          <p className="text-lg mb-6 text-gray-600">
            "VIT Job Portal has been instrumental in helping us find talented graduates. The quality of candidates and the platform's ease of use have made our recruitment process much more efficient."
          </p>
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Testimonial author"
              className="w-12 h-12 rounded-full object-cover ring-4 ring-purple-100"
            />
            <div>
              <h3 className="font-semibold text-gray-900">Rahul Mehta</h3>
              <p className="text-sm text-gray-600">HR Director, TechCorp India</p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-lg">
          <p className="text-lg mb-6 text-gray-600">
            "The response rate and candidate quality we get through VIT Job Portal is outstanding. It's become our primary source for entry-level tech talent."
          </p>
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="Testimonial author"
              className="w-12 h-12 rounded-full object-cover ring-4 ring-blue-100"
            />
            <div>
              <h3 className="font-semibold text-gray-900">Priya Sharma</h3>
              <p className="text-sm text-gray-600">Talent Acquisition Lead, InnovateX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
