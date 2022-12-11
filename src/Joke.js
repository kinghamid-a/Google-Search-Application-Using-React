import React , {useEffect, useState} from "react";

function Joke(){

    const [joke, setJoke] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3005/jokes/random`)
        // fetch('https://official-joke-api.appsopt.com/jokes/random')
        .then(response => response.json())
        .then(json => {
            console.log('joke json', json)
            setJoke(json);
        });
         
 
        console.log('fetching date');
    }, []);

    const {setup, punchline} = joke;
    //const setup = joke.setup;
    //const punchline = joke.punchline;

    return (
        <div>
            <h3>Joke of the Day</h3>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
        </div>
    )
}

export default Joke;