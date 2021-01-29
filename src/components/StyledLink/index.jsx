import styled from "styled-components"

const StyledLink = styled.link`
  font-weight: 500;
  border: 0;
  border-bottom: 0.125rem solid #fff;
  color: white;
  margin: auto;
  text-decoration: none;
  &:hover {
    border-image: linear-gradient(to right, #663399, #eb5424);
    border-image-slice: 1;
  }
`

export default StyledLink
