<template>
    <div>
        <NavBar />
        <div v-for="post in posts" :key="post.id" class="content-post">
            <h2 class="title-post">{{ post.title }}</h2>
            <p class="date-post">{{ post.date }}</p>
            <img class="img-blog" :src="post.image" alt="Imagem do Post">
            <p class="description-post">{{ post.description1 }}</p>
            <div v-for="(detail, index) in post.details" :key="index">
                <p class="title-details">{{ detail.title }}</p>
                <p>{{ detail.description }}</p>
            </div>
        </div>
        <FooterComponent />
    </div>
</template>
<script>
import NavBar from '../components/NavBar'
import FooterComponent from '../components/FooterComponent'
export default {

    name: 'PostsView',
    components: {
        NavBar,
        FooterComponent,

    },
    data() {
        return {
            posts: [

                {
                    "post-1": "Post 1",
                    "url": "a-importancia-de-contratar-uma-empresa",
                    "title": "A Importância de Contratar uma Empresa de Desenvolvimento de Software para Economizar com Projetos",
                    "date": "Postado em: 24 de Julho, 2023",
                    "image": "https://cesu.cps.sp.gov.br/wp-content/uploads/2020/08/work-office-team-company-internet-5382501-800x445.jpg",


                    "description1": "No mundo cada vez mais digitalizado em que vivemos, a importância de ter um software eficiente e bem estruturado tornou-se indispensável para o sucesso de muitas empresas. No entanto, desenvolver um projeto de software é uma tarefa complexa e desafiadora que requer conhecimento técnico e expertise. Neste contexto, a contratação de uma softhouse pode ser a solução ideal para garantir a eficácia e economia na realização de um projeto de software. Neste artigo, exploraremos a relevância de uma softhouse e como ela pode trazer benefícios econômicos significativos para o contratante.",
                    "details": [
                        {
                            "title": "O que é uma softhouse?",
                            "description": "Uma softhouse, também conhecida como empresa de desenvolvimento de software, é uma organização especializada em criar soluções personalizadas de software para atender às necessidades específicas dos seus clientes. Essas empresas são compostas por equipes de profissionais altamente qualificados, incluindo desenvolvedores, designers, analistas de sistemas e gerentes de projetos, que trabalham juntos para criar produtos de software sob medida."
                        },
                        {
                            "title": "Expertise técnica e conhecimento atualizado",
                            "description": "Uma das principais vantagens de contratar uma softhouse para desenvolver um projeto de software é o acesso à expertise técnica e ao conhecimento atualizado. Essas empresas estão constantemente atualizadas com as últimas tendências tecnológicas e melhores práticas de desenvolvimento, o que lhes permite criar soluções mais eficientes e inovadoras."
                        },
                        {
                            "title": "Redução de custos operacionais",
                            "description": "Contratar uma softhouse pode resultar em uma redução significativa nos custos operacionais para o contratante. Em vez de manter uma equipe interna de desenvolvimento de software, com todos os custos associados, como salários, benefícios e treinamento, o contratante pode ter acesso a uma equipe de especialistas em software sem a necessidade de comprometer recursos adicionais."
                        },
                        {
                            "title": "Foco no Core Business",
                            "description": "Ao delegar a responsabilidade do desenvolvimento do software para uma softhouse, o contratante pode se concentrar no seu core business, ou seja, nas atividades essenciais que geram valor para a empresa. Isso permite que a empresa foque em suas principais competências, ao mesmo tempo em que aproveita os benefícios de um software sob medida."
                        },
                        {
                            "title": "Agilidade no desenvolvimento",
                            "description": "As softhouses geralmente têm processos bem definidos e metodologias ágeis de desenvolvimento, o que lhes permite entregar projetos com maior rapidez e eficiência. Essa agilidade é especialmente importante em um mundo de negócios onde a velocidade de lançamento de produtos e serviços é crucial para se manter competitivo."
                        },
                        {
                            "title": "Suporte e manutenção contínua",
                            "description": "Outra vantagem de trabalhar com uma softhouse é o suporte contínuo e a manutenção oferecidos após a conclusão do projeto. As empresas de desenvolvimento de software estão comprometidas em garantir que o software desenvolvido esteja sempre funcionando corretamente e possa ser atualizado conforme necessário."
                        },
                        {
                            "title": "Personalização e escalabilidade",
                            "description": "Uma softhouse é capaz de criar um software altamente personalizado, que atenda exatamente às necessidades do contratante. Além disso, essas empresas têm a capacidade de escalar o projeto conforme necessário, para acompanhar o crescimento e as mudanças nas demandas do negócio."
                        }
                    ],
                    "details9": "A contratação de uma softhouse para desenvolver projetos de software é uma estratégia inteligente para empresas que buscam economia, eficiência e resultados de qualidade. A expertise técnica, a redução de custos operacionais, o foco no core business, a agilidade no desenvolvimento, o suporte contínuo e a possibilidade de personalização e escalabilidade tornam essa escolha uma vantagem competitiva para as empresas modernas.",
                    "details10": "Em um mercado cada vez mais competitivo e tecnologicamente avançado, contar com uma empresa de desenvolvimento de software parceira pode ser a diferença entre o sucesso e o fracasso de um projeto. Portanto, é fundamental pesquisar e escolher uma softhouse confiável, com histórico comprovado de entrega de projetos bem-sucedidos. Com a parceria certa, as empresas podem maximizar seus investimentos em tecnologia, impulsionar a inovação e alcançar seus objetivos de negócio de forma econômica e eficiente.",

                },
                {
                    "post-2": "Post 2",
                    "url": "a-importancia-do-outsourcing-para-projetos",
                    "title": "A Importância do Outsourcing para Projetos e a Economia para o Contratante",
                    "date": "2023-07-25",
                    "image": "https://tm.ibxk.com.br/2023/04/12/12133826462194.jpg?ims=1120x420",
                    "description1": "Em um mundo globalizado e altamente competitivo, as empresas buscam constantemente maneiras de otimizar seus processos, reduzir custos e aumentar a eficiência. Uma estratégia cada vez mais adotada é o outsourcing, que consiste em delegar a terceiros atividades que não fazem parte do core business da empresa. Neste artigo, exploraremos a importância do outsourcing para a realização de projetos e como essa prática pode trazer economia significativa para o contratante.",
                    "details": [
                        {
                            "title": "O que é outsourcing?",
                            "description": "Outsourcing, ou terceirização em português, é o ato de contratar uma empresa ou profissional externo para realizar atividades específicas que não são o foco principal da organização. Essas atividades podem abranger desde funções operacionais até projetos mais complexos, como desenvolvimento de software, design, marketing digital, entre outros."
                        },
                        {
                            "title": "Redução de custos operacionais",
                            "description": "Uma das principais vantagens do outsourcing é a redução dos custos operacionais para o contratante. Ao optar por contratar uma empresa externa ou profissional independente, a empresa evita gastos com salários fixos, benefícios, treinamento e infraestrutura necessária para a execução das atividades. Além disso, os custos com impostos e encargos trabalhistas também são reduzidos."
                        }
                    ],

                },
                {
                    "post-4": "Post 4",
                    "url": "a-importancia-de-processos-com-metodologiaias-ageis",
                    "title": "A Importância de Processos com Metodologias Ágeis e Qualidade para o Sucesso do Projeto do Contratante",
                    "date": "2023-07-25",
                    "image": "https://campinas.tech/wp-content/uploads/2020/04/1771.jpg",
                    "description1": "A realização de projetos bem-sucedidos é um dos principais objetivos de qualquer empresa ou organização. No entanto, a complexidade e os desafios envolvidos no gerenciamento de projetos podem ser bastante exigentes. Neste contexto, a adoção de processos com metodologias ágeis e foco na qualidade é fundamental para garantir o sucesso do projeto do contratante. Neste artigo, exploraremos a importância desses elementos-chave e como eles podem agregar valor e eficiência ao desenvolvimento do projeto.",
                    "details": [
                        {
                            "title": "Metodologias ágeis: uma abordagem dinâmica e flexível",
                            "description": "As metodologias ágeis são abordagens de gerenciamento de projetos que se concentram na colaboração, adaptação e entrega incremental de resultados. Algumas das metodologias ágeis mais conhecidas incluem Scrum, Kanban e Extreme Programming (XP). Essas abordagens têm se tornado cada vez mais populares, pois permitem uma resposta rápida às mudanças do mercado e às necessidades dos clientes.",
                            "description2": "A abordagem ágil permite que o projeto seja dividido em iterações ou sprints, com entregas parciais e frequentes. Isso permite que o contratante acompanhe o progresso do projeto de perto, ofereça feedback em tempo real e faça ajustes conforme necessário. Essa flexibilidade garante que o produto final seja mais alinhado às expectativas do cliente."
                        },
                        {
                            "title": "Foco na qualidade do produto",
                            "description": "Um dos pilares essenciais para o sucesso de um projeto é a busca pela qualidade do produto final. Ao adotar metodologias ágeis, a equipe de desenvolvimento é incentivada a priorizar a qualidade desde o início do projeto. Isso significa que testes rigorosos, revisões de código e padrões de codificação bem definidos são incorporados ao processo.",
                            "description2": "Garantir a qualidade do produto é fundamental para evitar retrabalhos e a insatisfação do cliente. Com uma abordagem ágil, a equipe pode identificar e corrigir problemas mais rapidamente, garantindo a entrega de um produto final mais robusto e confiável."
                        },
                        {
                            "title": "Colaboração e comunicação eficiente",
                            "description": "A abordagem ágil valoriza a colaboração e a comunicação entre os membros da equipe e com o cliente. Através de reuniões regulares, como as Daily Stand-ups no Scrum, todos os envolvidos no projeto são mantidos atualizados sobre o progresso, os desafios e as próximas etapas.",
                            "description2": "A comunicação eficiente garante que todos tenham uma visão clara do projeto e estejam alinhados com os objetivos. Dúvidas e problemas podem ser rapidamente resolvidos, evitando atrasos e garantindo que o projeto siga em frente de forma consistente."
                        },
                        {
                            "title": "Maior satisfação do cliente",
                            "description": "Ao adotar processos com metodologias ágeis e qualidade, o contratante está melhor posicionado para atender às expectativas do cliente. A entrega incremental de funcionalidades permite que o cliente visualize o produto em estágios iniciais e forneça feedback valioso. Essa abordagem aumenta a satisfação do cliente, pois ele se sente envolvido no processo e percebe que suas necessidades estão sendo atendidas de forma eficiente.",

                        },
                        {
                            "title": "Redução de riscos e custos",
                            "description": "A abordagem ágil ajuda a mitigar riscos ao longo do projeto. Ao realizar entregas parciais em intervalos regulares, é possível identificar e resolver problemas antes que eles se tornem grandes obstáculos. Isso reduz o risco de que o projeto falhe ou exceda os prazos estabelecidos.",
                            "description2": "Além disso, ao focar na qualidade desde o início, a equipe de desenvolvimento reduz a probabilidade de retrabalhos e correções em etapas avançadas do projeto. Isso leva a uma redução significativa nos custos associados ao desenvolvimento."
                        },
                        {
                            "title": "Melhoria contínua e aprendizado organizacional",
                            "description": "Outra vantagem do uso de metodologias ágeis é a ênfase na melhoria contínua. Após cada sprint ou iteração, a equipe realiza uma retrospectiva para analisar o que funcionou bem e o que pode ser aprimorado. Esse aprendizado organizacional permite que a equipe cresça e se aperfeiçoe ao longo do tempo, entregando projetos cada vez mais bem-sucedidos.",
                            "description2": "A adoção de processos com metodologias ágeis e foco na qualidade é essencial para o sucesso de projetos do contratante. A abordagem ágil proporciona maior flexibilidade, colaboração, eficiência e satisfação do cliente. Além disso, a busca constante pela qualidade desde o início do projeto reduz riscos e custos, garantindo a entrega de um produto final de alto padrão.",
                            "description3": "Comunicar-se e colaborar eficientemente, adotar práticas de desenvolvimento iterativas e incorporar a busca pela qualidade em todas as etapas são passos fundamentais para garantir que o projeto atinja seus objetivos de forma eficaz e eficiente. A metodologia ágil e a ênfase na qualidade são aliadas poderosas para impulsionar o sucesso do projeto do contratante em um mercado competitivo e em constante evolução.",
                        }
                    ],
                },
                {
                    "post-7": "Post 7",
                    "title": "Garantindo a Qualidade: Testes e Revisões em Projetos de Softhouse",
                    "date": "2023-07-25",

                    "image": "https://t.ctcdn.com.br/0z1Y06hw4IXdlNxtjIvg9_TMGn4=/1200x675/smart/filters:format(webp)/i570001.jpeg",
                    "description1": "Em um mercado competitivo e em constante evolução, a qualidade de um produto de software é fundamental para o sucesso de qualquer empresa ou organização. As softhouses, como parceiras estratégicas no desenvolvimento de soluções tecnológicas personalizadas, desempenham um papel crucial na garantia da qualidade dos projetos que entregam. Neste artigo, vamos explorar em detalhes a importância dos testes e revisões em projetos de softhouse, destacando as práticas e processos que asseguram a excelência e confiabilidade dos produtos desenvolvidos.",
                    "details": [
                        {
                            "title": "Testes de Software: A Base da Qualidade",
                            "description": "Os testes de software são um conjunto de práticas e procedimentos que têm como objetivo verificar se o produto de software atende aos requisitos estabelecidos e funciona conforme o esperado. Essas práticas são essenciais para identificar e corrigir eventuais erros ou bugs que possam comprometer o desempenho ou a segurança do software.",
                            "description2": "Palavras-chave: testes de software, qualidade do software, identificação de erros, bugs.",
                            "description3": "Os testes de software são conduzidos em várias etapas do processo de desenvolvimento, desde a fase de codificação até a implementação final. As softhouses aplicam diferentes tipos de testes, como testes funcionais, testes de integração, testes de desempenho e testes de segurança, para garantir que o software seja testado em diferentes cenários e situações.",


                        },
                        {
                            "title": "Testes Funcionais: Verificando a Conformidade com os Requisitos",
                            "description": "Os testes funcionais são realizados para verificar se o software desenvolvido atende aos requisitos e funcionalidades especificadas na análise de requisitos. Esses testes são conduzidos em cada funcionalidade individualmente para garantir que todas as partes do software funcionem como esperado.",
                            "description2": "Palavras-chave: testes funcionais, conformidade com requisitos, funcionalidades do software.",
                            "description3": "Os testes funcionais são uma etapa crucial para identificar discrepâncias entre o que foi especificado na análise de requisitos e o que foi implementado no software. Ao verificar a conformidade com os requisitos, as softhouses asseguram que o produto final seja fiel às expectativas do cliente e esteja em conformidade com os objetivos do projeto."
                        },
                        {
                            "title": "Testes de Integração: Garantindo a Harmonia do Sistema",
                            "description": "Os testes de integração têm como objetivo verificar se as diferentes partes do software funcionam em harmonia, após serem integradas em um único sistema. Nessa etapa, são verificadas as interações entre as funcionalidades e a integração entre os módulos do software.",
                            "description2": "Palavras-chave: testes de integração, interações entre funcionalidades, integração de módulos.",
                            "description3": "Os testes de integração são fundamentais para garantir que todas as partes do software estejam integradas de forma eficiente, evitando conflitos ou incompatibilidades que possam prejudicar o funcionamento do sistema como um todo. Com essa abordagem, as softhouses garantem que o produto final seja um conjunto coeso e consistente de funcionalidades."

                        },
                        {

                            "title": "Testes de Desempenho: Avaliando a Eficiência e a Escalabilidade",
                            "description": "Os testes de desempenho têm como objetivo avaliar o comportamento do software em diferentes condições de uso e sob diferentes cargas de trabalho. Esses testes medem a capacidade do software de responder rapidamente às solicitações e garantir a sua eficiência e escalabilidade.",
                            "description2": "Palavras-chave: testes de desempenho, comportamento do software, eficiência, escalabilidade.",

                            "description3": "As softhouses utilizam os testes de desempenho para identificar gargalos e pontos críticos no software que possam impactar negativamente a sua performance. Com essa avaliação, é possível realizar ajustes e otimizações para garantir que o software opere de forma eficiente, mesmo em condições de uso intensivo.",
                        },
                        {
                            "title": "Testes de Segurança: Protegendo o Software contra Ameaças",
                            "description": "A segurança do software é uma preocupação crescente na era digital, onde ataques cibernéticos e violações de dados são cada vez mais comuns. Os testes de segurança têm como objetivo avaliar a resistência do software a possíveis ameaças e vulnerabilidades.",
                            "description2": "Palavras-chave: testes de segurança, resistência a ameaças, vulnerabilidades.",
                            "description3": "As softhouses aplicam testes de segurança para garantir que o software esteja protegido contra ataques, como invasões, vazamento de informações e exploração de vulnerabilidades. Com a identificação de possíveis falhas de segurança, medidas corretivas são tomadas para garantir a integridade e a confidencialidade dos dados."
                        },
                        {
                            "title": "Revisões e Verificações: Garantindo a Qualidade dos Processos",
                            "description": "Além dos test es, as revisões e verificações são práticas importantes para garantir a qualidade dos projetos de softhouse. As revisões são realizadas por meio de análises sistemáticas do software e da documentação relacionada, com o objetivo de identificar problemas e oportunidades de melhoria.",
                            "description2": "Palavras-chave: revisões, análises sistemáticas, qualidade dos projetos.",
                            "description3": "As softhouses realizam revisões de código, revisões de documentação e outras análises para garantir a consistência, a clareza e a conformidade com as boas práticas de desenvolvimento. Essas verificações são essenciais para evitar erros antes que se tornem problemas maiores no processo de desenvolvimento.",
                        },
                        {
                            "title": "Melhoria Contínua: Aprendendo com o Feedback",
                            "description": "A busca pela qualidade é um processo contínuo nas softhouses. As práticas de testes e revisões fornecem feedback valioso que é utilizado para aprimorar os processos e melhorar a qualidade dos projetos futuros.",
                            "description2": "Palavras-chave: melhoria contínua, feedback, aprimoramento de processos.",
                            "description3": "As softhouses valorizam o aprendizado contínuo com base no feedback recebido durante o desenvolvimento dos projetos. Esse ciclo de melhoria contínua permite que as softhouses aprimorem suas práticas, garantindo que a qualidade seja constantemente elevada.",
                            "description4": "Garantir a qualidade dos projetos de softhouse é um compromisso essencial para fornecer soluções tecnológicas de alto nível para os clientes. As práticas de testes de software, incluindo testes funcionais, testes de integração, testes de desempenho e testes de segurança, são fundamentais para identificar e corrigir erros e bugs que possam comprometer o desempenho ou a segurança do software.",
                            "description5": "As revisões e verificações sistemáticas também desempenham um papel crucial na garantia da qualidade dos processos de desenvolvimento. Com a busca pela melhoria contínua e o aprendizado com o feedback recebido, as softhouses asseguram que seus projetos sejam entregues com excelência, atendendo plenamente às expectativas e necessidades dos clientes.",
                            "description6": "Portanto, ao escolher uma softhouse para desenvolver projetos de software, é fundamental garantir que ela siga práticas rigorosas de testes e revisões, valorizando a qualidade em todas as etapas do processo. Com a garantia da qualidade, as softhouses reforçam a sua posição como parceiras estratégicas, oferecendo soluções tecnológicas confiáveis, eficientes e alinhadas com as expectativas do mercado.",

                        }
                    ]
                }
            ],

        }
    },
    mounted() {
    // Acessa o título do post da rota
    const title = this.$route.params.title;
    // Filtra a lista de posts para encontrar o post correto com base no título
    this.post = this.posts.find(post => post.url === title);
  }
  
}
</script>
<style scoped>
.content-post {
    padding: 60px 30px;
    font-family: 'Quicksand', sans-serif;
}
.title-details{
    font-weight: bold;
}
.img-blog {
    width: 100%;
    padding-bottom: 30px;
}

.title-post {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 20px;

}

@media screen and (min-width: 768px) {
    .content-post {
        padding: 60px 140px;
    }

}
</style>