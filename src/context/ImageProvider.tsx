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
    }), [imagePick, isGalleryOpen, cartIsOpen, showProduct]);
  
    return (
      <ImageContext.Provider value={value}>
        {children}
      </ImageContext.Provider>
    );
  };