<script lang="ts">
	import BiggerPicture from 'bigger-picture';
	import 'bigger-picture/css';
	import { base } from '$app/paths';
	import { m } from '../../paraglide/messages';

	interface Photo {
		src: string;
		thumbSrc: string;
		alt: string;
		height: number;
		width: number;
	}

	interface Props {
		photos: Array<Photo>;
		showMoreButton?: boolean;
		limit?: number;
	}

	let { photos, showMoreButton = false, limit }: Props = $props();

	const displayPhotos = limit ? photos.slice(0, limit) : photos;

	let galleryContainer: HTMLDivElement;
	let bp: ReturnType<typeof BiggerPicture> | undefined;

	function openGallery(e: MouseEvent) {
		e.preventDefault();
		const target = e.currentTarget as HTMLAnchorElement;
		if (!bp) return;

		const photo = displayPhotos.find((p) => base + p.src === target.getAttribute('href'));
		if (!photo) return;

		bp.open({
			items: displayPhotos.map((p) => ({
				img: base + p.src,
				thumb: base + p.thumbSrc,
				alt: p.alt,
				maxZoom: 1,
				width: p.width,
				height: p.height,
				element: galleryContainer.querySelector(`a[href="${base + p.src}"]`) ?? undefined
			})),
			el: target
		});
	}

	$effect(() => {
		bp = BiggerPicture({ target: document.body });
	});
</script>

<div bind:this={galleryContainer} class="grid grid-cols-2 lg:grid-cols-3 gap-2">
	{#each displayPhotos as p}
		<a
			href={base + p.src}
			data-img={base + p.src}
			data-alt={p.alt}
			class="block h-60 overflow-hidden shadow-lg cursor-pointer transition duration-100 ease-in-out hover:opacity-80"
			onclick={openGallery}
		>
			<img src={base + p.thumbSrc} alt={p.alt} loading="lazy" class="w-full h-full object-cover" />
		</a>
	{/each}
</div>

{#if showMoreButton}
	<div class="flex justify-center mt-6">
		<a
			href={base + '/galeria'}
			class="inline-block px-6 py-3 text-white bg-gray-800 font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-200 ease-in-out"
		>
			{m.view_full_gallery()}
		</a>
	</div>
{/if}
