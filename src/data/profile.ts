import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";

export const PROFILE = {
  name: "Asybel Bintang",
  title: "Aspiring BIM Engineer",
  about: `Major in Architecture, Minor in Data and AI
Institut Teknologi Bandung 2023 – Present
Bandung, Indonesia`,
  avatarUrl: "/images/avatar.png",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: GitHubIcon,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: LinkedInIcon,
    },
    {
      name: "Website",
      url: "https://asybelbintang.com",
      icon: GlobeIcon,
    },
    {
      name: "Email",
      url: "mailto:youremail@gmail.com",
      icon: MailIcon,
    },
    {
      name: "Phone",
      url: "tel:+628123456789",
      icon: PhoneIcon,
    },
  ],
};
