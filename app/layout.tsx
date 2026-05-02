import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Cost Shock Preventer — Stop Surprise API Bills",
  description: "Monitor API usage patterns and predict monthly costs with early warning alerts. Never get surprised by a massive API bill again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9c6233be-8c04-4b5d-a339-1b0116460401"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
