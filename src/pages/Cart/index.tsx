import { useSelector } from 'react-redux';
import { Header } from '../../components/Header';
import { ItemList } from '../../components/ItemList';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';
import {
  Container,
  WrapperWithoutContentCart,
  TitleWithoutContent,
  WrapperContent,
  Content,
  ContainerTotalItens,
  TitleOrder,
  WrapperSpaceBetween,
  TitleQuantityItens,
  TitleSumPrice,
  Hr,
  TitleTotal,
  TitleResultTotal,
} from './styles';

export function Cart() {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);

  let quantityOrder = 0;
  let totalOrder = 0.00;

  return (
    <Container>
      <Header />
      {cart.length > 0
        ?
        <WrapperContent>

          <Content>
            {cart.map(item => (
              quantityOrder += item.quantity,
              totalOrder += (item.product.price * item.quantity),
              <ItemList key={item.product.id} itens={item} />
            ))}
          </Content>

          <ContainerTotalItens>
            <TitleOrder>Resumo do Pedido</TitleOrder>

            <WrapperSpaceBetween>
              <TitleQuantityItens>{quantityOrder} produtos</TitleQuantityItens>
              <TitleSumPrice>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(totalOrder)
                }
              </TitleSumPrice>
            </WrapperSpaceBetween>

            <Hr />

            <WrapperSpaceBetween>
              <TitleTotal>Total</TitleTotal>
              <TitleResultTotal>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(totalOrder)
                }
              </TitleResultTotal>
            </WrapperSpaceBetween>

          </ContainerTotalItens>
        </WrapperContent>
        :
        <WrapperWithoutContentCart>
          <TitleWithoutContent>Não contém nenhum item no carrinho :(</TitleWithoutContent>
        </WrapperWithoutContentCart>
      }
    </Container>
  );
}