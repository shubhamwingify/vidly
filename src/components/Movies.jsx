import React, {Component} from "react";
import {getMovies, deleteMovie} from "../services/fakeMovieService";


export default class Movies extends Component {
    state = {
        movies: getMovies()
    };

    handleDeleteMovie = (id) => {
        const movies = this.state.movies.filter(movie => movie._id !== id);
        this.setState({movies});
    }

    render() {
        if (!this.state.movies.length) {
            return <p>No movies in database</p>;
        }

        return (
            <React.Fragment>
                <p>Showing {this.state.movies.length} movies</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.movies.map((movie) => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <button onClick={() => this.handleDeleteMovie(movie._id)}
                                        className="btn btn-danger btn-sm">Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
