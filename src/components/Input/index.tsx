import { Dispatch, SetStateAction } from "react";
import { Coordinates } from "../../pages/Home";
import Icon from "../Icon";
import { InputContainer, InputField } from "./styles";

type InputProps = {
  userLocation?: Coordinates;
  setUserLocation: Dispatch<SetStateAction<Coordinates | undefined>>;
  defaultValue?: string;
};

const Input = (props: InputProps) => {
  const { defaultValue } = props;
  return (
    <InputContainer>
      <Icon color="gray" size={32}>
        (
      </Icon>
      <InputField type="text" defaultValue={defaultValue} />
    </InputContainer>
  );
};

export default Input;