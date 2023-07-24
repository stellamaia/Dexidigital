<template>
    <div>
        <NavBar />


        <div class="title-post">
            <!-- <quill-editor v-model="content" />
    <button @click="saveContent">Salvar no Firebase</button> -->

    <h2>{{ $route.params.title }}</h2>
    <p>Postado em: {{ $route.query.date }}</p>
    <img :src="$route.query.image" alt="Imagem do Post">
    <!-- Você pode exibir outro conteúdo relacionado ao post do blog aqui -->

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
        // content: '',
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