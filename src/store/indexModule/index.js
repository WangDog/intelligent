import Vue from 'vue';

export default {
	state: {
		answerList: [
			new Set(),
			new Set(),
			new Set()
		]
	},
	actions: {

	},
	mutations: {
		'[selectAnswer]' (state, num, obj) {
			if (num > 3 || num < 1) return;
			state.answerList[num].add(obj);
		}
	},

}