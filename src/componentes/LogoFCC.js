import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png';

function LogoFCC() {
    return(
        <div className='freecodecamp-logo-contenedor' >
        <img 
          src={freeCodeCampLogo}
          className = 'freecodecamp-logo'
          style={{height: '40px'}}
          alt = 'Logo de FreeCodeCamp' />
      </div>
    );
}

export default LogoFCC;