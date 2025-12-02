<script lang="ts">
	import { writable } from 'svelte/store';
	import { base } from '$app/paths';
	import { m } from '../../../paraglide/messages';

	const cursor = writable({ x: 0, y: 0, visible: false });

	function handleMouseMove(event: MouseEvent) {
		cursor.set({ x: event.clientX + 15, y: event.clientY + 15, visible: true });
	}

	function handleMouseLeave() {
		cursor.update((c) => ({ ...c, visible: false }));
	}
</script>

<section id="arak" class="my-12 scroll-mt-32">
	<h2 class="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4 mb-8">
		{m.prices_title()}
	</h2>

	<!-- Adult pricing table -->
	<div class="overflow-x-auto mb-12">
		<h3 class="text-xl font-semibold text-gray-900 mb-4">{m.adults_pricing_title()}</h3>
		<div class="w-full text-center">
			<div class="grid grid-cols-3 md:grid-cols-6">
				<div class="px-4 py-2 bg-gray-100 font-bold md:order-1">{m.person_count_1()}</div>
				<div class="px-4 py-2 bg-gray-100 font-bold md:order-2">{m.person_count_2()}</div>
				<div class="px-4 py-2 bg-gray-100 font-bold md:order-3">{m.person_count_3()}</div>
				<div class="px-4 py-2 md:order-7">{m.price_1()}</div>
				<div class="px-4 py-2 md:order-8">{m.price_2()}</div>
				<div class="px-4 py-2 md:order-9">{m.price_3()}</div>
				<div class="px-4 py-2 bg-gray-100 font-bold md:order-4">{m.person_count_4()}</div>
				<div class="px-4 py-2 bg-gray-100 font-bold md:order-5">{m.person_count_5()}</div>
				<div class="px-4 py-2 bg-gray-100 font-bold md:order-6">{m.person_count_6()}</div>
				<div class="px-4 py-2 md:order-10">{m.price_4()}</div>
				<div class="px-4 py-2 md:order-11">{m.price_5()}</div>
				<div class="px-4 py-2 md:order-12">{m.price_6()}</div>
			</div>
		</div>
	</div>

	<!-- Children pricing table -->
	<div class="overflow-x-auto mb-12">
		<h3 class="text-xl font-semibold text-gray-900 mb-4">{m.children_pricing_title()}</h3>
		<div class="w-full text-center">
			<div class="grid grid-cols-3">
				<div class="px-4 py-2 bg-gray-100 font-bold">{m.age_under_2()}</div>
				<div class="px-4 py-2 bg-gray-100 font-bold">{m.age_2_to_12()}</div>
				<div class="px-4 py-2 bg-gray-100 font-bold">{m.age_12_to_16()}</div>
				<div class="px-4 py-2 md:order-7">{m.price_child_0_2()}</div>
				<div class="px-4 py-2 md:order-7">{m.price_child_2_12()}</div>
				<div class="px-4 py-2 md:order-8">{m.price_child_12_16()}</div>
			</div>
		</div>
	</div>

	<!-- Breakfast pricing table -->
	<div class="overflow-x-auto mb-4">
		<div class="overflow-x-auto mb-4">
			<h3 class="text-xl font-semibold text-gray-900 mb-4">{m.breakfast_pricing_title()}</h3>
			<div class="w-full text-center">
				<div class="grid grid-cols-3">
					<div class="px-4 py-2 bg-gray-100 font-bold">{m.age_under_12()}</div>
					<div class="px-4 py-2 bg-gray-100 font-bold">{m.age_12_to_18()}</div>
					<div class="px-4 py-2 bg-gray-100 font-bold">{m.adults()}</div>
					<div class="px-4 py-2 md:order-7">{m.price_breakfast_child()}</div>
					<div class="px-4 py-2 md:order-8">{m.price_breakfast_full()}</div>
					<div class="px-4 py-2 md:order-8">{m.price_breakfast_full()}</div>
				</div>
			</div>
			<div>
				<p
					class="text-gray-700 mt-2 italic"
					onmousemove={handleMouseMove}
					onmouseleave={handleMouseLeave}
				>
					{m.breakfast_description()}
				</p>
			</div>
		</div>
	</div>

	{#if $cursor.visible}
		<img
			src={base + '/photos/004.jpg'}
			alt={m.breakfast_image_alt()}
			class="hover-image"
			style="top: {$cursor.y}px; left: {$cursor.x}px;"
		/>
	{/if}

	<p class="text-gray-600 font-semibold mt-2">
		{m.pricing_note()}
	</p>
</section>

<style>
	.hover-image {
		position: fixed;
		pointer-events: none;
		width: 320px;
		height: auto;
		border-radius: 6px;
		transition:
			transform 0.1s ease-out,
			opacity 0.15s ease-in;
		z-index: 9999;
	}
</style>
