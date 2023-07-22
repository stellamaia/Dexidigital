<template>
  <div>
    <h1>This is an blogs page</h1>
    <NavBar />
    <FooterComponent />
  </div>
  </template>
  <script>
  import NavBar from '../components/NavBar'
  import FooterComponent from '../components/FooterComponent'

  export default {
    name: 'BlogsView',

    components: {
      NavBar,
      FooterComponent
    },
  }
</script>
