import './Stories.css';

import Story from './comps/Story';

import Perfil01 from './imagens/Aurora_profile.jpg';
import Perfil02 from './imagens/chris_todoces.jpg';
import Perfil04 from './imagens/nbabrasil_profile.jpg';
import Perfil05 from './imagens/bioshock_fans_profile.jpg';
import Perfil06 from './imagens/Gollum_profile.jpg';
import Perfil07 from './imagens/musicmemes_profile.png';
import Perfil03 from './imagens/padme_profile.jpg';

function Stories () {
    return(
        <div className='Stories'>
            <Story ImgPerfil={Perfil01} NomeDaConta='aurora_mental' />
            <Story ImgPerfil={Perfil02} NomeDaConta='chris_todoces' />
            <Story ImgPerfil={Perfil03} NomeDaConta='Padme_amidala' />
            <Story ImgPerfil={Perfil04} NomeDaConta='nbabrasil' />
            <Story ImgPerfil={Perfil05} NomeDaConta='bioshock_fans' />
            <Story ImgPerfil={Perfil06} NomeDaConta='Gollum' />
            <Story ImgPerfil={Perfil07} NomeDaConta='musicmemes' />
        </div>
    )
}

export default Stories;