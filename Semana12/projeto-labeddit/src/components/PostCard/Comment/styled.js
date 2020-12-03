import styled from "styled-components"

export const CommentContainer = styled.div`    
  display: flex;
  flex-direction: column;
  width:28vw;
  border-radius: 5px;
  background-color:  #d1d2f9; 
  margin: 10px auto;
  height: auto;
  &:hover {
  border: 2px #c9cad9 solid;
  }
`

export const CommentHeader = styled.div`  
  height: 30px;
  display: flex;
  padding-left: 5px;
`       

export const PostFooter = styled.div `
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: start;
`

export const CommentImage = styled.img`  
  cursor: pointer;
  width: 25px;
  height:25px;
  margin-left: 18vw;
` 

export const ArrowImage = styled.img`
cursor: pointer;
width: 25px;
height:25px;
`