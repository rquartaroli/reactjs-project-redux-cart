import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IState } from "../../store";
import { ICartItem } from "../../store/modules/cart/types";

import {
  Container,
  WrapperContent,
  Content,
  TitleLogo,
  Nav,
  Ul,
  WrapperQuantityItensCart,
  QuantityItensCart,
} from './styles';

export function Header() {
  const itensInCart = useSelector<IState, ICartItem[]>(state => state.cart.items);

  let quantityItensInCart = 0;

  itensInCart.map(item =>
    quantityItensInCart += item.quantity
  );

  return (
    <Container>
      <WrapperContent>
        <Content>
          <Link to="/" className="enter-dashboard">
            <TitleLogo>E-Store</TitleLogo>
          </Link>
        </Content>
        <Nav>
          <Ul>
            <Link to="/cart" className="enter-cart">
              <FaShoppingCart
                style={{ fontSize: '1.8rem' }}
              />
            </Link>
            {quantityItensInCart > 0 &&
              <WrapperQuantityItensCart>
                <QuantityItensCart>{quantityItensInCart}</QuantityItensCart>
              </WrapperQuantityItensCart>
            }
          </Ul>
        </Nav>
      </WrapperContent>
    </Container>
  );
}