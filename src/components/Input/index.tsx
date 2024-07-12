import { useContext } from "react";
import {
  WeatherContext,
  WeatherContextType,
} from "../../contexts/WeatherProvider";
import Icon from "../Icon";
import { InputContainer, InputField } from "./styles";

const Input = () => {
  const { location, setLocation } = useContext(
    WeatherContext
  ) as WeatherContextType;

  const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      event.currentTarget.blur();
    }
  };

  return (
    <InputContainer>
      <Icon color="gray" size={32}>
        (
      </Icon>
      <InputField
        type="text"
        defaultValue={location}
        onBlur={(e) => setLocation(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </InputContainer>
  );
};

export default Input;
