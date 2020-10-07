<template>
	<div id="app" class="has-navbar-fixed-top">
		<Header />

		<!-- App -->
		<main class="section">
			<div class="container">
				<div class="columns is-main-content">
					<div class="column is-three-fifths is-offset-one-fifth">
						<router-view />
					</div>
				</div>
			</div>
		</main>

		<Footer />
	</div>
</template>

<script>
	import Header from '@/components/header.vue';
	import Footer from '@/components/footer.vue';

	export default {
		name: 'App',
		components: {
			Header,
			Footer
		}
	};
</script>

<style lang="scss">
	@import 'bulma/bulma.sass';
	@import '~bulma-timeline';
	@import '~bulma-divider';

	// Global

	body {
		background: linear-gradient( $blurple, $coral, $golden-rod);
		min-height: 100vh;
	}

	.has-navbar-fixed-top {
		padding-top: 100px;

		@include from($desktop) {
			padding-top: 150px;
		}
	}

	.is-main-content {
		padding: 32px;
		background-color: $white;
		border-radius: 30px;
	}

	.is-primary,
	.button.is-primary {
		letter-spacing: 1.5px;
	}

	.button.is-primary:hover,
	.button.is-primary:active,
	.button.is-primary:focus {
		background-color: $primary-light;
	}

	.title {
		color: $text;
		font-weight: 600;
		font-size: 48px;
		letter-spacing: 1.5px;
	}

	.heading {
		font-weight: 600;
		font-size: 12px;
	}

	.has-text-weight-semibold {
		letter-spacing: 1.5px;
	}

	.has-divider {
		border-bottom: 1px solid $border;
	}

	.has-padding-bottom {
		padding-bottom: 48px;
	}

	.is-250x250 {
		height: 250px;
		width: 250px;
	}
</style>

