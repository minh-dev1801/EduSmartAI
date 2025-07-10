import type { JSX } from "react";
import { botResponseData } from "./botData";

export const getBotResponse = (message: string): string | JSX.Element => {
  const lowerCaseMessage = message.toLocaleLowerCase().trim();
  console.log(lowerCaseMessage);
  for (const key in botResponseData) {
    const keyLowercase = key.toLocaleLowerCase().trim();
    if (lowerCaseMessage.includes(keyLowercase)) {
      return botResponseData[key];
    }
  }
  return botResponseData["default"];
};
