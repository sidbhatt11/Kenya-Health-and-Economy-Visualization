<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <div class="container">
      <!-- First row contains Navbar etc-->
      <Navigation/>
      <!-- Second row contains selectors and charts-->
      <div class="row">
        <div class="col" id="healthSelectorContainer">
          1 of 3
        </div>
        <div class="col-8" id="chartContainer">
          2 of 3
        </div>
        <div class="col" id="economicalSelectorContainer">
          3 of 3
        </div>
      </div>
      <!-- Third row contains list of selected attributes etc-->
      <SelectedAttributesPane ref="selectedAttributesPane"/>
      <!-- Fourth row contains news, explanations etc-->
      <div class="row">
          Full width row
      </div>
    </div>
  </div>

</template>

<script>
import Navigation from './components/Navigation.vue'
import SelectedAttributesPane from './components/SelectedAttributesPane.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    SelectedAttributesPane
  },
  mounted() {
    this.$nextTick(function() {
      // TODO: - Remove during production
      this.$refs.selectedAttributesPane.addNewAttribute("LOL");
    });
  }
}
</script>