<template>
	<div class="filter-dropdown" :class="{'has-dropdown': isDropdownShown}">
		<span class="filter-dropdown__button" @click="toggleDropdown">{{ buttonText }}</span>
		<div class="filter-dropdown__options">
			<label 
				class="filter-dropdown__option" 
				v-for="option in options"
			>
				<input 
					type="checkbox" name="genre" 
					:value="option.value" 
					v-model="selectedOptions"
				/>
				<span>{{ option.text }}</span>
			</label>
		</div>
	</div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
	props: {
		buttonText: VueTypes.string,
		options: VueTypes.arrayOf(VueTypes.shape({
			value: VueTypes.string,
			text: VueTypes.string, 
			isSelected: VueTypes.bool
		})),
	},

	data() {
		return {
			isDropdownShown: false,
		};
	},

	computed: {
		selectedOptions: {
			get() {
				return this.options.filter((option) => {
					return option.isSelected === true;
				}).map((option) => {
					return option.value;
				});
			}, 
			set(value) {
				this.$emit('update-value', value);
			}	
		},
	},

	methods: {
		toggleDropdown() {
			this.isDropdownShown = !this.isDropdownShown;
		},
	},

	mounted() {
		document.addEventListener('click', (e) => {
			if(!this.$el.contains(e.target)) {
				this.isDropdownShown = false;
			}
		});
	},
};
</script>