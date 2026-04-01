// src/components/navbar.jsx
import React, { useEffect, useRef, useState } from "react"; 
import { Link } from "gatsby";
import { portalUrl, siteName } from "../data/site";

const resourcesLinks = [
  { label: "Continuing Education", href: "/resources#continuing-education" },
  { label: "FAQs", href: "/resources#faqs" },
  { label: "FLY", href: "/resources#fly" },
  { label: "Groups", href: "/resources#groups" },
  { label: "Upcoming Dates", href: "/resources#upcoming-dates" },
];

const coolStuffLinks = [
  { label: "Merchandise", href: "/cool-stuff#merchandise" },
  { label: "Podcasts", href: "/cool-stuff#podcasts" },
  { label: "Executive Coaching", href: "/cool-stuff#executive-coaching" },
  { label: "MINT Trainings", href: "/cool-stuff#mint-trainings" },
];

const Dropdown = ({ label, links, isOpen, onToggle, firstLinkRef }) => (
  <div
    className="relative"
    onKeyDown={(e) => {
      if (e.key === "Escape") onToggle(false);
    }}
  >
    <button
      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-slate-100 hover:bg-[#2b314f] focus:outline-none focus:ring-2 focus:ring-indigo-400"
      aria-expanded={isOpen}
      onClick={() => onToggle(!isOpen)}
      type="button"
    >
      <span>{label}</span>
      <span aria-hidden>▾</span>
    </button>

    {isOpen && (
      <div className="absolute left-0 mt-2 w-56 rounded-lg bg-[#343a5c] shadow-lg ring-1 ring-slate-800">
        <ul className="py-2">
          {links.map((item, idx) => (
            <li key={item.href}>
              <Link
                ref={idx === 0 ? firstLinkRef : null}
                to={item.href}
                className="block px-4 py-2 text-sm text-slate-100 hover:bg-[#2b314f]"
                onClick={() => onToggle(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const MobileDropdown = ({ label, links }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg bg-[#343a5c]/80">
      <button
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-100"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span>{label}</span>
        <span aria-hidden>{open ? "▴" : "▾"}</span>
      </button>

      {open && (
        <ul className="space-y-1 px-6 pb-3">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="block py-2 text-sm text-slate-200 hover:text-indigo-300"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [coolOpen, setCoolOpen] = useState(false);
  const menuRef = useRef(null);
  const resFirstRef = useRef(null);
  const coolFirstRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setResourcesOpen(false);
        setCoolOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (resourcesOpen && resFirstRef.current) resFirstRef.current.focus();
    if (coolOpen && coolFirstRef.current) coolFirstRef.current.focus();
  }, [resourcesOpen, coolOpen]);

  useEffect(() => {
    if (menuOpen) {
      setResourcesOpen(false);
      setCoolOpen(false);
    }
  }, [menuOpen]);

  return (
    <nav
      className="sticky top-0 z-40 border-b border-slate-800 bg-[#343a5c]/95 backdrop-blur"
      ref={menuRef}
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-end px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 transform"
          aria-label={`${siteName} home`}
        >
          <img
            src="/images/logoog1.png"
            alt="McKenzie Strategies logo"
            className="h-12 w-auto object-contain sm:h-14"
            loading="eager"
          />
        </Link>

        <div className="hidden lg:flex lg:w-[260px] items-center justify-end gap-2">
          <Link className="rounded-md px-3 py-2 text-sm font-semibold text-slate-100 hover:bg-[#2b314f]" to="/">
            Home
          </Link>
          <Link className="rounded-md px-3 py-2 text-sm font-semibold text-slate-100 hover:bg-[#2b314f]" to="/team">
            Our Team
          </Link>

          <Dropdown
            label="Resources"
            links={resourcesLinks}
            isOpen={resourcesOpen}
            onToggle={(v) => {
              setResourcesOpen(v);
              if (v) setCoolOpen(false);
            }}
            firstLinkRef={resFirstRef}
          />

          <Dropdown
            label="Cool Stuff"
            links={coolStuffLinks}
            isOpen={coolOpen}
            onToggle={(v) => {
              setCoolOpen(v);
              if (v) setResourcesOpen(false);
            }}
            firstLinkRef={coolFirstRef}
          />

          <a
            href={portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-2 text-sm font-semibold text-indigo-300 hover:bg-[#2b314f]"
          >
            Client Portal
          </a>
        </div>

        <div className="flex items-center justify-end gap-3 lg:hidden">
          <button
            className="rounded-md p-2 text-slate-100 hover:bg-[#2b314f] focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-slate-100" />
              <span className="block h-0.5 w-6 bg-slate-100" />
              <span className="block h-0.5 w-6 bg-slate-100" />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#343a5c]/95 px-4 pb-4 sm:px-6">
          <div className="space-y-2 py-4">
            <Link to="/" className="block rounded-md px-4 py-3 text-sm font-semibold text-slate-100 hover:bg-[#2b314f]" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/team" className="block rounded-md px-4 py-3 text-sm font-semibold text-slate-100 hover:bg-[#2b314f]" onClick={() => setMenuOpen(false)}>
              Our Team
            </Link>

            <MobileDropdown label="Resources" links={resourcesLinks} />
            <MobileDropdown label="Cool Stuff" links={coolStuffLinks} />

            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md px-4 py-3 text-sm font-semibold text-indigo-300 hover:bg-[#2b314f]"
              onClick={() => setMenuOpen(false)}
            >
              Client Portal
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
