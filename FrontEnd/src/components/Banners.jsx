import Carousel from 'react-bootstrap/Carousel'
import '../assets/css/estilo.css'

function Banners() {
    return (
        <Carousel variant="white" className='conteudo-margin'>
            <Carousel.Item>
                <img
                    className="d-block w-35 h-35"
                    src="image/free fire.jpg"
                    alt="Fortnite"
                    id='rel'
                />
                <Carousel.Caption>
                    <h5>Tech Jogos News</h5>
                    <p>Garena Free Fire é um jogo mobile de tiro no estilo Battle Royale, ou seja, todos contra todos. Disponível para Android e iOS (iPhone), Free Fire coloca até 50 jogadores numa ilha e estes precisam encontrar, rapidamente, armas e equipamentos para tentar sobreviver e eliminar outros jogadores.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="image/valorant-banner.jfif"
                    alt="Resident Evil 4"
                    id='rol'
                />
                <Carousel.Caption>
                    <h5>Tech Jogos News</h5>
                    <p>Criado pela Riot, Valorant é jogado em equipes de 10 jogadores (5×5) que tem como objetivo armar e proteger a bomba, chamada Spike. Por ter personagens com habilidades especiais, o game exige boa mira, planejamento estratégico e pode ser jogado no PC.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="image/thelastofus.jpg"
                    alt="FIFA23"
                    id='rol'
                    
                    
                />
                <Carousel.Caption>
                    <h5>Tech Jogos News</h5>
                    <p >
                    Sobre The Last Of Us, o The Last Of Us conta a história do que acontece vinte anos depois que a civilização moderna foi destruída por uma pandemia causada pelo fungo cordyceps, que transforma humanos em hospedeiros na trama. Ambientado cinco anos após os eventos de The Last of Us, o jogador assume o papel de duas protagonistas em um Estados Unidos pós-apocalíptico: Ellie, que busca por vingança após um evento traumático, e Abby, uma soldada que se envolve em um conflito entre uma milícia e um culto.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Banners