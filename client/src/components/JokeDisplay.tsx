import type { Joke } from '../types';

type Props = {
  joke: Joke
}

const JokeDisplay = ({ joke }: Props) => {
  return (
    <div>Joke</div>
  )
}

export default JokeDisplay