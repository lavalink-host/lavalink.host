import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
  HeartIcon,
  ServerIcon,
} from "@heroicons/react/outline";

import blackLogo from "../public/black.png";

const benefitOne = {
  title: "Reliability & Performance",
  desc: "reliable and fast, with a focus on performance and security & privacy. We've got you covered.",
  image: blackLogo,
  bullets: [
    {
      title: "Fitting for your needs",
      desc: "by giving us a try, you'll be able to see how well our services fit your needs. We're down to improve our services to fit your needs ( as long multiple people needing same thing ) s.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Going with the theme",
      desc: "Tho it may not be fitting for everyone, everything is going with a color theme, to save your eyes from the harsh colors.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Support",
      desc: "Having support from multiple timezones, we're able to provide support 24/7. We're also aiming to provide support in multiple languages.",
      icon: <HeartIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Even more benefits",
  desc: "Eveh more benefits, that you'll be able to see by giving us a try.",
  image: blackLogo,
  bullets: [
    {
      title: "Performance",
      desc: "To provide the best performance, we're using the latest hardware, and the latest software that we're able to provide.",
      icon: <ServerIcon />,
    },
    {
      title: "Trusted People",
      desc: "lavalink.host is owned & operated by trusted people, who've been in the hosting industry for a long time. Having developers and people who have skill managing both community and hosting.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Uptime",
      desc: "Lavalink is heavy on resources, we'll make sure to provide you with the best uptime possible.",
      icon: <ChartSquareBarIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
