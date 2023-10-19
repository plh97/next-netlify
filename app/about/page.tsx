import React from "react";
import Viewer from "@/components/Viewer";
import Markdown from "@/components/Markdown";

export const metadata = {
  title: "About Me",
  description: "This Page is About Me",
};

export default async function About() {
  return (
    <>
      <Viewer title={"nameWithOwner"} />
      <Markdown />
    </>
  );
}
