import { ReactNode, useMemo, useState } from "react";
import { ImageContext } from "./ImageContext";

interface ImageProviderProps {
    children: ReactNode;
  }
  
  export const ImageProvider = ({ children }: ImageProviderProps) => {
    const [imagePick, setImagePick] = useState<number>(1);
    const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
    const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
    const [showProduct, setShowProduct] = useState<boolean>(false);
    const [countPanier, setCountPanier] = useState(0);
    
    // ✅ Mémoriser la valeur du contexte pour éviter les recréations inutiles
    const value = useMemo(() => ({
      imagePick,
      setImagePick,
      isGalleryOpen,
      setIsGalleryOpen,
      cartIsOpen,
      setCartIsOpen,
      showProduct,
      setShowProduct,
      countPanier,
      setCountPanier
    }), [imagePick, isGalleryOpen, cartIsOpen, showProduct, countPanier]);
  
    return (
      <ImageContext.Provider value={value}>
        {children}
      </ImageContext.Provider>
    );
  };