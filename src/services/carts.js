import axios from "axios";

const BASE_URL = "/api/carts";

const getAllCarts = async () => {
   const request = await axios.get(BASE_URL);
   return request.data;
};

const getCart = async (id) => {
   const request = await axios.get(`${BASE_URL}/${id}`);
   return request.data;
};

const addCart = async (newCart) => {
   const request = await axios.post(`${BASE_URL}`, newCart);
   return request.data;
};

const updateCart = async (id, newCart) => {
   const request = axios.put(`${BASE_URL}/${id}`, newCart);
   return request.data;
};

const deleteCart = async (id) => {
   const request = axios.delete(`${BASE_URL}/${id}`);
   return request.data;
};

export default {
   getAllCarts,
   getCart,
   addCart,
   updateCart,
   deleteCart,
};
