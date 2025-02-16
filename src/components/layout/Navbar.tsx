import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full">
      <div className="flex min-h-[72px] w-full items-center gap-[40px_100px] overflow-hidden text-base font-normal justify-between flex-wrap px-16 max-md:max-w-full max-md:px-5">
        <div className="self-stretch flex min-w-60 items-center gap-6 text-black flex-wrap my-auto max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/13b79224d9b3cce3501acc937a0eaeee24c5e8b99521fe544029e954b98740ac"
            className="aspect-[2.33] object-contain w-[84px] self-stretch shrink-0 my-auto"
            alt="VIT Job Portal Logo"
          />
          <div className="self-stretch flex min-w-60 items-center gap-8 overflow-hidden flex-wrap my-auto max-md:max-w-full">
            <Link to="/" className="self-stretch my-auto hover:text-gray-600">
              Home Page
            </Link>
            <Link
              to="/jobs"
              className="self-stretch my-auto hover:text-gray-600"
            >
              Job Listings
            </Link>
            <Link
              to="/employers"
              className="self-stretch my-auto hover:text-gray-600"
            >
              Employers Hub
            </Link>
            <button
              className="self-stretch flex items-center gap-1 justify-center my-auto hover:text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <span className="self-stretch my-auto">More Options</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/fee1f4da4fbc0ac2471ce1f6c2ea6132c2a43490c7dcf7518142e53de96c1a55"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                alt="Dropdown arrow"
              />
            </button>
          </div>
        </div>
        <div className="self-stretch flex items-center gap-4 whitespace-nowrap justify-center my-auto">
          <Link
            to="/help"
            className="self-stretch border gap-2 text-black my-auto px-5 py-2 border-black border-solid hover:bg-gray-100"
          >
            Help
          </Link>
          <Link
            to="/contact"
            className="self-stretch bg-black border gap-2 text-white my-auto px-5 py-2 border-black border-solid hover:bg-gray-800"
          >
            Contact
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="w-full overflow-hidden text-black">
          <div className="flex w-full gap-8 flex-wrap pl-16 pr-8 py-8 max-md:max-w-full max-md:px-5">
            <div className="min-w-60 flex-1 shrink basis-[0%]">
              <h3 className="text-sm font-semibold">Explore Opportunities</h3>
              <div className="w-full mt-4">
                <div className="flex min-h-[61px] max-w-full w-[312px] gap-3 py-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/9742a420396e5caa7e429fdf2ccb9079b0158ce1d368acae84bfdb7e55682093"
                    className="aspect-[1] object-contain w-6 shrink-0"
                    alt="Internships icon"
                  />
                  <div className="min-w-60 flex-1 shrink basis-[0%]">
                    <h4 className="text-base font-semibold">Internships</h4>
                    <p className="text-sm font-normal">
                      Find the perfect internship for you.
                    </p>
                  </div>
                </div>
                <div className="flex min-h-[61px] max-w-full w-[312px] gap-3 mt-4 py-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/9742a420396e5caa7e429fdf2ccb9079b0158ce1d368acae84bfdb7e55682093"
                    className="aspect-[1] object-contain w-6 shrink-0"
                    alt="Job Search icon"
                  />
                  <div className="min-w-60 flex-1 shrink basis-[0%]">
                    <h4 className="text-base font-semibold">Job Search</h4>
                    <p className="text-sm font-normal">
                      Browse available job openings today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-w-60 flex-1 shrink basis-[0%]">
              <h3 className="text-sm font-semibold">Get Involved</h3>
              <div className="w-full mt-4">
                <div className="flex min-h-[61px] max-w-full w-[312px] gap-3 py-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/9742a420396e5caa7e429fdf2ccb9079b0158ce1d368acae84bfdb7e55682093"
                    className="aspect-[1] object-contain w-6 shrink-0"
                    alt="Events icon"
                  />
                  <div className="min-w-60 flex-1 shrink basis-[0%]">
                    <h4 className="text-base font-semibold">Events</h4>
                    <p className="text-sm font-normal">
                      Join us for upcoming career events.
                    </p>
                  </div>
                </div>
                <div className="flex min-h-[61px] max-w-full w-[312px] gap-3 mt-4 py-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/9742a420396e5caa7e429fdf2ccb9079b0158ce1d368acae84bfdb7e55682093"
                    className="aspect-[1] object-contain w-6 shrink-0"
                    alt="Workshops icon"
                  />
                  <div className="min-w-60 flex-1 shrink basis-[0%]">
                    <h4 className="text-base font-semibold">Workshops</h4>
                    <p className="text-sm font-normal">
                      Enhance your skills with our workshops.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
