import React from "react";
import Viewer from "@/components/Viewer";

import "./index.scss";

export const metadata = {
  title: 'Article List Page',
  description: 'This is Article List Page | can view all articles here',
}

export default async function ArticlePage() {
  return (
    <>
      <Viewer title="文章列表" />
      <div className="ArticlePage__content">
        article
      </div>
    </>
  );
}
