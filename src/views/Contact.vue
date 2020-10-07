<template>
	<div class="contact">
		<h1 class="title">drop a line</h1>

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
