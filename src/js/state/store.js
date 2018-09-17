import Vue from 'vue';
import Vuex from 'vuex';
import {
    media
} from '../data/data';

Vue.use(Vuex);

const genreReducer = (acc, movie) => {
    movie.genre.forEach((genre) => {
        if (acc.indexOf(genre) === -1) {
            acc.push(genre);
        }
    });
    return acc;
};

const initialType = null;
const initialGenre = [];
const initialYear = [];

const store = new Vuex.Store({
    state: {
        media,
        type: initialType,
        genre: initialGenre,
        year: initialYear,
    },
    getters: {
        movies: state => {
            return state.media.filter((item) => {
                return item.type === 'movie'
            });
        },
        alphabeticalMedia: state => {
        	return state.media.slice().sort((a, b) => {
        		return a.title.toLowerCase() >= b.title.toLowerCase();
        	});
        },
        filteredMedia: (state, getters) => {
            return getters.alphabeticalMedia
                // Filter by type
                .filter((item) => {
                	// Early return default value
                    if (state.type === null) return true;
                    return state.type === item.type;
                })
                // Filter by genre selected
                .filter((item) => {
                	// Early return for default value
                	if (state.genre.length === 0) return true;
                	return item.genre.some((genre) => {
                		return state.genre.indexOf(genre) !== -1;
                	});
                })
                // Filter by year
                .filter((item) => {
                	if (state.year.length === 0) return true;
                	return state.year.indexOf(item.year) !== -1
                })
        },
        filteredGenres: (state, getters) => {
        	return getters.filteredMedia.reduce(genreReducer, []);
        },
        genres: state => {
            return state.media.reduce(genreReducer, []);
        },
        years: state => {
        	return state.media
	        	.map((item) => {
	        		return item.year;
	        	})
	        	.slice()
	        	.sort()
	        	// Uniques please
	        	.filter((year, index, yearsArray) => {
	        		return yearsArray.indexOf(year) === index;
	        	});
        },
    },
    mutations: {
        updateType(state, payload) {
            state.type = payload;
        },
        updateGenre(state, payload) {
        	state.genre = payload;
        },
        updateYear(state, payload) {
        	state.year = payload;
        },
        clearFilters(state) {
        	state.type = initialType;
        	state.genre = initialGenre;
        	state.year = initialYear;
        },
    },
})

export default store;