import styled from "styled-components";

const MainContainer = styled.div<{ $backgroundUrl?: string }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) =>
    props.$backgroundUrl ? props.$backgroundUrl : ""});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const Container = styled.div`
  width: 25%;
`;

export { Container, MainContainer };
