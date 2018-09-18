<template>
	<section id="filterable-content" class="section section--filterable-content">
		<FilterBar />
		<MediaList :media="filteredMedia" />
	</section>
</template>

<script>
import store from '../state/store';
import FilterBar from './FilterBar';
import MediaList from './MediaList';

export default {
	store,

	components: {
		FilterBar,
		MediaList,
	},

	computed: {
		filteredMedia() {
			return this.$store.getters.filteredMedia;
		},
	},
};
</script>