import type { Metadata } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Anku Builds — Building Cool Things with Code.",
    template: "%s | Anku Builds",
  },

  description:
    "Anku Builds — Full-stack developer building modern web applications, SaaS products, and digital experiences with Next.js, React, Node.js, and MongoDB.",

  keywords: [
    "Anku Builds",
    "Full-Stack Developer",
    "JavaScript Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "Node.js Developer",
    "Web Developer",
    "SaaS Developer",
  ],

  authors: [
    {
      name: "Anku Builds",
    },
  ],

  creator: "Anku Builds",

  metadataBase: new URL("https://ankubuilds.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Anku Builds — Building Cool Things with Code.",
    description:
      "Full-stack developer building modern web applications, SaaS products, and digital experiences.",
    url: "https://ankubuilds.com",
    siteName: "Anku Builds",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anku Builds — Building Cool Things with Code.",
    description:
      "Full-stack developer building modern web applications, SaaS products, and digital experiences.",
  },

  robots: {
    index: true,
    follow: true,
  },

};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Anku Builds",
      url: "https://ankubuilds.com",
      jobTitle: "Software Developer",
      sameAs: [
        "https://github.com/ankubuilds",
        "https://linkedin.com/in/ankubuilds",
        "https://instagram.com/ankubuilds.dev",
        "https://facebook.com/ankubuilds",
        "https://youtube.com/@AnkuBuilds",
      ],
    }),
  }}
/>
        </ThemeProvider>
  
      </body>
    </html>
  );
}