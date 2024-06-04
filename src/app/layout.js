import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grupo Total Sistemas",
  description: "Site oficial do Grupo Total Sistemas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
      <link href='https://fonts.googleapis.com/css?family=DM Sans' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Sora' rel='stylesheet'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
