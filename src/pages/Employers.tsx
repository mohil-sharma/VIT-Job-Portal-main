
import { EmployerHero } from "@/components/employers/EmployerHero";
import { EmployerBenefits } from "@/components/employers/EmployerBenefits";
import { EmployerPricing } from "@/components/employers/EmployerPricing";
import { EmployerTestimonials } from "@/components/employers/EmployerTestimonials";
import { EmployerCTA } from "@/components/employers/EmployerCTA";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Employers = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <EmployerHero />
      <EmployerBenefits />
      <EmployerPricing />
      <EmployerTestimonials />
      <EmployerCTA />
      <Footer />
    </main>
  );
};

export default Employers;
