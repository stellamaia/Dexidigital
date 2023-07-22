<template>
  <div>
    <NavBar />
    <div style="height: 100vh; padding-top: 100px;">

      <h1>Potência em
        tecnologia mobile</h1>
      <p>Alocação de squad de desenvolvimento
        Android, iOS, Flutter, Web e UI/UX Design</p>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import FooterComponent from '../components/FooterComponent'

export default {
  name: 'HomeView',

  components: {
    NavBar,
    FooterComponent
  },
}
</script>
