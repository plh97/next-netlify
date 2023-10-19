import React from "react";
import Viewer from "@/components/Viewer";
import Markdown from "@/components/Markdown";

export const metadata = {
  title: "Repository Detail Page",
  description: "This is Repository Detail Page | can view one Repository here",
};

export default async function RepositoryDetail() {
  return (
    <>
      <Viewer title={'nameWithOwner'} />
      <Markdown />
    </>
  );
}
