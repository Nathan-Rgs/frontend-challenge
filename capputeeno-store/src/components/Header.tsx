"use client";

import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { InputWithSearchIcon } from "./Input";
import CartControl from "./CartControl";

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

const sairaStencil = Saira_Stencil_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = styled.a`
  color: var(--logo-color);
  font-size: 40px;
  font-weight: 400;
  line-height: 150%;
`;

export default function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}> Capputeeno </Logo>
      <div>
        <InputWithSearchIcon placeholder="Procurando por algo específico?" />
        <CartControl />
      </div>
    </TagHeader>
  );
}
