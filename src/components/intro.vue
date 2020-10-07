<template>
	<section class="intro has-divider has-padding-bottom">
		<div class="has-text-centered">
			<figure class="image is-250x250 is-inline-block">
				<img class="portrait is-rounded" src="../assets/images/self.jpg" alt="Self Portrait" />
			</figure>
		</div>

		<div class="slide">
			<h1 class="title">hello</h1>
		</div>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in repre  henderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
			est laborum.
		</p>
	</section>
</template>

<script>
	export default {
		name: 'intro'
	}
</script>

<style lang="scss" scoped>
	.slide {
		position: relative;
		left: -1000px;
		-webkit-animation: slide .5s forwards;
		-webkit-animation-delay: .8s;
		animation: slide .5s forwards;
		animation-delay: .8s;
	}

	@-webkit-keyframes slide {
		100% {
			left: 0;
		}
	}

	@keyframes slide {
		100% {
			left: 0;
		}
	}
</style>