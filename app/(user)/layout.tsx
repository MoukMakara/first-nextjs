import type { Metadata } from "next";
import "@/app//globals.css";
// import NavbarComponent
import NavbarComponent from "@/components/navbar/NavbarComponent";
import { Suspense } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";


import { inter, suwannaphum, localCustomFont } from "./fonts";


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
	title: "ISTAD Ecommerce Web",
	description: "ISTAD Ecommerce Web is a web application for selling products.",
	openGraph: {
		title: "ISTAD Ecommerce Web",
		description: "ISTAD Ecommerce Web is a web application for selling products.",
		images: 'https://api.escuelajs.co/api/v1/files/9942.jpg'
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

        <ErrorBoundary errorComponent={Error}>
							<Suspense fallback={<Loading />}>{children}</Suspense>
						</ErrorBoundary>

        {/* <Suspense fallback={<Loading />}>{children}</Suspense> */}
      </body>
    </html>
  );
}
