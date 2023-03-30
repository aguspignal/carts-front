import { Table, Text, Button, ActionIcon, Flex } from "@mantine/core";
import { useContext } from "react";
import { TbTrash as TrashIcon } from "react-icons/tb";
import { CartsContext } from "../context/CartsContextProvider";
import cartService from "../services/carts";

const CartTable = ({ cart = {} }) => {
   const { carts, setCarts } = useContext(CartsContext);

   function deleteCart(id) {
      cartService
         .deleteCart(id)
         .then(() => setCarts(carts.filter((cart) => cart.id !== id)));
   }

   return (
      <Flex>
         <Table verticalSpacing="md" horizontalSpacing="md">
            <thead>
               <tr>
                  <th>
                     <Text fz="md" ta="center">
                        Products
                     </Text>
                  </th>
                  <th>
                     <Text fz="md">Quantity</Text>
                  </th>
                  <th>
                     <Text fz="md">Price</Text>
                  </th>
                  <th />
               </tr>
            </thead>

            <tbody>
               {cart?.products?.map((product) => (
                  <tr key={product.id}>
                     <td style={{ width: "80%" }}>
                        <Text fw={500}>{product.title}</Text>
                     </td>
                     <td>{product.quantity}</td>
                     <td>${product.price}</td>
                     <td>
                        <ActionIcon ml={20}>
                           <TrashIcon fontSize="1.3rem" />
                        </ActionIcon>
                     </td>
                  </tr>
               ))}
            </tbody>

            <tfoot>
               <tr>
                  <td>
                     <Text ta="start" fz="xl" color="teal" fw={700}>
                        Total: ${cart?.total}
                     </Text>
                  </td>
                  <td />
                  <td />
                  <td>
                     <Button color="red" onClick={() => deleteCart(cart.id)}>
                        <TrashIcon fontSize="1.3rem" />
                        Delete cart
                     </Button>
                  </td>
               </tr>
            </tfoot>
         </Table>
      </Flex>
   );
};

export default CartTable;
