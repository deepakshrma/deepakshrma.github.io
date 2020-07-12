import React from "react"
import styled from "styled-components";

export const P = styled.p`
  color: ${props => props.theme.color_primary};
`
export const SubTitle = styled.h2`
  color: ${props => props.theme.color_primary};
`
export const Section = styled.h4`
  color: ${props => props.theme.color_primary};
`
export const UL = styled.ul`
  color: ${props => props.theme.color_primary_darker};
  list-style: square;
`
const Typography = ({ variant }: { variant: string }) => {
  switch (variant) {
    default:
      return null;
  }
};
export default Typography;