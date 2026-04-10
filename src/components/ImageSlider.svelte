<script>
  import { onMount, onDestroy } from "svelte";

  let { images = [] } = $props();

  let currentIndex = $state(0);
  let interval;

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % images.length;
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  };

  const startAutoPlay = () => {
    interval = setInterval(nextSlide, 5000);
  };

  const resetAutoPlay = () => {
    clearInterval(interval);
    startAutoPlay();
  };

  onMount(() => {
    startAutoPlay();
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="slider-container">
  <div class="slides" style="transform: translateX(-{currentIndex * 100}%)">
    {#each images as img, i}
      <div class="slide">
        <img src={img} alt="Obra {i + 1}" />
      </div>
    {/each}
  </div>

  <button
    class="nav-btn prev"
    onclick={() => {
      prevSlide();
      resetAutoPlay();
    }}
    aria-label="Anterior"
  >
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path
        fill="currentColor"
        d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
      />
    </svg>
  </button>
  <button
    class="nav-btn next"
    onclick={() => {
      nextSlide();
      resetAutoPlay();
    }}
    aria-label="Siguiente"
  >
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path
        fill="currentColor"
        d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
      />
    </svg>
  </button>
</div>

<style lang="scss">
  .slider-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000;
  }

  .slides {
    display: flex;
    height: 100%;
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .slide {
    min-width: 100%;
    height: 100%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.6);
    color: #222;
    border: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    border-radius: 50%;

    svg {
      display: block;
      fill: currentColor;
    }

    &:hover {
      color: var(--colorPrimary) !important;
      transform: translateY(-50%) scale(1.1);
    }

    &.prev {
      left: 10px;
    }
    &.next {
      right: 10px;
    }
  }
</style>
