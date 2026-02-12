import { GoogleGenAI, Chat, GenerativeModel } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let ai: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const API_KEY = process.env.API_KEY;

export const initializeGemini = () => {
  if (!API_KEY) {
    console.warn("Gemini API Key missing. Chat functionality will be disabled.");
    return;
  }
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  }
};

export const getChatSession = (): Chat => {
  if (!ai) initializeGemini();
  
  if (!ai) {
    throw new Error("AI Service not initialized due to missing API Key.");
  }

  if (!chatSession) {
    chatSession = ai.chats.create({
      model: "gemini-2.5-flash-latest", // Compliant with PRD requirement for 2.5 Flash
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "Desculpe, não consegui processar sua resposta no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao conectar com o Agente. Por favor, tente novamente mais tarde.";
  }
};
