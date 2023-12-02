import styled from "styled-components";
import { FlexBox as FlexBoxGeneral } from "../generalComponents";

export const FlexBox = styled(FlexBoxGeneral)`
  padding: 0.2rem;
  background: black;
  position: absolute;
  top: 10%;
  right: 3%;
`;

export const UlError = styled.ul`
  list-style: none;
  margin: 0 auto;
  text-align: center;
  padding-top: 2rem;

  li{
    color: ${({ theme }) => theme.colors.third};
    font-size: 2rem;
  }
`;