<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>supervisor_account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>View Meetups</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon class="hidden-sm-and-up"
      @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>DevMeetups</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat><v-icon left>supervisor_account</v-icon>View Meetups</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>

    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="css">
</style>
