import { useEffect, useState } from "react";
// import APIKEY from ""

function Home() {
  const [currentJoke, setCurrentJoke] = useState({})
  const [sucessfulFetchOfJoke, setSuccessfulFetchOfJoke] = useState(false)

  const fetchJoke = async (e) => {
    // e.preventDefault();

    try{
        const res = await fetch("https://dad-jokes.p.rapidapi.com/random/joke/png", {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "1da7fd69e4msh5badf0a4f62ebc6p191fd7jsna0970d880515",
            "x-rapidapi-host": "dad-jokes.p.rapidapi.com"
          }
        })
        // .then(response => {
        //   console.log(response);
        // })
        const data = await res.json()
        console.log(data.body.setup)
        setCurrentJoke(data)
    } catch (err){
        console.error(err)
    }
  }

  useEffect(() => {
    fetchJoke();
  }, [])
  useEffect(() => {
    setSuccessfulFetchOfJoke(true)
  }, [currentJoke])
   

  return (
    <div className="App">
      {!sucessfulFetchOfJoke
        ? 
        <h1>Loading</h1>
        :
        <div>
          <button onClick={fetchJoke}>New Joke</button>
          <h1>Joke</h1> 
          <p><b>Setup: </b> {currentJoke.body.setup}</p>
          <p><b>Punchlike:</b> {currentJoke.body.punchline}</p>
        </div>
      }

    </div>
  );
}

export default Home;
