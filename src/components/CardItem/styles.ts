import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 1rem auto;
  /* background-color: #010409; */
  /* border: 1px solid red; */
`;

export const Image = styled.img`
  width: 20rem;
  height: 15rem;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
  /* border: 1px solid yellow; */
`;

export const Box = styled.div`
  /* width: 100%; */
  /* height: 100%; */
  background-color: #010409;
  padding-Bottom: 0.8rem;
`;

export const WrapperTitles = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0.4rem;
  font-size: 1rem;
`;

export const TitleItem = styled.text`
`;

export const TitlePrice = styled.text`
`;

export const ButtonBuy = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 1.2rem;
  font-weight: 600;
`;