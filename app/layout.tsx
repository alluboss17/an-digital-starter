import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AN Digital Studio | Websites for UK Contractors",
  description: "High-converting, fast websites built specifically for UK builders, contractors, and trades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}