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

      @media (max-width: 600px) {
        flex-direction: column;
        text-align: center;
      }
    }
  }

  .logo {
    font-family: var(--fontPrimary);
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 0.1em;
    color: var(--colorText);
    text-transform: uppercase;
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
