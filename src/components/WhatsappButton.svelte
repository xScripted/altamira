<script>
  const phone = "34634952132";
  const message =
    "¡Hola! Me gustaría solicitar información sobre vuestros servicios de estructuras.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
</script>

<a
  href={whatsappUrl}
  class="whatsapp-btn"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contactar por WhatsApp"
>
  <img width="60px" height="60px" src="whatsapp.webp" alt="" />
</a>

<style lang="scss">
  .whatsapp-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
      transform: scale(1.1);
    }
  }
</style>
