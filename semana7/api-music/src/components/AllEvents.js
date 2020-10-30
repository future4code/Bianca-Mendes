import React from "react"
import axios from "axios"
import styled from "styled-components"


/*
const Title = styled.h2`
  text-align: center;
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 30px;
` 
*/
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  //background-image: linear-gradient(to bottom, #462eb7, #3b33b2, #2f36ad, #2439a8, #193ba2, #1c3792, #1d3283, #1e2e74, #1f245a, #1b1b41, #15122b, #0b0516);
  //height: 100%;
`
const Selector = styled.select`
  margin: 20px;
  width: 20%;
`


const apiUrl = "https://api.spacexdata.com/v3/history"

export default class AllEvents extends React.Component {
    state = {
        histEvents: [], 
        eventDetail: "",
        eventArticle:"",
        aboutEvent: false,
        //happyyyyyyArray:[]
        
    }

    componentDidMount () {
        this.fetchEvent()
    }


    fetchEvent = () => {

        axios.get(apiUrl)
        .then((response) => {
            //const sadArray = response.data.map((hungry) => {return hungry.links.article})
            //console.log(sadArray)
            //this.setState({happyyyyyyArray: sadArray})
            //console.log("teste", response)
            this.setState({histEvents: response.data})
        })
    }

    onChangeSelect = (event) => {
        this.viewAbout()  
        
        //console.log("selecionou", event.target.value)
        axios.get(`https://api.spacexdata.com/v3/history/${event.target.value}`)
        .then((response) => {
            
           //console.log(response.data.links.article,"teste")

           this.setState({
           eventDetail:response.data.details,
           eventArticle: response.data.links.article
            })
        })
    }

    viewAbout = () => {
      
        this.setState({aboutEvent: true})
    }
    
    render ()  {
        //console.log(this.state.happyyyyyyArray)
        //console.log(this.state.histEvents)
        const eventList = this.state.histEvents.map((occurrence) => {
            return <option value={occurrence.id} key={occurrence.id}>{occurrence.title}</option>
        })

        const renderDetails = this.state.aboutEvent ? 
        <div>
            <h2>Detalhes:</h2>
                <p>{this.state.eventDetail}</p>
            <h2>Artigos:</h2>   
                <p>{this.state.eventArticle }</p>
        </div> : <></>


        return (
            
            <Wrapper>
                <h1>Escolha um evento histórico</h1>
                <Selector onChange={this.onChangeSelect}>
                   
                   {eventList}
                   
                </Selector>
                {renderDetails}
            </Wrapper>
        )
    }
}

//<div>
//<h2>Detalhes:</h2>
//    <p>{this.state.eventDetail}</p>
//<h2>Artigos:</h2>   
//    <p>{this.state.eventArticle }</p>
//</div>