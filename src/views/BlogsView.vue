<template>
  <div>

    <NavBar />
    <div class="content-blog">

      <v-card class="mx-auto content-card">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
        <v-card-text>
          <div class="infos">
            <h4>Dynamic Page Titles With The Vue Router</h4>
            <p>Posted on: April 29, 2021</p>
            <div class="content-arrow">
              <div>
                <router-link class="links" to="/post">View The Post </router-link>

              </div>
              <router-link class="links" to="/post"><span class="material-symbols-outlined arrow">
                  arrow_right_alt
                </span></router-link>
            </div>

          </div>
        </v-card-text>

      </v-card>

      <v-card class="mx-auto content-card">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
        <v-card-text>
          <div class="infos">
            <h4>Dynamic Page Titles With The Vue Router</h4>
            <p>Posted on: April 29, 2021</p>
            <div class="content-arrow">
              <div>
                <router-link class="links" to="/post">View The Post </router-link>

              </div>
              <router-link class="links" to="/post"><span class="material-symbols-outlined arrow">
                  arrow_right_alt
                </span>
              </router-link>
            </div>

          </div>
        </v-card-text>

      </v-card>





      <v-card class="mx-auto content-card">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
        <v-card-text>
          <div class="infos">
            <h4>Dynamic Page Titles With The Vue Router</h4>
            <p>Posted on: April 29, 2021</p>
            <div class="content-arrow">
              <div>
                <router-link class="links" to="/post">View The Post </router-link>

              </div>
              <router-link class="links" to="/post"><span class="material-symbols-outlined arrow">
                  arrow_right_alt
                </span></router-link>
            </div>

          </div>
        </v-card-text>

      </v-card>



      <v-card class="mx-auto content-card">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
        <v-card-text>
          <div class="infos">
            <h4>Dynamic Page Titles With The Vue Router</h4>
            <p>Posted on: April 29, 2021</p>
            <div class="content-arrow">
              <div>
                <router-link class="links" to="/post">View The Post </router-link>

              </div>
              <router-link class="links" to="/post"><span class="material-symbols-outlined arrow">
                  arrow_right_alt
                </span></router-link>
            </div>

          </div>
        </v-card-text>

      </v-card>


    </div>
    <FooterComponent />
  </div>
</template>
<script>
import NavBar from '../components/NavBar'
import FooterComponent from '../components/FooterComponent'

export default {
  name: 'BlogsView',

  components: {
    NavBar,
    FooterComponent
  },
}
</script>
<style scoped>
.content-blog {
  padding: 70px 20px;
  background-color: #f1f1f1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.links {
  cursor: pointer;
  font-size: 12px;
  text-decoration: none;
  color: #000;
  margin-bottom: 20px;
}

.arrow {
  color: rgb(133, 133, 133);
  font-weight: 300;
}

.content-arrow {

  display: flex;
}

.content-card {
  /* Defina a perspectiva para criar o efeito 3D */
  perspective: 1000px;
  transition: transform 0.3s ease;
  /* Adicione uma transição suave */
  border-radius: 8px !important;
  box-shadow: none !important;
  width: 100%;
  margin-bottom: 50px;
  cursor: pointer;
  margin: 10px !important;

}

@media screen and (min-width:320px) and (max-width: 480px) {

  .content-card {
    width: 100%;
  }

  .content-blog {
    padding: 20px !important;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .content-card {
    width: 45%;

  }

}

@media screen and (min-width: 769px) and (max-width: 1024px) {

  .content-card {
    width: 30%;


  }

}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .content-card {
    width: 30%;
  }
}

@media screen and (min-width: 1201px) {
  .content-card {
    width: 280px;

  }
}

.content-card:hover {
  transform: rotate(-1deg) scale(1.01);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);

}
</style>