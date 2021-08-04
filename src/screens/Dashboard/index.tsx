import React from 'react';
import { SafeAreaView } from 'react-native';

import HighlightCard from '../../components/HighlightCard';

import {
  Container,
  Header,
  UserInfo,
  UserImage,
  UserName,
  UserNameBold,
  UserWrapper,
  PowerIcon,
  HighlightCards,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserImage source={{ uri: 'http://github.com/adilier.png' }} />
            <UserName>
              Olá, {'\n'}
              <UserNameBold>Adler</UserNameBold>
            </UserName>
          </UserInfo>
          <PowerIcon />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="in"
        />
        <HighlightCard
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
          type="out"
        />
        <HighlightCard
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
          type="total"
        />
      </HighlightCards>
    </Container>
  );
};

export default Dashboard;
