
export const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 min-h-[900px] w-full max-w-full overflow-hidden px-16 max-md:px-5">
      <div className="flex w-full items-stretch flex-1 flex-wrap h-full max-md:max-w-full">
        <div className="flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] pr-20 max-md:max-w-full">
          <div className="w-full max-md:max-w-full space-y-6">
            <div className="inline-block px-4 py-1 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
              For Students & Alumni
            </div>
            <h1 className="text-[56px] font-bold leading-[67px] bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent max-md:text-[40px] max-md:leading-[54px]">
              Unlock Your Future with VIT Job Portal
            </h1>
            <p className="text-lg text-gray-600 leading-[27px]">
              Connect with top employers and explore exciting job and internship
              opportunities tailored for VIT students and alumni. Join us today
              to take the next step in your career journey!
            </p>
          </div>
          <div className="flex gap-4 text-base font-normal mt-8">
            <button className="bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-800 transition-all">
              Sign Up
            </button>
            <button className="bg-white border-2 border-purple-200 px-6 py-3 rounded-lg hover:bg-purple-50 transition-all">
              Login
            </button>
          </div>
        </div>
        <div className="flex min-w-60 h-[900px] gap-4 flex-wrap flex-1 shrink basis-20 my-auto max-md:max-w-full">
          <div className="min-w-60 grow shrink w-[255px] space-y-4">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
              className="aspect-[0.94] object-cover w-full rounded-2xl shadow-lg hover:shadow-xl transition-all"
              alt="Students collaborating in modern workspace"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600"
              className="aspect-[0.94] object-cover w-full rounded-2xl shadow-lg hover:shadow-xl transition-all"
              alt="Young professional working on laptop"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600"
              className="aspect-[1.7] object-cover w-full rounded-2xl shadow-lg hover:shadow-xl transition-all"
              alt="Modern technology workspace"
            />
          </div>
          <div className="min-w-60 grow shrink w-64 space-y-4">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
              className="aspect-[0.94] object-cover w-full rounded-2xl shadow-lg hover:shadow-xl transition-all"
              alt="Professional working on laptop"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600"
              className="aspect-[0.94] object-cover w-full rounded-2xl shadow-lg hover:shadow-xl transition-all"
              alt="Team collaboration in modern office"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
              className="aspect-[1.7] object-cover w-full rounded-2xl shadow-lg hover:shadow-xl transition-all"
              alt="Coding and development workspace"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
