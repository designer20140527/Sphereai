import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sphere.ai",
  description: "Create with AI. Connect with Fans. Earn with $SPH.",
  icons: {
    icon: '/logo-black.png',
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
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
