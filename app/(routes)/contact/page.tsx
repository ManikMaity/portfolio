import { siteConfig } from "@/data/metadata";
import { constructMetadata } from "@/lib/generateMetadata";
import ContactPage from "./contact";

export const metadata = constructMetadata({
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} for collaborations, projects, or just to say hello! Find out how to connect and reach out through various channels.`,
  canonical: siteConfig.url + "/contact",
});

export default function Conntact() {
  return <ContactPage />;
}
