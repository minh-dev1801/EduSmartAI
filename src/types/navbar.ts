export type NavItem = {
  key: string;
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { key: "home", label: "Home", href: "" },
  { key: "about", label: "About", href: "/under-dev" },
  { key: "services", label: "Services", href: "/under-dev" },
  { key: "pricing", label: "Pricing", href: "/under-dev" },
  { key: "contact", label: "Contact", href: "/under-dev" },
];
