import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  /* opacity: 0.8; */
`;

export const WrapperContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  /* border: 1px solid pink; */
`;

export const Content = styled.div`
  /* border: 1px solid green; */
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid blue; */
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

export const Li = styled.li`
  margin-right: 1rem;
  font-size: 1.2rem;

  :last-child {
    margin: 0;
  }
`;