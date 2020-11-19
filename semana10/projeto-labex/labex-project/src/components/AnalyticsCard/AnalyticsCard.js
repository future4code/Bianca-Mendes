import React from "react"

const AnalyticsCard = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.candidates}</p>
        </div>
    )
}

export default AnalyticsCard