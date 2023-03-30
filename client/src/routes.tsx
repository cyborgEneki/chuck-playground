import App from './App';
import ErrorPage from './components/ErrorPage';
import JokeDisplay from './components/JokeDisplay';

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/random-joke/:category",
    element: <JokeDisplay />
  }
];

export default routes;