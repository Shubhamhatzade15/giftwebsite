import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";


export const metadata: Metadata = {
<<<<<<< HEAD
  title: "NextJs App",
  description: "Shubham",
=======
  title: "Nextjs App",
  description: "Shubham Hatzade",
>>>>>>> b85740633840167313cbc9eb34f886b8a82519e6
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> 
        {children}
        <Footer/>
        </body>
    </html>
  );
}
