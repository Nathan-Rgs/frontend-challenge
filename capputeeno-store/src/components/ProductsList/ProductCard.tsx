import Image from "next/image";
import styled from "styled-components";
import { Divider } from "../Divider";
import { formatPrice } from "@/utils/formatPrice";

interface ProductCardProps {
  name: string;
  price: number;
  image_url: string;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;
  width: 256px;

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--dark-text-2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 12px;
    width: 100%;
  }
`;

export default function ProductCard(props: ProductCardProps) {
  const price = formatPrice(props.price);

  return (
    <Card>
      <Image
        src={props.image_url}
        alt={props.name}
        width={256}
        height={300}
        style={{ borderRadius: "8px 8px 0px 0px" }}
      />
      <div>
        <h3>{props.name}</h3>
        <Divider />
        <p>{price}</p>
      </div>
    </Card>
  );
}
