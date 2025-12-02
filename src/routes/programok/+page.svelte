<script lang="ts">
	import { base } from '$app/paths';
	import { m } from '../../paraglide/messages';

	interface ProgramItem {
		title: string;
		description: string;
		image: string;
		imageAlt: string;
	}

	const programok: ProgramItem[] = [
		{
			title: m.program_vac_title(),
			description: m.program_vac_description(),
			image: '/assets/vac.jpg',
			imageAlt: m.program_vac_image_alt()
		},
		{
			title: m.program_szentendre_title(),
			description: m.program_szentendre_description(),
			image: '/assets/szentendre.jpg',
			imageAlt: m.program_szentendre_image_alt()
		},
		{
			title: m.program_visegrad_title(),
			description: m.program_visegrad_description(),
			image: '/assets/visegrad.jpg',
			imageAlt: m.program_visegrad_image_alt()
		},
		{
			title: m.program_esztergom_title(),
			description: m.program_esztergom_description(),
			image: '/assets/esztergom.jpg',
			imageAlt: m.program_esztergom_image_alt()
		},
		{
			title: m.program_holloko_title(),
			description: m.program_holloko_description(),
			image: '/assets/holloko.jpg',
			imageAlt: m.program_holloko_image_alt()
		},
		{
			title: m.program_botanikus_title(),
			description: m.program_botanikus_description(),
			image: '/assets/botanikus.jpg',
			imageAlt: m.program_botanikus_image_alt()
		},
		{
			title: m.program_medvefarm_title(),
			description: m.program_medvefarm_description(),
			image: '/assets/medve.jpg',
			imageAlt: m.program_medvefarm_image_alt()
		},
		{
			title: m.program_zebegeny_title(),
			description: m.program_zebegeny_description(),
			image: '/assets/zebegeny.jpg',
			imageAlt: m.program_zebegeny_image_alt()
		},
		{
			title: m.program_borzsony_title(),
			description: m.program_borzsony_description(),
			image: '/assets/borzsony.jpg',
			imageAlt: m.program_borzsony_image_alt()
		}
	];
</script>

<svelte:head>
	<title>{m.programs_title()} | {m.app_title()}</title>
	<meta name="description" content={m.programs_description()} />
</svelte:head>

<div class="w-full h-72 overflow-hidden shadow-xl mb-6">
	<img
		src={base + '/assets/vac_banner.jpg'}
		alt={m.programs_banner_alt()}
		class="w-full h-full object-cover object-center"
	/>
</div>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
	<h2 class="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4 mt-16 mb-12">
		{m.programs_title()}
	</h2>
	<section class="space-y-8">
		{#each programok as program, index}
			<div
				class="flex flex-col md:flex-row gap-8 items-center {index % 2 !== 0
					? 'md:flex-row-reverse'
					: ''}"
			>
				<div class="w-full md:w-2/5">
					<img
						src={base + program.image}
						alt={program.imageAlt}
						class="w-full h-64 object-cover rounded"
					/>
				</div>
				<div class="w-full md:w-3/5">
					<h3 class="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-orange-500 pb-2">
						{program.title}
					</h3>
					<p class="text-gray-700">
						{program.description}
					</p>
				</div>
			</div>
		{/each}
	</section>
	<div class="flex justify-center mt-16">
		<a
			href={base + '/'}
			class="inline-block px-6 py-3 text-gray-800 bg-gray-200 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-200 ease-in-out"
		>
			{m.back_to_home()}
		</a>
	</div>
</div>
