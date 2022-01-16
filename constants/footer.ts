import CATEGORIES from "./categories";

type FooterLink = {
  label: string;
  url: string;
  icon?: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const FOOTER_LINKS: FooterSection[] = [
  {
    title: "CreateBase",
    links: [
      { label: "Visit our website", url: "https://createbase.co.nz/" },
      {
        label: "Visit our platform",
        url: "https://app.createbase.co.nz",
      },
      {
        label: "Sign up for free",
        url: "https://app.createbase.co.nz/auth/signup",
      },
      {
        label: "Log in",
        url: "https://app.createbase.co.nz/auth/login",
      },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Help Center", url: "/" },
      ...Object.entries(CATEGORIES).map(([key, val]) => ({
        label: val.title,
        url: `/${key}`,
      })),
    ],
  },
  {
    title: "Legals",
    links: [
      { label: "Terms & conditions", url: "https://createbase.co.nz/terms" },
      { label: "Privacy policies", url: "https://createbase.co.nz/privacy" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "+64 211 543 805",
        url: "tel:+64211543805",
        icon: "call",
      },
      {
        label: "admin@createbase.co.nz",
        url: "mailto:admin@createbase.co.nz",
        icon: "email",
      },
      {
        label: "24 York Street, AKL",
        url: "https://goo.gl/maps/idvxwm2iitQmR4HX7",
        icon: "map",
      },
    ],
  },
];

export default FOOTER_LINKS;
