import styled from "styled-components";
import {
  Section as SectionGeneral,
  Span as SpanGeneral,
  H2,
} from "../generalComponents.js";

export const Section = styled(SectionGeneral)`
  display: flex;
  justify-content: center;
`;

export const SwiperContainer = styled.div`
  width: 50rem; 
`;

export const Article = styled.article`
  width: 60rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled(H2)`
  font-size: 3rem;
`;


export const PriceContainer = styled.div`
  padding: 2rem;
`;

export const Span = styled(SpanGeneral)`
  font-size: 2rem;
  font-weight: bolder;
  text-decoration: line-through red;
`;

