<template>
    <div>
        <div v-if="token">
            <NavBarPost />
            <quill-editor></quill-editor>

        </div>
        <div class="page-no-access" v-else>
            <h1 class="no-access">Sem permissão!</h1>
            <router-link class="return-login" to="/entrar">
                <p class="title-login">Retornar para <span class="login">Entrar</span></p>
            </router-link>
        </div>
    </div>
</template>
<script>
import QuillEditor from "@/components/QuillEditor.vue";
import { firebaseDb } from "@/firebaseConfig";
import NavBarPost from "@/components/NavBarPost.vue";

export default {
    name: "CreatePost",
    components: {
        QuillEditor,
        NavBarPost
    },
    data() {
        return {
            token: localStorage.getItem("token"),
        }
    },
    created() {
        firebaseDb
            .collection("user")
            .doc(this.token)
            .get()
            .then((res) => {
                this.dados = res.data();
            });

    },

}
</script>
<style>
.page-no-access {
    text-align: center;
    padding-top: 20%;
}

.title-login {
    color: #158BBF;
}
</style>