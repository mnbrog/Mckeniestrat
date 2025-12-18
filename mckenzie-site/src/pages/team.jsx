// src/pages/team.jsx
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { hoover, trussville } from "../data/team";
import { siteName } from "../data/site";

const Avatar = ({ person }) => {
  // Put headshots here: /static/images/team/<filename>
  // Example: static/images/team/matt-mckenzie.jpg
  const src = person.image ? `/images/team/${person.image}` : null;

  return (
    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl ring-1 ring-slate-800 bg-slate-900">
      {src ? (
        <img
          src={src}
          alt={`${person.name} profile photo`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="h-full w-full grid place-items-center text-slate-300 font-semibold">
          {person.name
            .split(" ")
            .slice(0, 2)
            .map((w) => w[0])
            .join("")}
        </div>
      )}
    </div>
  );
};

const TeamGrid = ({ title, members }) => (
  <section className="mt-12">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-semibold text-slate-50">{title}</h2>
      <span className="text-xs uppercase tracking-wide text-indigo-300">
        {members.length} providers
      </span>
    </div>

    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {members.map((person) => (
        <article
          key={person.name}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow transition hover:border-indigo-500/40"
        >
          <div className="flex items-start gap-4">
            <Avatar person={person} />

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-slate-50 truncate">
                    {person.name}
                  </h3>
                  {person.credentials ? (
                    <p className="text-sm text-indigo-300">{person.credentials}</p>
                  ) : null}
                </div>

                <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-200">
                  {person.role}
                </span>
              </div>

              <p className="mt-3 text-sm text-slate-300">{person.bio}</p>

              {person.supervision ? (
                <p className="mt-3 text-xs text-slate-400">{person.supervision}</p>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-2">
                {person.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const TeamPage = () => {
  return (
    <Layout>
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
          Our Team
        </p>
        <h1 className="text-4xl font-bold text-slate-50 sm:text-5xl">
          People-centered care with practical momentum.
        </h1>
        <p className="text-lg text-slate-300">
          Meet the clinicians, coaches, and collaborators who anchor {siteName}. We serve both Hoover and
          Trussville with a shared commitment to thoughtful, evidence-informed support.
        </p>
      </header>

      <TeamGrid title="Hoover" members={hoover} />
      <TeamGrid title="Trussville" members={trussville} />

      <section
        id="contact"
        className="mt-16 rounded-3xl border border-indigo-500/30 bg-indigo-500/10 p-8 shadow-lg backdrop-blur"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-200">
              Ready when you are
            </p>
            <h2 className="text-2xl font-semibold text-slate-50">
              Contact us for more information or to schedule your first appointment
            </h2>
            <p className="mt-2 text-sm text-indigo-100">
              Share what you need and we'll connect you with a clinician who fits your goals and schedule.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-400"
              href="mailto:hello@mckenziestrategies.com"
            >
              Email our team
            </a>
            <a
              className="inline-flex items-center justify-center rounded-md border border-indigo-300 px-5 py-3 text-sm font-semibold text-indigo-100 hover:bg-indigo-500/20"
              href="tel:+12055550123"
            >
              Call to schedule
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title={`Meet the Team | ${siteName}`} />;

export default TeamPage;
