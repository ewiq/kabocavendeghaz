<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';
	import { allPhotos } from '$lib/data/galleryData';
	import { base } from '$app/paths';
	import HomepageGreeting from '$lib/components/sections/HomepageGreeting.svelte';
	import Prices from '$lib/components/sections/Prices.svelte';
	import Services from '$lib/components/sections/Services.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import AboutUs from '$lib/components/sections/AboutUs.svelte';
	import Feedbacks from '$lib/components/sections/Feedbacks.svelte';

	let limit = $state(9);

	function updateLimit() {
		limit = window.innerWidth < 640 ? 8 : 9; // sm breakpoint (640px)
	}

	$effect(() => {
		updateLimit();

		window.addEventListener('resize', updateLimit);

		return () => window.removeEventListener('resize', updateLimit);
	});
</script>

<div class="w-full h-72 overflow-hidden shadow-xl mb-6">
	<img
		src={base + '/photos/1751633251787.jpg'}
		alt="Kabóca vendégház nappalija"
		class="w-full h-full object-cover object-center"
	/>
</div>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
	<HomepageGreeting></HomepageGreeting>

	<section id="galeria" class="my-12 scroll-mt-32">
		<Gallery photos={allPhotos} showMoreButton={true} {limit} />
	</section>

	<Prices></Prices>
	<Services></Services>
	<Contact></Contact>
	<AboutUs></AboutUs>
	<Feedbacks></Feedbacks>
</div>
