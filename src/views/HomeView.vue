<template>
  <div class="container-home">
    <NavBar />
    <v-row class="content-home-image">
      <v-col cols="12"  md="6">


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
      <v-col md="6">
        <div class="  column-two background-image">

        </div>
      </v-col>
    </v-row>

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
                  Construção de projetos com escopo bem definido. Ideal para demandas específicas e pontuais
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
                  <p class="description-services">Design e desenvolvimento de aplicativos mobile


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
                  <p class="description-services">Times com expertise TQI que atuam como parceiros para a evolução do seu
                    produto
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
                  <p class="description-services">tecnologia para potencializar experiências no meio digital
                  </p>
                </div>
              </v-card-text>
            </v-card>
     
  

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
  color: #000000;
  font-size: 2.5rem;
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
  color: black;
  padding: 0 20px 0 20px;
}

.custom-title-services {
  font-weight: 700;
  color: black;
}

.custom-subtitle-services {
  font-size: 20px;
  font-weight: 300;
  color: black;
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
  color: #4E4E4E;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}

.description-services {
  text-align: center;
  font-family: "Poppins", Poppins;
  font-size: 15px;
  font-weight: 400;
}

.content-home-image {
  padding: 0 20px 0 20px;
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

@media screen and (max-width: 481px) {


  .services {
    margin-top: 50px !important;
    margin-left: 10px !important;
    margin-right: 10px !important;
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

  .btn-contact {

    width: 250px;
    font-size: 17px;
  }

}

@media screen and (min-width: 769px) {
  /* .background-image {
    height: 100%;
    width: 400px;
    padding: 140px 40px 40px 40px;
    background-image: url("../assets/image-home.png"); 
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

  } */
 


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
    padding: 0 30px 0px 30px;

  }

  .content-btn-contact {
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 1024px) {

  .background-image {
    margin-top: 30px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {

  .title-home {
    padding-top: 40px !important;
    font-size: 27px;

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
    width: 30%;
  }

}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .background-image {
    margin-top: 30px;
  }

  .title-home {
    padding-top: 40px !important;
    font-size: 38px;

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
    width: 23%;
 
  }


  .description-home {
    font-size: 20px;
  }

  .custom-subtitle-services {
    padding: 0 280px 0 280px;
  }

}

@media screen and (min-width: 1201px) {
  .background-image {
    margin-top: 30px;
  }

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
    padding: 0 350px 0 350px;
  }
}

@media screen and (min-width: 1201px) and (max-width: 1440px) {
  .background-image {
    height: 100%;
    width: 600px;
    background-image: url("../assets/image-home.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .column-one {
    width: 500px !important;
  }

  .column-two {
    width: 500px !important;

  }

  .content-home-image {
    display: flex !important;
    justify-content: center !important;
  }
}</style>