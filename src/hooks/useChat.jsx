import { createContext, useContext, useEffect, useState } from "react";


const backendUrl = import.meta.env.VITE_API_URL;

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {


  const getKnowledgeBase = async (query) => {
    try{

      const data = await fetch(`${backendUrl}/getKnowledgeBase`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const resp = (await data.json()).queryResponse;
      console.log("response message: ", resp)

      console.log("chunks: ", resp)
      
      return resp
     
    }catch(err){
      console.error("Error fetching knowledge base:", err);
    }
  }

  const chat = async (message) => {
    setLoading(true);
    const data = await fetch(`${backendUrl}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const resp = (await data.json()).messages;
    console.log("response message: ", resp)
    setMessages((messages) => [...messages, ...resp]);
    setLoading(false);
  };

  const [knowledgeBase, setKnowledgeBase] = useState()
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [cameraZoomed, setCameraZoomed] = useState(true);
  const onMessagePlayed = () => {
    setMessages((messages) => messages.slice(1));
  };

  useEffect(() => {
    if (messages.length > 0) {
      setMessage(messages[0]);
    } else {
      setMessage(null);
    }
  }, [messages]);

  return (
    <ChatContext.Provider
      value={{
        chat,
        message,
        setMessages,
        onMessagePlayed,
        loading,
        setLoading,
        cameraZoomed,
        setCameraZoomed,
        knowledgeBase,
        setKnowledgeBase,
        getKnowledgeBase
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
