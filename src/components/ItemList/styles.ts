import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */
  padding-bottom: 0.5rem;
`;

export const ContentLeft = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid blue; */
`;

export const Image = styled.img`
  width: 20rem;
  height: 15rem;
  object-fit: cover;
  /* border-radius: 4px 4px 0 0; */
  /* border: 1px solid yellow; */
`;

export const TitleItem = styled.h3`
  margin-left: 1rem;
`;

export const ContentRight = styled.div`
  display: flex;
  /* border: 1px solid red; */
`;

export const WrapperItemRightQuantity = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  margin-top: 1rem;
  margin-right: 4rem;
  /* border: 1px solid purple; */
`;

export const WrapperQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const WrapperRemove = styled.div`
  display: flex;
  justify-content: center;
`;

export const TitleQuantity = styled.h4`
`;

export const TitleRemove = styled.h4`
  color: red;
  margin-left: 0.5rem;
`;

export const WrapperItemRight = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  margin-top: 1rem;
  margin-right: 1rem;
  /* border: 1px solid purple; */
`;

export const TitlePrice = styled.h3`
  color: #C3C3C3;
  margin-bottom: 0.5rem;
`;

export const Price = styled.h3`
  color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
`;