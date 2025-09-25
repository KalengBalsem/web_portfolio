import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";

export const PROFILE = {
  name: "Asybel Bintang",
  title: "Aspiring BIM Engineer",
  about: `Major in Architecture, Minor in Data and AI
Institut Teknologi Bandung 2023 – Present
Bandung, Indonesia`,
  avatarUrl: "https://pub-9953d003956d42ef8cebdbe21cd9e736.r2.dev/ash.jpg",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/kalengbalsem",
      icon: GitHubIcon,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/asybelbintang",
      icon: LinkedInIcon,
    },
    {
      name: "Website",
      url: "https://asybelbintang.com",
      icon: GlobeIcon,
    },
    {
      name: "Email",
      url: "mailto:asybel.bintang@gmail.com",
      icon: MailIcon,
    },
    {
      name: "Phone",
      url: "tel:+628123456789",
      icon: PhoneIcon,
    },
  ],
};
