document.getElementById('cambiarContenido').addEventListener('click', () => {
    document.getElementById('contenido').innerHTML = `
      <div class="box-contraste">
      <form action="" method="post" class="form-contraste">
        <h1 class="contraste">Formulario de Datos Personales</h1>
        <br><br>
        
          <div class="box-content-contraste">
            <label class="label-contraste" for="first-name">Nombre:</label>
            <br />
            <input class="input-contraste" id="first-name" type="text" name="first-name" placeholder="Escribe tu nombre" required  />
            <br /><br />
            <label class="label-contraste" for="last-name">Apellido: </label>
            <br />
            <input id="last-name" class="input-contraste" type="text" name="last-name" placeholder="Escribe tu apellido" required />
            <br /><br />
            <label class="label-contraste" for="email">Email:</label>
            <br />
            <input class="input-contraste" id="email" type="text" name="email" placeholder="Escribe tu correo" required pattern=".*@.*" title="Debe contener un @" />
            <br /><br />
            <label class="label-contraste" for="dob">Fecha de Nacimiento:</label>
            <br />
            <input class="input-contraste" id="dob" type="date" name="dob" />
            <br /><br />
            <label class="label-contraste" for="country">País de Residencia:</label>
            <br />
            <input class="input-contraste" id="country" type="text" name="country" required/>
            <br /><br />

            <button type="" id="cambiarContenido" class="btn-sincontraste">Activar estilo sin contraste</button>
            <button type="submit" class="button-contraste" id="formEnviado"><strong>Enviar</strong></button>
            <br />
          </div>
        
      </form>
    </div> 
    `;

    // Agregar evento al nuevo botón
    document.getElementById('volver').addEventListener('click', () => {
      document.getElementById('contenido').innerHTML = `
        <h1>Página Original</h1>
        <p>Este es el contenido original de la página.</p>
        <button id="cambiarContenido">Cambiar Contenido</button>
      `;
    });
  });

