import { Outlet } from "react-router";
import Header from "../components/Header";
import Chatbot from "../components/Chatbot/ChatBot";
import Footer from "../components/Footer/Footer";

export function Layout() {
  return (
    <main className="min-h-screen ">
      <div className="mb-[98px] md:mb-32">
        <Header />
      </div>
      <Outlet />
      <footer className="bg-gray-900 text-white py-10 border-t border-gray-700">
        <Footer />
      </footer>
      <Chatbot />
    </main>
  );
}
