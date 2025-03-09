import '../assets/styles/Header.css'
import { useImage } from "../hooks/UseImage";
import { Cart } from './Cart';

export function Header() {
    const navigation_items : string[] = [
        "Collections",
        "Men",
        "Women",
        "About",
        "Contact"
      ]
    
    const {cartIsOpen, setCartIsOpen, showProduct , countPanier} = useImage();

    const handleChange = () => {
        setCartIsOpen((prev) => !prev);
        console.log(!cartIsOpen);
    };

    return(
        <header>
          <div id="containerHeader">
            <div id="leftHeader">
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