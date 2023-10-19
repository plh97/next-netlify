import Head from "next/head";
import Side from "@/components/Side";
import styles from "./layout.module.scss";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <body suppressHydrationWarning>
        <div className={styles["container"]}>
          <div className={styles["content"]}>
            <div className={styles["side"]}>
              <Side />
            </div>
            <div className={styles["body"]}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
