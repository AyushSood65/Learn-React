import React  from "react"

// function Greet() {
//     return <h1>Hello Ayush</h1>
// }

const Greet= (props) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
            test
        </div>
    )
}

export default Greet;