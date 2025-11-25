<script lang="ts">
	import BiggerPicture from 'bigger-picture';
	import 'bigger-picture/css';

	// Props to make the component reusable
	interface Props {
		photos: Array<{ src: string; alt: string }>;
		showMoreButton?: boolean;
		limit?: number;
	}

	let { photos, showMoreButton = false, limit }: Props = $props();

	// Apply limit if specified
	const displayPhotos = limit ? photos.slice(0, limit) : photos;

	let galleryContainer: HTMLDivElement;

	function setNaturalSize(img: HTMLImageElement) {
		const link = img.closest('a');
		if (!link) return;
		link.dataset.width = img.naturalWidth.toString();
		link.dataset.height = img.naturalHeight.toString();
	}

	$effect(() => {
		let bp = BiggerPicture({ target: document.body });
		let links = galleryContainer.querySelectorAll('a');

		function openGallery(e) {
			e.preventDefault();
			bp.open({
				items: links,
				el: e.currentTarget,
				maxZoom: 1
			});
		}

		links.forEach((link) => link.addEventListener('click', openGallery));

		return () => links.forEach((link) => link.removeEventListener('click', openGallery));
	});
</script>

<div bind:this={galleryContainer} class="grid grid-cols-2 lg:grid-cols-3 gap-2">
	{#each displayPhotos as p}
		<a
			href={p.src}
			data-img={p.src}
			data-alt={p.alt}
			class="block h-60 overflow-hidden shadow-lg cursor-pointer transition duration-100 ease-in-out hover:opacity-80"
		>
			<img
				src={p.src}
				alt={p.alt}
				loading="lazy"
				class="w-full h-full object-cover"
				onload={(e) => setNaturalSize(e.target)}
			/>
		</a>
	{/each}
</div>

{#if showMoreButton}
	<div class="flex justify-center mt-6">
		<a
			href="/galeria"
			class="inline-block px-6 py-3 text-white bg-gray-800 font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-200 ease-in-out"
		>
			Tovább a teljes galériához
		</a>
	</div>
{/if}
