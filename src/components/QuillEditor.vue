<template>
    <div>
        <div class="quillEditorContainer">
            <div class="quillEditor ">
                <div class="blog-info">
                    <div class="blog-row">
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="12" xl="8">
                                <v-text-field v-model="blogTitle" label="Titulo do Post"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="8" xl="4">
                                <v-file-input v-model="imageControl" :disabled="!blogTitle"
                                    :style="{ opacity: blogTitle ? 1 : 0.5, width: '199' }"
                                    :label="blogImgUrl || loadingImage ? null : 'Selecione uma Imagem'" type="file"
                                    accept="image/*" id="files" name="files[]" multiple @change="uploadFile()" class="input"
                                    outlined dense></v-file-input>

                                <!-- <router-link :to="{ path: '/outra-pagina', query: { blogImgUrl: blogImgUrl } }"
                                >Ir para Outra Página</router-link>        -->
                            </v-col>
                        </v-row>
                    </div>
                </div>
                <v-img v-if="imageControl !== 0" :src="blogImgUrl" :height="200" alt=" Imagem do
                Blog"></v-img>
                <v-progress-linear v-if="loadingImage && imageControl !== 0" indeterminate
                    color="primary"></v-progress-linear>
                <vue-editor v-model="content"></vue-editor>
                <div class="blog-actions">
                    <button class="btn-publish " @click="sendToFirebase">Publicar</button>
                </div>
                <v-alert v-if="err" dense outlined type="error">
                    {{ err | 'Editor está vazio.' }}
                </v-alert>
            </div>

        </div>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { firebaseDb } from "../firebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
    name: 'QuillEditor',
    components: {
        VueEditor
    },

    data() {
        return {
            imageControl: [],
            loadingImage: false,
            content: '',
            blogTitle: '',
            blogImgUrl: '',
            err: null // O conteúdo do editor será armazenado aqui
        };

    },

    methods: {
        async sendToFirebase() {
            this.err = null; // Limpa o erro anterior antes de tentar novamente

            if (this.content.trim() === '' && this.blogTitle.trim() === '') {
                this.err = 'Todos os campos são obrigatórios.';
                return;
            }
            try {
                const options = { year: "numeric", month: "long", day: "numeric" };
                const date = "Postado em: " + new Date().toLocaleString("pt-BR", options);
                const timestampInSeconds = Math.floor(+new Date() / 1000).toString();
                await firebaseDb.doc("posts/" + timestampInSeconds)
                    .set({
                        content: this.content,
                        title: this.blogTitle,
                        pathImgOnFirebase: this.pathImgOnFirebase,
                        date: date,
                        id: timestampInSeconds,
                    });
                // Limpar o campo de conteúdo após o envio bem-sucedido
                this.content = "";
                this.blogTitle = "";
                this.blogImgUrl = "";
                this.pathImgOnFirebase = "";

                this.$router.push("/editar-post");
            } catch (error) {
                this.err = error;
            }
        },
        async getDonwloadUrlAndSetblogImgUrl() {
            const storage = getStorage();
            const storageRef = ref(storage, 'images/' + document.getElementById("files").files[0].name);

            getDownloadURL(storageRef)
                .then((url) => {
                    this.blogImgUrl = url;
                })
                .catch(() => {
                    this.err = 'Erro ao obter a URL de download';
                }).finally(() => {
                    this.loadingImage = false;
                });
        },
        async uploadFile() {
            if (this.imageControl.length > 0) {
                this.loadingImage = true;
                const storage = getStorage();
                const storageRef = ref(storage, 'images/' + document.getElementById("files").files[0].name);
                var file = document.getElementById("files").files[0];
                // 'file' comes from the Blob or File API
                await uploadBytes(storageRef, file).then((snapshot) => {
                    this.pathImgOnFirebase = snapshot.ref.fullPath;
                });
                await this.getDonwloadUrlAndSetblogImgUrl();
            } else {
                this.blogImgUrl = '';
                this.loadingImage = false;
            }

        }
    },
}
</script> 

<style >
/* .blog-info {
        display: flex;

    } */
.v-image.v-responsive.theme--light {
    display: none;
}

.blog-row {
    display: flex;
    justify-content: center;

}

.input {
    background-color: #158BBF;
    margin: 5px;
    color: white !important;
    border-radius: 20px;
    width: 50%;
    cursor: pointer;
    margin-bottom: 20px !important;

}


.v-application--is-ltr .v-input__prepend-outer {
    margin: 10px 0 0 8px;
}

.v-text-field fieldset,
.v-text-field .v-input__control {
    color: rgba(0, 0, 0, 0) !important;
    caret-color: rgba(0, 0, 0, 0) !important;
}

.v-text-field fieldset,
.v-text-field .v-input__control::before {
    border: 10px;
}

.v-input__control {
    flex-direction: initial;
}

.v-application--is-ltr .v-text-field--outlined fieldset {
    padding-left: 8px;
    padding-right: 8px;
}

.v-icon.v-icon.v-icon--link::before {
    color: rgb(255, 255, 255);
    padding: 10px;
}

.v-file-input__text {
    color: white !important;
}

.v-messages.theme--light {
    display: none;
}

.v-text-field.v-text-field--enclosed .v-text-field__details {
    padding: 0;
    margin: 0;
}

.btn-publish {
    background-color: #158BBF;
    width: 90px;
    height: 30px;
    border-radius: 30px;
    font-weight: 300;
    border: none;
    color: white;
    margin-top: 10px;
    margin-bottom: 30px;

}

.container-buttonSave {
    padding-top: 20px;
    display: flex;
    justify-content: end;

}

.quillEditor {
    padding-top: 20px;
    width: 80%;
    display: flex;
    flex-direction: column;
}

.quillEditorContainer {
    display: flex;
    justify-content: center;
    align-items: center;
}

.ql-editor {
    min-height: 272px !important;
    font-size: 16px;
}

@media screen and (max-width:345px) {
    .create-post {
        padding: 20px 45px 20px 45px !important;

    }
}

@media screen and (max-width: 481px) {


    .input {
        width: 100%;
    }

    .quillEditor {
        width: 90%;

    }
}

@media screen and (max-width: 1200px) {
    .create-post {
        padding-top: 0 !important;
    }
}

@media screen and (min-width: 1200px) {
    .input {
        width: 100% !important;
    }

    .ql-editor {
        min-height: 30vh !important;
        font-size: 16px;
    }

    .create-post {
        padding-top: 0 !important;
    }
}

@media screen and (min-width: 1440px) {
    .quillEditor {
        padding-top: 20px;
        width: 60%;
        display: flex;
        flex-direction: column;
    }

    .ql-editor {
        min-height: 40vh !important;
        font-size: 16px;
    }

}
</style>
