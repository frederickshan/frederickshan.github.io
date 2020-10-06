<template>
	<form class="mt-4" accept-charset="UTF-8" action="https://usebasin.com/f/8024217a109e" enctype="multipart/form-data" method="POST">
		<div class="field">
			<label class="label heading" for="name">Name</label>
			<div class="control has-icons-left">
				<input id="name" class="input" name="name" type="text" placeholder="your name" required>
				<span class="icon is-small is-left"><i class="fas fa-user"></i></span>
			</div>
		</div>

		<div class="field">
			<label class="label heading" for="email">Email</label>
			<div class="control has-icons-left">
				<input id="email" class="input" name="email" type="email" placeholder="your email" required>
				<span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
			</div>
		</div>

		<div class="field">
			<label class="label heading" for="subject">Subject</label>
			<div class="control is-expanded has-icons-left">
				<div class="select is-fullwidth">
					<select id="subject" name="subject">
							<option value="general">general</option>
							<option value="mentoring">request mentoring</option>
							<option value="commissions">commission inquiry</option>
							<option value="freelance">freelance project</option>
						</select>
				</div>
				<span class="icon is-small is-left"><i class="fas fa-pen"></i></span>
			</div>
		</div>

		<div class="field">
			<label class="label heading" for="message">Message</label>
			<div class="control">
				<textarea id="message" class="textarea" name="message" required></textarea>
			</div>
		</div>

		<div class="field">
			<div class="control">
				<button class="button is-primary" type="submit">submit</button>
			</div>
		</div>
	</form>
</template>

<script>
export default {
	name: 'contact-form'
}
</script>