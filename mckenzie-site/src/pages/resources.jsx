import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { siteName } from "../data/site";

const resourcesContent = [
  {
    id: "continuing-education",
    title: "Continuing Education",
    body: "We offer CE opportunities that blend motivational interviewing, practical ethics, and community care. Content is kept fresh and relevant so your learning hours feel meaningful and applicable.",
  },
  {
    id: "faqs",
    title: "FAQs",
    body: "Find answers about scheduling, insurance, session flow, and how to know if we're the right fit. This section is designed for easy edits as your policies evolve.",
  },
  {
    id: "fly",
    title: "FLY",
    body: "Our FLY initiative helps clinicians and clients stay nimble—expect short workshops, quick-tip videos, and downloadable guides that support confident practice.",
  },
  {
    id: "groups",
    title: "Groups",
    body: "Group offerings rotate throughout the year. We focus on supportive spaces for anxiety, parenting, and leadership growth with clear start dates and rhythms.",
  },
  {
    id: "upcoming-dates",
    title: "Upcoming Dates",
    body: "Keep an eye on this list for trainings, community events, and seasonal announcements. Update as often as you like to keep everyone in the loop.",
  },
];

const ResourcesPage = () => {
  return (
    <Layout>
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">Resources</p>
        <h1 className="text-4xl font-bold text-slate-50 sm:text-5xl">Guides, answers, and updates for our community.</h1>
        <p className="text-lg text-slate-300">
          Explore the latest continuing education options, quick reads, and FAQs. Each section below expands to reveal editable
          placeholder copy you can tailor to your practice.
        </p>
      </header>

      <div className="mt-10 space-y-4">
        {resourcesContent.map((item) => (
          <section key={item.id} id={item.id} className="scroll-mt-24">
            <details className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-slate-50">
                <span>{item.title}</span>
                <span className="text-indigo-300 transition-transform group-open:rotate-90">→</span>
              </summary>
              <p className="mt-4 text-sm text-slate-300">{item.body}</p>
            </details>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title={`Resources | ${siteName}`} />;

export default ResourcesPage;
