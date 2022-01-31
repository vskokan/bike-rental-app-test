export default {
  actions: {
    async fetchAvailableBikes({ commit }) {
      let response = await fetch("/api/bikes/", {
        method: "GET",
      });
      if (response.ok) {
        let json = await response.json();
        setTimeout(() => {
          const bikes = json.data;
          commit("updateAvailableBikes", bikes);
          commit("updateLoadingStatus");
        }, 1000);
      } else {
        console.log("Ошибка HTTP: " + response.status);
      }
    },
    async fetchRentedBikes({ commit }) {
      let response = await fetch("/api/bikes/rent", {
        method: "GET",
      });
      if (response.ok) {
        let json = await response.json();
        setTimeout(() => {
          const bikes = json.data;
          commit("updateRentedBikes", bikes);
        }, 1000);
      } else {
        console.log("Ошибка HTTP: " + response.status);
      }
    },
    async addBike({ commit, dispatch }, newBike) {
      commit("updateSendingStatus", true);
      commit("updateAddingStatus", false);
      let response = await fetch("/api/bikes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(newBike),
      });

      if (response.ok) {
        setTimeout(() => {
          commit("updateSendingStatus", false);
          commit("updateAddingStatus", true);
        }, 1000);
        dispatch("fetchAvailableBikes");
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    },
    async rentBike({ dispatch }, rentBike) {
      let response = await fetch("/api/bikes/rent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(rentBike),
      });

      if (response.ok) {
        dispatch("fetchRentedBikes");
        dispatch("fetchAvailableBikes");
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    },
    async deleteBike({ dispatch }, bikeId) {
      let response = await fetch(
        `/api/bikes/${bikeId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        dispatch("fetchAvailableBikes");
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    },
    async cancelRent({ dispatch }, bikeId) {
      let response = await fetch(
        `/api/bikes/rent/${bikeId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        dispatch("fetchAvailableBikes");
        dispatch("fetchRentedBikes");
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    },
  },
  mutations: {
    updateAvailableBikes(state, bikes) {
      state.availableBikes = bikes;
    },
    updateRentedBikes(state, bikes) {
      state.rentedBikes = bikes;
    },
    updateLoadingStatus(state) {
      state.isLoading = false;
    },
    updateSendingStatus(state, bool) {
      state.isSending = bool;
    },
    updateAddingStatus(state, bool) {
      state.isAdded = bool;
    },
  },
  state: {
    availableBikes: [],
    rentedBikes: [],
    isLoading: true,
    isSending: false,
    isAdded: false,
  },
  getters: {
    availableBikes(state) {
      return state.availableBikes;
    },
    rentedBikes(state) {
      return state.rentedBikes;
    },
    isLoading(state) {
      return state.isLoading;
    },
    isSending(state) {
      return state.isSending;
    },
    isAdded(state) {
      return state.isAdded;
    },
    totalSum(state) {
      console.log(
        state.rentedBikes.reduce((sum, current) => {
          return sum + current;
        }, 0)
      );
      return state.rentedBikes.reduce((sum, current) => {
        return sum + +current.sum;
      }, 0);
    },
  },
};
