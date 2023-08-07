<template>
    <div>
        <v-btn class="whatsapp-button" @click="redirectToWhatsApp" ></v-btn>
    </div>
</template>

<script>
export default {
    name: 'WhatsappButton',
    methods: {
        redirectToWhatsApp() {
            const phoneNumber = "5534991284358";
            const message = "Olá!";
            const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }
    }
};
</script>

<style>
.whatsapp-button{
    position: fixed;
    top: auto !important;
    right: 20px !important;
    bottom: 20px !important;
    left: auto !important;
    background-image: url('../assets/whatsapp.png');
    box-shadow: none;
    background-repeat: no-repeat;
    background-size: 55px;
    padding: 0;
    height: 58px!important;
    min-width: 56px!important;
    background-color: #ffffff00!important;
}
.whatsapp-button:before{
    background-color: #ffffff00!important;
}
</style>