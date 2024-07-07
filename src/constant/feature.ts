import type { Props } from "../component/FeatureCard.astro";

import Svg1 from "../assets/icon/icon.svg";
import Svg2 from "../assets/icon/icon2.svg";
import Svg3 from "../assets/icon/icon3.svg";
import Svg4 from "../assets/icon/icon4.svg";
import Svg5 from "../assets/icon/icon5.svg";
import Svg6 from "../assets/icon/icon6.svg";

export const FEATURES: Props[] = [
  {
    title: "Marketing Hub®",
    desc: "AI-powered marketing software that helps you generate leads and automate marketing.",
    features: [
      "AI-powered lead generation",
      "Marketing automation",
      "Analytics",
    ],
    icon: Svg1.src,
  },
  {
    title: "Sales Hub®",
    desc: "Easy-to-adopt sales software that leverages AI to build pipelines and close deals.",
    features: ["Prospecting workspace", "Deal management", "Sales automation"],
    icon: Svg2.src,
  },
  {
    title: "Service Hub®",
    desc: "Customer service software powered by AI to scale support, boost engagement, and drive retention.",
    features: [
      "Omni-channel help desk",
      "AI chatbot",
      "Customer success workspace",
    ],
    icon: Svg3.src,
  },
  {
    title: "Content Hub™",
    desc: "All-in-one, AI-powered content marketing software that helps marketers create and manage content.",
    features: ["Content remix", "Brand voice", "AI-powered content creation"],
    icon: Svg4.src,
  },
  {
    title: "Operations Hub®",
    desc: "Operations software that leverages AI to help you activate and manage your data.",
    features: [
      "Data sync",
      "Programmable automation",
      "AI-powered data quality automation",
    ],
    icon: Svg5.src,
  },
  {
    title: "Commerce Hub™",
    desc: "B2B commerce software designed to help you collect payments and automate billing.",
    features: ["Invoices & subscriptions", "Quotes", "Payment links"],
    icon: Svg6.src,
  },
];
