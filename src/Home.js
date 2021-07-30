import { useEffect, useState } from "react";

function Home() {
  const [currentJoke, setCurrentJoke] = useState({body:{setup:"", punchline:""}})

  const fetchJoke = async (e) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    try{
        const res = await fetch("https://dad-jokes.p.rapidapi.com/random/joke/png", {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "dad-jokes.p.rapidapi.com"
          }
        })
        const data = await res.json()
        setCurrentJoke(data)
    } catch (err){
        console.error(err)
    }
  }

  useEffect(() => {
    fetchJoke();
  }, [])
   
  return (
    <div className="App">
      <h1 className="randomJokeHeader">Random Joke</h1> 
      <div className="jokeBox">
        <p className="setup"><b>Setup: </b> {currentJoke.body.setup}</p>
        <p className="punchline"><b>Punchline:</b> {currentJoke.body.punchline}</p>
        <button onClick={fetchJoke}>New Joke</button>
      </div>
    </div>
  );
}

export default Home;
