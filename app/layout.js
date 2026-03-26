import { Share } from "next/font/google";
import "./globals.css";


const share = Share({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-share",
});

export const metadata = {
  title: "EZ Forward",
  description: "Learning by doing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={`${share.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
