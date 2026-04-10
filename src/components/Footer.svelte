<script>
  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer__container g-wrapper">
    <div class="footer__links">
      <a href="/cookies">Cookies</a>
      <a href="/privacidad">Privacidad</a>
      <a href="/trabaja-con-nosotros">Trabaja con nosotros</a>
      <a
        href="https://www.linkedin.com/company/altamira-construcciones"
        target="_blank">LinkedIn</a
      >
    </div>
    <div class="copyright">© {currentYear} Altamira Construcciones.</div>
  </div>
</footer>

<style lang="scss">
  .footer {
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;

      @media (max-width: 1100px) {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
        padding-top: 30px;
        padding-bottom: 30px;
      }
    }
  }

  .copyright {
    font-family: var(--fontSecondary);
    font-size: 0.8rem;
    color: var(--colorText2);
    font-weight: 400;
  }

  .footer__links {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 1100px) {
      flex-direction: column;
      gap: 1rem;
    }

    a {
      font-family: var(--fontSecondary);
      font-size: 0.8rem;
      color: var(--colorText2);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: color 0.2s ease;

      &:hover {
        color: var(--colorPrimary);
      }
    }
  }
</style>
