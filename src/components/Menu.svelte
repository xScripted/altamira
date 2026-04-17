<script>
  import { onMount } from "svelte";

  let isScrolled = $state(true);
  let isOpen = $state(false);
  let activeSection = $state("");
  let isHomepage = $state(false);

  if (typeof window !== "undefined") {
    // Check if we are on the homepage
    isHomepage = window.location.pathname === "/";
  }

  onMount(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      rootMargin: "-20% 0px -70% 0px", // Trigger when section hits upper-middle
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection = entry.target.id;
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  });

  const toggleMenu = () => {
    isOpen = !isOpen;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => {
    isOpen = false;
    document.body.style.overflow = "auto";
  };
</script>

<header class="header" class:scrolled={isScrolled} class:is-open={isOpen}>
  <div class="borders type2"></div>
  <div class="header__container g-wrapper">
    <a href="/" class="logo" onclick={closeMenu}>
      <img height="40px" src="/logo.svg" alt="ALTAMIRA Logo" />
    </a>

    <button
      class="burger"
      onclick={toggleMenu}
      aria-label="Menu"
      aria-expanded={isOpen}
    >
      <span class="burger__line"></span>
      <span class="burger__line"></span>
      <span class="burger__line"></span>
    </button>

    <nav class="nav" class:is-open={isOpen}>
      <a
        href="/#filosofia"
        class="nav__link"
        class:active={activeSection === "filosofia"}
        onclick={closeMenu}>Conócenos</a
      >
      <a
        href="/#servicios"
        class="nav__link"
        class:active={activeSection === "servicios"}
        onclick={closeMenu}>Servicios</a
      >
      <a
        href="/#proyectos"
        class="nav__link"
        class:active={activeSection === "proyectos"}
        onclick={closeMenu}>Proyectos</a
      >
      <a
        href="/#contacto"
        class="nav__link"
        class:active={activeSection === "contacto"}
        onclick={closeMenu}>Contacto</a
      >
    </nav>
  </div>
</header>

<style lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--menuHeight);
    display: flex;
    align-items: center;
    z-index: 100;
    background-color: var(--colorSecondary);
    border-bottom: 1px solid var(--colorBorder);
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease;

    &.scrolled,
    &.is-open {
      background-color: var(--colorSecondary);
      border-bottom: 1px solid var(--colorBorder);
    }

    &__container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    }
  }

  .burger {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 101;

    &__line {
      width: 2rem;
      height: 0.15rem;
      background: var(--colorText);
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      .header.scrolled &,
      .header.is-open & {
        background: var(--colorText);
      }
    }
  }

  .header.is-open {
    .burger__line {
      &:first-child {
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
        transform: translateX(20px);
      }
      &:last-child {
        transform: rotate(-45deg);
      }
    }
  }

  .nav {
    display: flex;
    gap: 2rem;

    &__link {
      font-family: var(--fontSecondary);
      font-size: 0.85rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--colorText2);
      transition: color 0.2s ease;
      position: relative;

      .header.scrolled &,
      .header.is-open & {
        color: var(--colorText2);
      }

      &:hover,
      &.active {
        color: var(--colorPrimary);

        &::after {
          width: 100%;
        }
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--colorPrimary);
        transition: width 0.3s ease;
      }
    }
  }

  @media (max-width: 1100px) {
    .burger {
      display: flex;
    }

    .nav {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100vh;
      background-color: var(--colorSecondary);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      transition: transform 0.4s cubic-bezier(0.77, 0.2, 0.05, 1);
      transform: translateX(100%);
      z-index: 100;

      &.is-open {
        transform: translateX(0);
      }

      &__link {
        font-size: 1.5rem;
        color: var(--colorText);
      }
    }
  }
</style>
