import styled from "styled-components";

export const H1 = styled.h1<{ $whiteFont?: boolean; $oldFont?: boolean }>`
  font-family: ${({ theme, $oldFont }) => ($oldFont ? theme.typography.fonts.old : theme.typography.fonts.main)};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  font-size: ${({ theme }) => theme.typography.fontSizes.heading};
  font-style: normal;
  color: ${({ theme, $whiteFont }) => ($whiteFont ? theme.palette.secondary : theme.palette.primary)};
`;

export const H2 = styled.h2<{ $whiteFont?: boolean; $oldFont?: boolean }>`
  font-family: ${({ theme, $oldFont }) => ($oldFont ? theme.typography.fonts.old : theme.typography.fonts.main)};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  font-size: ${({ theme }) => theme.typography.fontSizes.heading2};
  font-style: normal;
  color: ${({ theme, $whiteFont }) => ($whiteFont ? theme.palette.secondary : theme.palette.primary)};
`;

export const P = styled.p<{ $whiteFont?: boolean; $oldFont?: boolean; $bolded?: boolean; $italic?: boolean }>`
  font-family: ${({ theme, $oldFont }) => ($oldFont ? theme.typography.fonts.old : theme.typography.fonts.main)};
  font-weight: ${({ theme, $bolded }) =>
    $bolded ? theme.typography.fontWeights.bold : theme.typography.fontWeights.normal};
  font-size: ${({ theme }) => theme.typography.fontSizes.body};
  font-style: ${({ $italic }) => ($italic ? "italic" : "normal")};
  color: ${({ theme, $whiteFont }) => ($whiteFont ? theme.palette.secondary : theme.palette.primary)};
`;

export const CircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    background: rgb(0, 0, 0);
  }
`;

export const BoxButton = styled.button<{ $bolded?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 5%;
  cursor: pointer;

  font-family: ${({ theme }) => theme.typography.fonts.main};
  font-weight: ${({ theme, $bolded }) =>
    $bolded ? theme.typography.fontWeights.bold : theme.typography.fontWeights.normal};
  font-size: ${({ theme }) => theme.typography.fontSizes.smaller};
  font-style: normal;

  &:hover {
    background: rgb(0, 0, 0);
  }
`;

export const BoxButtonLink = styled.a<{ $bolded?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 5%;
  cursor: pointer;

  font-family: ${({ theme }) => theme.typography.fonts.main};
  font-weight: ${({ theme, $bolded }) =>
    $bolded ? theme.typography.fontWeights.bold : theme.typography.fontWeights.normal};
  font-size: ${({ theme }) => theme.typography.fontSizes.smaller};
  font-style: normal;
  text-decoration: none;

  &:hover {
    background: rgb(0, 0, 0);
  }
`;

export const HyperLink = styled.a`
  color: #70a9ff;

  &:hover {
    color: #4678c4;
  }
`;
