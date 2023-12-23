<!-- <template>
    <div>
        <NavBar />
        <div class="development-squads-container">
            <div class="development-squads-container-navbar">
                <p class="development-squads-container-navbar-title">Squads de Desenvolvimento</p>
            </div>
            <div class="development-squads-section">
                <div class="development-squads-section-description">
                    Em um mundo cada vez mais digital, as empresas enfrentam desafios constantes para se manterem
                    competitivas e inovadoras. A transformação digital não é apenas uma opção, mas uma necessidade para
                    prosperar no mercado atual. É aqui que entram os Squads de Desenvolvimento da Dexi Digital.
                    <br>
                    <br>
                    Nossos Squads de Desenvolvimento são equipes altamente especializadas e multidisciplinares que combinam
                    conhecimento técnico profundo com práticas recomendadas do setor. Trabalhamos em estreita colaboração
                    com nossos clientes para ajudá-los a alcançar a excelência digital, desde o planejamento estratégico até
                    a execução competente da estratégia de TI delineada.
                </div>

            </div>
            <div class="development-squads-services">
                <h2 class="development-squads-services-span">
                    <span class="development-squads-services-span-title">
                        Nossos Serviços de
                    </span>
                    Squads de Desenvolvimento
                </h2>
                <p class="development-squads-services-description">Os Squads de Desenvolvimento da Dexi Digital oferecem
                    uma ampla gama de serviços para atender às necessidades de nossos clientes. Aqui estão algumas das
                    principais áreas em que atuamos:</p>
            </div>
            <div class="development-squads-container-color">
                <ul style="margin-top: 0; margin-bottom: 0;">
                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            Planejamento Estratégico de TI:
                        </span>
                        Trabalhamos com sua equipe para definir metas e objetivos claros, alinhados com sua estratégia de
                        negócios.
                    </li>
                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            Desenvolvimento de Software Personalizado:
                        </span>
                        Nossa equipe de desenvolvedores experientes cria soluções de software personalizadas que atendem às
                        necessidades exclusivas de sua empresa.
                    </li>

                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            Gerenciamento de Projetos: </span>
                        Nossos gerentes de projetos altamente qualificados garantem que os projetos sejam entregues no prazo
                        e dentro do orçamento.
                    </li>

                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            Integração de Sistemas: </span>
                        Facilitamos a integração de sistemas existentes para garantir uma operação perfeita.
                    </li>

                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            Suporte Contínuo:
                        </span>
                        Estamos disponíveis para oferecer suporte contínuo após a conclusão do projeto, garantindo que sua
                        empresa continue a prosperar.
                    </li>
                </ul>
            </div>

            <div class="development-squads-container-color-img-bottom"></div>
            <div class="development-squads-content">
                <img class="development-squads-content-img" src="../assets/development-squads.png"
                    alt="imagem de aplicativos mobile">
            </div>

            <div class="development-squads-advantages">
                <h2 class="development-squads-advantages-span">
                    <span class="development-squads-advantages-span-title">
                        Vantagens dos Squads de Desenvolvimento da
                    </span>
                    Dexi Digital
                </h2>
                <p class="development-squads-advantages-description">Ao escolher nossos Squads de Desenvolvimento, você se
                    beneficiará das seguintes vantagens:</p>
            </div>

            <div class="development-squads-container-color">
                <ul style="margin-top: 0; margin-bottom: 0;">
                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            Expertise Diversificada:
                        </span>
                        Nossa equipe possui experiência em uma variedade de tecnologias e setores, o que nos permite
                        oferecer soluções adaptadas às suas necessidades exclusivas.
                    </li>
                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            Foco na Excelência:
                        </span>
                        Comprometemo-nos com a excelência em cada projeto, garantindo que todas as entregas atendam aos mais
                        altos padrões.
                    </li>

                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            Metodologia Ágil:
                        </span>
                        Seguimos uma abordagem ágil que permite entregas rápidas e flexíveis, adaptadas às mudanças nas
                        necessidades do projeto.
                    </li>
                    <li class="development-squads-container-color-item">
                        <span class="development-squads-container-color-strong">
                            Suporte Personalizado:
                        </span>
                        Estamos sempre disponíveis para oferecer suporte e orientação personalizados, garantindo o sucesso
                        contínuo de sua estratégia de TI.
                    </li>
                </ul>
            </div>
            <div class="development-squads-container-color-img-bottom"></div>

           
            <div class="development-squads-container-contact">
                <p class="development-squads-container-contact-background">
                    Entre em contato conosco hoje mesmo para saber
                    mais sobre como nossos serviços de Outsourcing de TI podem beneficiar sua empresa.
                </p>
                <div class="form-button-container">
                    <FormButton />
                </div>

            </div>

        </div>
        <FooterComponent />
    </div>
</template>
<script>
import NavBar from '../components/NavBar.vue'
import FooterComponent from '../components/FooterComponent.vue'
import FormButton from '@/components/FormButton.vue';

export default {
    
    name: 'DevelopmentSquads',
    components: {
        NavBar,
        FooterComponent,
        FormButton
    }
}
</script>

<style scoped lang="scss">
.development-squads-container-navbar {
    background-color: #38b6ed;

    display: flex;
    justify-content: center;

    &-title {

        font-size: 30px;
        font-weight: 700;
        color: #ffffff !important;
    }
}

.development-squads-section {
    padding: 50px;
    font-size: left;

    &-description {
        font-size: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #5c5c5c;
    }

}

.development-squads-services {
    padding: 0 50px;

    &-span {
        font-size: 40px;
        font-weight: 700;
        color: black;

        &-title {
            padding: 0 !important;
            font-size: 40px;
            font-weight: 700;
            background: linear-gradient(to right, #158BBF 0%, #4A00E0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    &-description {
        font-size: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #5c5c5c;
    }
}

.development-squads-container-color {
    background-color: #38b6ed;
    background-image: url('../assets/top2.png');
    padding-top: 70px;
    padding-left: 50px;
    padding-right: 50px;

    &-item {
        padding-bottom: 10px;

        color: white;

    }

    &-strong {
        font-weight: 700;
        font-size: 20px;
    }

    &-img-bottom {
        background-image: url('../assets/bottom2.png');
        height: 100px;
        width: 100%;
    }
}

.development-squads-content {

    padding-top: 40px;
    justify-content: center;
    display: flex;

    &-img {
        height: 90vh;
        width: 80%;
    }
}

.development-squads-advantages {
    padding: 50px 50px;

    &-span {
        font-size: 40px;
        font-weight: 700;
        color: black;

        &-title {
            padding: 0;
            font-size: 40px;
            font-weight: 700;
            background: linear-gradient(to right, #158BBF 0%, #4A00E0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    &-description {
        font-size: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #5c5c5c;
    }

}

.development-squads-container-description {
    font-size: 20px;
    color: #5c5c5c;
    padding: 50px;

}

.development-squads-container-contact {
    background-color: #38B6ED;
    margin-top: 50px;
    &-background {
        font-size: 30px;
        color: #FFFFFF;

        font-weight: 300;
        line-height: 43px;
        padding: 50px 50px 20px 50px;
    }
}

.form-button-container {
    justify-content: center;
    display: flex;
    padding-bottom: 60px;

}

.development-squads-content-img {}

@media screen and (max-width: 480px) {
    .development-squads-section {
        padding: 50px 20px;

        &-content {
            padding: 20px 0;
        }

        &-img {
            height: auto;
            width: 100%;
            padding: 0 20px;
        }
    }

    .development-squads-container-description {
        padding: 20px 20px 40px 20px;
    }

    .development-squads-services {

        padding: 0 20px;

        &-span {
            font-size: 34px;

            &-title {
                font-size: 31px !important;
            }
        }

    }

    .development-squads-advantages {

        padding: 0 20px;

        &-span {
            font-size: 34px;
            padding: 20px 0;

            &-title {
                font-size: 31px !important;
            }
        }

        &-description {
            margin: 0;
            padding-bottom: 50px;
        }

    }

    .development-squads-container-color {
        padding: 70px 10px 0 10px;
    }

    .development-squads-container-navbar {
        &-title {
            padding: 125px 20px 20px 20px;
            text-align: center;
        }
    }

    .development-squads-container-contact {


        &-background {

            padding: 20px;
        }
    }

    .development-squads-content-img {
        height: 30vh;
        width: 100%;
    }

}

@media screen and (min-width: 481px) and (max-width: 768px) {
    .development-squads-content-img {
        height: auto;
        width: 70%;
        border-radius: 20px;
    }

    .development-squads-container-navbar {
        &-title {
            padding: 126px 20px 20px 20px;
            text-align: center;
        }
    }

}

@media screen and (min-width:769px) and (max-width: 1024px) {
    .development-squads-content-img {
        height: auto;
        width: 70%;
        border-radius: 20px;

    }
    .development-squads-container-navbar{
        &-title{
            padding: 126px 20px 20px 20px;
        }
    }
    
}


@media screen and (min-width: 1025px) {
    .development-squads-content-img {
        height: 65vh;
        width: 70%;
        border-radius: 20px;
    }
    .development-squads-container-navbar{
        &-title{
            padding: 140px 20px 30px 20px;
        }
    }
    .development-squads-advantages {
        padding: 50px 50px 30px 50px;
       
    }
}
</style> -->