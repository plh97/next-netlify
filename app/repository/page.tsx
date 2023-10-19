import React, { Component } from "react";
import Viewer from "@/components/Viewer";

import "./index.scss";

export const metadata = {
  title: "Repository List Page",
  description: "Repository List Page | can view all repositories here",
};

export default async function RepositoryPage() {
  return (
    <div className="RepositoryPage">
      <Viewer title="前端组件" />
      <div className="RepositoryPage__content">
        前端组件
      </div>
    </div>
  );
}
