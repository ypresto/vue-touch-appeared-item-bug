<template>
  <div class="hello" v-touch:tap="hideHello" v-if="helloShown">
    <h1>{{ msg }}</h1>
  </div>
  <div v-else>
    <label>
      <input type="radio" v-model="radioSelection" value="1"> Radio 1
    </label>
    <label>
      <input type="radio" v-model="radioSelection" value="2"> Radio 2
    </label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      helloShown: true,
      radioSelection: 1,
      msg: 'Hello World!'
    }
  },
  methods: {
    hideHello() {
      this.helloShown = false
      setTimeout(() => this.helloShown = true, 2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
