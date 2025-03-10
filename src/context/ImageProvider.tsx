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
    const [menuIsOpen, setMenuIsOpen] = useState(false);

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
      setCountPanier,
      menuIsOpen,
      setMenuIsOpen
    }), [imagePick, isGalleryOpen, cartIsOpen, showProduct, countPanier, menuIsOpen]);
  
    return (
      <ImageContext.Provider value={value}>
        {children}
      </ImageContext.Provider>
    );
  };