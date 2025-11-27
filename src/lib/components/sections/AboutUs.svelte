<script>
	import { base } from '$app/paths';
</script>

<section id="rolunk" class="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-12">
	<!-- Text & main image -->
	<div class="lg:col-span-9 space-y-6">
		<h2 class="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">Rólunk</h2>
		<div class="flex flex-col sm:flex-row sm:items-start gap-4">
			<img
				src={base + '/assets/rolunk.jpg'}
				alt="Rólunk"
				class="rounded-sm sm:w-1/3 w-full object-cover"
			/>
			<div class="text-gray-600 sm:w-1/2">
				<p>
					Ötgyermekes francia-magyar család vagyunk. 2005 májusa óta élünk Magyarországon. Korábban
					Párizsban, Versailles-ban, majd néhány évig Provence-ban laktunk. Régi vágyunk volt egy
					vendégház üzemeltetése, ahol nem csak szállást kínálunk a hozzánk betérőknek, hanem
					barátságot, nyelvtudást, házi finomságokat is – és talán sikerült a dél-francia
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
		<a href="https://www.booking.com/hotel/hu/kaboca-vendeghaz.hu.html" target="_blank">
			<img
				src={base + '/assets/bookingaward2025.png'}
				alt="Booking Award"
				class="h-32 w-auto rounded-lg transition duration-150 hover:opacity-90 ease-in-out"
			/>
		</a>
	</div>
</section>
