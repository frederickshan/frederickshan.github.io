<template>
	<div class="projects">
		<h1 class="title">projects</h1>
		<p class="has-divider has-padding-bottom mb-6">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat.
		</p>


		<!-- TO DO: Hide this if viewing children -->
		<div class="columns has-text-centered has-padding-top">
			<div class="column is-one-third">
				<i class="fas fa-laptop-code fa-5x"></i>
				<p class="heading">Web Development</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<router-link to="/projects/code" class="button is-primary mt-4">view code</router-link>
			</div>

			<div class="column is-one-third">
				<i class="fas fa-draw-polygon fa-5x"></i>
				<p class="heading">Graphic Design</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<router-link to="/projects/designs" class="button is-primary mt-4">view designs</router-link>
			</div>

			<div class="column is-one-third">
				<i class="fas fa-edit fa-5x"></i>
				<p class="heading">Digital Art</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<router-link to="/projects/art" class="button is-primary mt-4">view art</router-link>
			</div>
		</div>

		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'Projects'
	};
</script>
