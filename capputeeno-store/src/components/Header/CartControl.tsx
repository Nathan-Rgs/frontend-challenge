import styled from "styled-components";
import useLocalStorage from "@/hooks/useLocalStorage";
import CartIcon from "../icons/cart";

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0 5px;
  font-size: 10px;
  background-color: var(--delete-color);
  color: white;
  margin-left: -10px;
`;

export default function CartControl() {
  const { value } = useLocalStorage("cart-items", []);

  return (
    <div>
      <CartIcon />
      {value.length && <CartCount>{value.length}</CartCount>}
    </div>
  );
}
