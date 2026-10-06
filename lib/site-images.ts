/**
 * Site photography from Wikimedia Commons under Creative Commons licences.
 * Attribution is rendered on /image-credits.
 */
export const siteImages = {
  "rolls-building-london": {
    src: "/images/site/rolls-building-london.jpg",
    width: 1800,
    height: 1065,
    alt: "The Rolls Building, home of the Business and Property Courts of England and Wales",
    title: "HM Courts & Tribunal Service Rolls Building -01",
    artist: "Roger Green",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:HM_Courts_%26_Tribunal_Service_Rolls_Building_-01.jpg",
  },
  "city-of-london-skyline": {
    src: "/images/site/city-of-london-skyline.jpg",
    width: 1800,
    height: 944,
    alt: "City of London skyline across the Thames",
    title: "City of London skyline from London City Hall - Oct 2008",
    artist: "Diliff",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    source: "https://commons.wikimedia.org/wiki/File:City_of_London_skyline_from_London_City_Hall_-_Oct_2008.jpg",
  },
  "bank-of-england": {
    src: "/images/site/bank-of-england.jpg",
    width: 1500,
    height: 999,
    alt: "The Bank of England on Threadneedle Street",
    title: "The Bank of England on Threadneedle Street - geograph.org.uk - 3898549",
    artist: "Steve Daniels",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
    source: "https://commons.wikimedia.org/wiki/File:The_Bank_of_England_on_Threadneedle_Street_-_geograph.org.uk_-_3898549.jpg",
  },
  "lincolns-inn-new-square": {
    src: "/images/site/lincolns-inn-new-square.jpg",
    width: 1800,
    height: 1200,
    alt: "New Square, Lincoln's Inn, London",
    title: "New Square Lincoln's Inn September 2023",
    artist: "Jonas Magnus Lystad",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:New_Square_Lincoln%27s_Inn_September_2023.jpg",
  },
} as const;

export type SiteImageSlug = keyof typeof siteImages;
