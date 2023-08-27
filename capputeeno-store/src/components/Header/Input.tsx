import styled from "styled-components";
import SearchIcon from "../icons/search";
import { InputHTMLAttributes } from "react";

export const Input = styled.input`
  width: 352px;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;
  background: var(--bg-secondary);
  font-size: 14px;
  font-family: inherit;
  font-weight: 400;
  line-height: 22px;
  color: var(--dark-text);
`;

export const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 3%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export function InputWithSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <Input
        onChange={(event) => props.handleChange(event.target.value)}
        {...props}
      />
      <SearchIcon />
    </InputContainer>
  );
}
