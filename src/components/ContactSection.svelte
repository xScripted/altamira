<script>
</script>

<div class="contact-container">
  <div class="contact-info">
    <h4>Si buscas el presupuesto más barato, no nos contactes.</h4>
    <p>
      No somos los más rápidos haciendo presupuestos, pero sí los más
      concienzudos levantando estructuras. Si quieres que tu edificio no se
      convierta en una anécdota en las noticias, escríbenos y hablamos de lo que
      de verdad importa: que no se caiga.
    </p>

    <div class="info-item">
      <span class="label">Oficina</span>
      <span>Carrer de la Construcció, 12, 08001 Barcelona</span>
    </div>

    <div class="info-item">
      <span class="label">Email</span>
      <a href="mailto:info@altamira-construcciones.com"
        >info@altamira-construcciones.com</a
      >
    </div>

    <div class="info-item">
      <span class="label">Teléfono</span>
      <a href="tel:+34934567890">+34 934 567 890</a>
    </div>
  </div>

  <div class="contact-form">
    <form onsubmit={(e) => e.preventDefault()}>
      <div class="form-group">
        <label for="name">Nombre completo</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Tu nombre..."
          required
        />
      </div>
      <div class="form-group">
        <label for="email"
          >¿Dónde te envío la respuesta para que la veas hoy mismo?</label
        >
        <input
          type="email"
          id="email"
          name="email"
          placeholder="tu@email.com"
          required
        />
      </div>
      <div class="form-group">
        <label for="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          placeholder="Dinos qué quieres construir y por qué deberíamos hacerlo nosotros."
          required
        ></textarea>
      </div>
      <button type="submit">Cuéntame tu proyecto</button>
    </form>
  </div>
</div>

<style lang="scss">
  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 100px;
    margin-top: 60px;

    @media (max-width: 992px) {
      gap: 50px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 60px;
    }
  }

  .contact-info {
    h4 {
      font-family: var(--fontPrimary);
      font-size: 32px;
      margin-bottom: 30px;
      color: var(--colorText);
    }

    p {
      font-family: var(--fontSecondary);
      font-size: 18px;
      color: var(--colorText2);
      line-height: 1.6;
      margin-bottom: 40px;
    }

    .info-item {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 30px;

      .label {
        font-family: var(--fontSecondary);
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: var(--colorPrimary);
        font-weight: 700;
        display: block; // added for span
      }

      span,
      a {
        font-family: var(--fontSecondary);
        font-size: 20px;
        color: var(--colorText);
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: var(--colorPrimary);
        }
      }
    }
  }

  .contact-form {
    background: var(--colorSecondary);
    padding: 50px;
    border: 1px solid var(--colorBorder);

    @media (max-width: 480px) {
      padding: 30px;
    }

    .form-group {
      margin-bottom: 30px;

      label {
        display: block;
        font-family: var(--fontSecondary);
        font-size: 14px;
        margin-bottom: 10px;
        color: var(--colorText2);
      }

      input,
      textarea {
        width: 100%;
        padding: 15px 0;
        background: transparent;
        border: none;
        border-bottom: 1px solid var(--colorBorder);
        font-family: var(--fontSecondary);
        font-size: 16px;
        color: var(--colorText);
        outline: none;
        transition: border-color 0.3s ease;

        &:focus {
          border-bottom-color: var(--colorPrimary);
        }
      }

      textarea {
        height: 120px;
        resize: none;
      }
    }

    button {
      width: 100%;
      padding: 20px;
      background: var(--colorPrimary);
      color: white;
      border: none;
      font-family: var(--fontSecondary);
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: var(--colorText);
        transform: translateY(-5px);
      }
    }
  }
</style>
