import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
`;

export const BoxInput = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
`;