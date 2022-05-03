import { ArrowDownIcon } from "@heroicons/react/solid";
import HeroPortrait from "./hero-portrait";

const HeroSection = () => {
  return (
    <div className="relative grid min-h-hero grid-cols-12">
      <div className="col-span-full space-y-6 2xl:col-span-8">
        <h2 className="mt-28 text-5xl font-semibold leading-snug">
          Approaching front end engineering with{" "}
          <span className="text-highlight">passion</span> and{" "}
          <span className="text-primary">enthusiasm</span> 🎉
        </h2>
        <p className="prose col-span-full max-w-prose 2xl:col-span-4 2xl:max-w-lg">
          I'm based in Chicago and am currently busy raising a Border Collie
          with my partner and working as a Senior Software Engineer at
          WideOrbit.
        </p>
        <div className="flex gap-4">
          <button className="button-highlight">
            <ArrowDownIcon width="1.5rem" />
            Learn more about me
          </button>
          <button className="button-primary">Get in touch</button>
        </div>
      </div>
      <div className="2xl: absolute -right-12 top-14 -z-10 hidden xl:block 2xl:-top-14">
        <HeroPortrait />
      </div>
    </div>
  );
};

export default HeroSection;
