import { createContext} from "react";

// Définition du type du contexte
interface ImageContextType {
  imagePick: number;
  setImagePick: React.Dispatch<React.SetStateAction<number>>,
  isGalleryOpen: boolean;
  handleGallery: () => void;
}

// Création du contexte
export const ImageContext = createContext<ImageContextType | undefined>(undefined);


