import styled from "styled-components"

const Title = styled.h1`
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize || "3rem"};
`

export default Title
