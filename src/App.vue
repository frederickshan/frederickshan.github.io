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

<style lang="sass">
	@import "~bulma/bulma.sass"
	@import "~bulma-timeline"
	@import "~bulma-divider"
</style>

<style type="text/css">
	/* Bulma Overwrites */

.navbar-item img {
    max-height: 5rem;
}

.title {
    color: #3f3f57;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 1.5px;
}

.title {
    font-size: 3rem;
}

.is-primary,
.tag:not(body).is-primary,
.button.is-primary {
    background-color: #5E61ED;
    letter-spacing: 1.5px;
}

.button.is-primary:hover,
.button.is-primary:active,
.button.is-primary:focus {
    background-color: #afb8ec;
}

.has-text-weight-semibold {
    letter-spacing: 1.5px;
}

.timeline .timeline-item .timeline-marker {
    background: #ed825e;
    border-color: #ed825e;
}

.timeline .timeline-item .timeline-marker.is-icon {
    color: #edc95e;
    font-size: 20px;
    background: transparent;
    border: none;
}

.heading {
    font-weight: 600;
    font-size: 12px;
}

.input:active,
.input:focus,
.is-active.input,
.is-active.textarea,
.is-focused.input,
.is-focused.textarea,
.select select.is-active,
.select select.is-focused,
.select select:active,
.select select:focus,
.textarea:active,
.textarea:focus,
.button.is-primary:focus:not(:active) {
    border-color: #5E61ED;
    box-shadow: 0 0 0 .125em rgba(94, 97, 237, .25)
}

.control.has-icons-left .input:focus~.icon,
.control.has-icons-left .select:focus~.icon {
    color: #3f3f57;
}

.select:not(.is-multiple):not(.is-loading)::after {
    border-color: #5E61ED;
}

.select:not(.is-multiple):not(.is-loading):hover::after {
    border-color: #afb8ec;
}


/* End Bulma Overwrites  */

body {
    background: linear-gradient( #5E61ED, #ed825e, #edc95e);
    min-height: 100vh;
}

body,
button,
input,
select,
textarea {
    color: #3f3f57;
    font-family: 'Poppins', sans-serif;
}

a {
    color: #5E61ED;
}

a:hover {
    color: #afb8ec;
}

#goToTop {
    display: none;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 99;
    cursor: pointer;
    background-color: transparent;
    border: none;
}

#goToTop:hover {
    color: #0a0a0a;
}

.page,
:target~.default {
    display: none;
}

.default,
:target {
    display: block;
    scroll-margin-top: 100px;
}

.is-main-content {
    padding: 2rem;
    background-color: #fff;
    border-radius: 30px;
}

.slide {
    position: relative;
    left: -1000px;
    -webkit-animation: slide .5s forwards;
    -webkit-animation-delay: .5s;
    animation: slide .5s forwards;
    animation-delay: .5s;
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
    background-color: #ed825e;
}

.progress::-moz-progress-bar {
    background-color: #ed825e;
}

.progress::-ms-fill {
    background-color: #ed825e;
}

.skills,
.technologies {
    border-bottom: 1px solid #dbdbdb;
}

.about,
.technologies {
    padding-bottom: 3rem;
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

