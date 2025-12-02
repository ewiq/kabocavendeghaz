<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';
	import { allPhotos } from '$lib/data/galleryData';
	import { base } from '$app/paths';
	import { m } from '../../paraglide/messages';
</script>

<svelte:head>
	<title>{m.gallery_title()} | {m.app_title()}</title>
	<meta name="description" content={m.gallery_description()} />
</svelte:head>

<div class="w-full h-72 overflow-hidden shadow-xl mb-6">
	<img
		src={base + '/photos/1751633251787.jpg'}
		alt={m.gallery_banner_alt()}
		class="w-full h-full object-cover object-center"
	/>
</div>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
	<h2 class="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4 mt-16 mb-8">
		{m.gallery_title()}
	</h2>

	<section class="my-12">
		<Gallery photos={allPhotos} showMoreButton={false} />
	</section>

	<div class="flex justify-center mt-12">
		<a
			href={base + '/'}
			class="inline-block px-6 py-3 text-gray-800 bg-gray-200 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-200 ease-in-out"
		>
			{m.back_to_home()}
		</a>
	</div>
</div>
