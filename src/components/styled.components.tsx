import styled from "styled-components";
import { device } from "./device";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const FeatureContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding: 2rem;
  flex-wrap: wrap;
`;

export const Gallery = styled.div`
  padding: 20px;
  @media ${device.laptopL} {
    width: 60%;
    margin: 0 auto;
    max-width: 800px;
  }
`;

export const HeroBanner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  h1,
  h2,
  h3,
  h4 {
    text-align: center;
  }
  button,
  a {
    align-self: center;
    width: 300px;
  }
`;
