<template>
    <div class="footer">
        <v-row>

            <v-col class="content-social-media" cols="12" sm="12" md="12" lg="12" xl="4">
                <div class="content-footer">

                    <h2>Dexidigital</h2>
                    <p>A <span class="text-font">Usemobile</span> é uma empresa de Minas Gerais focada no desenvolvimento de
                        aplicativos mobile e sistemas web. Fornecemos soluções para startups até o
                        mais alto nível empresarial.</p>
                   
                </div>
            </v-col>

            <v-col  class="content-social-media" cols="12" sm="12" md="12" lg="12" xl="4">

                <div>
                    <h4>Outsourcing de TI e Squads</h4>
                    <router-link class="links" to="/">Serviços</router-link><br>
                    <router-link class="links" to="/">Squads de desenvolvimento</router-link><br>
                    <router-link class="links" to="/">Experiência digital</router-link><br>
                    <router-link class="links" to="/">Outsourcing de TI</router-link><br>
                    <router-link class="links" to="/">Aplicativos Mobile</router-link>

                </div>
            </v-col>

            <v-col class="content-social-media" cols="12" sm="12" md="12" lg="12" xl="4">
                <div class="social-media">

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

 @media screen and  (min-width: 1200px)  {
    .content-social-media{
    justify-content: center;
    display: flex;
}
} 
</style>