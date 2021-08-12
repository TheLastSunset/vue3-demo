<template>
  <el-input
    type="textarea"
    :autosize="{ minRows: rows, maxRows: cols}"
    v-model="text">
  </el-input>
  <hr />
  <el-button type="info" @click="camelCaseNaming">Convert to camel case naming</el-button>
  <el-button type="info" @click="underscore">Convert to underscore</el-button>
  <hr />
  <el-input
    type="textarea"
    :autosize="{ minRows: rows, maxRows: cols}"
    v-model="output">
  </el-input>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'ConvertTool1',
  data() {
    return {
      rows: 10,
      cols: 100,
    };
  },
  setup: () => {
    const count = ref<number>(0);
    const text = ref<string>('');
    const output = ref<string>('');
    return { count, text, output };
  },
  methods: {
    camelCaseNaming() {
      const text = this.text || '';
      const lowerText = text.trim().toLowerCase();
      this.output = lowerText.replace(/_(\w)/g, (all, letter) => letter.toUpperCase());
    },
    underscore() {
      const text = this.text || '';
      this.output = text.trim().replace(/([A-Z])/g, '_$1').toUpperCase();
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
