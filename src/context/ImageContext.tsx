import { createContext} from "react";

// Définition du type du contexte
interface ImageContextType {
  imagePick: number;
  setImagePick: React.Dispatch<React.SetStateAction<number>>,
  isGalleryOpen: boolean;
  setIsGalleryOpen : React.Dispatch<React.SetStateAction<boolean>>,
  cartIsOpen: boolean,
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  showProduct: boolean,
  setShowProduct: React.Dispatch<React.SetStateAction<boolean>>,
  countPanier: number,
  setCountPanier: React.Dispatch<React.SetStateAction<number>>
  menuIsOpen : boolean,
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// Création du contexte
export const ImageContext = createContext<ImageContextType | undefined>(undefined);


