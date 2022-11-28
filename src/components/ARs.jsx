import React from 'react';
import '@styles/ARs.css';

const ARs = () => {
  return (
    <section className='hide-section' id='Additional-Recommendations'>
      <div className='AR-div'>
        <h2 className='AR-div__title'>Recomendaciones adicionales</h2>
        <p className='AR-div__text'>
          Para lograr una mayor protección de tus credenciales y tus datos es importante tomar en
          consideración las siguientes recomendaciones para garantizar tu seguridad y así puedas
          mantener tus datos y credenciales protegidos.
        </p>
        <ul className='AR-div__recommendations'>
          <li className='AR-div__R'>
            <span>Crea una contraseña fuerte y segura: </span>
            Para considerar que una contraseña sea fuerte esta tiene que tener ocho o más caracteres
            haciendo uso de mayúsculas, minúsculas, caracteres especiales y números.
          </li>
          <li className='AR-div__R'>
            <span>Altera tus contraseñas: </span>
            Si consideras que tu contraseña es muy sencilla puedes hacerla mas segura aplicando la
            recomendación anterior, modifcándola de tal manera que para ti no pierda su significado
            intercambiando letras por números y cambiando alguna letra u otra por una mayúscula o
            minúscula según sea el caso. Por ejemplo:
            <br />
            Antes: <strong>contraseña</strong>
            <br />
            Después: <strong>C0ntR4S3ñ4</strong>
          </li>
          <li className='AR-div__R'>
            <span>Utiliza un gestor de contraseñas: </span>
            Un gestor de contraseñas ya sea en el navegador o como aplicación móvil puede crear y
            recordar todas tus contraseñas con la confianza de que estas se encriptarán y se
            mantendrán seguras y ocultas dentro del gestor. (Algunos ejemplos: Lockwise, 1Password,
            Bitwarden)
          </li>
          <li className='AR-div__R'>
            <span>Piensa antes de dar clic: </span>
            ¡No hagas clic en enlaces sospechosos! Reconoce y reporta el phishing, si una página
            parece algo extraña, piensa antes de continuar. Puede ser un intento para obtener
            información sensible o instalar malware.
          </li>
          <li className='AR-div__R'>
            <span>Activa la autenticación multi-factor (MFA): </span>
            Conocido también como Factor de Doble Autenticación (2FA) agrega una barrera adicional
            de seguridad a tus cuentas, haciendolo más difícil de penetrar previniendo ser vulnerado
            ante los hackers ya que esta capa adicional puede ser un código que cambia cada 30
            segundos, un SMS a tu teléfono o un correo de confirmación.
          </li>
          <li className='AR-div__R'>
            <span>Ingresa únicamente a redes wifi seguras: </span>
            El wifi inseguro no requiere una contraseña para usarse y básicamente tiene acceso a
            todos tus archivos, teniendo como resultado un posible monitoreo y robo de información
            por parte de un hacker.
          </li>
          <li className='AR-div__R'>
            <span>Usa una VPN en lugares públicos: </span>
            Si inevitablemente se tiene que hacer un uso de una red wifi en un lugar público utiliza
            una VPN para asegurar tu canal de wifi y mantener seguros tus datos y credenciales.
          </li>
          <li className='AR-div__R'>
            <span>No instales programas desconocidos: </span>
            Tu información personal y credenciales pueden estar en peligro, conceder permisos a los
            programas de los cuales nunca has escuchado nada puede comprometer tu información.
          </li>
          <li className='AR-div__R'>
            <span>Mantén tu sistema actualizado: </span>
            Contar con tu sistema actualizado puede mantener tu información y credenciales de forma
            segura ya que el sistema de seguridad está en una mejora constante.
          </li>
        </ul>
        <button id='AR-div__Button'>Comenzar de nuevo</button>
      </div>
    </section>
  );
};

export default ARs;
