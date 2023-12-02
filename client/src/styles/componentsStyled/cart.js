import styled from "styled-components";
import {
  Picture as PictureGeneral,
  Section as SectionGeneral,
  Article as ArticeGeneral,
} from "../generalComponents";

export const Picture = styled(PictureGeneral)`
  width: 25rem;
  height: 15rem;
`;

export const Section = styled(SectionGeneral)`
  width: 35rem;
  position: fixed;
  top: 0;
  right: -100%;
  z-index: 1100;
  transition: .3s ease-out .1s;

  &.open-cart{
    right: 0;
  }

  &.expand-cart{
    width: 100%;

    article{
      flex-direction: row;
      justify-content: space-between;
      gap: 0;

      h3{
        font-size: 2rem;
      }

      p,i{
        font-size: 3rem;
      }

      .faPlus,
      .faMinus{
        font-size: 2rem;
      }
    }
  }

  &.close-cart{
    right: -100%;
  }
`;
export const ContainerCart = styled.div`
  width: 100%;
  height: 40rem;
  padding: 1rem;
  margin-bottom: 2rem;
  overflow: hidden scroll;
`;

export const Article = styled(ArticeGeneral)`
  border: .1rem solid ${({ theme }) => theme.colors.second};
  flex-direction: column;
  padding: 1rem;
  gap: .3rem;
`;