<template>
    <div>
        <NavBar />
        <div class="content-post">
            <!-- <quill-editor v-model="content" />
    <button @click="saveContent">Salvar no Firebase</button> -->

            <h2 class="title-post">{{ $route.params.title }}</h2>
            <p class="date-post">{{ $route.query.date }}</p>

            <img class="img-blog" :src="$route.query.image" alt="Imagem do Post">

            <!-- Você pode exibir outro conteúdo relacionado ao post do blog aqui -->
            <p class="description-post">{{ $route.query.description1 }}</p>

            <a :href="'https://www.youtube.com/watch?v=gF0KYiCkAOE&title=' + $route.query.title" target="_blank"
                rel="noopener noreferrer">
                {{ $route.query.link }}
            </a>

        </div>
        <FooterComponent />
    </div>
</template>
<script>
import NavBar from '../components/NavBar'
import FooterComponent from '../components/FooterComponent'
// import QuillEditor from '../components/QuillEditor'
export default {

    name: 'PostsView',
    data() {
        return {
            //   content: '',

        }
    },
    components: {
        NavBar,
        FooterComponent,
        // QuillEditor,

    },
    // methods: {
    //     saveContent() {
    //   // Aqui você pode salvar o conteúdo no Firebase usando o SDK do Firebase
    //   // Por exemplo, se você estiver usando o Realtime Database:
    //   // firebase.database().ref('caminho/para/seu/conteudo').set(this.content);
    // },
    // }
}


</script>
<style scoped>
.content-post {
    padding: 60px 140px;
    font-family: 'Quicksand', sans-serif;
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
</style>