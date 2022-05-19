import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./style";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
const Button = ({ text, ...rest }: IButton) => {
  return (
    <ButtonContainer>
      <button {...rest}>{text}</button>
    </ButtonContainer>
  );
};
export default Button;
