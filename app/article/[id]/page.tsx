import React from "react";

import Viewer from "@/components/Viewer";
import Markdown from "@/components/Markdown";

export const metadata = {
  title: "Article Detail Page",
  description: "This is Article Detail Page | can view one articles here",
};

export default async function ArticleDetail() {
  return (
    <>
      <Viewer title={"article!.title"} />
      <Markdown />
    </>
  );
}
