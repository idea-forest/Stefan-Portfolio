import Head from "next/head";
import { Element as Section } from "react-scroll";
import {
  ContactSection,
  HeroSection,
  PortfoliosSection,
  ResumeSection,
  ServicesSection,
  SkillsSection,
} from "../components/containers";
import { Layout } from "../components/layout";
import { SectionHeading } from "../components/utils";
import { getPostsByPage } from "../lib/blogging";

const Homepage1 = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>Stefan-Full stack developer</title>
      </Head>

      {/* Start Hero Section */}
      <Section name="section-home">
        <HeroSection typed={false} />
      </Section>
      {/* End Hero Section */}
      {/* Start Skills Section */}
      <Section
        name="section-skills"
        className="skills-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading title="Skills" watermark="Skills" />
          <h3 className="text-center">💯 If you need below skills, I will help you.</h3>
          <SkillsSection />
        </div>
      </Section>
      {/* End Skills Section */}

      {/* Start Service Section */}
      <Section
        name="section-service"
        className="services-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading title="Services" watermark="Services" />
          <ServicesSection />
        </div>
      </Section>
      {/* End Service Section */}

      {/* Start Resume Section */}
      {/* <Section
        name="section-resume"
        className="resume-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading title="Resume" watermark="Resume" />
          <ResumeSection />
        </div>
      </Section> */}
      {/* End Resume Section */}

      {/* Start Portfolios Section */}
      <Section
        name="section-portfolios"
        className="portfolios-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading title="Portfolios" watermark="Works" />
          <PortfoliosSection />
        </div>
      </Section>
      {/* End Portfolios Section */}
      {/* Start Contact Section */}
      <Section
        name="section-contact"
        className="contact-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading title="Contact Me" watermark="Contact" />
          <ContactSection />
        </div>
      </Section>
      {/* End Contact Section */}

      <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
    </Layout>
  );
};

export default Homepage1;

export async function getStaticProps() {
  // const queryClient = new QueryClient();
  const { posts } = getPostsByPage();

  // await queryClient.prefetchQuery('services', getServices)

  return {
    props: {
      // dehydratedState: dehydrate(queryClient),
      posts,
    },
    revalidate: 10,
  };
}
