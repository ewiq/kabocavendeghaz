<script lang="ts">
	import { writable } from 'svelte/store';
	import { base } from '$app/paths';

	const cursor = writable({ x: 0, y: 0, visible: false });

	function handleMouseMove(event: MouseEvent) {
		cursor.set({ x: event.clientX + 15, y: event.clientY + 15, visible: true });
	}

	function handleMouseLeave() {
		cursor.update((c) => ({ ...c, visible: false }));
	}
</script>

<section id="arak" class="my-12 scroll-mt-32">
	<h2 class="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4 mb-8">Áraink</h2>

	<!-- Adult pricing table -->
	<div class="overflow-x-auto mb-12">
		<h3 class="text-xl font-semibold text-gray-700 mb-4">16 éves felettiek száma (éjszakánként)</h3>
		<div class="w-full text-center">
			<div class="grid grid-cols-3 md:grid-cols-6">
				<div class="px-4 py-2 bg-gray-100 font-bold">1 fő</div>
				<div class="px-4 py-2 bg-gray-100 font-bold">2 fő</div>
				<div class="px-4 py-2 bg-gray-100 font-bold">3 fő</div>

				<div class="px-4 py-2 md:order-7">30 000 Ft</div>
				<div class="px-4 py-2 md:order-8">30 000 Ft</div>
				<div class="px-4 py-2 md:order-9">41 000 Ft</div>

				<div class="px-4 py-2 bg-gray-100 font-bold">4 fő</div>
				<div class="px-4 py-2 bg-gray-100 font-bold">5 fő</div>
				<div class="px-4 py-2 bg-gray-100 font-bold">6 fő</div>

				<div class="px-4 py-2">51 000 Ft</div>
				<div class="px-4 py-2">60 000 Ft</div>
				<div class="px-4 py-2">68 000 Ft</div>
			</div>
		</div>
	</div>

	<!-- Children pricing table -->
	<div class="overflow-x-auto mb-12">
		<h3 class="text-xl font-semibold text-gray-700 mb-4">Gyermekek (éjszakánként)</h3>
		<div class="w-full text-center">
			<div class="grid grid-cols-3">
				<div class="px-4 py-2 bg-gray-100 font-bold">2 éves korig</div>
				<div class="px-4 py-2 bg-gray-100 font-bold">2-12 éves korig</div>
				<div class="px-4 py-2 bg-gray-100 font-bold">12-16 éves korig</div>

				<div class="px-4 py-2 md:order-7">0 Ft</div>
				<div class="px-4 py-2 md:order-8">6 800 Ft/fő</div>
				<div class="px-4 py-2 md:order-9">7 800 Ft/fő</div>
			</div>
		</div>
	</div>

	<!-- Breakfast pricing table -->
	<div class="overflow-x-auto mb-4">
		<div class="overflow-x-auto mb-4">
			<h3 class="text-xl font-semibold text-gray-700 mb-4">Reggeli* (fejenként)</h3>
			<div class="w-full text-center">
				<div class="grid grid-cols-3">
					<div class="px-4 py-2 bg-gray-100 font-bold">12 éves kor alatt</div>
					<div class="px-4 py-2 bg-gray-100 font-bold">12-18 éves korig</div>
					<div class="px-4 py-2 bg-gray-100 font-bold">Felnőttek</div>

					<div class="px-4 py-2 md:order-7">2 900 Ft/fő</div>
					<div class="px-4 py-2 md:order-8">3 900 Ft/fő</div>
					<div class="px-4 py-2 md:order-9">3 900 Ft/fő</div>
				</div>
			</div>
			<div>
				<p
					class="text-gray-700 mt-2 italic"
					onmousemove={handleMouseMove}
					onmouseleave={handleMouseLeave}
				>
					*Egy bő reggelit biztosítunk, amely a következőket tartalmazza: szeletelt kenyér, vaj,
					házi lekvárok, sonka, sajt, tojás, paradicsom/paprika, joghurt, 100%-os gyümölcslé, kávé,
					tej, tea.
				</p>
			</div>
		</div>
	</div>

	{#if $cursor.visible}
		<img
			src={base + '/photos/004.jpg'}
			alt="Reggeli"
			class="hover-image"
			style="top: {$cursor.y}px; left: {$cursor.x}px;"
		/>
	{/if}

	<p class="text-gray-600 font-semibold mt-2">
		Az árak HUF-ban értendők és tartalmazzák az ÁFÁ-t. Külön fizetendő az idegenforgalmi adó,
		melynek mértéke naponta 500 Ft minden 18. életévét betöltött vendég után.
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
