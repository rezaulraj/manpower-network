// src/pages/_app.tsx
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-monterrat",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={` ${inter.className} antialiased`}>
      <Component {...pageProps} />
    </main>
  );
}
