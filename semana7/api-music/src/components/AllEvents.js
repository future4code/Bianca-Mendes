import React from "react"
import axios from "axios"


const apiUrl = "https://api.spacexdata.com/v3/history"

export default class AllEvents extends React.Component {
    state = {
        histEvents: [], 
        eventInfo: ""
        
    }

    componentDidMount () {
        this.fetchEvent()
    }


    fetchEvent = () => {
        axios.get(apiUrl)
        .then((response) => {
            //console.log("teste", response)
            this.setState({histEvents: response.data})
        })
    }

    onChangeSelect = (event) => {
        //console.log("selecionou", event.target.value)
        axios.get(`https://api.spacexdata.com/v3/history/{${event.target.value}}`)
        .then((response) => {
            this.setState({
                eventInfo: response.details,
                eventInfo: response.links.article,
                eventInfo: response.links.wikipedia
            })
           console.log(response,"teste")
        })
    }

    render ()  {
        //console.log(this.state.histEvents)
        const eventList = this.state.histEvents.map((occurrence) => {
            return <option key={occurrence.id}>{occurrence.title}</option>
        })

        return (
            <div>
                <h2>Escolha um evento histórico</h2>
                <select onChange={this.onChangeSelect}>
                    {eventList}
                    {this.state.eventInfo}
                </select>
        
            </div>
        )
    }
}