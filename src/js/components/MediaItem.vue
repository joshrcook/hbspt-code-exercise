<template>
	<div class="media-item">
		<img class="media-item__poster" :src="item.poster" />
		<h3 class="media-item__title">{{ item.title }} ({{ item.year }})</h3>
		<p class="media-item__genre">Genres: {{ item.genre.join(', ') }}</p>
	</div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
	props: {
		item: VueTypes.shape({
			title: VueTypes.string.isRequired,
			year: VueTypes.string.isRequired,
			poster: VueTypes.string.isRequired,
			genre: VueTypes.array.isRequired,
			type: VueTypes.string,
	    }).isRequired,
	},
};
</script>