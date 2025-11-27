<script>
	import { base } from '$app/paths';
</script>

<section class="my-12">
	<h2 class="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4 mb-8">
		További szolgáltatások
	</h2>

	<div class="grid grid-cols-1 md:grid-cols-5 gap-8">
		<!-- Left column: A ház -->
		<div class="md:col-span-3">
			<h3 class="text-xl font-semibold text-gray-700 mb-2">A ház</h3>
			<p class="text-gray-700 mb-4">
				A ház Vác belvárosától 10 perc sétányira található, a város kertvárosi, csöndesebb részében,
				száz méterre a Dunaparttól és a kerékpárúttól. Kisebb baráti társaságok vagy gyermekes (akár
				3-4-5 gyermekes) családok fogadására alkalmas. Az alsó szinten egy nagy amerikai konyhás
				nappali és egy veranda várja a vendégeket. Itt helyezkedik el a szülői háló. A második
				szinten egy hálószoba található, illetve egy nagy nyitott tér gyermekjátékokkal. Mindkét
				szinten van fürdőszoba, lent külön WC-vel.
			</p>
			<div class="flex gap-2">
				<img
					src={base + '/photos/01.jpg'}
					alt="A ház"
					class="rounded sm:w-1/2 w-full object-cover"
				/>
				<img
					src={base + '/photos/thumb/1751633250664_thumb.jpg'}
					alt="A borospince"
					class="rounded sm:w-1/2 w-full object-cover"
				/>
			</div>
		</div>

		<!-- Right column: Borospince and Felszerelések -->
		<div class="space-y-4 md:col-span-2">
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
				<p class="text-gray-700 mb-2">
					Gyermekbarát szolgáltatások: Utazóágy, etetőszék, gyermekjátékok.
				</p>
				<p class="text-gray-700">
					Babysitter-szolgáltatást is vállalunk térítés ellenében kisgyermekes vendégeinknek.
				</p>
			</div>
		</div>
	</div>
</section>
