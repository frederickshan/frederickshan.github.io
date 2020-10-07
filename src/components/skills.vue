<template>
	<section class="skills has-divider">
		<p class="has-text-weight-semibold mt-6">i do all kinds of neat stuff</p>

		<div class="columns has-text-centered mt-4">
			<div class="column is-half">
				<i class="fas fa-laptop-code fa-5x"></i>
				<p class="heading">Web Development</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<router-link to="/projects/code" class="button is-primary mt-4 mb-6">view code</router-link>
			</div>

			<div class="column">
				<i class="fas fa-draw-polygon fa-5x"></i>
				<p class="heading">Graphic Design</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<router-link to="/projects/designs" class="button is-primary mt-4 mb-6">view designs</router-link>
			</div>
		</div>

		<div class="columns has-text-centered">
			<div class="column is-half">
				<i class="fas fa-edit fa-5x"></i>
				<p class="heading">Digital Art</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<router-link to="/projects/art" class="button is-primary mt-4 mb-6">view art</router-link>
			</div>

			<div class="column">
				<i class="fas fa-chalkboard-teacher fa-5x"></i>
				<p class="heading">Mentoring</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<router-link to="/contact" class="button is-primary mt-4 mb-6">contact me</router-link>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'skills'
	}
</script>