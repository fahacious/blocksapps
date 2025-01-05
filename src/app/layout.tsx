import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const inter = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blocks Mainnet | Wallet Troubleshooter",
  description: "Blocks Mainnet | Wallet Troubleshooter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
