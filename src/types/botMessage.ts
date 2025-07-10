import type { JSX } from "react";

export type Message = {
  id: string;
  text: JSX.Element | string;
  sender: "user" | "bot";
};
