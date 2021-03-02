<template>

<div class="le-petit-bois">
  <h1>Le petit bois</h1>

  <div class="plant-list">
    <h2>Your plants</h2>

    <form @submit.prevent="addPlant()">
      <label>New plant </label>
      <input v-model="newPlant.name"
             name="newPlant"
             autocomplete="off">
      <button>Add plant</button>
    </form>
    <ul>
      <li v-for="(plant, index) in plants"
          :key="index">
        <span>
          {{ plant.name }}
        </span>
        <button @click="removePlant(index)">
          Remove
        </button>
      </li>
    </ul>
  </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import Plant from '@/entities/Plant'

@Options({
  components: {
    HelloWorld
  }
})
export default class LePetitBois extends Vue {
  newPlant: Plant = { name: 'Nouveau' }

  get plants (): Array<Plant> {
    return this.$store.state.plants
  }

  addPlant () {
    this.$store.commit('addPlant', this.newPlant)
  }

  removePlant (index: number) {
    this.$store.commit('removePlant', index)
  }
}
</script>

<style scoped lang="scss">

.le-petit-bois {
  color: #eee;
  background-color: #111;
}
</style>
