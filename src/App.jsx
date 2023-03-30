import { Text, Container, Flex, Button } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import "./assets/index.css";
import CartTable from "./components/CartTable";
import { CartsContext } from "./context/CartsContextProvider";
import cartService from "./services/carts";

function App() {
   const { carts, setCarts } = useContext(CartsContext);
   const [singleCart, setSingleCart] = useState({});

   useEffect(() => {
      getAllCarts();
   }, []);

   function getAllCarts() {
      cartService
         .getAllCarts()
         .then((initialCarts) => {
            setCarts(initialCarts);
         })
         .then(() => setSingleCart(null));
   }

   function getSingleCart(id) {
      cartService.getCart(id).then((cart) => setSingleCart(cart));
   }

   return (
      <div>
         <Container sx={{ width: "50vw" }}>
            <Flex justify="space-evenly" wrap="wrap">
               <Button color="grape" my="xs" onClick={() => getAllCarts()}>
                  Show all carts
               </Button>
               {carts.map((cart) => (
                  <Button
                     key={cart.id}
                     my="xs"
                     color="grape"
                     onClick={() => getSingleCart(cart.id)}
                  >
                     Show cart #{cart.id}
                  </Button>
               ))}
            </Flex>
         </Container>

         {singleCart ? (
            <Container my={25} py={20} sx={{ border: "1px solid lightgrey" }}>
               <Text ta="start" fz="xl" fw={700} color="grape">
                  Cart #{singleCart.id}
               </Text>

               <CartTable
                  key={singleCart.id}
                  cart={{ singleCart, setSingleCart }}
               />
            </Container>
         ) : carts.length > 0 ? (
            carts.map((cart) => (
               <Container
                  my={25}
                  py={20}
                  sx={{ border: "1px solid lightgrey" }}
                  key={cart.id}
               >
                  <Text ta="start" fz="xl" fw={700} color="grape">
                     Cart #{cart.id}
                  </Text>

                  <CartTable key={cart.id} cart={cart} />
               </Container>
            ))
         ) : (
            <Text>No carts yet</Text>
         )}
      </div>
   );
}

export default App;
