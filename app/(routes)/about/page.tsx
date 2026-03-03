import { siteConfig } from "@/data/metadata";
import { constructMetadata } from "@/lib/generateMetadata";
import AboutPage from "./about";

export const metadata = constructMetadata({
  title: "About",
  description: `Learn more about ${siteConfig.name}'s background, education, skills, and journey as a full-stack developer.`,
  canonical: siteConfig.url + "/about",
});

export default function About() {
  return <AboutPage />;
}
