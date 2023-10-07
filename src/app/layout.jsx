import "./globals.css";
//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });className={inter.className}

export const metadata = {
  title: "TV HD",
  description: "Ver tv y peliculas online",
  applicationName: "TV HD",
  formatDetection: {
    telephone: false,
  },
  themeColor: "#202020",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  manifest: "/manifest.json",
  icons: [
    { rel: "apple-touch-icon", url: "/public/apple-touch-icon.png" },
    { rel: "shortcut icon", url: "/favicon.ico" },
  ],
  keywords: ["tvhd", "tv online", "peliculas estrenos"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
