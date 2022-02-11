import { useCallback } from "react";
import { MdAddCircle, MdRemoveCircle, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store";
import { addProductToCartRequest, removeProductFromCart, subtractProductFromCart } from "../../store/modules/cart/actions";
import { ICartItem } from "../../store/modules/cart/types";
import theme from "../../styles/theme";

import {
  WrapperContainer,
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
  Hr,
} from './styles';

interface ItemListProps {
  itens: ICartItem;
}

export function ItemList({ itens }: ItemListProps) {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(itens.product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(itens.product))
  }, [dispatch]);

  const handleSubtractProductFromCart = useCallback(() => {
    dispatch(subtractProductFromCart(itens.product))
  }, [dispatch]);

  const handleRemoveProductFromCart = useCallback(() => {
    dispatch(removeProductFromCart(itens.product))
  }, [dispatch]);

  return (
    <WrapperContainer>
      <Container>
        <ContentLeft>
          <Image src={itens.product.image} />
          <TitleItem>{itens.product.title}</TitleItem>
        </ContentLeft>

        <ContentRight>
          <WrapperItemRightQuantity>
            <TitlePrice>Quantidade</TitlePrice>
            <WrapperQuantity>
              {itens.quantity > 1
                ?
                <MdRemoveCircle
                  onClick={handleSubtractProductFromCart}
                  style={{ color: theme.COLORS.PRIMARY_COLOR, cursor: 'pointer' }}
                />
                :
                <MdRemoveCircle
                  style={{ color: theme.COLORS.TEXT }}
                />
              }
              <TitleQuantity>{itens.quantity}</TitleQuantity>
              {hasFailedStockCheck
                ?
                <MdAddCircle
                  title="No momento não existe mais desse item no estoque."
                  style={{ color: theme.COLORS.TEXT }}
                />
                :
                <MdAddCircle
                  onClick={handleAddProductToCart}
                  style={{ color: theme.COLORS.PRIMARY_COLOR, cursor: 'pointer' }}
                />
              }
            </WrapperQuantity>

            <WrapperRemove
              onClick={handleRemoveProductFromCart}
              style={{ color: theme.COLORS.WARNING, cursor: 'pointer' }}
            >
              <MdDelete />
              <TitleRemove>Remover</TitleRemove>
            </WrapperRemove>
          </WrapperItemRightQuantity>

          <WrapperItemRight>
            <TitlePrice>SubTotal:</TitlePrice>
            <Price>
              {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                }).format((itens.product.price * itens.quantity))
              } 
            </Price>
          </WrapperItemRight>
        </ContentRight>
      </Container>

      <Hr />

    </WrapperContainer>
  );
}