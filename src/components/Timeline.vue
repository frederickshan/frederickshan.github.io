<template>
	<section class="timeline is-centered">
		<p class="has-text-weight-semibold mt-6 mb-6">how i got here</p>

		<header class="timeline-header">
			<span class="tag is-medium">present</span>
		</header>
		<div class="timeline-item">
			<div class="timeline-marker"></div>
			<div class="timeline-content">
				<p class="heading">February 2020</p>
				<p class="has-text-weight-semibold">Vitamix</p>
				<p>Web Developer III</p>
			</div>
		</div>
		<header class="timeline-header">
			<span class="tag">2019</span>
		</header>
		<div class="timeline-item">
			<div class="timeline-marker is-icon">
				<i class="fas fa-trophy"></i>
			</div>
			<div class="timeline-content">
				<p class="heading">September 2019</p>
				<p class="has-text-weight-semibold">Dealer Tire</p>
				<p>IT Employee of the Quarter</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-marker"></div>
			<div class="timeline-content">
				<p class="heading">April 2019</p>
				<p class="has-text-weight-semibold">Dealer Tire</p>
				<p>Web Software Engineer</p>
			</div>
		</div>
		<header class="timeline-header">
			<span class="tag">2018</span>
		</header>
		<div class="timeline-item">
			<div class="timeline-marker"></div>
			<div class="timeline-content">
				<p class="heading">October 2018</p>
				<p class="has-text-weight-semibold">Dealer Tire</p>
				<p>Associate Web Developer</p>
			</div>
		</div>
		<header class="timeline-header">
			<span class="tag">2017</span>
		</header>
		<div class="timeline-item">
			<div class="timeline-marker"></div>
			<div class="timeline-content">
				<p class="heading">August 2017</p>
				<p class="has-text-weight-semibold">Dealer Tire</p>
				<p>Contract Web Developer</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-marker is-icon">
				<i class="fas fa-graduation-cap"></i>
			</div>
			<div class="timeline-content">
				<p class="heading">August 2017</p>
				<p class="has-text-weight-semibold">Tech Elevator</p>
				<p>Graduated with Certification</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-marker"></div>
			<div class="timeline-content">
				<p class="heading">July 2017</p>
				<p class="has-text-weight-semibold">Cleveland GiveCamp</p>
				<p>Volunteer</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-marker"></div>
			<div class="timeline-content">
				<p class="heading">May 2017</p>
				<p class="has-text-weight-semibold">Tech Elevator</p>
				<p>Began 14-Week Coding Bootcamp</p>
			</div>
		</div>
		<header class="timeline-header">
			<span class="tag is-medium">start</span>
		</header>

		<p class="has-text-centered mt-6 mb-6">Want to see more? <a href="assets/files/Shannon-Frederick-Professional-Resume.pdf">View my resume</a> or <a href="https://www.linkedin.com/in/shannonefrederick/">connect on LinkedIn</a>.</p>
	</section>
</template>

<script>
	export default {
		name: 'timeline'
	}
</script>

<style lang="scss" scoped>
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

	.tag {
		background-color: $white;
		border: 2px solid $primary;
		color: $primary;
		letter-spacing: 1.5px;
	}
</style>