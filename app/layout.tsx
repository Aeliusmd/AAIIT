import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AAIIT — Academy of Artificial Intelligence & Information Technology | QA, AI, Business Analysis Programs",
  description:
    "AAIIT offers 6-month intensive programs in Quality Assurance, AI with Fullstack Development, and Business Analysis. Industry-ready training with 100% internship placement guarantee. Enroll now.",
  keywords: "AAIIT, AI training academy, QA course, business analysis program, fullstack development, tech internship",
  openGraph: {
    title: "AAIIT — Academy of Artificial Intelligence & Information Technology",
    description:
      "6-month intensive programs in QA, AI with Fullstack Development, and Business Analysis with 100% internship placement. Launch your tech career with AAIIT.",
    type: "website",
    url: "https://aaiit.academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "AAIIT — Academy of AI & Information Technology",
    description:
      "6-month tech programs with guaranteed internship. Quality Assurance, AI Fullstack, Business Analysis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "Outfit, sans-serif" }}>{children}</body>
    </html>
  );
}
