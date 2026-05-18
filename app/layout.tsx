import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Candidate Skill Verification Tool",
  description: "Verify developer skills with automated coding challenges. Create personalized coding problems based on job requirements and automatically grade submissions with detailed feedback."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f7877b31-ef82-465e-abf2-23bc8d807035"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
