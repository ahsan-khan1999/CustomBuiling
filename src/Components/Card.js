import React from 'react'

function Card(props) {
    return ( <
        div className = "container" >
        <
        div className = "title" > { props.title }

        <
        /div> <
        div className = "value" > { props.value }

        <
        /div> <
        div className = "text" > { props.description }

        <
        /div>    

        <
        /div>
    )
}
export default Card;