<template>
  <div class="container-home">
    <NavBar /> 
    <div class="background-image">
      <p class="title-home">
        <span class="title-home-degrade">Potência em</span><br>
        tecnologia mobile
      </p>

      <p class="description-home">Alocação de squad de desenvolvimento <br>
        Android, iOS, Flutter, Web e UI/UX Design
      </p>
      <div class="content-btn-contact">
        <router-link class="nav-link active btn-contact" to="/formulario"> Solicitar um orçamento
</router-link>
      </div>
    </div>


    <div class="services">
      <h1 class="custom-title-services">Nossos serviços</h1>
      <p class="custom-subtitle-services">
        Da contratação de horas de desenvolvimento à uma consultoria completa.
      </p>
    </div>
    <div class="content-home">

      <v-card class="mx-auto content-card-home">
        <v-img class="img-services" src="https://usemobile.com.br/wp-content/uploads/2022/03/icone-outsourcing-ti.svg"
          height="250px" width="350px" cover></v-img>
        <v-card-text>
          <div class="information-services">
            <h4 class="title-services">Outsourcing de TI</h4>
            <p class="description-services">Possui o roadmap do produto pronto? Contrate horas de desenvolvimento para
              coloca-lo no ar.
            </p>
          </div>
        </v-card-text>
      </v-card>

      <v-card class="mx-auto content-card-home">
        <v-img class="img-services" src="https://usemobile.com.br/wp-content/uploads/2022/03/icone-apps-mobile.svg"
          height="250px" width="350px" cover></v-img>
        <v-card-text>
          <div class="information-services">
            <h4 class="title-services">Aplicativos Mobile</h4>
            <p class="description-services">De app para fintechs à aplicativos de mobilidade urbana, temos know-how em
              diversos tipos de aplicativos.


            </p>
          </div>
        </v-card-text>
      </v-card>
      <v-card class="mx-auto content-card-home">
        <v-img class="img-services" src="https://usemobile.com.br/wp-content/uploads/2022/03/icone-tec-emergentes.svg"
          height="250px" width="350px" cover></v-img>
        <v-card-text>
          <div class="information-services">
            <h4 class="title-services">Tecnologias emergentes</h4>
            <p class="description-services">Somos especialistas em desenvolvimento de aplicações para dispositivos
              wearables e inteligentes (IoT).


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

.navbar-brand:hover{
color:#1976d2;
}
.content-home {
  padding: 70px 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.content-card-home {
  background-color: #f1f1f1;
  box-shadow: none !important;
  width: 100%;
  margin-bottom: 50px;
  margin: 10px !important;

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

@media screen and (max-width: 481px){
  .title-home{
    padding-top: 40px!important;

  }
  .services{
    margin-top:50px!important;
    margin-left: 10px!important;
    margin-right: 10px!important;
  }
  .content-btn-contact{
    padding-top: 30px!important;
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
  .background-image {
    height: 400px;
    padding: 140px 40px 40px 40px;
    background-image: url(https://usemobile.com.br/wp-content/uploads/2022/02/Usemobile-empresa-de-aplicativo-hero.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }


  .btn-contact {
    font-size: 17px;
    width: 250px;
  }


}

@media screen and (min-width: 767px) {
  .background-image {
    height: 520px;
    background-image: url(https://usemobile.com.br/wp-content/uploads/2022/02/Usemobile-empresa-de-aplicativo-hero.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .title-home {
    padding: 0 20px 0px 20px;
  }

  .content-btn-contact {
    padding-left: 20px;
  }

}

@media screen and (max-width: 767px) {

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

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .content-card-home {
    width: 30%;
  }

}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .content-card-home {
    width: 30%;
  }

  .title-home {
    font-size: 3rem;
  }

  .description-home {
    font-size: 20px;
  }

  .custom-subtitle-services {
    padding: 0 280px 0 280px;
  }

}

@media screen and (min-width: 1201px) {
  .content-card-home {
    width: 340px;

  }

  .title-home {
    font-size: 3.5rem;
  }

  .description-home {
    font-size: 20px;
  }

  .custom-subtitle-services {
    padding: 0 350px 0 350px;
  }
}
</style>