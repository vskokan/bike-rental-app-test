<template>
  <div id="app">
    <h1><i class="fas fa-bicycle"></i>Bike Rental!</h1>
      <AddBikeForm />
      <RentedList />
      <AvailableList />

  </div>
</template>

<script>
import AddBikeForm from '@/components/AddBikeForm.vue'
import RentedList from '@/components/RentedList.vue'
import AvailableList from '@/components/AvailableList.vue'

export default {
  name: 'App',
  components: {
    AddBikeForm,
    RentedList,
    AvailableList
  }
}
</script>

<style>
* {
  margin: 0;
  
}

html {
  background-color: #e8f0fc;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
}

h1 {
  font-size: 38px;
}

.fa-bicycle {
  margin-right: 5px;
}

button {
  outline: none;
  border: none;
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  
  color: white;
}

.header {
  font-weight: 700;
}

.header i {
  margin-right: 5px;
}

button:hover {
  cursor: pointer;
  
}

.simple {
background-color: rgb(75, 121, 247);
}

.simple:hover {
background-color: rgb(62, 102, 211);
}

.submit {
background-color: rgb(34, 202, 98);
}

.submit:hover {
background-color: rgb(31, 175, 86);
}

.delete {
background-color: rgb(247, 101, 75);
}

.delete:hover {
background-color: rgb(212, 86, 64);
}

.fa-sync {
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.loadblock {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  font-size: 30px;
}
</style>
