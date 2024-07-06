<template>
  <q-page padding>
    <div class="row justify-center">
      <q-btn @click="fetchBikes" label="Fetch Bikes" />
    </div>
    <div v-if="bikes.length">
      <h2>Bike List:</h2>
      <q-list bordered padding>
        <q-item v-for="bike in bikes" :key="bike.bike_type">
          <q-item-section>
            <q-item-label>Type: {{ bike.bike_type }}</q-item-label>
            <q-item-label caption
              >Battery Level: {{ bike.battery_level }}</q-item-label
            >
            <q-item-label caption>Latitude: {{ bike.latitude }}</q-item-label>
            <q-item-label caption>Longitude: {{ bike.longitude }}</q-item-label>
            <q-item-label caption
              >Partner ID: {{ bike.partner_id }}</q-item-label
            >
            <q-item-label caption>Reserved: {{ bike.reserved }}</q-item-label>
            <q-item-label caption>Count Run: {{ bike.count_run }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      bikes: [],
    };
  },
  methods: {
    async fetchBikes() {
      try {
        const response = await axios.get("http://localhost:3000/api/bikes");
        this.bikes = response.data;
      } catch (error) {
        console.error("Error fetching bikes:", error);
      }
    },
  },
};
</script>

<style>
.row {
  margin-top: 20px;
}
</style>
