import './Feed.css';

import Post from './comps/post/Post';

import ImagemPerfil01 from './imagens/Perfil/Aurora_profile.jpg';
import ImagemPerfil02 from './imagens/Perfil/chris_todoces.jpg';
import ImagemPerfil03 from './imagens/Perfil/padme_profile.jpg';
import ImagemPerfil04 from './imagens/Perfil/Gollum_profile.jpg';
import ImagemPerfil05 from './imagens/Perfil/nbabrasil_profile.jpg';
import ImagemPerfil06 from './imagens/Perfil/musicmemes_profile.png';
import ImagemPerfil07 from './imagens/Perfil/bioshock_fans_profile.jpg';
import ImagemPerfil08 from './imagens/Perfil/guibs_profile.jpg';

import ImagemPost01 from './imagens/Aurora_post.jpg';
import ImagemPost02 from './imagens/Aurora_post2.jpg';
import ImagemPost03 from './imagens/chris_todoces_post.jpg';
import ImagemPost04 from './imagens/chris_todoces_post5.jpg';
import ImagemPost05 from './imagens/chris_todoces_post4.jpg';
import ImagemPost06 from './imagens/bioshock_fans_post.jpg';
import ImagemPost07 from './imagens/Aurora_post5.png';
import ImagemPost09 from './imagens/Aurora_post6.png';
import ImagemPost10 from './imagens/Aurora_post4.jpg';
import ImagemPost11 from './imagens/padme_post2.jpg';
import ImagemPost12 from './imagens/bioshock_fans_post2.jpg';
import ImagemPost013 from './imagens/padme_post.jpg';
import ImagemPost14 from './imagens/Aurora_post3.jpg';
import ImagemPost15 from './imagens/nbabrasil_post2.jpg';
import ImagemPost16 from './imagens/nbabrasil_post.jpg';
import ImagemPost17 from './imagens/chris_todoces_post6.jpg';
import ImagemPost18 from './imagens/Gollum_post.jpg';
import ImagemPost19 from './imagens/Aurora_post7.png';
import ImagemPost20 from './imagens/chris_todoces_post2.jpg';
import ImagemPost21 from './imagens/musicmemes_post2.jpg';
import ImagemPost22 from './imagens/chris_todoces_post3.jpg';
import ImagemPost23 from './imagens/musicmemes_post.jpg';
import ImagemPost24 from './imagens/guibs_post.jpg';



function Feed() {
    return(
        <div className='Feed'>
            <Post
               NomePerfil='aurora_mental'
               ImagemPerfil={ImagemPerfil01} 
               ImagemPost={ImagemPost01}
               NomePerfil1='aurora_mental'
               Legenda="🦋Recomece cada dia com a Aurora!

               Olá pessoal! Estamos muito animados em compartilhar nossa plataforma com vocês. Se você está em busca de um espaço seguro para cuidar da sua saúde mental e emocional, não procure mais!✨🧠
               
               A Aurora oferece uma gama de recursos e ferramentas para transformar sua vida de maneira prática e acessível. E o melhor de tudo? Tudo isso pode ser feito no conforto da sua própria casa, através de consultas online!💻🏠
               
               Acreditamos que cuidar da nossa saúde mental é essencial, e a plataforma Aurora torna isso mais fácil e acessível do que nunca. Então, o que você está esperando? Voe conosco rumo ao bem-estar!🦋🌟
               
               Não se esqueça de compartilhar essa novidade com seus amigos e familiares, porque todos merecem cuidar da sua saúde mental. Juntos, vamos percorrer o caminho para uma vida mais feliz e saudável!💜✨"    
            />

            <Post
               NomePerfil='chris_todoces'
               ImagemPerfil={ImagemPerfil02} 
               ImagemPost={ImagemPost03}
               NomePerfil1='chris_todoces'
               Legenda="Mais delícias saindo por aqui!!!
               Faça o seu pedido😋😋😋"    
            />   

            <Post
               NomePerfil='guibs_s'
               ImagemPerfil={ImagemPerfil08} 
               ImagemPost={ImagemPost24}
               NomePerfil1='guibs_s'
               Legenda="Eu agradeço a Marvel pelo contrato como Capitão América. Big Day!👍"
            />  

            <Post
               NomePerfil='nbabrasil'
               ImagemPerfil={ImagemPerfil05} 
               ImagemPost={ImagemPost16}
               NomePerfil1='nbabrasil'
               Legenda="A história da NBA poderia ser TOTALMENTE diferente se essas trocas não tivessem acontecido no #NBADraft! 🤯 Qual dessas negociações foi a mais impactante?"
            /> 

            <Post
               NomePerfil='aurora_mental'
               ImagemPerfil={ImagemPerfil01} 
               ImagemPost={ImagemPost02}
               NomePerfil1='aurora_mental'
               Legenda="O que somos?"
            />   

            <Post
               NomePerfil='musicmemes'
               ImagemPerfil={ImagemPerfil06} 
               ImagemPost={ImagemPost23}
               NomePerfil1='musicmemes'
               Legenda="Poor dino... They don't understand the greatness of his joke 😂"
            />  

            <Post
               NomePerfil='chris_todoces'
               ImagemPerfil={ImagemPerfil02} 
               ImagemPost={ImagemPost20}
               NomePerfil1='chris_todoces'
               Legenda="Caixinhas presenteáveis saindo por aqui. Peça a sua também!!! Chame no direct.🥰🥰🥰"
            /> 

            <Post
               NomePerfil='bioshock_fans'
               ImagemPerfil={ImagemPerfil07} 
               ImagemPost={ImagemPost06}
               NomePerfil1='bioshock_fans'
               Legenda="Todos fazemos escolhas; mas, no fim, nossas escolhas nos fazem."
            /> 

            <Post
               NomePerfil='aurora_mental'
               ImagemPerfil={ImagemPerfil01} 
               ImagemPost={ImagemPost14}
               NomePerfil1='aurora_mental'
               Legenda="Nossos objetivos."
            /> 

            <Post
               NomePerfil='aurora_mental'
               ImagemPerfil={ImagemPerfil01} 
               ImagemPost={ImagemPost10}
               NomePerfil1='aurora_mental'
               Legenda="Nos siga para ficar por dentro de todas as novidades."
            /> 

            <Post
               NomePerfil='Gollum'
               ImagemPerfil={ImagemPerfil04} 
               ImagemPost={ImagemPost18}
               NomePerfil1='Gollum'
               Legenda="😐"
            /> 

            <Post
               NomePerfil='chris_todoces'
               ImagemPerfil={ImagemPerfil02} 
               ImagemPost={ImagemPost22}
               NomePerfil1='chris_todoces'
               Legenda="Encomenda linda saindo!!!🤩🤩🤩"
            />

            <Post
               NomePerfil='Padme_amidala'
               ImagemPerfil={ImagemPerfil03} 
               ImagemPost={ImagemPost013}
               NomePerfil1='Padme_amidala'
               Legenda="🖤🖤🤍🤍"
            />  

            <Post
               NomePerfil='nbabrasil'
               ImagemPerfil={ImagemPerfil05} 
               ImagemPost={ImagemPost15}
               NomePerfil1='nbabrasil'
               Legenda="NOITE DE FESTA EM DENVER!🎉 Os @nuggets são os grandes CAMPEÕES da Temporada 2022-23 da NBA pela primeira vez na história! 🏆
               #NBAFinals"
            /> 

            <Post
               NomePerfil='chris_todoces'
               ImagemPerfil={ImagemPerfil02} 
               ImagemPost={ImagemPost05}
               NomePerfil1='chris_todoces'
               Legenda="❤️🥰🥰🥰🥰❤️"
            /> 

            <Post
               NomePerfil='chris_todoces'
               ImagemPerfil={ImagemPerfil02} 
               ImagemPost={ImagemPost04}
               NomePerfil1='chris_todoces'
               Legenda="Saindo essas gostosuras por aqui. Ficou com vontade? Peça a sua também!!!😋😋😋"
            /> 

            <Post
               NomePerfil='aurora_mental'
               ImagemPerfil={ImagemPerfil01} 
               ImagemPost={ImagemPost07}
               NomePerfil1='aurora_mental'
               Legenda="Nossa logomarca e nosso slogan."
            /> 

            <Post
               NomePerfil='musicmemes'
               ImagemPerfil={ImagemPerfil06} 
               ImagemPost={ImagemPost21}
               NomePerfil1='musicmemes'
               Legenda="This is one of the first memes I've ever posted and I still love it 😍😂"
            /> 

            <Post
               NomePerfil='Padme_amidala'
               ImagemPerfil={ImagemPerfil03} 
               ImagemPost={ImagemPost11}
               NomePerfil1='Padme_amidala'
               Legenda="É assim que a liberdade morre. Com um estrondoso aplauso."
            /> 

            <Post
               NomePerfil='aurora_mental'
               ImagemPerfil={ImagemPerfil01} 
               ImagemPost={ImagemPost09}
               NomePerfil1='aurora_mental'
               Legenda="Bem-vindo! Nós somos a Aurora, sua plataforma de saúde mental e bem-estar."
            /> 

            <Post
               NomePerfil='bioshock_fans'
               ImagemPerfil={ImagemPerfil07} 
               ImagemPost={ImagemPost12}
               NomePerfil1='bioshock_fans'
               Legenda="Sempre há um farol, um homem, uma cidade."
            /> 

            <Post
               NomePerfil='chris_todoces'
               ImagemPerfil={ImagemPerfil02} 
               ImagemPost={ImagemPost17}
               NomePerfil1='chris_todoces'
               Legenda="😍😍😍😍😍"
            /> 

            <Post
               NomePerfil='aurora_mental'
               ImagemPerfil={ImagemPerfil01} 
               ImagemPost={ImagemPost19}
               NomePerfil1='aurora_mental'
               Legenda="🦋🦋🦋🦋🦋"
            /> 

        </div>
    )
}

export default Feed;