import React, { useState } from 'react'
import Chirp from './components/Chirp';

const App = () => {
    const [chirps, setChirps] = useState([]);

    const updateChirps = (e) => {
        e.preventDefault();
       let newChirp = {
            username: e.target[0].value,
            content: e.target[1].value
        };
        setChirps([...chirps, newChirp])
    }

    return (
        <div>
            <form action="" onSubmit={(e) => { updateChirps(e) }}>
                <input type="text" id="formUsername" placeholder='Username' />
                <input type="text" id="formContent" placeholder='Chirp' />
                <input type="submit" value="Submit" />
            </form>
            <br></br>
            {chirps.map((chirp) => {
                return (<Chirp username={chirp.username} content={chirp.content}></Chirp>)
            })}
        </div>
    )
}

export default App;