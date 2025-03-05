import { useContext } from "react";
import { ImageContext } from "../context/ImageContext"; // ✅ Vérifie le bon chemin

export const useImage = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImage must be used within an ImageProvider");
  }
  return context;
};
