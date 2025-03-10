import '../assets/styles/Header.css'
import { navigation_items } from '../constants/constant';
import { useImage } from "../hooks/UseImage";
import { Cart } from './Cart';

export function Header() {
    
    const {cartIsOpen, setCartIsOpen, showProduct , countPanier, setMenuIsOpen} = useImage();

    const handleChange = () => {
        setCartIsOpen((prev) => !prev);
        console.log(!cartIsOpen);
    };

    return(
        <header>
          <div id="containerHeader">
            <div id="leftHeader">
              <button id="menu" onClick={() => setMenuIsOpen((prev) => (!prev))}>
                <img src='/images/icon-menu.svg' alt='menu'/>
              </button>
              <h1 id="title">sneakers</h1>
              <div id="navigation">
                {navigation_items.map((item) => (
                  <div key={item} id={item}>
                    <a href="/">{item}</a>
                  </div>
                ))}
              </div>
            </div>
            <div id="rightHeader">
              <button onClick={handleChange} id="cartButton">
                <img src="/images/icon-cart.svg" alt="cart"/>
                {showProduct && <div>{countPanier}</div>}
              </button>
              {cartIsOpen && <Cart/> }  
              <a href='/'>
              <img id="profile" src="/images/image-avatar.png" alt="profile"/>
              </a>
            </div>
        </div>
      </header>
    )
}