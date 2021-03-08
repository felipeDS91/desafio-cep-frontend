import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;

  width: 100%;
  max-width: 430px;

  align-items: center;
  margin: 0 auto;

  form {
    margin: 30px 0;
    width: 350px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 27px;
    }

    a {
      margin-top: 12px;
      color: #444;
      font-weight: bold;
      font-size: 14px;
    }
  }
`;

export const AddressCard = styled.div`
  width: 100%;
  margin-top: 24px;
  padding: 18px;
  background: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 10px;
  cursor: pointer;

  &:hover {
    background: ${darken(0.1, '#fff')};
  }
`;

export const AddressItem = styled.div`
  font-weight: bold;
  margin-right: 4px;
`;

export const Row = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
