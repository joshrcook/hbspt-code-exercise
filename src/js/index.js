import * as data from './data/data.json';
import Vue from 'vue';
import FilterableContent from './components/FilterableContent';
import Modal from './modules/Modal';

var vm = new Vue(FilterableContent);
vm.$mount('#filterable-content');

var ctaModal = new Modal({
	el: document.getElementById('cta-modal'),
	toggle: document.querySelector('.js-cta-modal'),
});