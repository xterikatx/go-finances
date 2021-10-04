import React from "react";
import {
  Container,
  Header,
  Title,
  Footer,
  Amount,
  LastTransaction,
  Icon
} from "./styles";

export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title></Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>R$ 12.010,00</Amount>
        <LastTransaction>Ultima entrada 01 de outubro</LastTransaction>
      </Footer>
    </Container>
  );
}
