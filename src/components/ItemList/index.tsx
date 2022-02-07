import { FaShoppingCart } from "react-icons/fa";
import theme from "../../styles/theme";

import {
  Container,
  ContentLeft,
  Image,
  TitleItem,
  ContentRight,
  WrapperItemRightQuantity,
  WrapperQuantity,
  WrapperRemove,
  TitleQuantity,
  TitleRemove,
  WrapperItemRight,
  TitlePrice,
  Price,
} from './styles';

export function ItemList() {
  return (
    <Container>
      <ContentLeft>
        <Image src="https://i.ibb.co/MZB2PtD/tifa.jpg" />
        <TitleItem>Tifa FFVII</TitleItem>
      </ContentLeft>

      <ContentRight>
        <WrapperItemRightQuantity>
          <TitlePrice>Quantidade</TitlePrice>
          <WrapperQuantity>
            <FaShoppingCart
              style={{ color: theme.COLORS.PRIMARY_COLOR }}
            />
            <TitleQuantity>1</TitleQuantity>
            <FaShoppingCart
              style={{ color: theme.COLORS.PRIMARY_COLOR }}
            />
          </WrapperQuantity>

          <WrapperRemove>
            <FaShoppingCart
              style={{ color: 'red' }}
            />
            <TitleRemove>Remover</TitleRemove>
          </WrapperRemove>
        </WrapperItemRightQuantity>

        <WrapperItemRight>
          <TitlePrice>SubTotal:</TitlePrice>
          <Price>R$ 154,90</Price>
        </WrapperItemRight>
      </ContentRight>
    </Container>
  );
}