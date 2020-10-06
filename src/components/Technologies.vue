<template>
	<section class="technologies">
		<p class="has-text-weight-semibold mt-6">technologies i love</p>
		<p class="measurement has-text-weight-normal mb-4"><small>(level of confidence)</small></p>

		<div class="columns">
			<div class="column is-half">
				<p class="heading">HTML</p>
				<progress class="progress" value="90" max="100">90%</progress>
			</div>

			<div class="column">
				<p class="heading">CSS</p>
				<progress class="progress" value="90" max="100">90%</progress>
			</div>
		</div>

		<div class="columns">
			<div class="column is-half">
				<p class="heading">Javascript</p>
				<progress class="progress" value="90" max="100">80%</progress>
			</div>

			<div class="column">
				<p class="heading">Vue</p>
				<progress class="progress" value="80" max="100">80%</progress>
			</div>
		</div>

		<div class="columns">
			<div class="column is-half">
				<p class="heading">Bash</p>
				<progress class="progress" value="80" max="100">80%</progress>
			</div>

			<div class="column">
				<p class="heading">Node</p>
				<progress class="progress" value="70" max="100">70%</progress>

			</div>
		</div>

		<div class="columns">
			<div class="column is-half">
				<p class="heading">Nginx</p>
				<progress class="progress" value="70" max="100">70%</progress>
			</div>

			<div class="column">
				<p class="heading">Docker</p>
				<progress class="progress" value="60" max="100">60%</progress>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  name: 'technologies'
}
</script>