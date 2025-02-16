
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
              <a href="http://localhost:5173">Sign Up</a>
            </button>
            <button className="bg-white border-2 border-purple-200 px-6 py-3 rounded-lg hover:bg-purple-50 transition-all">
              <a href="http://localhost:3001">Login</a>
            </button>
          </div>
        </div>
        <div className="flex min-w-60 h-[900px] gap-4 flex-wrap flex-1 shrink basis-20 my-auto max-md:max-w-full">
          <div className="min-w-60 grow shrink w-[255px] space-y-4">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/2f1670a37c34cfa3237fd7fe0ac6d81cb377628a25eb9c775f6940f96796aa66"
              className="aspect-[0.94] object-cover w-full rounded-2xl shadow-lg hover:shadow-xl transition-all"
              alt="Career opportunities 1"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/2f1670a37c34cfa3237fd7fe0ac6d81cb377628a25eb9c775f6940f96796aa66"
              className="aspect-[0.94] object-cover w-full rounded-2xl shadow-lg hover:shadow-xl transition-all"
              alt="Career opportunities 2"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/5fe35715750d23385a3985cf6cdcd14034f9b91ebfe5f30375c317b6e1663e37"
              className="aspect-[1.7] object-cover w-full rounded-2xl shadow-lg hover:shadow-xl transition-all"
              alt="Career opportunities 3"
            />
          </div>
          <div className="min-w-60 grow shrink w-64 space-y-4">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/1c116148cfab08933c4a5c2cd443fff7fec680abfafa419e7c4b4f0f81e3a07d"
              className="aspect-[0.94] object-cover w-full rounded-2xl shadow-lg hover:shadow-xl transition-all"
              alt="Career opportunities 4"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/1c116148cfab08933c4a5c2cd443fff7fec680abfafa419e7c4b4f0f81e3a07d"
              className="aspect-[0.94] object-cover w-full rounded-2xl shadow-lg hover:shadow-xl transition-all"
              alt="Career opportunities 5"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/dc21f91cd788acbc2feb4b7ad25378fb232041cacdd8cd16487262ef5b8acd1e"
              className="aspect-[1.7] object-cover w-full rounded-2xl shadow-lg hover:shadow-xl transition-all"
              alt="Career opportunities 6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
