import {
  Container,
  Image,
  Box,
  WrapperTitles,
  TitleItem,
  TitlePrice,
  ButtonBuy,
} from './styles';

export function CardItem() {
  return (
    <Container>
      <Image src="https://i.ibb.co/MZB2PtD/tifa.jpg" />
        <Box>
        <WrapperTitles>
          <TitleItem>Tifa FFVII</TitleItem>
          <TitlePrice>R$ 200,00</TitlePrice>
        </WrapperTitles>
        </Box>
      <ButtonBuy>Comprar</ButtonBuy>
    </Container>
  );
}