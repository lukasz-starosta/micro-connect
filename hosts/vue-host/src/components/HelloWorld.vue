<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="react-root"></div>
    <div id="angular-root"></div>
    <div id="javascript-root"></div>
  </div>
</template>

<script>
import ReactComponent from '@lukasz-starosta/typescript-react-starter';
import AngularComponent from '@lukasz-starosta/angular-starter';
import JavaScriptComponent from '@lukasz-starosta/javascript-starter';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted: () => {
    const reactRoot = document.getElementById('react-root');
    const angularRoot = document.getElementById('angular-root');
    const javascriptRoot = document.getElementById('javascript-root');
    ReactComponent.mount(reactRoot);
    JavaScriptComponent.mount(javascriptRoot);
    AngularComponent.mount(angularRoot);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
