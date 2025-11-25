<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';
	import { allPhotos } from '$lib/data/galleryData';
	import { writable } from 'svelte/store';

	// Reactive store for cursor position
	const cursor = writable({ x: 0, y: 0, visible: false });

	// Handlers for mouse movement and hover
	function handleMouseMove(event: MouseEvent) {
		cursor.set({ x: event.clientX + 15, y: event.clientY + 15, visible: true });
	}

	function handleMouseLeave() {
		cursor.update((c) => ({ ...c, visible: false }));
	}
</script>

<div class="w-full h-72 overflow-hidden shadow-xl mb-6">
	<img
		src="/photos/1751633251787.jpg"
		alt="banner"
		class="w-full h-full object-cover object-center"
	/>
</div>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
	<section class="text-center max-w-4xl mx-auto mb-16">
		<p class="text-xl text-gray-700 font-light leading-relaxed italic md:my-20">
			Gondos ízléssel és kényelmesen berendezett vendégházunk ideális hely mindazok számára, akik
			közel szeretnének maradni a fővároshoz, ugyanakkor távol a budapesti forgatagtól. <br
			/>Nagyszerű kiindulópont ahhoz is, hogy felfedezzék Magyarország egyik legszebb régióját, a
			Dunakanyart.
		</p>
	</section>

	<section id="galeria" class="my-12 scroll-mt-32">
		<Gallery photos={allPhotos} showMoreButton={true} limit={9} />
	</section>

	<section id="arak" class="my-12 scroll-mt-32">
		<h2 class="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4 mb-8">Áraink</h2>

		<!-- Adult pricing table -->
		<div class="overflow-x-auto mb-12">
			<h3 class="text-xl font-semibold text-gray-700 mb-4">
				16 éves felettiek száma (éjszakánként)
			</h3>
			<table class="min-w-full table-auto border border-gray-200">
				<thead class="bg-gray-100">
					<tr>
						<th class="px-4 py-2 border">1 fő</th>
						<th class="px-4 py-2 border">2 fő</th>
						<th class="px-4 py-2 border">3 fő</th>
						<th class="px-4 py-2 border">4 fő</th>
						<th class="px-4 py-2 border">5 fő</th>
						<th class="px-4 py-2 border">6 fő</th>
					</tr>
				</thead>
				<tbody class="text-center">
					<tr>
						<td class="px-4 py-2 border">30 000 Ft</td>
						<td class="px-4 py-2 border">30 000 Ft</td>
						<td class="px-4 py-2 border">41 000 Ft</td>
						<td class="px-4 py-2 border">51 000 Ft</td>
						<td class="px-4 py-2 border">60 000 Ft</td>
						<td class="px-4 py-2 border">68 000 Ft</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Children pricing table -->
		<div class="overflow-x-auto mb-12">
			<h3 class="text-xl font-semibold text-gray-700 mb-4">Gyermekek (éjszakánként)</h3>
			<table class="min-w-full table-auto border border-gray-200">
				<thead class="bg-gray-100">
					<tr>
						<th class="px-4 py-2 border">2 éves korig</th>
						<th class="px-4 py-2 border">2-12 éves korig</th>
						<th class="px-4 py-2 border">12-16 éves korig</th>
					</tr>
				</thead>
				<tbody class="text-center">
					<tr>
						<td class="px-4 py-2 border">0</td>
						<td class="px-4 py-2 border">6 800 Ft/fő</td>
						<td class="px-4 py-2 border">7 800 Ft/fő</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Breakfast pricing table -->
		<div class="overflow-x-auto mb-8">
			<h3 class="text-xl font-semibold text-gray-700 mb-4">Reggeli* (fejenként)</h3>
			<table class="min-w-full table-auto border border-gray-200">
				<thead class="bg-gray-100">
					<tr>
						<th class="px-4 py-2 border">12 éves kor alatt</th>
						<th class="px-4 py-2 border">12-18 éves korig</th>
						<th class="px-4 py-2 border">Felnőttek</th>
					</tr>
				</thead>
				<tbody class="text-center">
					<tr>
						<td class="px-4 py-2 border">2 900 Ft</td>
						<td class="px-4 py-2 border">3 900 Ft</td>
						<td class="px-4 py-2 border">3 900 Ft</td>
					</tr>
				</tbody>
			</table>
			<div>
				<p
					class="text-gray-600 mt-2 italic"
					onmousemove={handleMouseMove}
					onmouseleave={handleMouseLeave}
				>
					*Egy bő reggelit biztosítunk, amely a következőket tartalmazza: szeletelt kenyér, vaj,
					házi lekvárok, sonka, sajt, tojás, paradicsom/paprika, joghurt, 100%-os gyümölcslé, kávé,
					tej, tea.
				</p>
			</div>
		</div>

		{#if $cursor.visible}
			<img
				src="/photos/004.jpg"
				alt="Preview"
				class="hover-image"
				style="top: {$cursor.y}px; left: {$cursor.x}px;"
			/>
		{/if}

		<p class="text-gray-600 font-semibold mt-2">
			Az árak HUF-ban értendők és tartalmazzák az ÁFÁ-t. Külön fizetendő az idegenforgalmi adó,
			melynek mértéke naponta 500 Ft minden 18. életévét betöltött vendég után.
		</p>
	</section>

	<section class="my-12">
		<h2 class="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4 mb-8">
			További szolgáltatások
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-5 gap-8">
			<!-- Left column: A ház -->
			<div class="md:col-span-2">
				<h3 class="text-xl font-semibold text-gray-700 mb-2">A ház</h3>
				<p class="text-gray-700">
					A ház Vác belvárosától 10 perc sétányira található, a város kertvárosi, csöndesebb
					részében, száz méterre a Dunaparttól és a kerékpárúttól. Kisebb baráti társaságok vagy
					gyermekes (akár 3-4-5 gyermekes) családok fogadására alkalmas. Az alsó szinten egy nagy
					amerikai konyhás nappali és egy veranda várja a vendégeket. Itt helyezkedik el a szülői
					háló. A második szinten egy hálószoba található, illetve egy nagy nyitott tér
					gyermekjátékokkal. Mindkét szinten van fürdőszoba, lent külön WC-vel.
				</p>
			</div>

			<!-- Right column: Borospince and Felszerelések -->
			<div class="space-y-4 md:col-span-3">
				<div>
					<h3 class="text-xl font-semibold text-gray-700 mb-2">Borospince</h3>
					<p class="text-gray-700">
						A borospince a tulajdonos engedélyével, bizonyos feltételekkel használható.
					</p>
				</div>

				<div>
					<h3 class="text-xl font-semibold text-gray-700 mb-2">Felszerelések</h3>
					<p class="text-gray-700 mb-2">Mosogatógép, mosógép</p>
					<p class="text-gray-700 mb-2">Teljesen felszerelt konyha</p>
					<p class="text-gray-700 mb-2">Légkondicionálás és padlófűtés minden szobában</p>
					<p class="text-gray-700 mb-2">Benti parkolási lehetőség egy autónak</p>
					<p class="text-gray-700">
						Gyermekbarát szolgáltatások: Utazóágy, etetőszék, gyermekjátékok.
						Babysitter-szolgáltatást is vállalunk térítés ellenében kisgyermekes vendégeinknek.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="elerhetoseg" class="my-12 scroll-mt-32">
		<h2 class="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4 mb-8">
			Elérhetőség
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-5 gap-8">
			<div class="md:col-span-2">
				<h3 class="text-lg font-bold text-gray-700 mb-4">Cím: Vác, Dózsa György út 28.</h3>
				<h3 class="text-lg font-bold text-gray-700 mb-4">
					Kérjük a foglaláshoz írjon emailt, vagy hívjon fel az alábbi telefonszámok egyikén.
				</h3>
				<h3 class="text-lg text-gray-700 mb-4">
					<a
						class="text-gray-700 hover:text-orange-400 transition duration-150 ease-in-out hover:underline"
						href="mailto:pellet.philippe@gmail.com">pellet.philippe@gmail.com</a
					>
				</h3>
				<h3 class="text-lg text-gray-700 mb-4 phone-link">
					<a href="teL:+36304932559">+ 36 30 493 2559</a>
				</h3>
				<h3 class="text-lg text-gray-700 mb-4 phone-link">
					<a href="tel:+36304932559">+ 36 30 384 6843</a>
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

	<section
		id="rolunk"
		class="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-12"
	>
		<!-- Text & main image -->
		<div class="lg:col-span-9 space-y-6">
			<h2 class="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">Rólunk</h2>
			<div class="flex flex-col sm:flex-row sm:items-start gap-4">
				<img
					src="/assets/rolunk.jpg"
					alt="rolunk"
					class="rounded-sm sm:w-1/3 w-full object-cover"
				/>
				<div class="text-gray-600 sm:w-1/2">
					<p>
						Ötgyermekes francia-magyar család vagyunk. 2005 májusa óta élünk Magyarországon.
						Korábban Párizsban, Versailles-ban, majd néhány évig Provence-ban laktunk. Régi vágyunk
						volt egy vendégház üzemeltetése, ahol nem csak szállást kínálunk a hozzánk betérőknek,
						hanem barátságot, nyelvtudást, házi finomságokat is – és talán sikerült a dél-francia
						életérzésből is átcsempésznünk valamit.
					</p>
					<p class="mt-4">
						Helyben lakunk, kertünk a vendégház kertjével érintkezik. Ugyanakkor a két ház két külön
						utcára nyílik, így a vendégek teljes intimitásban élvezhetik a pihenést.
					</p>
				</div>
			</div>
		</div>

		<!-- Booking award -->
		<div class="lg:col-span-3 flex justify-end lg:justify-end items-end mt-6 lg:mt-0 h-full">
			<img
				src="/assets/bookingaward2025.png"
				alt="booking award"
				class="h-32 w-auto rounded-lg transition duration-150 hover:opacity-90 ease-in-out"
			/>
		</div>
	</section>
</div>

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

	@media (min-width: 768px) {
		.phone-link a {
			pointer-events: none; /* disables clicking */
			color: inherit; /* removes link color */
			text-decoration: none;
			cursor: default;
		}
	}
</style>
