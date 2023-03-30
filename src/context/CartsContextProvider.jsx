import { createContext, useState } from "react";

export const CartsContext = createContext();

const CartsContextProvider = ({ children }) => {
   const [carts, setCarts] = useState([]);

   return (
      <CartsContext.Provider value={{ carts, setCarts }}>
         {children}
      </CartsContext.Provider>
   );
};

export default CartsContextProvider;
