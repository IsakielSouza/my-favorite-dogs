import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
  padding-bottom: 24px;
`;

export const ContainerLogo = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 50px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${ theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme })=> theme.FONT_SIZE.XL}px;
    color: ${ theme.COLORS.GRAY_300};
  `}
`;

export const Logo = styled.Image`
  width: 80px;
  height: 100px;
`;

export const WrapperInput = styled.View`
  width: 100%;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
`;

export const WrapperFooter = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 20px;
`;


export const TitleAlertForm = styled.Text`
  ${({ theme }) => css`
    font-family: ${ theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme })=> theme.FONT_SIZE.SM}px;
    color: ${ theme.COLORS.RED};
    margin-bottom: 10px;
  `}
`;