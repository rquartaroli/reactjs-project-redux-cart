import { CardItem } from '../../components/CardItem';
import { Header } from '../../components/Header';
import {
  Container,
  Content,
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header />

      <Content>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </Content>
    </Container>
  );
}