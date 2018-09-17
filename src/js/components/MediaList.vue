<template>
	<div class="media-list">
		<div>
			<div>
				<ul class="media-list__items" v-if="media.length > 0">
					<li 
						class="media-list__item"
						v-for="mediaItem in media"
					>
						<MediaItem 
							:item="mediaItem" 
						/>
					</li>
				</ul>
				<p v-else>Sorry, there's nothing here.</p>
			</div>
		</div>
	</div>
</template>

<script>
import VueTypes from 'vue-types';
import store from '../state/store';
import MediaItem from './MediaItem';

export default {
	store,

	props: {
		media: VueTypes.array.isRequired,
	},

	components: {
		MediaItem,
	},
};
</script>