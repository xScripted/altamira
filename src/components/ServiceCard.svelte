<script>
  let { title, description, index } = $props();
  const paddedIndex = $derived((index + 1).toString().padStart(2, "0"));
</script>

<div class="service-card">
  <div class="card-bg-icon"></div>
  <div class="card-header">
    <span class="index">{paddedIndex}</span>
    <div class="line"></div>
  </div>
  <div class="card-content">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
</div>

<style lang="scss">
  .service-card {
    background: var(--colorSecondary);
    border: 1px solid var(--colorBorder);
    padding: 60px 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--colorPrimary);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    }

    &:hover {
      border-color: var(--colorPrimary);

      &::before {
        transform: scaleX(1);
      }

      .card-header {
        .index {
          color: var(--colorPrimary);
        }
        .line {
          width: 80px;
          background: var(--colorPrimary);
        }
      }

      .card-bg-icon {
        transform: scale(1.1) rotate(-5deg);
        opacity: 0.08;
        color: var(--colorPrimary);
      }
    }
  }

  .card-bg-icon {
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 200px;
    height: 200px;
    opacity: 0.03;
    pointer-events: none;
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    color: var(--colorText);
    z-index: 0;
  }

  .card-header,
  .card-content {
    position: relative;
    z-index: 1;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;

    .index {
      font-family: var(--fontSecondary);
      font-size: 16px;
      font-weight: 700;
      color: var(--colorText2);
      transition: color 0.5s ease;
    }

    .line {
      height: 1px;
      width: 40px;
      background: var(--colorBorder);
      transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  .card-content {
    flex-grow: 1;

    h3 {
      font-family: var(--fontPrimary);
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 25px;
      color: var(--colorText);
      transition: color 0.5s ease;
      line-height: 1.2;
    }

    p {
      font-family: var(--fontSecondary);
      font-size: 17px;
      line-height: 1.7;
      color: var(--colorText2);
      margin: 0;
    }
  }

  :global(.dark-mode) .service-card {
    background: var(--colorSecondary);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

    &:hover {
      box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
    }
  }
</style>
