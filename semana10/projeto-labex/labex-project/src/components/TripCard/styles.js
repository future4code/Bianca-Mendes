import styled from "styled-components"

export const CardContainer = styled.div`
  width: 200px;
  height: 300px;
  border: 2px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 12px;
  &:hover {
    border: 2px solid;
  }
`

export const CardImage = styled.div`
  /* width: 200px;
  height: 250px; */
`

export const CardText = styled.p`
  margin: 8px;
  text-align: center;
`;