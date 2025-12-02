<script>
	import { base } from '$app/paths';
	import { m } from '../../../paraglide/messages';
</script>

<section id="rolunk" class="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-12">
	<!-- Text & main image -->
	<div class="lg:col-span-9 space-y-6">
		<h2 class="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
			{m.about_title()}
		</h2>
		<div class="flex flex-col sm:flex-row sm:items-start gap-4">
			<img
				src={base + '/assets/rolunk.jpg'}
				alt={m.about_image_alt()}
				class="rounded-sm sm:w-1/3 w-full object-cover"
			/>
			<div class="text-gray-600 sm:w-1/2">
				<p>
					{m.about_description_1()}
				</p>
				<p class="mt-4">
					{m.about_description_2()}
				</p>
			</div>
		</div>
	</div>

	<!-- Awards -->
	<div class="lg:col-span-3 flex justify-center lg:mt-0 h-full">
		<div class="flex gap-4 flex-row lg:flex-col lg:w-full">
			<img
				src={base + '/assets/kaboca_tanusitvany.png'}
				alt={m.mtmt_certificate()}
				class="h-40 lg:h-42 w-auto lg:w-full object-contain rounded-lg transition duration-150 hover:opacity-90 ease-in-out"
			/>
			<a href="https://www.booking.com/hotel/hu/kaboca-vendeghaz.hu.html" target="_blank">
				<img
					src={base + '/assets/bookingaward2025.png'}
					alt={m.booking_award()}
					class="h-40 lg:h-46 w-auto lg:w-full object-contain rounded-lg transition duration-150 hover:opacity-90 ease-in-out"
				/>
			</a>
		</div>
	</div>
</section>
