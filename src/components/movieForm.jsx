import React from "react";
import Joi from 'joi-browser';
import Form from "./common/form";
import {getGenres} from "../services/fakeGenreService";
import {getMovie} from "../services/fakeMovieService";

class MovieForm extends Form {
    state = {
        data: {
            title: '',
            genreId: '',
            numberInStock: '',
            dailyRentalRate: ''
        },
        genres: [],
        errors: {}
    }

    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label('Title'),
        genreId: Joi.number().required().label('Genre'),
        numberInStock: Joi.number().required().min(0).max(100).label('Number in Stock'),
        dailyRentalRate: Joi.number().required().min(0).max(100).label('Daily Rental Rate'),
    }


    componentDidMount() {
        const genres = getGenres();
        this.setState({genres});

        const movieId = this.props.match.params.id;
        if (movieId === 'new') {
            return;
        }

        const movie = getMovie(movieId);
        if (!movie) {
            this.props.history.push('/not-found');
        }

        this.setState({
            data: this.mapToViewModel(movie)
        })
    }

    mapToViewModel = (movie) => {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
    }

    doSubmit = () => {
        console.log('Register Form submitted', {
            email: this.state.data.email,
            password: this.state.data.password,
            name: this.state.data.name
        });
    }

    render() {
        const movieId = this.state.data._id;
        return (
            <div>
                <h1>{ movieId ? 'Edit' : 'Create' } Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}
                    {this.renderSelect('genreId', 'Genre', this.state.genres)}
                    {this.renderInput('numberInStock', 'Number of stock')}
                    {this.renderInput('dailyRentalRate', 'Daily Rental Rate')}
                    {this.renderSubmitButton(movieId ? 'Edit' : 'Create')}
                </form>
            </div>
        )
    }
}

export default MovieForm;
