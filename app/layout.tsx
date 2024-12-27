import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import SessionProvider from "@/utils/SessionProvider";
import Providers from "@/Providers";
import { authOptions } from "@/auth";
import ServiceWorker from "@/components/ServiceWorker";
import "svgmap/dist/svgMap.min.css";
import { getServerSession } from "next-auth/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Aryusa herbal limited",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" data-theme="white">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Header />
          <Providers>{children}</Providers>
          <Footer />
          <ServiceWorker />
        </SessionProvider>
      </body>
    </html>
  );
}
