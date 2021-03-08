import styled from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  disabled?: boolean;
}

export const Container = styled.button<ContainerProps>`
  background: #0484ff;
  color: #fff;
  border-radius: 10px;
  border: 0;
  height: 40px;
  width: 100%;
  margin-top: 24px;
  font-weight: 500;
  transition: background-color 0.2s;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${shade(0.4, '#0484FF')};
  }

  svg {
    margin: 0 6px;
  }
`;
