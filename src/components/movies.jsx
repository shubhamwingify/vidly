import React, {Component} from "react";
import Like from "./common/like";
import {getMovies} from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import {paginator} from "../utils/paginator";
import {Link} from "react-router-dom";

export default class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    };

    handleDeleteMovie = (id) => {
        const movies = this.state.movies.filter(movie => movie._id !== id);
        this.setState({movies});
    }

    likeMovie = (id) => {
        //  const movieIndex = this.state.movies.findIndex(movie => movie._id === id);
        // this.state.movies[movieIndex].liked = !this.state.movies[movieIndex].liked;
        //  this.setState({movies: this.state.movies});
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page})
    }

    render() {
        const count = this.state.movies.length;
        if (!count) {
            return <p>No movies in database</p>;
        }
        const movies = paginator(this.state.movies, this.state.pageSize, this.state.currentPage);

        return (
            <React.Fragment>
                <Link to="/movies/new" className="btn btn-primary">New Movie</Link>
                <h1>Movies</h1>
                <p>Showing {count} movies</p>
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
                    {movies.map((movie) => (
                        <tr key={movie._id}>
                            <td><Link to={`/movies/${movie._id}`}>{movie.title}</Link></td>
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
                <Pagination itemsCount={count} pageSize={this.state.pageSize} currentPage={this.state.currentPage}
                            onPageChange={this.handlePageChange}/>
            </React.Fragment>
        );
    }
}
