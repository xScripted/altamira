<script>
  let {
    title,
    location,
    image,
    category,
    description,
    isReversed = false,
  } = $props();
</script>

<div class="project-card" class:is-reversed={isReversed}>
  <div class="image-box">
    <div class="category-tag">{category}</div>
    <img src={image} alt={title} />
  </div>
  <div class="info-box">
    <span class="location">{location}</span>
    <h3>{title}</h3>
    <p class="description">{description}</p>
  </div>
</div>

<style lang="scss">
  .project-card {
    display: flex;
    gap: 40px;
    align-items: center;
    padding: 40px 0;

    @media (max-width: 992px) {
      gap: 40px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 30px;
      align-items: flex-start;
      padding: 30px 0;
    }

    &.is-reversed {
      @media (min-width: 769px) {
        flex-direction: row-reverse;
      }
    }

    &:hover {
      .image-box img {
        filter: grayscale(0);
      }
    }

    .image-box {
      flex: 1;
      aspect-ratio: 16/10;
      overflow: hidden;
      position: relative;

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

      img {
        transition: 0.3s ease;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(1) opacity(0.8);
        border: 1px solid var(--colorBorder);
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
        margin-bottom: 40px;
        font-family: var(--fontSecondary);
      }
    }
  }
</style>
