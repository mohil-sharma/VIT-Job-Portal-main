import { NewsletterForm } from "@/components/ui/NewsletterForm";

export const Footer = () => {
  return (
    <footer className="bg-white flex w-full max-w-full flex-col items-stretch text-black justify-center px-16 py-20 max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="flex w-full gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
          <div className="min-w-60 w-[500px] max-md:max-w-full">
            <h2 className="text-lg font-semibold max-md:max-w-full">
              Subscribe to Updates
            </h2>
            <p className="text-base font-normal max-md:max-w-full">
              Stay informed about job opportunities and events.
            </p>
          </div>
          <div className="min-w-60 font-normal w-[400px]">
            <NewsletterForm />
            <div className="flex w-full gap-1 text-xs mt-3">
              <p>By subscribing, you accept our Privacy Policy.</p>
              <a href="/privacy" className="underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <div className="bg-black border flex min-h-px w-full mt-20 border-black border-solid max-md:max-w-full max-md:mt-10" />
        <div className="flex w-full gap-10 flex-wrap mt-20 max-md:max-w-full max-md:mt-10">
          <div className="overflow-hidden flex-1 shrink basis-[0%]">
            <h3 className="text-base font-semibold">Quick Links</h3>
            <nav className="w-full text-sm font-normal mt-4">
              <a href="/about" className="block py-2 hover:text-gray-600">
                About Us
              </a>
              <a href="/support" className="block py-2 hover:text-gray-600">
                Contact Support
              </a>
              <a href="/privacy" className="block py-2 hover:text-gray-600">
                Privacy Policy
              </a>
              <a href="/terms" className="block py-2 hover:text-gray-600">
                Terms of Use
              </a>
              <a href="/help" className="block py-2 hover:text-gray-600">
                Help Center
              </a>
            </nav>
          </div>
          <div className="overflow-hidden flex-1 shrink basis-[0%]">
            <h3 className="text-base font-semibold">Resources</h3>
            <nav className="w-full text-sm font-normal mt-4">
              <a href="/blog" className="block py-2 hover:text-gray-600">
                Blog Posts
              </a>
              <a href="/tips" className="block py-2 hover:text-gray-600">
                Career Tips
              </a>
              <a href="/success" className="block py-2 hover:text-gray-600">
                Success Stories
              </a>
              <a href="/events" className="block py-2 hover:text-gray-600">
                Events Calendar
              </a>
              <a href="/workshops" className="block py-2 hover:text-gray-600">
                Workshops
              </a>
            </nav>
          </div>
        </div>
        <div className="w-full text-sm font-normal mt-20 max-md:max-w-full max-md:mt-10">
          <div className="bg-black border flex min-h-px w-full border-black border-solid max-md:max-w-full" />
          <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap mt-8 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/bcada03796304c809c52b5008891ae20/3b17ab0586e1d82604eb9a8651afbcbb322433dc75c193de3ebd740fc3383722"
              className="aspect-[2.33] object-contain w-[84px] self-stretch shrink-0 my-auto"
              alt="VIT Job Portal Logo"
            />
            <p className="self-stretch min-w-60 gap-6 my-auto">
              © 2024 VIT Job Portal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
