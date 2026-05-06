import { Helmet } from "react-helmet-async";

export const SchemaOrg = ({
  type = "Organization",
  name = "Freearcs Pharma Services",
  description,
  url = "https://freearcs-pharma.com",
  logo = "https://freearcs-pharma.com/freearcs-pharma-services_logo-white.svg",
  image,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url,
    logo,
    ...(image && { image }),
    sameAs: ["https://www.linkedin.com/company/freearcs-pharma-services"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-1-00-00-00-00",
      contactType: "customer service",
      areaServed: ["FR", "EU"],
      availableLanguage: ["French", "English"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SchemaOrg;