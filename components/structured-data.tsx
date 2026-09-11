import { classes } from "@/lib/classes";
import {
  AGES,
  DONATION,
  EMAIL,
  LOCATION_ADDRESS,
  LOCATION_NAME,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const place = {
  "@type": "Place",
  name: LOCATION_NAME,
  address: {
    "@type": "PostalAddress",
    streetAddress: LOCATION_ADDRESS.split(",")[0],
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11238",
    addressCountry: "US",
  },
};

/**
 * Machine-readable description of the business and its upcoming classes.
 * Lets search engines show the classes as dated events rather than plain links.
 */
export function StructuredData() {
  const graph = [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      url: SITE_URL,
      email: EMAIL,
      description: `Outdoor yoga classes for ${AGES.toLowerCase()} at ${LOCATION_NAME} in Brooklyn.`,
      image: `${SITE_URL}/opengraph-image.png`,
      address: place.address,
      areaServed: "Brooklyn, NY",
    },
    ...classes.map((yogaClass) => ({
      "@type": "Event",
      "@id": `${SITE_URL}/schedule#${yogaClass.id}`,
      name: `Pacific Park Yoga · ${yogaClass.ages}`,
      description: `A thirty-minute outdoor yoga class for ${yogaClass.ages.toLowerCase()} at ${LOCATION_NAME} in Brooklyn.`,
      startDate: yogaClass.start,
      endDate: yogaClass.end,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: place,
      organizer: { "@id": `${SITE_URL}/#business` },
      offers: {
        "@type": "Offer",
        price: "10",
        priceCurrency: "USD",
        description: DONATION,
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/schedule`,
      },
    })),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
