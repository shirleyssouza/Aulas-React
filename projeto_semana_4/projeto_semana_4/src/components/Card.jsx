import "./Card.css";

const museus = [
    {
        cod: 1,
        id: "mnba",
        nome: "Museu Nacional de Belas Artes",
        descricao:
            "O Museu Nacional de Belas Artes (MNBA) é um dos mais importantes e veneráveis museus do Rio de Janeiro, situado no coração do centro histórico da cidade. Fundado em 1937, o MNBA ocupa um imponente edifício neoclássico projetado pelo arquiteto Adolfo Morales de los Rios. O museu abriga uma vasta e significativa coleção de arte brasileira, que abrange desde o período colonial até a contemporaneidade. Entre suas coleções permanentes destacam-se pinturas, esculturas, gravuras, desenhos e artes decorativas de diversos períodos históricos e estilos artísticos.",
        foto: "https://www.portalc3.net/wp-content/uploads/2023/01/Museu-Nacional-de-Belas-Artes.jpg",
    },
    {
        cod: 2,
        id: "mamanha",
        nome: "Museu do Amanhã",
        descricao:
            "O Museu do Amanhã é um ícone moderno do Rio de Janeiro, localizado na revitalizada zona portuária da cidade. Inaugurado em 2015, o museu se destaca não apenas por sua arquitetura inovadora e futurista, mas também por sua proposta única de explorar questões científicas, ambientais, sociais e tecnológicas relacionadas ao futuro da humanidade. Projetado pelo renomado arquiteto espanhol Santiago Calatrava, o Museu do Amanhã é uma estrutura impressionante que combina formas orgânicas com elementos sustentáveis, como painéis solares e sistemas de captação de água da chuva. Sua construção reflete um compromisso com a sustentabilidade e a conscientização ambiental.",
        foto: "https://museudoamanha.org.br/sites/default/files/11_0.jpg",
    },
    {
        cod: 3,
        id: "mam",
        nome: "Museu de Arte Moderna",
        descricao:
            "O Museu de Arte Moderna do Rio de Janeiro, conhecido popularmente como MAM Rio, é um dos principais centros culturais dedicados à arte contemporânea no Brasil. Localizado no Aterro do Flamengo, em uma área privilegiada próxima à Baía de Guanabara, o MAM Rio não apenas abriga uma extensa coleção de arte moderna e contemporânea, mas também serve como um espaço vibrante para exposições, eventos culturais e atividades educativas. Fundado em 1948, o MAM Rio tem como missão promover a arte moderna e contemporânea brasileira e internacional, proporcionando ao público uma experiência enriquecedora e diversificada. O museu possui um acervo que inclui obras de artistas renomados como Candido Portinari, Di Cavalcanti, Iberê Camargo, Lygia Clark, Hélio Oiticica, entre outros que são referências importantes no cenário artístico nacional e internacional.",
        foto: "https://static.wixstatic.com/media/da9685_9c0d891f1e83400d8642306a3bbbfd35.jpg/v1/fill/w_1772,h_992,al_c,q_85,enc_auto/da9685_9c0d891f1e83400d8642306a3bbbfd35.jpg",
    },
];

function Card() {
    const museusDoRio = museus.map((museu) => {
        return (
            <article key={museu.cod} id={museu.id}>
                <h3>{museu.nome}</h3>

                <div className="box-bottom">
                    <img src={museu.foto} alt={museu.nome} />
                    <p>{museu.descricao}</p>
                </div>
                <hr />
            </article>
        );
    });

    return <>{museusDoRio}</>;
    }

export default Card;
