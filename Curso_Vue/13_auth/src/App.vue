<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar absolute color="white" elevate-on-scroll scroll-target="#scrolling-techniques-7">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet id="scrolling-techniques-7" class="overflow-y-auto" max-height="600">
        <v-container style="height: 1500px; padding-top: 56px;">
          <router-view />
        </v-container>
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
