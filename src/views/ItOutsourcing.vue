<template>
    <div>
        <NavBar />
        <div class="it-outsourcing-container">
            <div class="it-outsourcing-title-container">

                <p class="it-outsourcing-title">Outsourcing de TI</p>
            </div>

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
            </div>
            <p class="it-outsourcing-services-description">Nossos serviços de Outsourcing de TI são abrangentes e adaptados
                às necessidades específicas de cada cliente. Aqui estão algumas das principais áreas em que oferecemos
                suporte:</p>
                <v-row>
            <v-col  cols="12" sm="12" md="12" lg="12" xl="6">
            <div class="it-outsourcing-list">
                <ul>
                    <li class="it-outsourcing-list-item">
                        <span class="it-outsourcing-list-item-strong">
                            Suporte Técnico 24/7:
                        </span>
                        Nossa equipe está disponível 24 horas por dia, 7 dias por semana, para resolver qualquer problema
                        técnico que surja. Isso garante que sua empresa esteja sempre operando sem interrupções.
                    </li>
                    <li class="it-outsourcing-list-item">
                        <span class="it-outsourcing-list-item-strong">
                             
                        </span>
                        Cuidamos da manutenção e gerenciamento de sua infraestrutura de TI, incluindo servidores, redes e armazenamento de dados. Isso libera sua equipe interna para se concentrar em projetos estratégicos.
                    </li>
                    <li class="it-outsourcing-list-item">
                        <span class="it-outsourcing-list-item-strong">
                            Desenvolvimento de Software Personalizado:
                        </span>
                        Se sua empresa precisa de soluções de software personalizadas, nossa equipe de desenvolvedores experientes pode criar aplicativos sob medida para atender às suas necessidades específicas.
                    </li>
                    <li class="it-outsourcing-list-item">
                        <span class="it-outsourcing-list-item-strong">
                            Segurança Cibernética:
                        </span>
                        A segurança dos dados é uma prioridade máxima. Implementamos medidas rigorosas de segurança cibernética para proteger sua empresa contra ameaças online.
                    </li>
                    <li class="it-outsourcing-list-item">
                        <span class="it-outsourcing-list-item-strong">
                            Recuperação de Desastres:
                        </span>
                        Preparamos planos de recuperação de desastres para garantir que sua empresa possa se recuperar rapidamente de qualquer interrupção.
                    </li>

                </ul>

            
            </div>
            </v-col>
            <v-col  cols="12" sm="12" md="12" lg="12" xl="6">

            <div class="it-outsourcing-img-container">
                    <img class="it-outsourcing-img" src="../assets/it-outsourcing.png" alt="it-outsourcing">
            </div>
        </v-col>
        </v-row>

        </div>
    </div>
</template>
<script>
import NavBar from '../components/NavBar.vue'
export default {
    name: 'ItOutsourcing',
    components: {
        NavBar
    }

}
</script>
<style scoped>
.it-outsourcing-container {
    padding: 50px;
    /* background: linear-gradient(90deg,#f7fcff 0,#2a5affad)!important; */
}

.it-outsourcing-title-container {
    display: flex;
    justify-content: center;
}

.it-outsourcing-title {


    padding: 0 20px;
    font-size: 30px;
    font-weight: 700;
    color: #ffffff;
    background-color: #158BBF;

}

.it-outsourcing-description {
    font-size: 20px;
    padding-top: 20px;
    color: #5c5c5c;
}

.it-outsourcing-services-title-container {
    display: flex;
    justify-content: start;
    padding-top: 20px;
}

.it-outsourcing-services-title {

    padding: 0 20px;
    font-size: 30px;
    font-weight: 700;
    color: #ffffff;
    background-color: #158BBF;
}

.it-outsourcing-services-description {
    font-size: 20px;
    padding-top: 20px;
    color: #5c5c5c;

}
.it-outsourcing-list{
     background-color: rgb(120, 187, 232); 
    border-radius: 30px;
    padding: 20px;
}
.it-outsourcing-list-item{
    color: white;

}
.it-outsourcing-list-item-strong{
    font-weight: 700;
    font-size: 20px;
}
.it-outsourcing-img-container{
    display: flex;
    justify-content: center;
    padding-top: 200px;
  
}
.it-outsourcing-img{
    height: 400px;
    width: 100%;  
    border-radius: 30px;
}
    </style>