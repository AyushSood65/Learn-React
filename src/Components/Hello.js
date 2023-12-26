import React, { createElement } from "react";

const Hello = () => {

    //with JSX
    // return (
    //     <div>
    //         <h1>Hello Ayush!!!</h1>
    //     </div>
    // )

    //Without JSX

    //createElement 
    // 1. Tag, 2. Attribute (id, class and many more), 3. Children
    return (
        React.createElement('div', {id: 'hello', className: 'dummy'}, React.createElement('h1', null,'Ayush From JSX'))
    )
}

export default Hello