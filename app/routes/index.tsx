import { Layout } from "~/components";
import ExperienceSection from "~/components/experience-section";
import HeroSection from "~/components/hero-section";

export default function Index() {
  return (
    <Layout>
      <div className="container mx-auto space-y-6">
        <HeroSection />
      </div>
      <main className="container mx-auto mt-28 space-y-6">
        <ExperienceSection />
      </main>
    </Layout>
  );
}
