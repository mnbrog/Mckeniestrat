import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <div className="space-y-4 text-center">
      <h1 className="text-4xl font-bold text-slate-50">Page not found</h1>
      <p className="text-slate-300">The page you're looking for doesn't exist. Try heading back home.</p>
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-400"
      >
        Return home
      </Link>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Page not found" />;

export default NotFoundPage;
