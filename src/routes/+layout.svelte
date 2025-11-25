<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/icon.png';
	import { Menu, X } from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	let { children } = $props();

	const navItems = [
		{ name: 'Kezdőlap', href: '/' },
		{ name: 'Galéria', href: '/galeria' },
		{ name: 'Árak', href: '/#arak' },
		{ name: 'Elérhetőség', href: '/#elerhetoseg' },
		{ name: 'Rólunk', href: '/#rolunk' }
	];

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

		// Cleanup function runs when the effect is invalidated
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<svelte:head>
	<title>Kabóca Vendégház</title>
	<link rel="icon" href={favicon} />
	<link
		href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="font-raleway min-h-screen flex flex-col">
	<header class="bg-white shadow-md sticky top-0 z-10">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-end pt-2 relative">
				<a href="/" class="flex items-center space-x-3">
					<img
						src="/assets/cigale.png"
						alt="Kabóca Vendégház logó"
						class="cicada-logo h-16 w-auto sm:h-20 hover:scale-105 transition duration-150 ease-in-out"
					/>
					<h1 class="text-4xl sm:text-4xl text-gray-800 block">Kabóca Vendégház</h1>
				</a>

				<nav class="hidden lg:flex space-x-8">
					{#each navItems as item}
						<a
							href={item.href}
							class="text-lg font-medium text-gray-600 hover:text-orange-600 transition duration-150 ease-in-out uppercase tracking-wider"
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

				{#if isMobileMenuOpen}
					<div
						transition:slide={{ duration: 150 }}
						class="lg:hidden absolute top-full -right-4 z-20"
					>
						<div class="px-4 pt-4 pb-4 space-y-2 sm:px-3 bg-gray-50 border-t">
							{#each navItems as item}
								<a
									href={item.href}
									onclick={() => (isMobileMenuOpen = false)}
									class="block px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 uppercase tracking-wider"
								>
									{item.name}
								</a>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</header>

	<main class="grow">
		{@render children()}
	</main>

	<footer class="bg-gray-800 text-white mt-auto">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
				<div>
					<h3 class="text-xl mb-4 text-orange-400">Elérhetőség</h3>
					<p class="text-gray-300">Vác, Dózsa György út 28</p>
					<p class="text-gray-300 mb-2">pellet.philippe@gmail.com</p>
					<p class="text-gray-300">+ 36 30 493 2559</p>
					<p class="text-gray-300">+ 36 30 384 6843</p>
				</div>

				<div>
					<h3 class="text-xl mb-4 text-orange-400">Információ</h3>
					<p class="text-gray-300 mb-4"><b>NTAK regisztrációs szám:</b> MA19004627</p>
					<a href="/adatvedelmi" class="text-gray-300 hover:text-orange-400 transition duration-150"
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
