import { Outlet } from "react-router";
import Header from "../components/Header";
import Chatbot from "../components/Chatbot/ChatBot";

export function Layout() {
  return (
    <main className="min-h-screen ">
      <div className="mb-40">
        <Header />
      </div>
      <Outlet />
      <Chatbot />
    </main>
  );
}
