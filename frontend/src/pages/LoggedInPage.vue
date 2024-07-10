<template>
  <q-page padding>
    <div class="row justify-center">
      <q-card class="q-pa-md" style="max-width: 400px">
        <q-card-section>
          <div class="text-h6">Welcome, {{ username }}</div>
        </q-card-section>

        <q-card-section>
          <q-btn label="Logout" color="primary" @click="logout" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      username: "testuser", // Replace with dynamic data as needed
    };
  },
  created() {
    console.log("LoggedInPage component created");
  },

  methods: {
    logout() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
.row {
  margin-top: 20px;
}
</style>
