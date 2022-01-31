<template>
  <div class="container">
    <h2 class="header"><i class="fas fa-check-circle"></i>Available bikes ({{availableBikes.length}})</h2>
    <div class="list" v-if="!isLoading">
      <span class="empty" v-if="availableBikes.length == 0">No available bikes</span>
      <Bike
        v-for="bike in availableBikes"
        :key="bike.id"
        :bike="bike"
        :available="true"
      ></Bike>
    </div>
    <div class="loadblock" v-else><i class="fas fa-sync"></i></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Bike from "./Bike.vue";
export default {
  components: {
    Bike,
  },
  data() {
    return {};
  },
  computed: mapGetters(["availableBikes", "isLoading"]),
  methods: {
    ...mapActions(["fetchAvailableBikes"]),
  },
  mounted() {
    this.fetchAvailableBikes();
  },
};
</script>

<style scoped>
.container {
  width: 70%;
}

.list {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  transition: all 0.2s;
  animation: appear 0.5s ease-in-out forwards;
  overflow: hidden;
  transform: translateY(100px);
  opacity: 0;
  
}

@keyframes appear {
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
