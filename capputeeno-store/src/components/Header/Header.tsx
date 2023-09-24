"use client";

import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { InputWithSearchIcon } from "./Input";
import CartControl from "./CartControl";
import { useFilter } from "@/hooks/useFilter";

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;
  }
`;

const sairaStencil = Saira_Stencil_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = styled.a`
  color: var(--logo-color);
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;

  @media (min-width: ${(props) => props.theme.tabletBreakpoint}) {
    font-size: 24px;
  }
  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`;

export default function Header(props: HeaderProps) {
  const { search, setSearch } = useFilter();

  return (
    <TagHeader>
      <Logo className={sairaStencil.className}> Capputeeno </Logo>
      <div>
        <InputWithSearchIcon
          value={search}
          handlechange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </div>
    </TagHeader>
  );
}
