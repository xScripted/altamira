<script>
  const collaborators = [
    { name: "Sacyr", logo: "/logos/sacyr.svg" },
    { name: "ACS", logo: "/logos/acs.svg" },
    { name: "Ferrovial", logo: "/logos/ferrovial.svg" },
    { name: "Acciona", logo: "/logos/acciona.svg" },
    { name: "FCC", logo: "/logos/fcc.svg" },
    { name: "OHL", logo: "/logos/ohl.svg" },
  ];
</script>

<div class="collaborators-section">
  <div class="logos-grid">
    {#each collaborators as collab}
      <span class="collab-item">{collab.name}</span>
    {/each}
  </div>
</div>

<style lang="scss">
  .collaborators-section {
    text-align: center;

    .logos-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px 80px;

      .collab-item {
        font-size: 28px;
        color: var(--colorText);
        opacity: 0.25;
        transition: all 0.4s ease;
        cursor: default;
        font-weight: 700;

        &:hover {
          opacity: 1;
          color: var(--colorPrimary);
          transform: translateY(-3px);
        }
      }

      @media (max-width: 768px) {
        gap: 30px 40px;
        .collab-item {
          font-size: 20px;
        }
      }
    }
  }
</style>
