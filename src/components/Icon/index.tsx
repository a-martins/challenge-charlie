import { PropsWithChildren } from "react";
import { IconContainer } from "./styles";

type IconProps = {
  size?: number;
  color?: string;
};

const Icon = (props: PropsWithChildren<IconProps>) => {
  const { size, color } = props;
  return (
    <IconContainer $size={size} $color={color}>
      {props.children}
    </IconContainer>
  );
};

export default Icon;
