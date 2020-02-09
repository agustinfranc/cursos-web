<template>
  <div id="app">

    <b-navbar toggleable="md" type="dark" variant="danger">
      <b-container>

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'home' }" exact>Home</b-nav-item>    <!-- viene con router-link -->
            <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
            <b-nav-item :to="{ name: 'grid' }">Grid</b-nav-item>
            <b-nav-item :to="{ name: 'cards' }">Cards</b-nav-item>
            <b-nav-item :to="{ name: 'formularios' }">Form</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

      </b-container>
    </b-navbar>

    <router-view/>
  </div>
</template>

