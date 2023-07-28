<template>
  <div class="container-home">
    <NavBar />
    <v-row class="content-home-image">
      <v-col cols="12" md="6">
        <p class="title-home">
          <span class="title-home-degrade">Qualidade e agilidade em</span><br>
          aplicações seguras
        </p>
        <p class="description-home">Promova a confiança e a lealdade à marca <br>
          por meio de experiências personalizadas </p>
        <div class="content-btn-contact">
          <router-link class="nav-link active btn-contact" to="/formulario"> Solicitar um orçamento
          </router-link>
        </div>
      </v-col>
      <v-col style="padding: 0;" md="6">
        <div class=" background-image">
        </div>
      </v-col>
    </v-row>
    <div class="details-services">
      <div class="services">
        <h1 class="custom-title-services">Nossos serviços</h1>
        <p class="custom-subtitle-services">
          Equipes dinâmicas para projeto estratégicos, impulsionando o crecimento consistente da sua empresa no ritmo que
          você precisa. </p>
      </div>
      <div class="content-home">
        <v-card class="mx-auto content-card-home">
          <div class="container-img">
            <img class="img-services" src="../assets/img-1.png" alt="">
          </div>
          <v-card-text>
            <div class="information-services">
              <h4 class="title-services">Outsourcing de TI</h4>
              <p class="description-services">
                É necessário um imenso conhecimento relevante para atender a demandas específicas. Ideal para um escopo
                bem definido e à prova de falhas, é o que deve estar sendo discutido na mesa em um conjunto perfeito!
              </p>
            </div>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto content-card-home">
          <div class="container-img">
            <img class="img-services" src="../assets/img-2.png">
          </div>
          <v-card-text>
            <div class="information-services">
              <h4 class="title-services">Aplicativos Mobile</h4>
              <p class="description-services">
                Desenvolvimento premium de aplicativos para diversos
                setores, seja na forma nativa (Android e IOS)
                ou na forma híbrido (Flutter).<br>
                Seguimos uma metodologia ágil que nos faz entregar as soluções de aplicativos desejadas dentro do prazo.
              </p>
            </div>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto content-card-home">
          <div class="container-img">
            <img class="img-services" src="../assets/img-3.png">
          </div>
          <v-card-text>
            <div class="information-services">
              <h4 class="title-services">Squads de desenvolvimento</h4>
              <p class="description-services">
                Com uma combinação especializada de conhecimento técnico e práticas recomendadas do setor, nosso time
                ajuda os clientes a transformar sua jornada digital como planejamento adequado e execução competente da
                estratégia de TI delineada.
              </p>
            </div>
          </v-card-text>
        </v-card>

        <v-card class="mx-auto content-card-home">
          <div class="container-img">
            <img class="img-services" src="../assets/img-4.png">
          </div>
          <v-card-text>
            <div class="information-services">
              <h4 class="title-services">Experiência digital</h4>
              <p class="description-services">
                Reunimos negócios, pessoas e tecnologia, ajudando nossos clientes a criar uma estratégia digital
                abrangente, fornecendo insights sobre o cliente e ajudando-o a criar e aprimorar uma solução digital
                amigável ao cliente.
              </p>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
    <div class="process-details">
      <h1 class="process-details-title">Nosso processo de desenvolvimento de software</h1>
    <div class="process-details-subtitle-content">
      <p class="process-details-subtitle">Somos especialistas em combinar as necessidades dos clientes, as demandas
        comerciais e as possibilidades técnicas
        para romper o status quo. Nossa equipe de estrategistas usa uma metodologia centrada no Design Sprint para
        identificar oportunidades, estimular a inovação e descobrir novos empreendimentos digitais para impulsionar o
        crescimento fora do seu negócio principal e garantir a entrega no prazo e a agilidade dos projetos.</p>
    </div>
      <div class="process-details-img">
        <img class="details-img" src="../assets/details.png" alt="">
      </div>
    </div>
    <div class="tecnologias">
      <div class="moving-logos-wrapper">
        <p class="title-tecnologias">Front-end</p>
        <div class="moving-logos-inner">
          <div class="image-tecnologias front">
          </div>
        </div>
      </div>
      <div class="reverse-wrapper">
        <p class="title-tecnologias">Back-end</p>
        <div class="reverse-inner">
          <div class="image-tecnologias back">
          </div>
        </div>
      </div>
      <div class="moving-logos-wrapper">
        <p class="title-tecnologias">Project Management</p>
        <div class="moving-logos-inner">
          <div class="image-tecnologias project">
          </div>
        </div>
      </div>
      <div class="reverse-wrapper">
        <p class="title-tecnologias">Big Data</p>
        <div class="reverse-inner">
          <div class="image-tecnologias big">
          </div>
        </div>
      </div>
      <div class="moving-logos-wrapper">
        <p class="title-tecnologias">Mobile App Development</p>
        <div class="moving-logos-inner">
          <div class="image-tecnologias mobile">
            <img class="server-img" src="../assets/mobile.png" alt="Mobile">
          </div>
        </div>
      </div>
      <div class="reverse-wrapper">
        <p class="title-tecnologias">Database</p>
        <div class="reverse-inner">
          <div class="image-tecnologias data">
            <img class="server-img" src="../assets/data.png" alt="Database">
          </div>
        </div>
      </div>
      <div class="moving-logos-wrapper">
        <p class="title-tecnologias">Servers</p>
        <div class="moving-logos-inner">
          <div class="image-tecnologias server">
            <img class="server-img" src="../assets/server.png" alt="Servers">
          </div>
        </div>
      </div>
      <div class="reverse-wrapper">
        <p class="title-tecnologias">DevOps</p>
        <div class="reverse-inner">
          <div class="image-tecnologias dev">
            <img class="server-img" src="../assets/dev.png" alt="dev">
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script scoped>
import NavBar from '../components/NavBar'
import FooterComponent from '../components/FooterComponent'
export default {
  name: 'HomeView',
  components: {
    NavBar,
    FooterComponent
  },
}
</script> 
<style scoped>
  .image-tecnologias {
    width: 100%;
    height: 80%;
    background-size: contain;
    background-repeat: no-repeat;

  }

.front {
    background-image: url('../assets/front.png');
  }
  .back {
    background-image: url('../assets/back.png');
  }
  .project {
    background-image: url('../assets/project.png');
  }
  .big {
    background-image: url('../assets/big.png');
  }
  .server-img{
    height: 50px;
  }
@media screen and (min-width: 768px) {

.server-img{
  display: none!important;
}
  .moving-logos-wrapper {
    overflow: hidden;
    margin: auto;

  }

  .moving-logos-inner {
    height: 100px;
    -webkit-animation: moving-logos 20s linear infinite;
    animation: moving-logos 20s linear infinite;
  }

  @keyframes moving-logos {
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    50% {
      transform: translateX(-100px);
      /* Move para a esquerda (ajuste o valor conforme necessário) */
    }

    100% {
      transform: translateX(-100);
      /* Retorna para a posição original */
    }
  }

  .reverse-wrapper {

    overflow: hidden;
    margin: auto;
  }
  .image-tecnologias {
    width: 100%;
    height: 70%;
    background-repeat: repeat;
    background-size: contain;
    background-repeat: repeat;
  }

  .front {
    background-image: url('../assets/front.png');
  }
  .back {
    background-image: url('../assets/back.png');
  }
  .project {
    background-image: url('../assets/project.png');
  }
  .big {
    background-image: url('../assets/big.png');
  }
  .mobile {
    background-image: url('../assets/mobile.png');
  }
  .data {
    background-image: url('../assets/data.png');
  }
  .server {
    background-image: url('../assets/server.png');
    
  }
  .dev {
    background-image: url('../assets/dev.png');
  }

  .reverse-inner {
    height: 100px;
    -webkit-animation: reverse 20s linear infinite;
    animation: reverse 20s linear infinite;
  }

  @keyframes reverse {
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    50% {
      transform: translateX(100px);
      /* Move para a esquerda (ajuste o valor conforme necessário) */
    }

    100% {
      transform: translateX(-100);
      /* Retorna para a posição original */
    }
  }
}

.container-home {
  background-color: white;
}
.navbar-brand:hover {
  color: #1976d2;
}
.content-home {
  padding: 70px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.content-card-home {
  background-color: white;
  border-radius: 10px;
  border: 1.5px solid rgb(208 208 208);
  box-shadow: none !important;
  width: 100%;
  margin-bottom: 50px;
  padding: 20px;
  margin: 10px !important;
}
.container-img {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.img-services {
  height: 100px;

}
.title-home {
  color: #333333;
  font-size: 44px;
  font-weight: bold;
  text-transform: none;
  font-style: normal;
  line-height: 1.3em;
}
.title-home-degrade {
  background: #158BBF;
  background: -webkit-linear-gradient(to right, #158BBF 0%, #4A00E0 100%);
  background: -moz-linear-gradient(to right, #158BBF 0%, #4A00E0 100%);
  background: linear-gradient(to right, #158BBF 0%, #4A00E0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.description-home {
  font-weight: 400;
  color: #333333;
  padding: 0 20px 0 20px;
}
.custom-title-services {
  font-weight: 700;
  color: #333333;
}

.custom-subtitle-services {
  font-size: 20px;
  font-weight: 300;
  color: #333333;
}
.btn-contact {
  padding: 10px;
  border: 1.5px solid black;
  border-radius: 30px;
  font-size: 14px;
  font-weight: bold;
  width: 70%;
  text-align: center;
}

.btn-contact:hover {
  color: white;
  background-color: #000000;
  transition: .2s;
}
.services {
  text-align: center;
  margin-top: 100px;
}
.title-services {
  color: #332e94;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
.description-services {
  text-align: center;
  font-size: 15px;
  font-weight: 400;
}

.content-home-image {
  padding: 0 0px 0 20px;
}

.process-details-title {
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  padding: 20px 10px;
  margin: 0;
  color: #333333;
}
.process-details-subtitle-content{
  display: flex;
  justify-content: center;
}
.process-details-subtitle {
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  margin: 0 30px;
  width: 90%!important;
}

.process-details-img {
  display: flex;
  justify-content: center;
}

.details-img {
  width: 80%;
  padding: 40px 0;
}

.title-tecnologias {
  text-align: center;
    font-weight: 600;
    color: #333333;
    margin: 0;
    text-transform: uppercase;
}

.image-tecnologias {
  display: flex;
  justify-content: center;
  height: 70px;
}

@media screen and (min-width:320px) and (max-width: 480px) {
  .content-card-home {
    width: 100%;
  }

  .content-home {
    padding: 20px !important;
  }

  .btn-contact {
    width: 230px;
    font-size: 17px;
  }
}

@media screen and (max-width:500px) {
  .custom-subtitle-services {
    padding: 0 30px;

  }
}

@media screen and (max-width: 481px) {
  .services {
    margin-top: 50px !important;
    margin-left: 10px !important;
    margin-right: 10px !important;
  }

  .process-details-subtitle {
    margin: 40px 30px 0 30px;
  }

  .content-btn-contact {
    padding-top: 30px !important;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .content-card-home {
    width: 45%;
  }

  .background-image {
    padding: 100px 40px 40px 40px;
  }

  .services {
    margin-top: 60px;
  }

  .process-details {
    margin-top: 60px;
  }

  .btn-contact {

    width: 250px;
    font-size: 17px;
  }
}

@media screen and (min-width: 769px) {
  .btn-contact {
    font-size: 17px;
    width: 250px;
  }
}

@media screen and (min-width: 767px) {
  .title-home {
    padding: 0 20px 0px 20px;
  }
  .content-btn-contact {
    padding-left: 20px;
  }
}

@media screen and (max-width: 767px) {

  .background-image {
    display: none;
  }

  .title-home {
    font-size: 2rem;
    text-align: center;
  }

  .description-home {
    text-align: center;
  }

  .title-home {
    padding: 50px 10px 10px 10px;
  }

  .content-btn-contact {
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 768px) {
  .details-img {
    width: 100% !important;
  }
}

@media screen and (min-width: 768px) {
  .services {
    margin-top: 0;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .title-home {
    padding-top: 40px !important;
    font-size: 27px;
  }

  .custom-title-services {
    padding-top: 60px;
  }

  .custom-subtitle-services {
    padding: 0 20px;
  }

  .background-image {
    height: 400px;
    background-image: url("../assets/image-home.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .content-card-home {
    width: 30%;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .title-home {
    padding-top: 40px !important;
    font-size: 38px;
  }

  .background-image {
    height: 120%;
    width: 100%;
    background-image: url("../assets/image-home.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -60px;
  }

  .custom-title-services {
    padding-top: 20px;
  }

  .content-card-home {
    width: 23%;
  }

  .description-home {
    font-size: 20px;
  }

  .custom-subtitle-services {
    padding: 0 200px 0 200px;
  }
}

@media screen and (min-width: 1201px) {
  
  .title-home {
    padding-top: 40px !important;
    font-size: 45px;
  }

  .background-image {
    height: 100%;
    width: 100%;
    background-image: url("../assets/image-home.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .content-card-home {
    width: 22%;
  }

  .description-home {
    font-size: 20px;
  }

  .custom-subtitle-services {
    padding: 0 200px 0 200px;
  }

  .custom-title-services {
    padding-top: 40px;
  }
}

@media screen and (min-width: 1201px) and (max-width: 1440px) {
  .process-details-subtitle {
  width: 900px!important;
}
  .background-image {
    height: 150%;
    background-image: url("../assets/image-home.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -70px;
  }
  .content-home-image {
    display: flex !important;
    justify-content: center !important;
  }
  .content-card-home {
    width: 350px !important;
  }

}
@media screen and  (min-width: 1441px) {
  .process-details-subtitle {
  width: 1100px!important;
}  
.details-img{
  width: 1300px;
}.content-card-home {
    width: 400px !important;

  }
  
  .background-image {
    height: 150%;
    background-image: url("../assets/image-home.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -70px;
  }

}
</style>