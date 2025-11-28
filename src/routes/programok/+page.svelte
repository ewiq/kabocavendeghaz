<script lang="ts">
	import { base } from '$app/paths'; // Az index.html alapján összeállított program adatok

	interface ProgramItem {
		title: string;
		description: string;
		image: string;
	}

	const programok: ProgramItem[] = [
		{
			title: 'Vác',
			description:
				'Vác a Dunakanyarnak egyik kevéssé ismert, rejtett kincse. A város ezeréves múltra tekint vissza. Távol a turisták forgatagától felfedezhetjük Vác számos templomát, barokk főterét, lenyűgöző dunaparti sétányát, az ország egyetlen diadalívét…',
			image: '/assets/vac.jpg'
		},
		{
			title: 'Szentendre',
			description:
				'A túlparton elhelyezkedő művészváros ideális célpont mindazoknak, akik szeretik a múzeumokat, a hangulatos kis kávéházakat, a kézműves portékákat kínáló árusokat.',
			image: '/assets/szentendre.jpg'
		},
		{
			title: 'Visegrád',
			description:
				'Visegrád 20 kilométerre északra fekszik a Duna túlsó partján. Mátyás király korabeli fellegvára lenyűgöző látványt kínál, akár alulról tekintünk fölfelé, akár a fellegvárból csodáljuk a dunai panorámát. Kihagyhatatlan látványosság a nemrégiben felújított reneszánsz királyi palota is.',
			image: '/assets/visegrad.jpg'
		},
		{
			title: 'Esztergom',
			description:
				'Esztergom a Dunakanyar északi kapuja. Érseki bazilikája fenséges látványként emelkedik a város fölé – tanúskodva a város múltjáról és egyházi központként betöltött szerepéről.',
			image: '/assets/esztergom.jpg'
		},
		{
			title: 'Hollókő',
			description:
				'Magyarország legszebb faluja Váctól 80 kilométerre található. Hollókő a Világörökség része.',
			image: '/assets/holloko.jpg'
		},
		{
			title: 'A vácrátóti botanikus kert',
			description:
				'Váctól 13 kilométerre található az ország egyik legszebb, legfajgazdagabb botanikus kertje.',
			image: '/assets/botanikus.jpg'
		},
		{
			title: 'A veresegyházi medvefarm',
			description:
				'Különleges élmény a gyerekeknek – az ország egyetlen medveparkja, 20 km-re Váctól',
			image: '/assets/medve.jpg'
		},
		{
			title: 'Zebegény',
			description:
				'A festők faluja – és valóban festői kis falu a Duna bal partján. Itt élt és alkotott Szőnyi István Kossuth-díjas festőművész. Háza ma múzeumként látogatható. A település kiemelkedő látnivalója a Kós Károly tervezte szecessziós Havas Boldogasszony plébániatemplom.',
			image: '/assets/zebegeny.jpg'
		},
		{
			title: 'Börzsöny',
			description:
				'Számos gyalogtúra-lehetőséget kínál a közeli Naszály, illetve a Börzsöny-hegység.',
			image: '/assets/borzsony.jpg'
		}
	];
</script>

<svelte:head>
	<title>Programok | Kabóca Vendégház</title>
	<meta
		name="description"
		content="Fedezze fel Vác és a Dunakanyar programlehetőségeit és látnivalóit"
	/>
</svelte:head>

<div class="w-full h-72 overflow-hidden shadow-xl mb-6">
	<img
		src={base + '/assets/vac_banner.jpg'}
		alt="Vác látképe"
		class="w-full h-full object-cover object-center"
	/>
</div>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
	<h2 class="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4 mt-16 mb-12">
		Programok és látnivalók
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
						alt={program.title + ' képe'}
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
			Vissza a főoldalra
		</a>
	</div>
</div>
