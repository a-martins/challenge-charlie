import styled from "styled-components";

const IconContainer = styled.span<{ $size?: number; $color?: string }>`
  display: flex;
  flex-direction: row;
  font-family: "MeteoconsRegular";
  font-size: ${(props) => (props.$size ? `${props.$size}px` : "16px")};
  color: ${(props) => (props.$color ? props.$color : "#000")};
`;

export { IconContainer };
