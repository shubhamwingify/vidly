import './App.css';
import Movies from "./components/movies";
import Navbar from "./components/navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

function App() {
    return (
        <div>
            <Navbar/>
            <main className="container mt-3">
                {/*Match first route from inside routes */}
                <Switch>
                    <Route path="/register" component={RegisterForm}/>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/movies/:id" component={MovieForm}/>
                    <Route path="/movies" component={Movies}/>
                    <Route path="/customers" component={Customers}/>
                    <Route path="/rentals" component={Rentals}/>
                    <Route path="/not-found" component={NotFound}/>
                    <Redirect from="/" exact to="/movies"/>
                    <Redirect to="/not-found"/>
                </Switch>
            </main>
        </div>
    );
}

export default App;
