import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./reset.css";
import Header from "@/components/Header";

import styles from "./page.module.scss";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceCodePro.className}>
        <div className={styles.layoutRoot}>
          <Header />

          <div className={styles.main}>{children}</div>
        </div>
      </body>
    </html>
  );
}
