import { Footer, Navber } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the World.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navber />
        {children}
        <Footer />
      </body>
    </html>
  );
}
