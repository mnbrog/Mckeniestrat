import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { locations, siteName } from "../data/site";
import exampleImage from "../images/example.png";

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
      {/* FULL-WIDTH HERO */}
      <section
        className="relative -mx-4 -mt-px flex min-h-[78vh] items-center justify-center overflow-hidden sm:-mx-6 lg:-mx-8"
        style={{
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
       
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl items-center justify-center px-6 py-20 text-center sm:px-8 lg:px-12">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-200">
            Rooted in Alabama
            </p>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Our Mission.
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-100">
              {siteName} Our mission at McKenzie Strategies is to empower individuals to deepen self-understanding, overcome obstacles, and build lasting self-efficacy. 
              Through a collaborative, client-centered approach, we help uncover motivation, strengthen resilience, and support meaningful, self-directed growth.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                to="/team#contact"
                className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-400"
              >
                Schedule your first appointment
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-400"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="mt-4">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wide text-indigo-300">
                Our approach
              </p>
              <h2 className="text-2xl font-semibold text-slate-50">
                Practical tools, human pace
              </h2>
              <p className="text-slate-300">
                We pair evidence-based practices with a calming, forward-looking vibe so you can breathe deeply and focus on what
                matters most.
              </p>
            </div>

            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400" />
                Compassionate clinicians invested in your story.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400" />
                Offices in Hoover and Trussville plus flexible scheduling.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400" />
                Resources, groups, and creative offerings to keep you moving.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-14">
        <div className="grid gap-6 lg:grid-cols-3">
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
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
              Locations
            </p>
            <h2 className="text-2xl font-semibold text-slate-50">
              Two welcoming offices built for calm and clarity.
            </h2>
            <p className="text-sm text-slate-300">
              Visit us in Hoover or Trussville—both spaces are designed to feel warm, modern, and grounding.
            </p>
            <Link
              to="/team"
              className="inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-3 text-sm font-semibold text-slate-50 shadow hover:bg-white/20"
            >
              Meet the team
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {locations.map((location) => (
              <div key={location.name} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
                  {location.name}
                </p>
                <p className="mt-2 text-slate-200">{location.address}</p>
                <p className="mt-3 text-xs text-slate-400">
                  Parking is easy and our team will guide you to the right suite.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title={`${siteName} | Counseling & Coaching in Alabama`} />;

export default IndexPage;
