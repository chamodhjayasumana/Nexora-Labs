import {
  About,
  Contact,
  Faq,
  FeaturedSolution,
  FinalCta,
  Hero,
  HowWeWork,
  Industries,
  InteractiveDemo,
  ProjectsShowcase,
  RoiSection,
  Services,
  Technology,
  TrustBar,
  WhyUs,
} from '../sections';

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <FeaturedSolution />
      <InteractiveDemo />
      <Industries />
      <ProjectsShowcase />
      <HowWeWork />
      <WhyUs />
      <Technology />
      <RoiSection />
      <Faq />
      <FinalCta />
      <Contact />
    </>
  );
}
