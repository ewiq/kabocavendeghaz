<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/icon.png';
	import { Menu, X } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import { base } from '$app/paths';
	import { afterNavigate } from '$app/navigation';

	afterNavigate(({ to, from }) => {
		if (to?.route.id !== from?.route.id && to?.url.hash === '') {
			window.scrollTo({ top: 0, behavior: 'instant' });
		}
	});

	let { children } = $props();

	function createUrl(href: string) {
		if (href.startsWith('/#')) {
			return base + href;
		}

		if (href === '/') {
			return base || '/';
		}

		return base + (href === '/' ? '' : href);
	}

	const navItems = [
		{ name: 'Kezdőlap', href: '/' },
		{ name: 'Galéria', href: '/galeria' },
		{ name: 'Árak', href: '/#arak' },
		{ name: 'Elérhetőség', href: '/#elerhetoseg' },
		{ name: 'Rólunk', href: '/#rolunk' },
		{ name: 'Programok', href: '/programok' }
	];

	const emailUser = 'pellet.philippe';
	const emailHost = 'gmail.com';

	const address = 'Vác, Dózsa György út 28.';

	const phone1 = '+36 ' + '30 ' + '493 ' + '2559';
	const phone2 = '+36 ' + '30 ' + '384 ' + '6843';

	const email = `${emailUser}@${emailHost}`;

	let isMobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	$effect(() => {
		const handleScroll = () => {
			if (isMobileMenuOpen) {
				isMobileMenuOpen = false;
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<svelte:head>
	<title>Kabóca Vendégház</title>
	<link rel="icon" href={favicon} />
	<meta
		name="description"
		content="Kabóca Vendégház Vácott. Kényelmes, gyermekbarát szálláshely a Dunakanyar szívében a kikapcsolódni vágyóknak."
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="font-raleway min-h-screen flex flex-col">
	<header class="bg-white shadow-md fixed top-0 z-10 m-auto w-full h-24">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
			<div class="flex justify-between items-end pb-2 relative h-full">
				<a href={createUrl('/')} class="flex items-center space-x-3">
					<img
						src={createUrl('/assets/cigale.png')}
						alt="logó"
						class="cicada-logo h-16 w-auto sm:h-20 hover:scale-105 transition duration-150 ease-in-out"
					/>
					<h1 class="text-3xl xl:text-4xl text-gray-800 block">Kabóca Vendégház</h1>
				</a>
				<nav class="hidden lg:flex space-x-6">
					{#each navItems as item}
						<a
							href={createUrl(item.href)}
							class="text-lg font-medium hover:text-orange-600 transition duration-150 ease-in-out uppercase tracking-wider"
						>
							{item.name}
						</a>
					{/each}
				</nav>
				<button
					onclick={toggleMobileMenu}
					class="lg:hidden p-2 text-gray-600 hover:text-orange-600"
				>
					{#if isMobileMenuOpen}
						<X class="h-8 w-8" />
					{:else}
						<Menu class="h-8 w-8" />
					{/if}
				</button>
			</div>
		</div>
		{#if isMobileMenuOpen}
			<div transition:slide={{ duration: 150 }} class="lg:hidden absolute top-24 right-0 z-20 w-64">
				<div class="px-4 pt-4 pb-4 space-y-2 bg-gray-50 border-t shadow-lg">
					{#each navItems as item}
						<a
							href={createUrl(item.href)}
							onclick={() => (isMobileMenuOpen = false)}
							class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-orange-600 hover:bg-gray-100 rounded-md transition duration-150 ease-in-out uppercase tracking-wider"
						>
							{item.name}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</header>

	<main class="grow mt-24">
		{@render children()}
	</main>

	<footer class="bg-gray-800 text-white mt-auto">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
				<div>
					<h3 class="text-xl mb-4 text-white font-bold">Elérhetőség</h3>
					<p class="text-gray-300 mb-2">{address}</p>
					<p class="text-gray-300 mb-2">{email}</p>
					<p class="text-gray-300">{phone1}</p>
					<p class="text-gray-300">{phone2}</p>
				</div>

				<div>
					<h3 class="text-xl mb-4 text-white font-bold">Információ</h3>
					<p class="text-gray-300 mb-4"><b>NTAK regisztrációs szám:</b> MA19004627</p>
					<a
						href={createUrl('/adatvedelmi')}
						class="text-gray-300 hover:text-orange-400 transition duration-150"
						>Adatvédelmi tájékoztató</a
					>
					<p class="text-gray-400 mt-4">&copy; {new Date().getFullYear()} Kabóca Vendégház</p>
				</div>
			</div>
		</div>
	</footer>
</div>

<style>
	@keyframes cicadaFunk {
		0% {
			transform: rotate(0) scale(1);
		}
		80% {
			transform: rotate(0) scale(1);
		}
		85% {
			transform: rotate(0) scale(1.06);
		}
		86% {
			transform: rotate(0) scale(1.05);
		}
		88% {
			transform: rotate(-4deg) scale(1.05);
		}
		91% {
			transform: rotate(4deg) scale(1.05);
		}
		94% {
			transform: rotate(-4deg) scale(1.05);
		}
		97% {
			transform: rotate(4deg) scale(1.05);
		}
		100% {
			transform: rotate(0) scale(1);
		}
	}
	.cicada-logo {
		animation: cicadaFunk 10s infinite;
	}
</style>
