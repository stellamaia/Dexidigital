<template>
  <nav class="navbar navbar-expand-sm bg-body-tertiary">
    <div class="container-fluid">

      <router-link class="navbar-brand" to="/">
     
        <img class="logo" alt="logo-dexi" src="../assets/dexi.svg" />
      </router-link>
     
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link class="nav-link " to="/" :class="{ 'active': $route.path === '/' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link " to="/blog"  :class="{ 'active': $route.path === '/blog' }">Blog</router-link>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',

  data: () => ({

  }),
}
</script>

<style scoped>
.logo{
  height: 50px;
}
.offcanvas {
  color: white;
}
.bg-body-tertiary{
  -webkit-box-shadow: 0 3px 6px 0 rgb(50 50 50 / 17%)!important;
    box-shadow: 0 3px 6px 0 rgb(50 50 50 / 16%)!important;
}
.navbar-brand:hover{
  color: #1976d2!important;
}
.navbar-brand:focus{
  color: #1976d2!important;
}

.active {
  border-bottom: 2px solid #000000;
}

.nav-link{
  color: #000000;
}

.container-nav {
  padding: 15px;
}

.menu {
  color: white;
  font-size: 32px;
}

.title-favorite {
  font-weight: 600;
  font-size: 20px;
}

.favorite-movies-title {
  padding-bottom: 10px;
  margin: 0;
}

.card-poster-favorite {
  padding-bottom: 20px;
  width: 60%;
}

.offcanvas.offcanvas-start {
  width: 20%;
}

.navbar-toggler:focus {
  text-decoration: none !important;
  outline: 0 !important;
  box-shadow: 0 0 0 0 !important;
}

.navbar-toggler {
  border: none !important;
}

@media screen and (min-width: 575px) {
  .nav-item {
    display: flex;
  }
  
}
@media screen and (max-width: 576px) {

.active{
  border-bottom: none;
  color: #1976d2!important;
}
}
 

@media screen and (min-width: 769px) {
  .container-fluid {
    padding: 0 50px 0 50px;
  }
 
}
</style>
