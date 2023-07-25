<template>
    <div>
        <NavBar />
        <div class="content-form">
            <div class="content-form-title">
                <p class="custom-title">Possui <span class="custom-strong">interesse</span> em algum dos nossos <span
                        class="custom-strong">serviços?</span></p>
            </div>
            <div class="box-form">
                <form class="form" @submit.prevent="submitForm">
                    <v-row>
                        <v-col cols="12" sm="12" md="6">
                            <v-text-field v-model="name" :error-messages="nameErrors" :counter="20" label="Nome" required
                                @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="12" md="6">
                            <v-text-field v-model="company" :error-messages="companyErrors" label="Empresa" required
                                @input="$v.company.$touch()" @blur="$v.company.$touch()"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <v-text-field v-model="phone" :error-messages="phoneErrors" label="Telefone" required
                                @input="$v.phone.$touch()" @blur="$v.phone.$touch()"
                                v-mask="'(##) #####-####'"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <v-text-field v-model="email" :error-messages="emailErrors" label="Email" required
                                @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <v-text-field v-model="linkedin" :error-messages="linkedinErrors" label="Linkedin" required
                                @input="$v.linkedin.$touch()" @blur="$v.linkedin.$touch()"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <v-select v-model="select" :items="items" :error-messages="selectErrors" label="Qual seu cargo"
                                required @change="$v.select.$touch()" @blur="$v.select.$touch()"></v-select>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                            <v-text-field v-model="description" :error-messages="descriptionErrors"
                                label="Descreva seu projeto e as funcionalidades que gostaria de ter" required
                                @input="$v.description.$touch()" @blur="$v.description.$touch()"></v-text-field>
                        </v-col>
                    </v-row>

                    <div class="content-btn-form">
                        <v-btn class="btn-form" @click="submit">
                            Enviar Mensagem
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
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    components: {
        NavBar,
        FooterComponent
    },
    validations: {
        name: { required, maxLength: maxLength(20) },
        company: { required },
        phone: { required },
        email: { required, email },
        linkedin: { required },
        select: { required },
        description: { required }

    },

    data() {
        return {
            name: '',
            company: '',
            phone: '',
            email: '',
            linkedin: '',
            select: null,
            items: [
                'Head de inovação',
                'Coordenador de TI',
                'Gerente de Projetos',
                'Gerente de Marketing',
                'Analista',
                'Desenvolvedor',
                'Outros'
            ],
            description: '',
            // selectErrors: [],

        };
    },
    computed: {
        nameErrors() {
            const errors = [];
            if (!this.$v.name.$dirty) return errors;
            !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long');
            !this.$v.name.required && errors.push('Name is required.');
            return errors;
        },
        companyErrors() {
            const errors = [];
            if (!this.$v.company.$dirty) return errors;
            !this.$v.company.required && errors.push('Company is required');
            return errors;
        },
        phoneErrors() {
            const errors = [];
            if (!this.$v.phone.$dirty) return errors;
            !this.$v.phone.required && errors.push('Phone is required');
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.email && errors.push('Must be valid e-mail');
            !this.$v.email.required && errors.push('E-mail is required');
            return errors;
        },
        linkedinErrors() {
            const errors = [];
            if (!this.$v.linkedin.$dirty) return errors;
            !this.$v.linkedin.required && errors.push('Linkedin is required');
            return errors;
        },


        selectErrors() {
            const errors = [];
            if (!this.$v.select.$dirty) return errors;
            !this.$v.select.required && errors.push('Item is required');
            return errors;
        },
        descriptionErrors() {
            const errors = [];
            if (!this.$v.description.$dirty) return errors;
            !this.$v.description.required && errors.push('Description is required');
            return errors;
        }
    },
    methods: {
        submitForm() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                alert('Formulário enviado com sucesso!')
            } else {
                alert('Formulário não foi enviado!')
            }
        },
        submit() {
            this.submitForm();
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
}</style>