<template>
  <nav class="navbar navbar-expand-sm bg-body-tertiary">
    <div class="container-fluid">

      <router-link class="navbar-brand" to="/">Dexidigital</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Dexidigital</router-link>
              <router-link class="nav-link active" to="/blogs">Blogs</router-link>

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
.offcanvas {
  color: white;
}

.nav-bar-component {
  background-color: #8989e1;
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

@media screen and (min-width: 769px) {
  .container-fluid {
    padding: 0 50px 0 50px;
  }
}
</style>
