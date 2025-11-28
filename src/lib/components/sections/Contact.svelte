<script>
	const emailUser = 'pellet.philippe';
	const emailHost = 'gmail.com';

	const address = 'Vác, Dózsa György út 28.';

	const phone1 = '+36 ' + '30 ' + '493 ' + '2559';
	const phone2 = '+36 ' + '30 ' + '384 ' + '6843';

	const email = `${emailUser}@${emailHost}`;
</script>

<section id="elerhetoseg" class="my-12 scroll-mt-32">
	<h2 class="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4 mb-8">
		Elérhetőség
	</h2>

	<div class="grid grid-cols-1 md:grid-cols-5 gap-8">
		<div class="md:col-span-2">
			<h3 class="text-lg font-bold text-gray-700 mb-4">Cím: {address}</h3>
			<h3 class="text-lg font-bold text-gray-700 mb-4">
				Kérjük a foglaláshoz írjon emailt, vagy hívjon fel az alábbi telefonszámok egyikén.
			</h3>
			<h3 class="text-lg text-gray-700 mb-4">
				<a
					class="text-gray-700 hover:text-orange-400 transition duration-150 ease-in-out hover:underline"
					href={'mailto:' + email}>{email}</a
				>
			</h3>
			<h3 class="text-lg text-gray-700 mb-4 phone-link">
				<a href={'tel:' + phone1}>{phone1}</a>
			</h3>
			<h3 class="text-lg text-gray-700 mb-4 phone-link">
				<a href={'tel:' + phone2}>{phone2}</a>
			</h3>
		</div>

		<!-- Right column: Google Maps -->
		<div class="space-y-8 md:col-span-3">
			<div>
				<div class="w-full h-64 rounded-lg overflow-hidden shadow-md">
					<iframe
						title="map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2680.787512447016!2d19.11728797673009!3d47.785568175601334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47402a8f00c54b9b%3A0x1359c90d3af6897f!2zS2Fiw7NjYSBWZW5kw6lnaMOheg!5e0!3m2!1shu!2shu!4v1764081101975!5m2!1shu!2shu"
						width="100%"
						height="100%"
						style="border:0;"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@media (min-width: 768px) {
		.phone-link a {
			pointer-events: none;
			color: inherit;
			text-decoration: none;
			cursor: default;
		}
	}
</style>
