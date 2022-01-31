<template>
  <div class="container">
    <h2 class="header"><i class="fas fa-plus"></i>Add new bike</h2>
    <div class="form">
      <div class="input-container">
        <div class="label" :class="{ error: !isNameValid }">Bike name</div>
        <input
          class="name"
          type="text"
          v-model="bike.name"
          @input="validateName"
        />
      </div>
      <div class="input-container">
        <div class="label">Bike type</div>
        <div class="select type" @click="showTypes = !showTypes">
          {{ bike.type }}
          <i
            class="fas"
            :class="{
              'fa-chevron-down': !showTypes,
              'fa-chevron-up': showTypes,
            }"
          ></i>
        </div>
        <div class="options" v-if="showTypes">
          <div
            class="option"
            :class="{ chosen: bike.type == type }"
            v-for="(type, index) in types"
            :key="index"
            @click="
              bike.type = type;
              showTypes = !showTypes;
            "
          >
            {{ type }}
          </div>
        </div>
      </div>
      <div class="input-container">
        <div class="label" :class="{ error: !isPriceValid }">
          Price per hour, $
        </div>
        <input
          class="price"
          type="number"
          step="0.01"
          min="0"
          placeholder="00,00"
          v-model="bike.price"
          @input="validatePrice"
        />
      </div>
      <button class="submit" @click="submit">
        <span v-if="!isSending">Submit</span><i v-else class="fas fa-sync"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      bike: {
        name: "",
        type: "Custom",
        price: "",
      },
      types: ["Custom", "Mountain", "Road", "Children"],
      showTypes: false,
      isNameValid: true,
      isPriceValid: true,
    };
  },
  computed: mapGetters(["isSending", "isAdded"]),
  methods: {
    ...mapActions(["addBike"]),
    validateName() {
      if (this.bike.name.length == 0) {
        this.isNameValid = false;
      } else {
        this.isNameValid = true;
      }
    },
    validatePrice() {
      if (this.bike.price == 0) {
        this.isPriceValid = false;
      } else {
        
        this.isPriceValid = true;
      }
    },
    validate() {
      this.validateName();
      this.validatePrice();

      if (!this.isNameValid || !this.isPriceValid) {
        return false;
      } else {
        return true;
      }
    },
    submit() {
      if (this.validate()) {
        this.bike.price = (+this.bike.price).toFixed(2)
        this.addBike(this.bike);
        (this.bike.name = ""),
          (this.bike.type = "Custom"),
          (this.bike.price = 0);
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 70%;
}

.form {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
}

input,
.select {
  outline: none;
  border: none;
  background-color: rgb(225, 236, 252);
  padding: 10px;
  margin-top: 5px;
  border-radius: 10px;
}

.select {
  display: flex;
  justify-content: space-between;
}

.select:hover {
  cursor: pointer;
}

.name,
.select,
.option {
  width: 200px;
}

.options {
  position: absolute;
  background-color: white;
  margin-top: 5px;
  padding: 10px 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 6px -4px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.option {
  padding: 10px 5px;
  margin: 5px 0px;
  border-radius: 10px;
  text-align: center;
}

.option:hover {
  cursor: pointer;
  color: rgb(69, 147, 236);
}

.chosen {
  font-weight: 700;
}

.label {
  margin-left: 5px;
}

.error {
  color: red;
}
</style>
