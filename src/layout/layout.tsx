import { Outlet } from "react-router";
import Header from "../components/Header";
import Chatbot from "../components/Chatbot/ChatBot";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

export function Layout() {
  return (
    <main className="min-h-screen ">
      <div className="mb-[98px] md:mb-32">
        <Header />
      </div>
      <Outlet />
      <footer className="bg-gray-900 text-white py-5 md:py-10">
        <Footer />
      </footer>
      <ScrollToTop />
      <Chatbot />
    </main>
  );
}
