import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";
import { DataProps } from "../../components/TransactionCard/types";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from "./styles";

export function Dashboard() {
  const data: DataProps[] = [
    {
      id: "1",
      title: "Desenvolvimento de site",
      category: { name: "Vendas", icon: "dollar-sign" },
      amount: "R$ 10.000,00",
      date: "10/10/2021",
      type: "positive",
    },
    {
      id: "11",

      title: "Salário",
      category: { name: "Vendas", icon: "dollar-sign" },
      amount: "R$ 800,00",
      date: "5/10/2021",
      type: "positive",
    },
    {
      id: "111",
      title: "Café",
      category: { name: "Pagamento", icon: "coffee" },
      amount: "R$ 3.000,00",
      date: "12/10/2021",
      type: "negative",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://media-exp1.licdn.com/dms/image/C4D03AQG1hH8rQkO1zw/profile-displayphoto-shrink_800_800/0/1619218635303?e=1639008000&v=beta&t=tNa3R3tmqUazitsX_L_9uyqh8xJupxhxoIYT_la_NvY",
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Erika</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entrada"
          amount=" 17.400,00"
          lastTransaction="Última entrada desde o dia 12 de outubro"
        />
        <HighlightCard
          type="down"
          title="Saída"
          amount=" 12.400,00"
          lastTransaction="Última entrada desde o dia 11 de outubro"
        />
        <HighlightCard
          type="total"
          title="Entrada"
          amount=" 9.400,00"
          lastTransaction="Última entrada desde o dia 10 de sembro"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
