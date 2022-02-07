import { Header } from '../../components/Header';
import { ItemList } from '../../components/ItemList';
import {
  Container,
  Content,
} from './styles';

export function Cart() {
  return (
    <Container>
      <Header />
      
      <Content>
        <ItemList />
      </Content>
    </Container>
  );
}