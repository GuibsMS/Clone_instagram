import Iten from './comps/Iten';

import ImagemPerfil01 from './Imagens/musica_dicas.jpg';
import ImagemPerfil02 from './Imagens/HQ.jpg';
import ImagemPerfil03 from './Imagens/majoras.jpg';
import ImagemPerfil04 from './Imagens/hermione.jpg';
import ImagemPerfil05 from './Imagens/flornago.jpg';
import ImagemPerfil06 from './Imagens/DarthVader.jpg';

export default function ladodireito() {
    return(
        <div className='ladodireito'>

            <h3 className='titulo'>Suggestions For You</h3>
            
            <div className='sugestoes'>
                <Iten 

                    recomend={ImagemPerfil01}
                    nome='dicas_musicais'
                    informa='Suggestions For You'
                    seguir='Follow'
                
                />
                
                <Iten 

                    recomend={ImagemPerfil02}
                    nome='HQ_barato'
                    informa='Suggestions For You'
                    seguir='Follow'
            
                />
                
                <Iten 

                    recomend={ImagemPerfil03}
                    nome='TLOZ_fans'
                    informa='Suggestions For You'
                    seguir='Follow'
        
                />
                
                <Iten 

                    recomend={ImagemPerfil04}
                    nome='Potter_Head'
                    informa='Suggestions For You'
                    seguir='Follow'
        
                />
                
                <Iten 

                    recomend={ImagemPerfil05}
                    nome='flor_nago'
                    informa='Suggestions For You'
                    seguir='Follow'
    
                />
                
                <Iten 

                    recomend={ImagemPerfil06}
                    nome='Darth_Vader'
                    informa='Suggestions For You'
                    seguir='Follow'

                />
            


            </div>
        </div>
    )
}