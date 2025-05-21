import type { Metadata } from "next";
import { Inconsolata} from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";



const inconsolata = Inconsolata ({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Ticket Generator",
  description: "Project by frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.className} antialiased flex flex-col min-h-screen`}
      >
        <Header/>

        {children}

        <Footer/>

      </body>
    </html>
  );
}