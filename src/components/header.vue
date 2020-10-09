<template>
	<header class="header">
		<nav class="navbar is-transparent is-spaced is-fixed-top" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<router-link to="/" class="navbar-item" aria-hidden="true">
					<img src="../assets/images/initials.png" alt="Logo of Shannon Frederick Initials" />
				</router-link>

				<!-- Burger for Mobile Navigation -->
				<a  class="navbar-burger burger"
					role="button"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarMenu"
					:class="{ 'is-active': showNav }"
					@click="showNav = !showNav">

					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarMenu" class="navbar-menu" :class="{ 'is-active': showNav }">
				<div class="navbar-start">
					<router-link to="/" class="navbar-item">about me</router-link>

					<!-- Dropdown Menu for Projects -->
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
				showNav: false
			};
		}
	}
</script>

<style lang="scss" scoped>
	.navbar {
		background-color: rgba(255, 255, 255, .8);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
	}

	.navbar-item img {
		max-height: 90px;
	}

	a.navbar-item,
	.navbar-link,
	.navbar.is-transparent .navbar-dropdown a.navbar-item {
		font-weight: 600;
		font-size: 16px;
		letter-spacing: 1.5px;

		&:hover,
		&:focus,
		&:focus-within {
			color: $waterloo;
		}
	}

	.navbar-burger {
		height: unset;
		width: 100px;

		&:hover {
			background-color: transparent;
			color: $text-light;
		}

		span {
			width: 24px;
		}
	}
</style>