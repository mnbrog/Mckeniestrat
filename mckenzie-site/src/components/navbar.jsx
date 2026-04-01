// src/components/navbar.jsx
import React, { useState } from "react";
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

const MobileDropdown = ({ label, links }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg bg-[#343a5c]">
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

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-800 bg-[#343a5c]">
      <div className="relative mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
        <div aria-hidden className="h-10 w-10" />

        <Link
          to="/"
          className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center px-2"
          aria-label={`${siteName} home`}
        >
          <img
  src="/images/logoog1.png"
  alt="McKenzie Strategies logo"
  className="h-16 w-auto max-w-[85vw] object-contain sm:h-20 sm:max-w-[26rem]"
  loading="eager"
/>
        </Link>

        <div className="flex items-center justify-end gap-3">
          <button
            className="relative z-20 flex h-10 w-10 items-center justify-center rounded-md p-2 text-slate-100 pointer-events-auto hover:bg-[#2b314f] focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
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
        <div className="border-t border-slate-800 bg-[#343a5c] px-4 pb-4 sm:px-6">
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
