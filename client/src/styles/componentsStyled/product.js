import styled from "styled-components";
import {
  Article as ArticleGeneral,
  P as PGeneral,
} from "../generalComponents.js";

export const Article = styled(ArticleGeneral)`
  height: 30rem;
  color: ${({ theme }) => theme.colors.third};
  background: ${({ theme }) => theme.colors.first};
  overflow: hidden;
  border-radius: 1rem;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Li = styled.li`
  padding: .1rem;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  background:linear-gradient(to bottom,
    ${({ theme }) => theme.colors.second},
    ${({ theme }) => theme.colors.five},
    ${({ theme }) => theme.colors.five});
  box-shadow: 0 0 1rem ${({ theme }) => theme.colors.first};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover .button-container {
    left: 0;
  }

  &:hover img {
    transform: scale(1.1, 1.1);
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.5rem;
  text-align: center;
  transition: 0.4s linear;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5rem;
`;

export const P = styled(PGeneral)`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
