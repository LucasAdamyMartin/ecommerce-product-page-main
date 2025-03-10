import { useImage } from "../hooks/UseImage"
import { Caroussel } from "./Caroussel";
import '../assets/styles/Gallery.css'

export function Gallery() {
    const {setIsGalleryOpen, setImagePick} = useImage();
    return(
        <div id="galleryContainer">
            <div id="galleryBackground"/>
                <div id="closeContainer" >
                    <button id="close" onClick={() => setIsGalleryOpen((prev) => (!prev))}>
                        <img src={`${import.meta.env.BASE_URL}/images/icon-close.svg`} alt="close"/>
                    </button>
                </div>
            <div id="galleryCaroussel">
                <Caroussel/>
                    <button id="previous" onClick={() => setImagePick((prev) => ((prev - 2 + 4) % 4) + 1)}>
                        <img src={`${import.meta.env.BASE_URL}/images/icon-next.svg`}  alt="previous"/>
                    </button>
                    <button id="next" onClick={() => setImagePick((prev) => ((prev % 4) + 1))}>
                        <img src={`${import.meta.env.BASE_URL}/images/icon-next.svg`}  alt="next"/>
                    </button>
            </div>
        </div>
    )
}