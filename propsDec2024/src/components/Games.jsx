import React, {useState} from 'react';


function Games(props) {

    const [sales, setSales] = useState(props.gamesales);
    const increaseSales = () => {
        setSales(sales + 1);
    }

    return (
        <div>
            <h1>Game Title: {props.title}</h1>
            <h2>Company: {props.company}</h2>
            <h2>Platform: {props.platform}</h2>
            <h3>Game Sales: {sales}</h3>
            <button onClick={increaseSales}></button>
        </div>
    );
}

export default Games;

//***************** THIS IS THE SAME AS ABOVE, ARROW FUNCTION BINDS this TO THE CONTEXT DEFINED **************** */

// const Games = () => {
//     return (
//         <div>
//             <h1>Game Title: Jet Force Gemini</h1>
//             <h2>Company: RareWare</h2>
//             <h2>Platform: Nintendo 64</h2>
//         </div>
//     );
// }
