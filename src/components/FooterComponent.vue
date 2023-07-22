<template>
    <div class="footer">
        <v-row>
            <v-col cols="12" sm="3" md="3" lg="3" xl="3">
                <h2>Dexidigital</h2>
                <p>A <span class="text-font">Usemobile</span> é uma empresa de Minas Gerais focada no desenvolvimento de
                    aplicativos mobile e sistemas web. Fornecemos soluções para startups até o
                    mais alto nível empresarial. Como empresa de desenvolvimento de aplicativos
                    para dispositivos móveis garantimos que você receba a atenção do seu público-alvo
                    e aumente o número de clientes em seu app para dispositivos móveis.</p>
                <p class="information">25.153.072/0001-08
                    Usemobile Soluções em Tecnologia Ltda</p>
            </v-col>
            <v-col cols="12" sm="3" md="3" lg="3" xl="3">
                <div>
                    <h4>Outsourcing de TI e Squads</h4>

                    <router-link class="links" to="/">O que é outsourcing de TI?</router-link><br>
                    <router-link class="links" to="/">Tipos de contrato de outsourcing</router-link><br>
                    <router-link class="links" to="/">Por que terceirizar seu software?</router-link><br>
                    <router-link class="links" to="/">Quanto custa um aplicativo?</router-link><br>
                    <router-link class="links" to="/">O que é Squad Ágil?</router-link>

                </div>
            </v-col>
            <v-col cols="12" sm="3" md="3" lg="3" xl="3">
                <div>
                    <h4>Dexidigital</h4>

                    <router-link class="links" to="/">Trabalhe conosco</router-link><br>
                    <router-link class="links" to="/">Diretrizes da marca</router-link><br>

                    <router-link class="links" to="/">Imprensa</router-link><br>
                    <router-link class="links" to="/">Ouro Preto</router-link>
                </div>
            </v-col>
            <v-col cols="12" sm="3" md="3" lg="3" xl="3">
                <div>
                    <p>Av. Juscelino Kubitscheck, 909, Bauxita Ouro Preto – MG
                        35400-000 – Brasil</p>
                </div>
                <div class="social-media">
                    <span class="elementor-screen-only ">
                        <a href="https://www.facebook.com/usemobile" target="_blank" click="social">
                            <i class="fab fa-facebook icon"></i>
                        </a>
                    </span>

                    <span class="elementor-screen-only">
                        <a href="https://www.youtube.com/usemobile" target="_blank" click="social">
                            <i class="fab fa-youtube icon"></i>
                        </a>
                    </span>
                    <span class="elementor-screen-only">
                        <a href="https://www.instagram.com/usemobile/" target="_blank" click="social">
                            <i class="fab fa-instagram icon"></i>
                        </a>
                    </span>

                    <span class="elementor-screen-only">
                        <a href="https://www.linkedin.com/company/usemobile/" target="_blank" click="social">
                            <i class="fab fa-linkedin icon"></i>
                        </a>
                    </span>

                </div>
            </v-col>


        </v-row>
    </div>
</template>


<script>
export default {
    name: 'FooterComponent'
}

</script>
<style scoped>
.text-font {
    font-weight: bold;
}

.information {
    padding-top: 10px;
}

.footer {
    padding: 60px;
    background-color: #292929;
    color: white;
}

.links {
    color: white !important;
    text-decoration: none;


}

.links:hover {
    text-decoration: underline !important;
    color: #38B6ED !important;
    cursor: pointer;
}

.social-media {
    padding-top: 60px !important;

}

.icon {
    font-size: 30px;
    margin: 20p;
    padding: 10px;
    color: white;
}

.icon:hover {
    color: #38B6ED !important;
    cursor: pointer;
}

@media screen and (max-width: 570px) {
    .footer {

        text-align: center;
    }
}
</style>