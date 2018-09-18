<template>
	<div class="search-input">
		<input 
			type="text" 
			class="search-input__input-box" 
			v-model="searchInput"
		>
	</div>
</template>

<script>
import store from '../state/store';

export default {
	store, 

	computed: {
		searchInput: {
			get() {
				return this.$store.state.searchInput;
			}, 
			set(value) {
				this.$store.commit('updateSearchInput', value);
			},
		},
	},
};
</script>