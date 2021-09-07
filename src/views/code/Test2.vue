<template>
  <div />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { test1 } from '@/utils/time'

export default defineComponent({
  name: 'Test2',
  setup() {
    const searchForm = ref({})

    const t = test1()
    console.log(t)

    return {
      searchForm,
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
})
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
