import styled from "styled-components";
import SearchIcon from "../icons/search";
import { InputHTMLAttributes } from "react";

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;
  background: var(--bg-secondary);
  font-size: 12px;
  font-family: inherit;
  font-weight: 400;
  line-height: 20px;
  color: var(--dark-text);

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 230px;

  svg {
    position: absolute;
    right: 3%;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    width: 352px;
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export function InputWithSearchIcon({ handleChange, ...rest }: InputProps) {
  return (
    <InputContainer>
      <Input onChange={(event) => handleChange(event.target.value)} {...rest} />
      <SearchIcon />
    </InputContainer>
  );
}
