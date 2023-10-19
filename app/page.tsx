import Viewer from "@/components/Viewer";
import Markdown from "@/components/Markdown";

import "./page.scss";

export const metadata = {
  title: "Home Page",
  description: "This is plh97's blog",
};

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 HomePage">
      <Viewer title="主页" />
    </main>
  );
}
