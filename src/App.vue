<template>
  <v-app>
    <v-navigation-drawer
      dark=""
      temporary
      app
      width="180"
      
      :mini-variant="minivariant"
      v-model="drawer"
    >
      <v-list two-line>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.to">
          <v-list-tile-content>
            <v-list-tile-title><v-flex text-xs-center xs12>
              {{ item.title }}
            </v-flex></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title>KQ Voting</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      minivariant: false,
      items: [
        { title: "HOME" , to:"/"},
        { title: "STUDENT" , to:"/student"},
        { title: "SELECTION" },
        { title: "VOTING RESULT" },
        { title: "IMAGE" }
      ]
    };
  }
};
</script>
