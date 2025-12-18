import React from "react";
import { Link } from "gatsby";
import { locations, portalUrl, siteName } from "../data/site";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold text-slate-50">{siteName}</h2>
            <p className="mt-3 text-sm text-slate-300">
              Collaborative mental health care rooted in compassion, strategy, and sustainable change.
            </p>
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-400"
            >
              Client Portal
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="hover:text-indigo-300" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-indigo-300" to="/team">
                  Our Team
                </Link>
              </li>
              <li>
                <Link className="hover:text-indigo-300" to="/resources">
                  Resources
                </Link>
              </li>
              <li>
                <Link className="hover:text-indigo-300" to="/cool-stuff">
                  Cool Stuff
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Locations</h3>
            <ul className="mt-3 space-y-3 text-sm text-slate-200">
              {locations.map((location) => (
                <li key={location.name}>
                  <p className="font-semibold text-slate-50">{location.name}</p>
                  <p className="text-slate-300">{location.address}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-slate-800 pt-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteName}. All rights reserved.</p>
          <p>Crafted with care in Alabama.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
