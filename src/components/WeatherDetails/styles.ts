import styled from "styled-components";

const Container = styled.div<{
  $red: string;
  $green: string;
  $blue: string;
}>`
  display: flex;
  flex-direction: row;
  background-color: rgba(
    ${(props) => props.$red},
    ${(props) => props.$green},
    ${(props) => props.$blue},
    0.8
  );
  padding-top: 8px;
  padding-bottom: 28px;
`;

const IconContainer = styled.div`
  display: flex;
  flex: 6;
  justify-content: center;
  padding-right: 16px;
`;

const EmptyContainer = styled.div`
  display: flex;
  flex: 6;
  padding-right: 16px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  font-weight: 500;
  color: white;
  font-size: 18px;
  line-height: 24px;
`;

const SubDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export {
  Container,
  DetailsContainer,
  EmptyContainer,
  IconContainer,
  SubDetailsContainer,
};
