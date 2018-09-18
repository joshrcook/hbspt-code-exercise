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

const initialState = {
    type: null, 
    genre: [], 
    year: [], 
    searchInput: '',
};

const store = new Vuex.Store({
    state: Object.assign({}, {
        media,
    }, initialState),
    getters: {
        movies: state => {
            return state.media.filter((item) => {
                return item.type === 'movie'
            });
        },
        alphabeticalMedia: state => {
        	return state.media.sort((a, b) => {
                return a.title.localeCompare(b.title, 'en', {sensitivity: 'base'});
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
                // Filter by search input
                .filter((item) => {
                    if (state.searchInput.length === 0) return true;
                    return item.title.toLowerCase().includes(state.searchInput.toLowerCase());
                });
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
        updateSearchInput(state, payload) {
            state.searchInput = payload;
        },
        clearFilters(state) {
            Object.keys(initialState).forEach((key) => {
                state[key] = initialState[key];
            });
        },
    },
})

export default store;