<template>
    <div>
        <NavBar />
        <div class="content-form">
            <div class="content-form-title">
                <p class="custom-title">Possui
                    <span class="custom-strong">interesse</span> em algum dos nossos <span
                        class="custom-strong">serviços?</span>
                </p>
            </div>
            <div class="box-form">
                <form class="form" @submit.prevent="submitForm">
                    <v-row>
                        <v-col cols="12" sm="12" md="6">
                            <v-text-field v-model="name" :counter="20" label="Nome" required></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="12" md="6">
                            <v-text-field v-model="company" label="Empresa" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <v-text-field v-model="phone" label="Telefone" required
                                v-mask="'(##) #####-####'"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <v-text-field v-model="email" label="Email" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <v-text-field v-model="linkedin" label="LinkedIn" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <v-select v-model="select" :items="items" label="Qual seu cargo" required></v-select>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                            <v-text-field v-model="description"
                                label="Descreva seu projeto e as funcionalidades que gostaria de ter"
                                required></v-text-field>
                        </v-col>
                    </v-row>

                    <div class="content-btn-form">
                        <v-btn class="btn-form" @click="send">
                            Enviar 
                        </v-btn>
                    </div>
                </form>
            </div>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import FooterComponent from '../components/FooterComponent'
import { firebaseDb } from "../firebaseConfig";

export default {
    name: "SignView",
    data() {
        return {
            name: "",
            company: "",
            phone: "",
            email: "",
            linkedin: "",
            select: "",
            description: "",
            items: [
            'Head de inovação',
                'Coordenador de TI',
                'Gerente de Projetos',
                'Gerente de Marketing',
                'Analista',
                'Desenvolvedor',
                'Outros'
            

            ],
            

        };
    },
    components: {
        NavBar,
        FooterComponent
    },
    methods: {
        send() {
      if (this.name && this.email && this.company && this.phone && this.select && this.description) {
        firebaseDb.collection("users")
          .add({
            name: this.name,
            company: this.company,
            phone: this.phone,
            email: this.email,
            linkedin: this.linkedin,
            select: this.select,
            description: this.description
          })
          .then(() => {
            alert("Dados enviados com sucesso!");
           
          })
          .catch((error) => {
            console.error("Erro:", error);
          });
      } else {
        alert("Oops... Preencha todos os campos!");
      }
    }
  }

}
</script>

<style>
.v-application--wrap {
    min-height: 0;
}

.content-form {
    padding: 50px 20px 50px 20px;
}

.content-form-title {
    text-align: center;
}

.custom-title {
    font-size: 30px;
    font-weight: 100;
    line-height: 1;
}

.custom-strong {
    font-weight: bold;
    color: #7A7A7A;
    font-size: 30px;
}

.content-btn-form {
    display: flex;
    justify-content: center;
    padding: 40px 0 0px 0;
}

.btn-form {
    padding: 10px;
    background-color: #158BBF !important;
    color: white !important;
    border-radius: 30px;
    font-size: 14px;
    font-weight: bold;
    width: 70%;
    cursor: pointer;
}

.btn-form:hover {
    background-color: #005276 !important;
    transition: 0.2s;
}

.btn-form:active {
    border: 1.5px solid black;
}

@media screen and (min-width: 481px) and (max-width: 768px) {

    .box-form {
        display: flex;
        justify-content: center;
    }

    .form {
        padding: 0 30px 0 30px;
        width: 90%;
    }

    .v-input__control {
        width: 100% !important;
    }

    .btn-form {
        width: 200px;
    }
}

@media screen and (max-width: 769px) {
    div#offcanvasNavbar {
        width: 70%;
    }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    .content-form-title {
        display: flex;
        justify-content: center;
    }

    .custom-title {
        width: 350px;
    }

    .box-form {
        display: flex;
        justify-content: center;
    }

    .form {
        padding: 0 30px 0 30px;
        width: 90%;
    }

    .v-input__control {
        width: 100% !important;
    }

    .btn-form {
        width: 220px;
    }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
    .content-form-title {
        display: flex;
        justify-content: center;
    }

    .custom-title {
        width: 350px;

    }

    .box-form {
        display: flex;
        justify-content: center;
    }

    .form {
        padding: 0 30px 0 30px;
        width: 70%;
    }

    .v-input__control {
        width: 100% !important;
    }

    .btn-form {
        width: 250px;
    }
}

@media screen and (min-width: 1201px) {
    .content-form-title {
        display: flex;
        justify-content: center;
    }

    .custom-title {
        width: 350px;

    }

    .box-form {
        display: flex;
        justify-content: center;
    }

    .form {
        padding: 0 30px 0 30px;
        width: 70%;
    }

    .v-input__control {
        width: 100% !important;

    }

    .btn-form {
        width: 250px;

    }
}
</style>