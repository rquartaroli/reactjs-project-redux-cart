import { FaShoppingCart } from "react-icons/fa";

import {
  Container,
  WrapperContent,
  Content,
  Nav,
  Ul,
  Li,
} from './styles';

export function Header() {
  return (
    <Container>
      <WrapperContent>
        <Content>
          <h1>Loja e-commerce</h1>
        </Content>
        <Nav>
          <Ul>
            <FaShoppingCart
              style={{ fontSize: '2rem' }}
            />
          </Ul>
        </Nav>
      </WrapperContent>
    </Container>
  );
}