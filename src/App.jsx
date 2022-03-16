import styles from './App.module.css';
import { MoviesGrid } from './components/MoviesGrid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MovieDeatils } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';

export function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/movies/:movieId">
              <MovieDeatils/>
            </Route>
            <Route path="/">
              <LandingPage/>
            </Route>
            {/* <Route exact path="/">Home</Route>
            <Route path="/">404</Route> */}
          </Switch>
        </main>
      </div>
    </Router>
  )
}

