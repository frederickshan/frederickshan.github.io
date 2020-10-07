<template>
	<div id="app">
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

	.title {
		color: $gun-powder;
		font-weight: 600;
		font-size: 48px;
		letter-spacing: 1.5px;
	}

	.is-primary,
	.tag:not(body).is-primary,
	.button.is-primary {
		letter-spacing: 1.5px;
	}

	.button.is-primary:hover,
	.button.is-primary:active,
	.button.is-primary:focus {
		background-color: $periwinkle;
	}

	.has-text-weight-semibold {
		letter-spacing: 1.5px;
	}

	.timeline .timeline-item .timeline-marker {
		background: $coral;
		border-color: $coral;
	}

	.timeline .timeline-item .timeline-marker.is-icon {
		color: $golden-rod;
		background: transparent;
		border: none;

		.svg-inline--fa {
			font-size: 24px !important; // fontawesome did me dirty
		}
	}

	.heading {
		font-weight: 600;
		font-size: 12px;
	}

	.control.has-icons-left .input:focus~.icon,
	.control.has-icons-left .select:focus~.icon {
		color: $gun-powder;
	}

	.select:not(.is-multiple):not(.is-loading)::after {
		border-color: $blurple;
	}

	.select:not(.is-multiple):not(.is-loading):hover::after {
		border-color: $periwinkle;
	}


	body {
		background: linear-gradient( $blurple, $coral, $golden-rod);
		min-height: 100vh;
	}

	.is-main-content {
		padding: 32px;
		background-color: $white;
		border-radius: 30px;
	}

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

	.progress::-webkit-progress-value {
		background-color: $coral;
	}

	.progress::-moz-progress-bar {
		background-color: $coral;
	}

	.progress::-ms-fill {
		background-color: $coral;
	}

	.skills,
	.technologies {
		border-bottom: 1px solid $mercury;
	}

	.about,
	.technologies {
		padding-bottom: 48px;
	}

	.is-250x250 {
		height: 250px;
		width: 250px;
	}

	.linkedin-icon {
		padding: 3px;
		margin-right: 10px;
	}
</style>

