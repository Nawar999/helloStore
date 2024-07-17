import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Cairo } from "next/font/google";
// import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const cairo = Cairo({
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cairo.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
