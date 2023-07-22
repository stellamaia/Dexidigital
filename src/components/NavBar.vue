<template>
  <div class="nav-bar-component">
    <nav class="navbar fixed-top container-nav" style="background-color: rgb(225, 201, 201);">


      <b-navbar-toggle  target="nav-text-collapse">
        <i class="material-symbols-outlined menu"> Menu </i>
      </b-navbar-toggle>


      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-text> <router-link class="icon" to="/">
              <a>Home</a>
            </router-link></b-nav-text>
        </b-navbar-nav>
      </b-collapse>

    </nav>

  </div>
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
  background-image: linear-gradient(to right bottom, #030328 60%, #5c0b5b 170%);
  color: white;
}

.nav-bar-component {
  background-color: #030328;
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

@media (max-width: 768px) {}</style>
