import { createStore } from 'vuex'
import Plant from '@/entities/Plant'

export default createStore({
  state: {
    plants: Array<Plant>()
  },
  mutations: {
    addPlant (state, plant) {
      state.plants.push(plant)
    },
    removePlant (state, index) {
      state.plants.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
