import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { siteName } from "../data/site";

const coolStuffContent = [
  {
    id: "merchandise",
    title: "Merchandise",
    body: "Comfortable tees, notebooks, and calming desk items designed by our team. Use this space to share product highlights and seasonal drops.",
  },
  {
    id: "podcasts",
    title: "Podcasts",
    body: "We love conversations that blend strategy and heart. List your favorite episodes, guest appearances, or upcoming releases here.",
  },
  {
    id: "executive-coaching",
    title: "Executive Coaching",
    body: "For leaders who want clarity and accountability, our coaching packages are practical and relational. Customize this blurb with the details that matter most to your clients.",
  },
  {
    id: "mint-trainings",
    title: "MINT Trainings",
    body: "Motivational Interviewing Network of Trainers offerings are updated throughout the year. Share dates, formats, and how to register.",
  },
];

const CoolStuffPage = () => {
  return (
    <Layout>
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">Cool Stuff</p>
        <h1 className="text-4xl font-bold text-slate-50 sm:text-5xl">Fresh ideas, creative resources, and collaborations.</h1>
        <p className="text-lg text-slate-300">
          Stay connected with the projects that keep our team inspired. Expand each section to edit the details as offerings
          evolve.
        </p>
      </header>

      <div className="mt-10 space-y-4">
        {coolStuffContent.map((item) => (
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

export const Head = () => <Seo title={`Cool Stuff | ${siteName}`} />;

export default CoolStuffPage;
