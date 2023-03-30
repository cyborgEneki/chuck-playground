import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const JokeDisplay = () => {
  const { state } = useContext(AppContext);

  return (
    <div>
      <Link to="/">Go Home</Link>
      <h1>Joke</h1>
      {/* state.joke */}
    </div>
  )
}

export default JokeDisplay;