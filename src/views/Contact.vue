<template>
	<div class="contact">
		<h5 class="title">drop a line</h5>

		<ContactLinkedin />

		<div class="is-divider" data-content="OR"></div>

		<ContactForm />
	</div>
</template>

<script>
	import ContactLinkedin from '@/components/contact-linkedin.vue';
	import ContactForm from '@/components/contact-form.vue';

	export default {
		name: 'Contact',
		components: {
			ContactLinkedin,
			ContactForm
		}
	};
</script>
