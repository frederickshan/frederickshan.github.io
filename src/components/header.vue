<template>
	<header class="header">
		<nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<router-link to="/" class="navbar-item">
					<img src="../assets/images/initials.png" alt="Shannon Frederick initials" />
				</router-link>

				<a role="button" class="navbar-burger burger"
					aria-label="menu" aria-expanded="false"
					data-target="navbarMenu" :class="{ 'is-active': showNav }"
					@click="showNav = !showNav">

					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarMenu" class="navbar-menu">
				<div class="navbar-start">
					<router-link to="/" class="navbar-item">about me</router-link>

					<div class="navbar-item has-dropdown is-hoverable">
						<router-link to="/projects" class="navbar-link is-arrowless">projects</router-link>

						<div class="navbar-dropdown is-boxed">
							<router-link to="/projects/code" class="navbar-item">code</router-link>
							<router-link to="/projects/designs" class="navbar-item">designs</router-link>
							<router-link to="/projects/art" class="navbar-item">art</router-link>
						</div>
					</div>
				</div>

				<div class="navbar-end">
					<router-link to="/contact" class="navbar-item">contact</router-link>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'header',
	data() {
		return {
			showNav: false,
		};
	}
}
</script>