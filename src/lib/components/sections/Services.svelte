<script>
	import { base } from '$app/paths';
	import { m } from '../../../paraglide/messages';
</script>

<section class="my-12">
	<h2 class="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4 mb-8">
		{m.services_title()}
	</h2>

	<div class="grid grid-cols-1 md:grid-cols-5 gap-8">
		<!-- Left column: A ház -->
		<div class="md:col-span-3">
			<h3 class="text-xl font-semibold text-gray-900 mb-2">{m.house_title()}</h3>
			<p class="text-gray-700 mb-4">
				{m.house_description()}
			</p>
			<div class="grid grid-cols-2 gap-2">
				<img
					src={base + '/photos/01.jpg'}
					alt={m.house_image_alt()}
					class="rounded w-full object-cover"
				/>
				<img
					src={base + '/photos/thumb/1751633250664_thumb.jpg'}
					alt={m.wine_cellar_image_alt()}
					class="rounded w-full object-cover"
				/>
			</div>
		</div>

		<!-- Right column: Borospince and Felszerelések -->
		<div class="space-y-4 md:col-span-2">
			<div>
				<h3 class="text-xl font-semibold text-gray-900 mb-2">{m.wine_cellar_title()}</h3>
				<p class="text-gray-700">
					{m.wine_cellar_description()}
				</p>
			</div>

			<div>
				<h3 class="text-xl font-semibold text-gray-900 mb-2">{m.equipment_title()}</h3>
				<p class="text-gray-700 mb-2">{m.equipment_list()}</p>
				<p class="text-gray-700 mb-2">{m.equipment_list_2()}</p>
				<p class="text-gray-700 mb-2">{m.equipment_list_3()}</p>
				<p class="text-gray-700 mb-2">{m.equipment_list_4()}</p>
				<p class="text-gray-700 mb-2">{m.equipment_list_5()}</p>
				<p class="text-gray-700">{m.equipment_list_6()}</p>
			</div>
		</div>
	</div>
</section>
