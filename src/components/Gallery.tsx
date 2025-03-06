import { useImage } from "../hooks/UseImage"
import { Caroussel } from "./Caroussel";
import '../assets/styles/Gallery.css'

export function Gallery() {
    const {handleGallery, setImagePick} = useImage();
    return(
        <div id="galleryContainer">
            <div id="galleryBackground"/>
                <div id="closeContainer" >
                    <button id="close" onClick={handleGallery}>
                        <img src='/images/icon-close.svg' alt="close"/>
                    </button>
                </div>
            <div id="galleryCaroussel">
                <Caroussel/>
                    <button id="previous" onClick={() => setImagePick((prev) => ((prev - 2 + 4) % 4) + 1)}>
                        <img src='/images/icon-next.svg' alt="previous"/>
                    </button>
                    <button id="next" onClick={() => setImagePick((prev) => ((prev % 4) + 1))}>
                        <img src='/images/icon-next.svg' alt="next"/>
                    </button>
            </div>
        </div>
    )
}