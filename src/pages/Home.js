import React, {useState, useEffect} from "react";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../services/productService";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Home = ()=> {
    //const products = [
     //   { id: 1, name: "Laptop", price: 1200 },
       // { id: 2, name: "Phone", price: 800 },
// ];

    const [cartCount, setCartCount] = useState(0);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     // 예제: API 호출 대신 하드코딩된 데이터 사용
    //     const fetchProducts = () => {
    //         const data = [
    //             { id: 1, name: "뿡", price: 100 },
    //             { id: 2, name: "다", price: 80 },
    //             { id: 3, name: "닥", price: 40 },
    //         ];
    //         setProducts(data);
    //     };

    //     fetchProducts();

    // }, []); //빈배열로 마운트 시 한번만 실행

    // useEffect(() => {
    //     // Spring Boot API에서 데이터 가져오기
    //     fetch("http://localhost:8080/products")
    //         .then(response => response.json())
    //         .then(data => {setProducts(data); console.log(data);})
    //         .catch(error => console.error("Error fetching products:", error));
    // }, []);

    useEffect(() => {
        const searchProducts = async() => {
            const data = await fetchProducts({});
            setProducts(data)
            
        };
        searchProducts();
    },[]);

    function handleAddToCart(product){
        dispatch(addToCart(product));
    }

    return (
        <div>
            <h1>Welcome to Online Mall</h1>
            {/*<p>Cart Items: {cartCount}</p>*/}
            <div className="product-list">
                {products.map((product)=>
                (<ProductCard 
                key={product.id} 
                name={product.name} 
                price={product.price} 
                onAddToCart={()=>{
                    handleAddToCart(product)
                    }}
                    />
                    ))}

                {/*
                {products}
                {products.map()}
                {products.map(()=>())}
                {products.map((product)=>(<ProductCard/>))}
                {products.map((product)=>(<ProductCard key={}/>))} 
                */}

            </div>
        </div>

    
    );
}


export default Home;