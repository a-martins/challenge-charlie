import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(255, 255, 255, 0.8);
  padding: 8px;
`;

const InputField = styled.input`
  width: 100%;
  background-color: rgb(255, 255, 255, 0);
  margin-left: 8px;
  border: none;
  font-size: 24px;
  font-weight: 700;
  height: 32px;
  line-height: 8px;
  color: gray;
  &:focus {
    border: none;
    outline: none;
  }
`;

export { InputContainer, InputField };
