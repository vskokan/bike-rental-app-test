<template>
  <div class="bike">
    <div class="main">
      <div class="info">
        <span class="name">{{ bike.name }}</span>
        <span class="type">{{ bike.type }}</span>
        <span class="price">${{ bike.price }}/h</span>
      </div>
      <div class="buttons" v-if="!isExpanded">
        <span class="total" v-if="!available"
          >${{ bike.sum }} for {{ bike.hours }}h</span
        >
        <button
          class="simple"
          v-if="available"
          @click="isExpanded = !isExpanded"
        >
          Rent
        </button>
        <button class="delete" v-if="available" @click="deleteBike(bike.id)">
          Delete
        </button>
        <button class="delete" v-if="!available" @click="cancelRent(bike.id)">
          Cancel rent
        </button>
      </div>
    </div>
    <div class="hidden" v-if="isExpanded">
      <div class="calculator">
        <div class="time noselect">
          <i
            class="fas fa-minus"
            @click="
              () => {
                if (time !== 1) time--;
              }
            "
          ></i>
          {{ time }} h
          <i class="fas fa-plus" @click="time++"></i>
        </div>
        <div class="price">
          Total price: <span> ${{ totalPrice.toFixed(2) }} </span>
        </div>
      </div>
      <div class="buttons">
        <button class="submit" @click="rent">Submit</button>
        <button
          class="delete"
          @click="
            isExpanded = !isExpanded;
            time = 1;
          "
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["bike", "available"],
  data() {
    return {
      isExpanded: false,
      time: 1,
    };
  },
  computed: {
    totalPrice: function () {
      if (this.time <= 20) {
        return this.time * this.bike.price;
      } else {
        return 20 * this.bike.price + (this.bike.price / 2) * (this.time - 20);
      }
    },
  },
  methods: {
    ...mapActions(["rentBike", "deleteBike", "cancelRent"]),
    decreaseTime() {
      if (this.time !== 1) {
        --this.time;
      }
    },
    rent() {
      const rentedBike = {
        bike: this.bike.id,
        time: this.time,
      };

      this.rentBike(rentedBike);
      this.time = 1;
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style scoped>
.bike {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  z-index: -3;
}

.main,
.hidden {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.hidden {
  margin-top: 20px;
}

button {
  margin: 0px 5px;
}

.noselect {
  -webkit-touch-callout: none; 
  -webkit-user-select: none; 
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; 
}

.time i {
  cursor: pointer;
}

.calculator {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 30px;
}

.total {
  margin-right: 30px;
}

.name,
.type,
.price {
  font-size: 20px;
  margin: 0px 5px;
}

.name {
  font-size: 22px;
  font-weight: 600;
}
</style>
