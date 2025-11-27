<script lang="ts">
	import { feedbacks } from '$lib/data/feedbackData';
	import { ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-svelte';

	let currentIndex = $state(0);
	let autoplayInterval: number;

	const nextSlide = () => {
		currentIndex = (currentIndex + 1) % feedbacks.length;
	};

	const prevSlide = () => {
		currentIndex = (currentIndex - 1 + feedbacks.length) % feedbacks.length;
	};

	const goToSlide = (index: number) => {
		currentIndex = index;
	};

	$effect(() => {
		autoplayInterval = setInterval(nextSlide, 8000);

		return () => {
			clearInterval(autoplayInterval);
		};
	});

	let carouselElement: HTMLDivElement;

	function pauseAutoplay() {
		clearInterval(autoplayInterval);
	}

	function resumeAutoplay() {
		clearInterval(autoplayInterval);
		autoplayInterval = setInterval(nextSlide, 8000);
	}
</script>

<section id="visszajelzesek" class="scroll-mt-32 my-12">
	<div class="mb-8">
		<h2 class="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4 inline-block">
			Vélemények
		</h2>
	</div>

	<div
		class="relative max-w-4xl mx-auto"
		role="banner"
		onmouseenter={pauseAutoplay}
		onmouseleave={resumeAutoplay}
		bind:this={carouselElement}
	>
		<div class="overflow-hidden rounded-lg bg-white md:shadow-lg">
			<div
				class="flex transition-transform duration-500 ease-in-out"
				style="transform: translateX(-{currentIndex * 100}%)"
			>
				{#each feedbacks as feedback (feedback.id)}
					<div class="w-full shrink-0 px-4 py-2">
						<div
							class="rounded-lg p-6 h-full flex flex-col items-center justify-center text-center"
						>
							<!-- Rating stars -->
							<div class="flex justify-center mb-4">
								{#each Array(5) as _, i}
									{#if i < feedback.rating}
										<Star class="w-5 h-5 text-yellow-400 fill-current" />
									{:else}
										<Star class="w-5 h-5 text-gray-300" />
									{/if}
								{/each}
							</div>

							<p class="text-gray-600 text-lg italic text-center mb-6 leading-relaxed max-w-2xl">
								"{feedback.text}"
							</p>

							<div class="text-center">
								<div class="font-semibold text-gray-800 text-lg">{feedback.name}</div>
								<div class="text-gray-500 text-sm flex items-center justify-center gap-1 mt-1">
									<MapPin class="w-4 h-4" />
									{feedback.country}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Navigation arrows -->
		<button
			onclick={prevSlide}
			class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-orange-500 hover:cursor-pointer text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
			aria-label="Előző vélemény"
		>
			<ChevronLeft class="w-6 h-6 " />
		</button>

		<button
			onclick={nextSlide}
			class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-orange-500 hover:cursor-pointer text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
			aria-label="Következő vélemény"
		>
			<ChevronRight class="w-6 h-6" />
		</button>

		<div class="flex justify-center mt-6 space-x-2">
			{#each feedbacks as _, index (index)}
				<button
					onclick={() => goToSlide(index)}
					class="w-3 h-3 rounded-full transition-all duration-300 {index === currentIndex
						? 'bg-orange-500'
						: 'bg-gray-300'}"
					aria-label={`Ugrás a véleményre ${index + 1}`}
				></button>
			{/each}
		</div>
	</div>
</section>
