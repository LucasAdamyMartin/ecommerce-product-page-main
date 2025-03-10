import { navigation_items } from "../constants/constant";
import '../assets/styles/Menu.css'
import { useImage } from "../hooks/UseImage";

export function Menu() {
    const {setMenuIsOpen} = useImage();

    return(
        <div id="menuWindow">
            <div id="menuContainer">
                <div id="menuClose">
                    <button onClick={() => setMenuIsOpen(false)}>
                        <img src='/images/icon-close.svg' alt='close'/>
                    </button>
                </div>
                <div id="navigationMenu">
                    {navigation_items.map((item) => (
                        <div key={item} id={item}>
                                        <a href="/">{item}</a>
                                        </div>
                    ))}
                </div>
            </div>
            <button id="backdrop" onClick={() => setMenuIsOpen(false)}/>
        </div>
    )
}