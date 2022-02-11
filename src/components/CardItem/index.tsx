import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { addProductToCartRequest } from '../../store/modules/cart/actions';

import { IProduct } from '../../store/modules/cart/types';
import {
  Container,
  Image,
  Box,
  WrapperTitles,
  TitleItem,
  TitlePrice,
  ButtonBuy,
  ButtonUnavailable,
} from './styles';

interface CardItemProps {
  product: IProduct;
}

export function CardItem({ product }: CardItemProps) {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch]);

  return (
    <Container>
      <Image src={product.image} />
      <Box>
        <WrapperTitles>
          {product.title.length > 24
            ?
            <TitleItem title={product.title}>{product.title.substring(0, 21) + '...'}</TitleItem>
            :
            <TitleItem>{product.title}</TitleItem>
          }

          <TitlePrice>R$ {product.price}</TitlePrice>
        </WrapperTitles>
      </Box>

      {hasFailedStockCheck
        ?
        <ButtonUnavailable>
          Indisponível
        </ButtonUnavailable>
        :
        <ButtonBuy
          type='button'
          onClick={handleAddProductToCart}
        >
          Comprar
        </ButtonBuy>
      }
    </Container>
  );
}