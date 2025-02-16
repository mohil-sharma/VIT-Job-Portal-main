export const Features = () => {
  return (
    <section className="bg-white flex w-full max-w-full flex-col overflow-hidden items-stretch text-black justify-center px-16 py-28 max-md:px-5 max-md:py-[100px]">
      <h2 className="text-center text-[40px] font-bold leading-[48px] self-center w-[768px] max-md:max-w-full">
        Explore the Essential Features of the VIT Job Portal
      </h2>
      <div className="w-full mt-20 max-md:max-w-full max-md:mt-10">
        <div className="flex w-full gap-[40px_48px] justify-center flex-wrap max-md:max-w-full">
          <div className="min-w-60 overflow-hidden flex-1 shrink basis-[0%]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/719245b2e08c074536280506933eccea140f14a9800abd4dd72abdf44a962740"
              className="aspect-[1.69] object-contain w-full"
              alt="Connect with Employers"
            />
            <div className="w-full mt-8">
              <div className="flex w-full flex-col text-center">
                <h3 className="text-2xl font-bold leading-[34px]">
                  Connect with Employers and Unlock Your Career Potential
                </h3>
                <p className="text-base font-normal leading-6 mt-4">
                  Our platform offers seamless employer registration for easy
                  job posting.
                </p>
              </div>
              <div className="flex w-full flex-col items-center text-base font-normal whitespace-nowrap mt-8">
                <button className="flex items-center gap-2 hover:text-gray-600">
                  <span>Join</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/dd1e06eaccd79163205ba79fde3256c4c3ae2209c23e5f8d4382270c514b2bdd"
                    className="aspect-[1] object-contain w-6"
                    alt="Join arrow"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="min-w-60 overflow-hidden flex-1 shrink basis-[0%]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/6dd824f9711d1cc25227494953668b166547215e932bef29cd8fa5dfef890f8a"
              className="aspect-[1.69] object-contain w-full"
              alt="Track Applications"
            />
            <div className="w-full mt-8">
              <div className="flex w-full flex-col text-center">
                <h3 className="text-2xl font-bold leading-[34px]">
                  Streamline Your Job Search with Application Tracking
                </h3>
                <p className="text-base font-normal leading-6 mt-4">
                  Track your applications effortlessly and stay updated on your
                  job status.
                </p>
              </div>
              <div className="flex w-full flex-col items-center text-base font-normal whitespace-nowrap mt-8">
                <button className="flex items-center gap-2 hover:text-gray-600">
                  <span>Track</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/ee5bdbc32bbc53684deecb2f9d63712884517174ee790d5d45a4eae8116d726d"
                    className="aspect-[1] object-contain w-6"
                    alt="Track arrow"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="min-w-60 overflow-hidden flex-1 shrink basis-[0%]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/7d0642fc0b5ad04313cf3b54712041d57075c24390621768d640546574e6102c"
              className="aspect-[1.69] object-contain w-full"
              alt="Manage Resume"
            />
            <div className="w-full mt-8">
              <div className="flex w-full flex-col text-center">
                <h3 className="text-2xl font-bold leading-[34px]">
                  Manage Your Resume with Ease and Confidence
                </h3>
                <p className="text-base font-normal leading-6 mt-4">
                  Upload, edit, and showcase your resume to potential employers.
                </p>
              </div>
              <div className="flex w-full flex-col items-center text-base font-normal whitespace-nowrap mt-8">
                <button className="flex items-center gap-2 hover:text-gray-600">
                  <span>Manage</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/a3e4b958ca4a2b72b7a82777e048df708d0c2935701e3ae3c5c2a73e9e15dc44"
                    className="aspect-[1] object-contain w-6"
                    alt="Manage arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
