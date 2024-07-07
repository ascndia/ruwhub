import type { Props } from "../component/ServiceCard.astro";

import img1 from "../assets/service/s1.svg";
import img2 from "../assets/service/s2.svg";
import img3 from "../assets/service/s3.svg";
import img4 from "../assets/service/s4.svg";
import img5 from "../assets/service/s5.svg";
import img6 from "../assets/service/s6.svg";

export const SERVICES: Props[] = [
  {
    title: "24/7 Customer Support",
    desc: "Get help by calling, chatting with, or emailing our customer support team.",
    img: img1.src,
  },
  {
    title: "Onboarding Services",
    desc: "Get up and running quickly with a personalized onboarding plan.",
    img: img2.src,
  },
  {
    title: "Free Courses & Certifications",
    desc: "Grow your skills with free Ruwhub Academy courses and certifications.",
    img: img3.src,
  },
  {
    title: "Developer Tools",
    desc: "Build apps, develop custom integrations, and customize your site.",
    img: img4.src,
  },
  {
    title: "Ruwhub for Startups",
    desc: "Apply for special pricing, resources, and support for your startup.",
    img: img5.src,
  },
  {
    title: "Ebooks, Guides & Templates",
    desc: "Check out our vast library of free resources, tools, templates, and more.",
    img: img6.src,
  },
];
