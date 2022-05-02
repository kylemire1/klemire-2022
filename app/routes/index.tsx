import { Layout } from "~/components";
import { ArrowDownIcon } from "@heroicons/react/solid";

export default function Index() {
  return (
    <Layout>
      <div className="container mx-auto space-y-6">
        <div className="mt-28 grid grid-cols-12">
          <h2 className="col-span-8 text-5xl font-semibold leading-snug">
            Approaching front end engineering with{" "}
            <span className="text-highlight">passion</span> and{" "}
            <span className="text-primary">enthusiasm</span> 🎉
          </h2>
        </div>
        <div className="grid grid-cols-12">
          <p className="prose col-span-4">
            I'm based in Chicago and am currently busy raising a Border Collie
            with my partner and working as a Senior Software Engineer at
            WideOrbit.
          </p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-6 flex gap-4">
            <button className="button-highlight">
              <ArrowDownIcon width="1.5rem" />
              Learn more about me
            </button>
            <button className="button-primary">Get in touch</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
