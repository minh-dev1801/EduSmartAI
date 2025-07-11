import React, { useState, useRef, useEffect } from "react";
import ChatBotIcon from "../Icon/ChatBotIcon";
import { MdClose } from "react-icons/md";
import { FaPaperPlane, FaRobot } from "react-icons/fa";
import { getCurrentTime } from "../../Utils/getCurrentTime";
import { getBotResponse } from "./getBotResponse";
import type { Message } from "../../types/botMessage";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      text: (
        <div className="flex gap-4">
          Chào bạn!
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/72x72/1f44b.png"
            alt="👋"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      ),
      sender: "bot",
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      text: inputValue,
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const response = getBotResponse(inputValue);
      const botMessage: Message = {
        id: crypto.randomUUID(),
        text: response,
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all cursor-pointer hover:bg-blue-500"
      >
        {isOpen ? (
          <MdClose className="w-6 h-6" />
        ) : (
          <ChatBotIcon className="w-6 h-6" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-[6rem] right-5 w-[20rem] md:w-[24rem] h-[25rem] md:h-[450px] bg-white rounded-lg shadow-2xl flex flex-col transition-all z-100">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaRobot className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Mia AI Agent</h3>
            </div>
            <button
              onClick={toggleChat}
              className="hover:scale-125 transition-all cursor-pointer"
            >
              <MdClose className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto bg-white">
            <div className="flex flex-col space-y-3">
              {messages.map((message) => (
                <div>
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-xl ${
                        message.sender === "user"
                          ? "bg-blue-500 text-white rounded-br-none"
                          : "bg-gray-200 text-black rounded-bl-none"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                  {message.sender !== "user" && (
                    <span className="ml-1 text-[12px] text-gray-500">
                      Mia AI Agent - Today, {getCurrentTime()}
                    </span>
                  )}
                </div>
              ))}

              <div ref={messagesEndRef} />
            </div>
          </div>
          <div className="border-t border-gray-200 bg-white rounded-b-lg mx-4"></div>

          <form onSubmit={handleSendMessage} className="px-4 py-2">
            <div className="flex items-center ">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Nhập tin nhắn..."
                className="flex-grow p-2 w-[90%] outline-0"
              />

              <button
                type="submit"
                className={`${
                  inputValue ? "text-blue-500" : "text-gray-400"
                }  cursor-pointer w-[10%] transition-all`}
                disabled={!inputValue.trim()}
              >
                <FaPaperPlane className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
