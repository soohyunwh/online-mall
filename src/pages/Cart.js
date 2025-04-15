// import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// const Cart = () => {
//     const cart = useSelector((state) => state.cart.cart);
//     const dispatch = useDispatch();

//     return (
//         <div>
//             <h2>Cart</h2>
//             <ul>
//                 {cart.map((item, index) => (
//                     <li key={index}>
//                         {item.name} - ${item.price}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
//     return (
//         <div>
//             <h1>Cart</h1>
//         </div>
//     );
// }

// export default Cart;

import React from "react";

import { removeFromCart } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;