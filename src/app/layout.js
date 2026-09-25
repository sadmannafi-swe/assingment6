import "./globals.css";
import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";
import { FitlogProvider } from "@/Context/FitlogContext";

export const metadata = {
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FitlogProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </FitlogProvider>
      </body>
    </html>
  );
}