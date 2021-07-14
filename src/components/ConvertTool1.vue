<template>
  <textarea v-model="text" :rows="rows" :cols="cols"></textarea>
  <hr />
  <button @click="camelCaseNaming">Convert to camel case naming</button>
  <button @click="underscore">Convert to underscore</button>
  <hr />
  <textarea v-model="output" :rows="rows" :cols="cols"></textarea>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "ConvertTool1",
  data() {
    return {
      rows: 10,
      cols: 100
    }
  },
  setup: () => {
    const count = ref<number>(0);
    const text = ref<string>("");
    const output = ref<string>("");
    return { count, text, output };
  },
  methods: {
    camelCaseNaming() {
      let lowerText = this.text.toLowerCase();
      this.output = lowerText.replace(/\_(\w)/g, function (all, letter) {
        return letter.toUpperCase();
      });
    },
    underscore() {
      this.output = this.text.replace(/([A-Z])/g, "_$1").toUpperCase();
    },
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

</style>
