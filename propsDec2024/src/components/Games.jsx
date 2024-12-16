import React from 'react';

function Games(props) {
    console.log(props);
    return (
        <div>
            <h1>Game Title: Jet Force Gemini</h1>
            <h2>Company: RareWare</h2>
            <h2>Platform: Nintendo 64</h2>
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
