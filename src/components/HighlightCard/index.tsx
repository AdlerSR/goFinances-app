import React from 'react';

import {
  Container,
  Amount,
  Footer,
  Header,
  LastTransaction,
  Title,
  Icon,
} from './styles';

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'out' | 'in' | 'total';
}

const icon = {
  out: 'arrow-down-circle',
  in: 'arrow-up-circle',
  total: 'dollar-sign',
};

const HighlightCard: React.FC<Props> = ({
  title,
  amount,
  lastTransaction,
  type,
}) => {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
};

export default HighlightCard;
