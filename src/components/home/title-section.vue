<template>
	<div
  		:class="[
			'title-section',
			{ 'loading': indeterminate },
		]"
	>
		<div class="container-decoration">
			<div class="line" :style="`background-color: ${indeterminate ? 'tranparent' : color}`"></div>
			<div class="circle m-l-1" :style="`background-color: ${indeterminate ? 'transparent' : color}`"></div>
		</div>
		<div
			:class="[
				'name-section',
				{ 'loading': indeterminate },
			]"
			:style="`color: ${color}`">{{title}}</div>
		<div class="container-decoration">
			<div class="circle m-r-1" :style="`background-color: ${indeterminate ? 'transparent' : color}`"></div>
			<div class="line" :style="`background-color: ${indeterminate ? 'transparent' : color}`"></div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
	name: 'title-section',
	computed: {
		...mapGetters([
			'indeterminate',
		]),
	},
	props: {
		title: String,
		color: String,
	},
};
</script>
<style lang="scss" scoped>
	.title-section {
		align-items: center;
		display: flex;
		justify-content: center;

		.name-section {
			font-family: font(bold);
			font-size: size(large);
			margin: 0 16px;
			text-align: center;
		}

		.m-r-1 {
			margin-right: 1px;
		}

		.m-l-1 {
			margin-left: 1px;
		}
	}

	.line {
		border-radius: 3px;
		height: 4px;
		width: 82px;
	}

	.circle {
		border-radius: 50%;
		height: 4px;
		width: 4px;
	}

	.container-decoration {
		display: flex;
	}
</style>


