import { Hero } from "@/components/sections/hero";
import { Advantages } from "@/components/sections/advantages";
import { PopularServices } from "@/components/sections/popular-services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Reviews } from "@/components/sections/reviews";
import { RequestForm } from "@/components/sections/request-form";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <PopularServices />
      <HowItWorks />
      <Reviews />
      <RequestForm />
    </>
  );
}
