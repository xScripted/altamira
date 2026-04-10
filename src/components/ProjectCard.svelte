<script>
  import ImageSlider from "./ImageSlider.svelte";
  let {
    title,
    location,
    images = [],
    category,
    description,
    meta,
    client,
    isReversed = false,
  } = $props();
</script>

<div class="project-card" class:is-reversed={isReversed}>
  <div class="image-box">
    <div class="category-tag">{category}</div>
    <ImageSlider {images} />
  </div>
  <div class="info-box">
    <span class="location">{location}</span>
    <h3>{@html title}</h3>
    <p class="description">{description}</p>

    {#if meta}
      <p class="meta">{meta}</p>
    {/if}

    {#if client}
      <div class="client-info">
        <span class="label">Constructora:</span>
        <span class="value">{client}</span>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .project-card {
    display: flex;
    gap: 40px;
    align-items: center;

    @media (max-width: 1100px) {
      gap: 40px;
    }

    @media (max-width: 1100px) {
      flex-direction: column;
      gap: 30px;
      align-items: flex-start;
      padding: 30px 0;
    }

    &.is-reversed {
      @media (min-width: 1101px) {
        flex-direction: row-reverse;
      }
    }

    &:hover {
      .image-box {
        border-color: var(--colorPrimary);
      }
    }

    .image-box {
      flex: 1;
      aspect-ratio: 16/10;
      overflow: hidden;
      position: relative;
      border: 1px solid var(--colorBorder);
      transition: border-color 0.3s ease;

      .category-tag {
        position: absolute;
        top: 20px;
        left: 20px;
        background: var(--colorSecondary);
        padding: 5px 15px;
        font-family: var(--fontSecondary);
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        z-index: 2;
        color: var(--colorText);
      }
    }

    .info-box {
      flex: 1;

      .location {
        font-family: var(--fontSecondary);
        font-size: 13px;
        color: var(--colorPrimary);
        text-transform: uppercase;
        letter-spacing: 3px;
        font-weight: 700;
        margin-bottom: 15px;
        display: block;
      }

      h3 {
        font-size: 42px;
        margin-bottom: 25px;
        color: var(--colorText);
        line-height: 1.1;
        font-family: var(--fontPrimary);
      }

      .description {
        font-size: 18px;
        color: var(--colorText2);
        line-height: 1.6;
        margin-bottom: 30px;
        font-family: var(--fontSecondary);
      }

      .meta {
        font-family: var(--fontSecondary);
        font-size: 15px;
        color: var(--colorText2);
        opacity: 0.8;
        margin-bottom: 25px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-weight: 500;
      }

      .client-info {
        display: flex;
        gap: 10px;
        align-items: baseline;
        font-family: var(--fontSecondary);
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding-top: 20px;
        border-top: 1px solid var(--colorBorder);

        .label {
          color: var(--colorPrimary);
          font-weight: 700;
        }

        .value {
          color: var(--colorText);
          font-weight: 600;
        }
      }
    }
  }
</style>
