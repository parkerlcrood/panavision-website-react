import {useState, useEffect} from "react";
import { getMerch } from "../services/api";
import { Link } from "react-router-dom";
import '../../css/style.css';
import BackToTop from '../components/BackToTop';
import CartPageItem from "../components/CartPageItem";

function Cart( {cart, setCart}) {

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        if(cart.length>1){
            isCartEmpty = false;
        };
    }, [cart]);

    let isCartEmpty = true;

    if(cart.length>0){
        isCartEmpty = false;
    };

    function removeItem(id){
        setCart(prev => prev.filter(item => item.merch_id!==id));
    }

    function getId(item){
        return item;
    }

    function removeFromCart(id){
        setCart(cart.filter(item => item.merch_id !== id));
    }

    return (
    <div>
        <div className="btmerchbanner">
            <Link to={'/merchpage'}>
            <h3 className="btmerch">Back to Merch</h3>
            </Link>
        </div>
        <div className={isCartEmpty ? "cart-empty" : "cart"} id="top">
            <p className="favoritesTitle">{isCartEmpty ? "Cart Empty": "Cart"}</p>
            <p className="favoritesText">{isCartEmpty ? "Start adding items to the cart and they will show up": "Items:"}</p>
            <div> 
                <ul className="cartTable">
                    <li className="cartPageItem">
                            <span className="itemImage">
                                <img src={`${import.meta.env.VITE_LOCAL_API_URL}/PanavisionLogoTrans.png`}/>
                            </span>
                            <p className = "itemName">Item Name</p>
                            <p className = "itemPrice">Price</p>
                            <button className = "deleteButton">
                                Delete Item
                            </button>
                    </li>
                    <ul id="cart">
                        {cart.map((item) => (
                            <CartPageItem key = {item.merch_id}  
                                item = {item}
                                remove = {removeFromCart}      
                            />
                        ))}
                        <li>
                            <h1>Checkout is under construction...</h1>
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    </div>

    );

}

export default Cart;