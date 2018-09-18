<template>
	<div id="filter-bar" class="filter-bar">
		<div>
			<div>
				<div class="filter-bar__row  row">
					<FilterDropdown 
						class="filter-bar__item  float--left"
						button-text="Genre" 
						:options="genreOptions" 
						@update-value="updateGenreValue" 
					/>

					<FilterDropdown 
						class="filter-bar__item  float--left"
						button-text="Year" 
						:options="yearOptions" 
						@update-value="updateYearValue" 
					/>
 
					<SearchInput
						class="float--right"
					/>
				</div>
				<div class="filter-bar__row  row">
					<div class="filter-bar__radio  float--left">
						<input type="radio" name="type" value="movie" v-model="type">
						<label>Movies</label>
					</div>
					<div class="filter-bar__radio  float--left">
						<input type="radio" name="type" value="book" v-model="type">
						<label>Books</label>
					</div>
					<div class="float--right">
						<a 
							href="#" 
							class="button button--text"
							@click.prevent="clearFilters"
						>Clear filters</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import store from '../state/store';
import FilterDropdown from './FilterDropdown';
import SearchInput from './SearchInput';

export default {
	store,

	components: {
		FilterDropdown,
		SearchInput,
	},

	computed: {
		genre() {
			return this.$store.state.genre;
		},
		genres() {
			return this.$store.getters.genres;
		},
		genreOptions() {
			return this.genres.map((genre) => {
				return {
					value: genre, 
					text: genre,
					isSelected: this.genre.indexOf(genre) >= 0,
				};
			});
		},
		type: {
			set(type) {
				this.$store.commit('updateType', type);
			}, 
			get() {
				return this.$store.state.type;
			},
		},
		years() {
			return this.$store.getters.years;
		},
		year: {
			set(year) {
				this.$store.commit('updateYear', year);
			}, 
			get() {
				return this.$store.state.year;
			}
		}, 
		yearOptions() {
			return this.years.map((year) => {
				return {
					value: year,
					text: year,
					isSelected: this.year.indexOf(year) >= 0
				};
			});
		}
	},

	methods: {
		clearFilters() {
			this.$store.commit('clearFilters');
		}, 

		updateGenreValue(genre) {
			this.$store.commit('updateGenre', genre);
		}, 

		updateYearValue(year) {
			this.$store.commit('updateYear', year);
		},
	}
};
</script>