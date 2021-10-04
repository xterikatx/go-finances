import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
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
} from "./styles";

export function Dashboard() {
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
      <HighlightCards
    
      >
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  );
}
