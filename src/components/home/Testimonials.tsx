
export const Testimonials = () => {
  return (
    <section className="bg-white flex w-full max-w-full flex-col items-stretch justify-center px-16 py-28 max-md:px-5">
      <h2 className="text-center text-[40px] font-bold leading-[48px] bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent max-w-[768px] mx-auto">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-lg hover:shadow-xl transition-all">
          <svg className="w-8 h-8 text-purple-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-gray-600 mb-6">"The VIT Job Portal made my job search incredibly efficient. I found my dream internship within weeks!"</p>
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=64&h=64"
              alt="Testimonial author"
              className="w-12 h-12 rounded-full object-cover ring-4 ring-purple-100"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Priya Singh</h3>
              <p className="text-sm text-gray-600">Software Engineering Graduate</p>
            </div>
          </div>
        </div>
        <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-lg hover:shadow-xl transition-all">
          <svg className="w-8 h-8 text-blue-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-gray-600 mb-6">"As an employer, finding talented VIT graduates has never been easier. The platform is user-friendly and effective."</p>
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=64&h=64"
              alt="Testimonial author"
              className="w-12 h-12 rounded-full object-cover ring-4 ring-blue-100"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Rajesh Kumar</h3>
              <p className="text-sm text-gray-600">HR Manager, Tech Solutions</p>
            </div>
          </div>
        </div>
        <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 shadow-lg hover:shadow-xl transition-all">
          <svg className="w-8 h-8 text-indigo-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-gray-600 mb-6">"The career resources and guidance provided alongside job listings really helped me prepare for interviews."</p>
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64"
              alt="Testimonial author"
              className="w-12 h-12 rounded-full object-cover ring-4 ring-indigo-100"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Ananya Patel</h3>
              <p className="text-sm text-gray-600">Recent Graduate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
