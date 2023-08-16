<template>
    <div>
        <NavBar />

        <div v-for="(post, index) in posts" :key="index">
            <div v-if="post.title === localUrl" class="content-post">
                <!-- <h2 class="title-url">{{ post.title }}</h2> -->
                <h2 class="title-post" v-html="post.title"></h2>
                <p class="date-post" v-html="post.date"></p>
                <v-img class="img-blog" :src="getPostImage(post.pathImgOnFirebase)" alt="Imagem do Post"></v-img>
                <p class="description-post" v-html="post.content"></p>
            </div>
        </div>
        <WhatsappButton />
        <FooterComponent />
    </div>
</template>
<script>
import NavBar from '../components/NavBar'
import FooterComponent from '../components/FooterComponent'
import Vue from 'vue'
import WhatsappButton from '../components/WhatsappButton.vue';
import { firebaseDb } from "../firebaseConfig";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import VueMeta from 'vue-meta'
Vue.use(VueMeta);

export default {

    name: 'PostsView',
    components: {
        NavBar,
        FooterComponent,
        WhatsappButton
    },
    mounted() {
        // Exemplo de rastreamento de uma visualização de página
        this.$gtag.pageview('/PostsView');
        this.getPostsFromFirebase();
    },
    watch: {
        '$route'() {
            this.localUrl = this.$route.params.title;
        }
    },
    data() {
        return {
            localUrl: this.$route.params.title,
            localImages: [],
            posts: [],
            imagesMap: []
        };
    },

    methods: {
        async getDonwloadUrlAndSetblogImgUrl() {
            const storage = getStorage();
            await Promise.all(this.posts.map(async (post) => {
                const fullPath = ref(storage, post.pathImgOnFirebase);
                const url = await getDownloadURL(fullPath);
                this.imagesMap.push({ path: post.pathImgOnFirebase, url });

            }));
        },
        getPostImage(path) {
            const image = this.imagesMap.find(img => img.path === path);

            return image ? image.url : '';
        },
        truncateText(text, maxLength) {
            if (text?.length > maxLength) {
                return text.substring(0, maxLength) + '...';
            } else {
                return text;
            }
        },
        getPostsFromFirebase() {
            this.posts = [];
            firebaseDb.collection('posts').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const post = doc.data();
                    this.posts.push(post);

                })
                return this.getDonwloadUrlAndSetblogImgUrl();

            })
        },

        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return 'Postado em: ' + new Date(date).toLocaleDateString('pt-BR', options);
        },
    }

}
</script>
<style scoped>
.v-image.v-responsive.theme--light {
    display: inherit;
}

.content-post {

    font-family: 'Quicksand', sans-serif;
}

.title-details {
    font-weight: bold;
}

.title-url {
    display: none;
}

.img-blog {
    width: 100%;
    margin-bottom: 20px;
}

::v-deep .v-application p {
    margin: 0;
    padding: 0;
}

.description-post {
    margin: 0 !important;
    padding: 0px !important;
}

.title-post {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 30px;

}

.date-post {
    color: #8d8d8d;
    padding-bottom: 10px;
}

@media screen and (max-width: 768px) {
    .content-post {
        padding: 70px 30px 60px 30px !important;
    }
}

@media screen and (min-width: 769px) {
    .content-post {
        padding: 70px 140px 60px 140px;
    }

}</style>