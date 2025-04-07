import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


const lexend = Lexend({
  subsets : ['latin'],
  variable: "--font-lexend",
  display: 'swap'
});

export const metadata = {
  title: "Better Typing",
  description: "An app to help you type faster",
  applicationName: "btyping",
  generator: 'Next.js',
  keywords: ['escritura', 'typing', 'teclado', 'practica' ],
  author: [{name: 'Leopoldo'}],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased`}
      >
      <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
