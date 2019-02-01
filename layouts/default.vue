<template>
  <v-app>
    <v-navigation-drawer
      right
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <!-- toolbar -->

      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click="drawer = !drawer" />
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-layout
      justify-center
      align-end
      row
      fill-height
      float
    >
      <p> Copyright &copy; 2014 EAC. All Rights Reserved</p>
    </v-layout>
    <!-- <v-footer
      :fixed="fixed"
      app
    >
    </v-footer> -->
  </v-app>
</template>

<style>
.copyright {
  text-align: center;
}
</style>


<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'home',
          title: '首页',
          to: '/'
        },
        {
          icon: 'school',
          title: '留学',
          to: '/inspire'
        },
        {
          icon: 'flight',
          title: '游学',
          to: '/inspire'
        },
        {
          icon: 'books',
          title: '签证',
          to: '/inspire'
        },
        {
          icon: 'language',
          title: '移民',
          to: '/inspire'
        },
        {
          icon: 'work',
          title: '招聘',
          to: '/inspire'
        },
        {
          icon: 'info',
          title: '关于我们',
          to: '/inspire'
        },


      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'EAC'
    }
  }
}
</script>
