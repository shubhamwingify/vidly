import React, {Component} from "react";
import Like from "./common/like";
import {getMovies} from "../services/fakeMovieService";

export default class Movies extends Component {
    state = {
        movies: getMovies()
    };

    handleDeleteMovie = (id) => {
        const movies = this.state.movies.filter(movie => movie._id !== id);
        this.setState({movies});
    }

    likeMovie = (id) => {
        const movieIndex = this.state.movies.findIndex(movie => movie._id === id);
        this.state.movies[movieIndex].liked = !this.state.movies[movieIndex].liked;
        this.setState({movies: this.state.movies});
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
                                <Like liked={movie.liked} onClick={() => {
                                    this.likeMovie(movie._id)
                                }}/>
                            </td>
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
