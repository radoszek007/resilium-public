import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resilium Public | Systém trénovaných reakcí",
  description:
    "Praktický systém pro zvládání tlaku, stresu, konfliktů a náročných životních situací."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
