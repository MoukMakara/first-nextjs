import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app//globals.css";
// import NavbarComponent
import NavbarComponent from "@/components/navbar/NavbarComponent";
import { Suspense } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import GlobalError from "./global-error";
import Layout from "./layout";

import { inter, suwannaphum, localCustomFont } from "./fonts";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
	title: "ISTAD Ecommerce Web",
	description: "ISTAD Ecommerce Web is a web application for selling products.",
	openGraph: {
		title: "ISTAD Ecommerce Web",
		description: "ISTAD Ecommerce Web is a web application for selling products.",
		images: 'https://store.istad.co/media/brand_images/sokea_AF6QosU.jpg'
	}
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${suwannaphum.variable} ${localCustomFont.variable}`}
      >
        <header>
          <NavbarComponent />
        </header>

        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
