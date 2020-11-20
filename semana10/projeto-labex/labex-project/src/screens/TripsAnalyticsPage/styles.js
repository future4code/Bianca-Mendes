import styled from "styled-components"

export const Title = styled.h2`
 color: white;
 font-weight: 400;
 font-size: 40px;
 justify-content: center;
 justify-self: center;
 align-items: center;
 padding: 10px;
 `      

export const TripName = styled.h2`  
 display: flex; 
 color: white;
 font-weight: 400;
 font-size: 40px;
 align-items: center;
 padding-left: 10px;
 `
 
export const TripDetails = styled.p`
 color: white;
 margin-bottom: 10px;
 font-weight:400;
`

export const ContainerDetails = styled.div`
 height: 150px;
 width:350px;
 background-color: #2a9d8f;
 padding: 20px;
 border-radius: 4px;
 margin:20px;
`    
export const DetailsContainer = styled.div`
 
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows:1fr;
`   

export const CandidateDetails = styled.div`
 grid-column-start:2;
 height: 150px;
 width:450px;
 background-color: #2a9d8f;
 padding: 20px;
 border-radius: 4px;
 margin:20px;
`    
export const CandidateDetail = styled.p`
 color: white;
 `     

export const ApproveButton = styled.button`  
 margin-top: 10px;
 margin-right: 5px;
 outline: none;
 cursor: pointer;
 background: transparent;
 font-size: 15px;
 border-radius: 40px;
 color: white;
 border: 2px solid white;
 padding: 0.10em 0.75em;
 transition: 0.5s all ease-out;
 &:hover {
   background-color: #2a9d8f;
   color: white;
}
`     

export const RejectButton = styled.button`  
 margin-top: 10px;
 margin-left: 5px;
 outline: none;
 cursor: pointer;
 background: transparent;
 font-size: 15px;
 border-radius: 40px;
 color: white;
 border: 2px solid white;
 padding: 0.10em 0.75em;
 transition: 0.5s all ease-out;
 &:hover {
   background-color: #2a9d8f;
   color: white;
} 
`       

export const BackButton = styled.button`
 margin-left: 10px;
 cursor: pointer;
 outline: none;
 background: transparent;
 font-size: 15px;
 border-radius: 40px;
 color: white;
 border: 2px solid white;
 padding: 0.10em 0.75em;
 width: 100px;
 transition: 0.5s all ease-out;
 &:hover {
   background-color: #2a9d8f;
   color: white;
} 
`    
export const ApprovedContainer = styled.div` 
 height: auto;
 width:350px;
 background-color: #2a9d8f;
 padding: 20px;
 border-radius: 4px;
 margin:20px;
`  

export const TitleApproved = styled.h4`
color: white;
font-weight:400;
font-size: 20px;
margin-bottom:5px;
`     

export const NameCandidate = styled.p`
color: white;
`    