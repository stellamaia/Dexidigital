<template>
    <div>
        <NavBar />

        <div class="it-outsourcing-container">
            <div class="it-outsourcing-title-container">

                <p class="it-outsourcing-title">Outsourcing de TI</p>
            </div>
        </div>

        <div class="it-outsourcing">
            <p class="it-outsourcing-description">
                O Outsourcing de TI é uma prática fundamental para muitas empresas nos dias de hoje. Com o avanço constante
                da tecnologia e a crescente dependência de sistemas digitais, ter uma equipe de TI altamente competente é
                crucial para manter a eficiência operacional e garantir a segurança de dados sensíveis.<br>
                <br>
                Na Dexi Digital, oferecemos serviços de Outsourcing de TI de alta qualidade para empresas de todos os
                tamanhos. Nossa equipe de especialistas em tecnologia da informação está pronta para atender a uma ampla
                gama de demandas, desde o suporte diário à infraestrutura de TI até projetos complexos de desenvolvimento de
                software.
            </p>
            <div class="it-outsourcing-services-title-container">
                <p class="it-outsourcing-services-title">Nossos Serviços de Outsourcing de TI</p>
                <p class="it-outsourcing-services-description">Nossos serviços de Outsourcing de TI são abrangentes e
                    adaptados
                    às necessidades específicas de cada cliente. Aqui estão algumas das principais áreas em que oferecemos
                    suporte:</p>
            </div>
        </div>
        <GradientWaveTop />
        <div class="it-outsourcing-list">
            <ul>
                <li class="it-outsourcing-list-item">
                    <span class="it-outsourcing-list-item-strong">
                        Suporte Técnico 24/7:
                    </span>
                    Nossa equipe está disponível 24 horas por dia, 7 dias por semana, para resolver qualquer
                    problema
                    técnico que surja. Isso garante que sua empresa esteja sempre operando sem interrupções.
                </li>
                <li class="it-outsourcing-list-item">
                    <span class="it-outsourcing-list-item-strong">
                        Gerenciamento de Infraestrutura
                    </span>
                    Cuidamos da manutenção e gerenciamento de sua infraestrutura de TI, incluindo servidores,
                    redes e armazenamento de dados. Isso libera sua equipe interna para se concentrar em
                    projetos estratégicos.
                </li>
                <li class="it-outsourcing-list-item">
                    <span class="it-outsourcing-list-item-strong">
                        Desenvolvimento de Software Personalizado:
                    </span>
                    Se sua empresa precisa de soluções de software personalizadas, nossa equipe de
                    desenvolvedores experientes pode criar aplicativos sob medida para atender às suas
                    necessidades específicas.
                </li>
                <li class="it-outsourcing-list-item">
                    <span class="it-outsourcing-list-item-strong">
                        Segurança Cibernética:
                    </span>
                    A segurança dos dados é uma prioridade máxima. Implementamos medidas rigorosas de segurança
                    cibernética para proteger sua empresa contra ameaças online.
                </li>
                <li class="it-outsourcing-list-item">
                    <span class="it-outsourcing-list-item-strong">
                        Recuperação de Desastres:
                    </span>
                    Preparamos planos de recuperação de desastres para garantir que sua empresa possa se
                    recuperar rapidamente de qualquer interrupção.
                </li>
            </ul>

        </div>
        <GradientWaveBottom />
        <div class="it-outsourcing-img-container">
            <img class="it-outsourcing-img" src="../assets/it-outsourcing.png" alt="">
        </div>
        <div class="advantages-of-outsourcing-container">
            <p class="advantages-of-outsourcing-title">Vantagens do Outsourcing de TI com a Dexi Digital</p>
            <p class="advantages-of-outsourcing-subtitle">Há várias vantagens em escolher a Dexi Digital como seu parceiro
                de Outsourcing de TI:</p>
        </div>
        <GradientWaveTop />
        <div class="it-outsourcing-list">
            <ul>
                <li class="it-outsourcing-list-item">
                    <span class="it-outsourcing-list-item-strong">
                        Experiência e Expertise:
                    </span>
                    Nossa equipe possui vasta experiência em uma variedade de tecnologias e setores. Você pode confiar em
                    nosso conhecimento para encontrar as melhores soluções para sua empresa.
                </li>
                <li class="it-outsourcing-list-item">
                    <span class="it-outsourcing-list-item-strong">
                        Redução de Custos: </span>
                    O Outsourcing de TI pode reduzir significativamente os custos operacionais, eliminando a necessidade de
                    manter uma equipe de TI interna em tempo integral.
                </li>
                <li class="it-outsourcing-list-item">
                    <span class="it-outsourcing-list-item-strong">
                        Foco em Seu Core Business: </span>
                    Delegar as tarefas de TI para especialistas permite que sua equipe interna se concentre no core business
                    da empresa.
                </li>
                <li class="it-outsourcing-list-item">
                    <span class="it-outsourcing-list-item-strong">
                        Flexibilidade e Escalabilidade:
                    </span>
                    Nossos serviços de Outsourcing de TI são flexíveis e escaláveis, o que significa que podemos atender às
                    suas necessidades em constante evolução.
                </li>
                <li class="it-outsourcing-list-item">
                    <span class="it-outsourcing-list-item-strong">
                        Atendimento Personalizado:
                    </span>
                    Trabalhamos de perto com cada cliente para entender suas metas e desafios exclusivos, oferecendo
                    soluções sob medida.
                </li>

            </ul>


        </div>
        <GradientWaveBottom />

            <p class="advantages-of-outsourcing-description">O Outsourcing de TI é uma estratégia inteligente para empresas
                que desejam manter sua vantagem competitiva e garantir a eficiência operacional. A Dexi Digital está aqui
                para ser seu parceiro de confiança no mundo da tecnologia.</p>

               <div class="advantages-of-outsourcing-description-container">
                <p class="advantages-of-outsourcing-description-background">
                    Entre em contato conosco hoje mesmo para saber
                mais sobre como nossos serviços de Outsourcing de TI podem beneficiar sua empresa.
                </p>

        <div class="form-button-container">
        <FormButton/>
     </div>
               </div>
        <FooterComponent />

    </div>
</template>
<script>
import NavBar from '../components/NavBar.vue'
import FooterComponent from '../components/FooterComponent.vue'
import GradientWaveTop from '@/components/GradientWaveTop.vue';
import GradientWaveBottom from '@/components/GradientWaveBottom.vue';
import FormButton from '@/components/FormButton.vue';
export default {
    name: 'ItOutsourcing',
    components: {
        NavBar,
        FooterComponent,
        GradientWaveTop,
        GradientWaveBottom,
        FormButton
    }

}
</script>
<style scoped>
.it-outsourcing-container {
    background-color: #38b6ed;
    height: calc(106vh - 500px);
}

.it-outsourcing {
    padding: 50px;
    /* background: linear-gradient(90deg,#f7fcff 0,#2a5affad)!important; */
}

.it-outsourcing-title-container {
    display: flex;
    justify-content: center;
}

.it-outsourcing-title {
    padding: 140px 20px 20px 20px;
    font-size: 30px;
    font-weight: 700;
    color: #ffffff;

}

.it-outsourcing-description {
    font-size: 20px;
    padding-top: 20px;
    color: #5c5c5c;
}

.it-outsourcing-services-title-container {

    padding-top: 20px;

}

ul li:before {
    position: absolute;
    width: 5px;
    height: 5px;
    left: 0;
    top: 10px;
    background: #785cfc;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

.it-outsourcing-services-title {

    padding: 0;
    font-size: 40px;
    font-weight: 700;
    background: linear-gradient(to right, #158BBF 0%, #4A00E0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}


.it-outsourcing-services-description {
    font-size: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #5c5c5c;


}

.it-outsourcing-list {
    background-color: #38b6ed;
    /* border-radius: 30px; */
    padding: 20px ;
}

.it-outsourcing-list-item {
    padding-bottom: 10px;
    color: white;

}

.it-outsourcing-list-item-strong {
    font-weight: 700;
    font-size: 20px;
}

.it-outsourcing-img-container {
    padding-top: 40px;
    justify-content: center;
    display: flex;
}

.it-outsourcing-img {
    height: 90vh;
    width: 80%;
}

.advantages-of-outsourcing-container {
    padding: 50px;

    padding-top: 20px;
    padding-bottom: 20px;

}

.advantages-of-outsourcing-title {
    padding: 0;
    font-size: 40px;
    font-weight: 700;
    background: linear-gradient(to right, #158BBF 0%, #4A00E0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.advantages-of-outsourcing-subtitle {

    font-size: 20px;
    color: #5c5c5c;
}.advantages-of-outsourcing-description {
    font-size: 20px;
    color: #5c5c5c;
    padding:  50px;
}
.advantages-of-outsourcing-description-container{
    background-color: #38B6ED;
}
.advantages-of-outsourcing-description-background{
    font-size: 30px;
    color: #FFFFFF;
  
    font-weight: 300;
    line-height: 43px;
    padding: 50px 50px 20px 50px;
}

.form-button-container{
    justify-content: center;
    display: flex;
    padding-bottom:60px;
   
}
</style>