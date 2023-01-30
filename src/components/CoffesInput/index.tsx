import { useTheme } from "styled-components";
import { CoffesInputContainer, Icon } from "./styles";
import { Minus, Plus } from "phosphor-react";

interface CoffesInputProps {
  value: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

export function CoffesInput({
  value,
  handleIncrement,
  handleDecrement,
}: CoffesInputProps) {
  const { colors } = useTheme();

  return (
    <CoffesInputContainer>
      <Icon disabled={value <= 1} onClick={handleDecrement}>
        <Minus size={14} color={colors.purple} weight="fill" />
      </Icon>
      <input type="number" readOnly value={value} />
      <Icon onClick={handleIncrement}>
        <Plus size={14} color={colors.purple} weight="fill" />
      </Icon>
    </CoffesInputContainer>
  );
}
