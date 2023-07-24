<template>
  <div>

     <NavBar /> 
    <div class="content-blog">
        <v-card class="mx-auto content-card" @click="navigateTo(cardData1)">
          <v-img :src="cardData1.image" height="200px" cover></v-img>
          <v-card-text>
            <div class="infos">
              <h4>{{ cardData1.title }}</h4>
              <p>{{ cardData1.date}}</p>
              <div class="content-arrow">
                <div class="links">View The Post</div>
                <div class="links"><span class="material-symbols-outlined arrow">arrow_right_alt</span></div>
              </div>
            </div>
          </v-card-text>
        </v-card>

        <v-card class="mx-auto content-card"   @click="navigateTo(cardData2)">
          <v-img  :src="cardData2.image" height="200px" cover></v-img>
          <v-card-text>
            <div class="infos">
              <h4>{{ cardData2.title }}</h4>
              <p>{{ cardData2.date}}</p>
    
              <div class="content-arrow">
                <div class="links">View The Post</div>
                <div class="links"><span class="material-symbols-outlined arrow">arrow_right_alt</span></div>
              </div>
            </div>
          </v-card-text>
        </v-card>
        
        <v-card class="mx-auto content-card"   @click="navigateTo(cardData3)">
          <v-img  :src="cardData3.image" height="200px" cover></v-img>
          <v-card-text>
            <div class="infos">
              <h4>{{ cardData1.title }}</h4>
              <p>{{ cardData1.date}}</p>
              <div class="content-arrow">
                <div class="links">View The Post</div>
                <div class="links"><span class="material-symbols-outlined arrow">arrow_right_alt</span></div>
              </div>
            </div>
          </v-card-text>
        </v-card>
        
        <v-card class="mx-auto content-card"   @click="navigateTo(cardData4)">
          <v-img  :src="cardData4.image" height="200px" cover></v-img>
          <v-card-text>
            <div class="infos">
              <h4>{{ cardData1.title }}</h4>
              <p>{{ cardData1.date}}</p>
              <div class="content-arrow">
                <div class="links">View The Post</div>
                <div class="links"><span class="material-symbols-outlined arrow">arrow_right_alt</span></div>
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
  name: 'BlogView',

  components: {
     NavBar,
    FooterComponent
  },
  data() {
    return {
      cardData1: {
        title: 'Dynamic Page Titles With The Vue Router',
        date: 'Posted on: April 29, 2021',
        image: 'https://firebasestorage.googleapis.com/v0/b/fireblogs-50850.appspot.com/o/documents%2FcoverPhoto%2FVue%20Router%20-%20Page%20Titles.png?alt=media&token=3276b1b3-3709-4ff0-bd4a-2de3acd1ad65'
      },
      cardData2: {
        title: 'Título do Post 2',
        date: '2023-07-25',
        image: 'https://firebasestorage.googleapis.com/v0/b/fireblogs-50850.appspot.com/o/documents%2FcoverPhoto%2FAccordion-Menu-Vue-js.png?alt=media&token=b784caca-5998-4af3-bb32-51a45f287cb6'
      },
      cardData3: {
        title: 'Título do Post 3',
        date: '2023-07-25',
        image: 'https://firebasestorage.googleapis.com/v0/b/fireblogs-50850.appspot.com/o/documents%2FcoverPhoto%2FDevTools%20-%20FlexBox.png?alt=media&token=994f0ec2-ad68-485e-b644-c247a4dc57ba'
      },
      cardData4: {
        title: 'Título do Post 4',
        date: '2023-07-25',
        image: 'https://firebasestorage.googleapis.com/v0/b/fireblogs-50850.appspot.com/o/documents%2FcoverPhoto%2FImagePreview.png?alt=media&token=a4b66a4f-ca70-4a44-a449-c38e408e9596'
      },
    }
    
  },
  methods: {
    navigateTo(post) {
      this.$router.push({
      path: `/posts/${encodeURIComponent(post.title)}`,   
          query: { 
        date: post.date, 
        image: post.image
       } 
      });
    }
  }
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