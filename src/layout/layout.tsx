import { Outlet } from "react-router";
import Header from "../components/Header";

export function Layout() {
  return (
    <main className="min-h-screen ">
      <Header />
      <Outlet/>
    </main>
  );
}
