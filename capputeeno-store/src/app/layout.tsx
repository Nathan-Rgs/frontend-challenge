import "./globals.css";
import type { Metadata } from "next";
import { Saira } from "next/font/google";
import Header from "@/components/Header/Header";
import DefaultProviders from "@/components/DefaultProviders";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Capputeeno",
  description: "Best ecommerce ever",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <DefaultProviders>
          <Header />
          {children}
        </DefaultProviders>
      </body>
    </html>
  );
}
