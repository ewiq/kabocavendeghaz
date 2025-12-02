<script lang="ts">
	import { feedbacks } from '$lib/data/feedbackData';
	import { ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-svelte';
	import { m } from '../../../paraglide/messages';

	let currentIndex = $state(0);
	let autoplayInterval: ReturnType<typeof setInterval>;
	let isDragging = $state(false);
	let startX = $state(0);
	let currentTranslate = $state(0);
	let prevTranslate = $state(0);
	let animationID: number = 0;

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
	let sliderElement: HTMLDivElement;

	function pauseAutoplay() {
		clearInterval(autoplayInterval);
	}

	function resumeAutoplay() {
		clearInterval(autoplayInterval);
		autoplayInterval = setInterval(nextSlide, 8000);
	}

	// Touch and mouse drag handlers
	function handleDragStart(e: MouseEvent | TouchEvent) {
		isDragging = true;
		startX = getPositionX(e);
		pauseAutoplay();

		if (e.type === 'mousedown') {
			e.preventDefault();
		}
	}

	function handleDragMove(e: MouseEvent | TouchEvent) {
		if (!isDragging) return;

		const currentPosition = getPositionX(e);
		currentTranslate = prevTranslate + currentPosition - startX;
	}

	function handleDragEnd() {
		if (!isDragging) return;

		isDragging = false;
		cancelAnimationFrame(animationID);

		const movedBy = currentTranslate - prevTranslate;

		// Threshold for slide change (30% of container width)
		const threshold = carouselElement?.offsetWidth * 0.3 || 100;

		if (movedBy < -threshold && currentIndex < feedbacks.length - 1) {
			nextSlide();
		} else if (movedBy > threshold && currentIndex > 0) {
			prevSlide();
		}

		currentTranslate = 0;
		prevTranslate = 0;

		resumeAutoplay();
	}

	function getPositionX(e: MouseEvent | TouchEvent): number {
		return e.type.includes('mouse')
			? (e as MouseEvent).pageX
			: (e as TouchEvent).touches[0].clientX;
	}

	$effect(() => {
		// Reset translate when index changes
		currentTranslate = 0;
		prevTranslate = 0;
	});
</script>

<section id="visszajelzesek" class="scroll-mt-32 my-12">
	<div class="mb-8">
		<h2 class="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4 inline-block">
			{m.testimonials_title()}
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
				bind:this={sliderElement}
				role="button"
				tabindex="0"
				class="flex transition-transform duration-500 ease-in-out touch-pan-y select-none"
				class:!transition-none={isDragging}
				style="transform: translateX(calc(-{currentIndex * 100}% + {isDragging
					? currentTranslate
					: 0}px)); cursor: {isDragging ? 'grabbing' : 'grab'}"
				onmousedown={handleDragStart}
				onmousemove={handleDragMove}
				onmouseup={handleDragEnd}
				onmouseleave={handleDragEnd}
				ontouchstart={handleDragStart}
				ontouchmove={handleDragMove}
				ontouchend={handleDragEnd}
			>
				{#each feedbacks as feedback (feedback.id)}
					<div class="w-full shrink-0 px-4 md:py-4">
						<div
							class="rounded-lg p-4 md:p-6 h-full flex flex-col items-center justify-center text-center"
						>
							<!-- Rating stars -->
							<div class="flex justify-center mb-3">
								{#each Array(5) as _, i}
									{#if i < feedback.rating}
										<Star class="w-5 h-5 text-yellow-400 fill-current" />
									{:else}
										<Star class="w-5 h-5 text-gray-300" />
									{/if}
								{/each}
							</div>

							<p
								class="text-gray-600 text-base md:text-lg italic text-center mb-4 leading-relaxed max-w-2xl"
							>
								"{feedback.text}"
							</p>

							<div class="text-center">
								<div class="font-semibold text-gray-800 text-base md:text-lg">{feedback.name}</div>
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
			aria-label={m.previous_testimonial()}
		>
			<ChevronLeft class="w-6 h-6" />
		</button>

		<button
			onclick={nextSlide}
			class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-orange-500 hover:cursor-pointer text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
			aria-label={m.next_testimonial()}
		>
			<ChevronRight class="w-6 h-6" />
		</button>

		<div class="flex justify-center mt-4 space-x-2">
			{#each feedbacks as _, index (index)}
				<button
					onclick={() => goToSlide(index)}
					class="w-3 h-3 rounded-full transition-all duration-300 {index === currentIndex
						? 'bg-orange-500'
						: 'bg-gray-300'}"
					aria-label={m.go_to_testimonial({ index: index + 1 })}
				></button>
			{/each}
		</div>
	</div>
</section>
