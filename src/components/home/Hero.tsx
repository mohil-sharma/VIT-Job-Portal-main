
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
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600"
              className="aspect-[0.94] object-cover w-full rounded-2xl shadow-lg hover:shadow-xl transition-all"
              alt="Young professional at tech company"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=600"
              className="aspect-[1.7] object-cover w-full rounded-2xl shadow-lg hover:shadow-xl transition-all"
              alt="Modern office environment"
            />
          </div>
          <div className="min-w-60 grow shrink w-64 space-y-4">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=600"
              className="aspect-[0.94] object-cover w-full rounded-2xl shadow-lg hover:shadow-xl transition-all"
              alt="Student working on laptop"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
              className="aspect-[0.94] object-cover w-full rounded-2xl shadow-lg hover:shadow-xl transition-all"
              alt="Modern startup office space"
            />
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=600"
              className="aspect-[1.7] object-cover w-full rounded-2xl shadow-lg hover:shadow-xl transition-all"
              alt="Tech company workspace"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
