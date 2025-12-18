import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { locations, siteName } from "../data/site";

const features = [
  {
    title: "Meet the Team",
    body: "Get to know the clinicians at our Hoover and Trussville locations and find a fit for your goals.",
    href: "/team",
  },
  {
    title: "Explore Resources",
    body: "Browse FAQs, continuing education, and community offerings to support your next step.",
    href: "/resources",
  },
  {
    title: "Discover Cool Stuff",
    body: "From podcasts to merch, see what we're creating to keep inspiration close at hand.",
    href: "/cool-stuff",
  },
];

const IndexPage = () => {
  return (
    <Layout>
      
      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">Rooted in Alabama</p>
          <h1 className="text-4xl font-bold text-slate-50 sm:text-5xl">
            Strategic, compassionate care for every stage of growth.
          </h1>
          <p className="text-lg text-slate-300">
            {siteName} helps people and organizations move from stuck to steady with counseling, coaching, and resources that
            honor the whole person.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/team#contact"
              className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-400"
            >
              Schedule your first appointment
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-indigo-400 hover:text-indigo-300"
            >
              Explore Resources
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-semibold">MS</div>
              <div>
                <p className="text-sm uppercase tracking-wide text-slate-400">Our approach</p>
                <p className="text-lg font-semibold text-slate-50">Practical tools, human pace</p>
              </div>
            </div>
            <p className="text-slate-300">
              We pair evidence-based practices with a calming, forward-looking vibe so you can breathe deeply and focus on what
              matters most.
            </p>
            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400" aria-hidden />
                Compassionate clinicians invested in your story.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400" aria-hidden />
                Offices in Hoover and Trussville plus flexible scheduling.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400" aria-hidden />
                Resources, groups, and creative offerings to keep you moving.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Link
            key={feature.title}
            to={feature.href}
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow hover:border-indigo-400"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-50">{feature.title}</h3>
              <span className="text-indigo-300 transition-transform group-hover:translate-x-1">→</span>
            </div>
            <p className="mt-3 text-sm text-slate-300">{feature.body}</p>
          </Link>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">Locations</p>
            <h2 className="text-2xl font-semibold text-slate-50">Two welcoming offices built for calm and clarity.</h2>
            <p className="mt-2 text-sm text-slate-300">
              Visit us in Hoover or Trussville—both spaces are designed to feel warm, modern, and grounding.
            </p>
          </div>
          <Link
            to="/team"
            className="inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-3 text-sm font-semibold text-slate-50 shadow hover:bg-white/20"
          >
            Meet the team
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {locations.map((location) => (
            <div key={location.name} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">{location.name}</p>
              <p className="mt-2 text-slate-200">{location.address}</p>
              <p className="mt-3 text-xs text-slate-400">Parking is easy and our team will guide you to the right suite.</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title={`${siteName} | Counseling & Coaching in Alabama`} />;

export default IndexPage;
