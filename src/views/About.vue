<template>
	<div class="about">
		<Intro />

		<Skills />

		<Technologies />

		<Timeline />
	</div>
</template>

<script>
	import Intro from '@/components/intro.vue';
	import Skills from '@/components/skills.vue';
	import Technologies from '@/components/technologies.vue';
	import Timeline from '@/components/timeline.vue';

	export default {
		name: 'About',
		components: {
			Intro,
			Skills,
			Technologies,
			Timeline
		}
	};
</script>

<style lang="scss" scoped>
	.skills,
	.technologies {
		border-bottom: 1px solid $mercury;
	}

	.technologies {
		padding-bottom: 48px;
	}
</style>
