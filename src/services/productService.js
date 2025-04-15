import axios from "axios";
const API_URL = "http://localhost:8080/products";

export const fetchProducts = async (params) => {
    const response = await axios.get(API_URL, { params  });
    return response.data;
};

