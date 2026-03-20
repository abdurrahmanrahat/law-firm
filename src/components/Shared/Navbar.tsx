import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Scale, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Layout/Container";
import ActiveLink from "./ActiveLink";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Family Law", href: "/services/family-law" },
      { name: "Personal Injury", href: "/services/personal-injury" },
      { name: "Business Law", href: "/services/business-law" },
      { name: "Criminal Law", href: "/services/criminal-law" },
      { name: "Education Law", href: "/services/education-law" },
      { name: "Real Estate Law", href: "/services/real-estate-law" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
];

const mobileMenuVariants = {
  closed: {
    height: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
  open: {
    height: "auto" as const,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const subMenuVariants = {
  closed: {
    height: 0,
    transition: {
      duration: 0.25,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
  open: {
    height: "auto" as const,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // dropdown handler
  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDesktopDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDesktopDropdown(null);
    }, 120);
  };

  const toggleMobileExpanded = (name: string) => {
    setMobileExpanded((prev) => (prev === name ? null : name));
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setMobileExpanded(null);
  };

  // close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-border/10 dark:border-border/60 backdrop-blur transition-all duration-500 ${
        isScrolled
          ? "shadow-xs bg-background/95 backdrop-blur-sm"
          : "bg-transparent"
      }`}
      ref={navRef}
    >
      <Container>
        <div className="flex h-16 xl:h-18 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 2xl:w-10 2xl:h-10 rounded-md bg-primary flex items-center justify-center">
              <Scale className="w-5 h-5 2xl:w-6 2xl:h-6 text-primary-foreground" />
            </div>
            <span
              className={`font-display text-xl 2xl:text-2xl font-semibold transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              PrimeLaw<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2 2xl:gap-3">
            {navLinks.map((item, index) => {
              if (!item.children) {
                return (
                  <ActiveLink
                    key={index}
                    to={item.href}
                    exact={item.href === "/"}
                    className={`px-3 py-3 ${isScrolled ? "text-gray-800" : "text-gray-100"}  dark:text-gray-100`}
                  >
                    {item.name}
                  </ActiveLink>
                );
              }

              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link to={item.href}>
                    <button
                      className={`inline-flex items-center gap-1 text-base 2xl:text-lg font-medium ${isScrolled ? "text-gray-800" : "text-gray-100"} dark:text-gray-100 transition-all duration-300 hover:text-primary dark:hover:text-primary cursor-pointer pl-3 pr-2 py-3`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 2xl:h-4 2xl:w-4 transition-transform duration-300 ${
                          desktopDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </Link>

                  <AnimatePresence>
                    {desktopDropdown === item.name && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{
                          duration: 0.22,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute left-1/2 top-full z-50 mt-0 w-64 -translate-x-1/2 overflow-hidden rounded-md border border-border/60 bg-background shadow-md"
                        onMouseEnter={() => handleDropdownEnter(item.name)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="p-2">
                          {item.children.map((child) => (
                            <ActiveLink
                              key={child.name}
                              to={child.href}
                              className="block px-3 py-2"
                            >
                              {child.name}
                            </ActiveLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle isScrolled={isScrolled} />
            <Button className="rounded-full px-5" size="lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle isScrolled={isScrolled} />

            <span
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className={`${isScrolled ? "" : "text-white"}`}
            >
              {isMobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </span>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence initial={false}>
        {isMobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-full left-0 w-full overflow-hidden border-t border-border/60 bg-background/95 lg:hidden z-40 shadow-cardLightShadow dark:shadow-cardDarkShadow"
          >
            <Container>
              <div className="py-4">
                <div className="space-y-0">
                  {navLinks.map((item, index) => {
                    if (!item.children) {
                      return (
                        <div key={index} onClick={closeMobileMenu}>
                          <ActiveLink
                            to={item.href}
                            exact={item.href === "/"}
                            className="block rounded-md px-3 py-2 text-base"
                          >
                            {item.name}
                          </ActiveLink>
                        </div>
                      );
                    }

                    return (
                      <div key={index} className="">
                        <Link to={item.href}>
                          <button className="flex w-full items-center justify-between px-3 py-0 text-left text-base font-medium text-foreground">
                            <span>{item.name}</span>

                            <span
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleMobileExpanded(item.name);
                              }}
                              className="p-3"
                            >
                              <ChevronDown
                                className={`h-4 w-4 transition-transform duration-200 ${
                                  mobileExpanded === item.name
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </span>
                          </button>
                        </Link>

                        <AnimatePresence initial={false}>
                          {mobileExpanded === item.name && (
                            <motion.div
                              variants={subMenuVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                              className="overflow-hidden"
                            >
                              <div className="space-y-2.5 px-7 mb-2">
                                {item.children.map((child) => (
                                  <div
                                    key={child.name}
                                    onClick={closeMobileMenu}
                                  >
                                    <ActiveLink
                                      to={child.href}
                                      className="block text-sm"
                                    >
                                      {child.name}
                                    </ActiveLink>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 flex flex-col gap-3 border-t pt-5">
                  <Button className="rounded-full" size="lg">
                    Get Started
                  </Button>
                  <Button variant="outline" className="rounded-full" size="lg">
                    Book Demo
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
