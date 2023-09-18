import "../../public/css/index.css";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Head from "../head";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Valère Douillé | Portfolio",
//   description: "Front-end web developer based in Lille",
// };

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      {/* <head /> */}
      <Head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
