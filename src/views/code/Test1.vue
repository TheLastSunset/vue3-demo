<template>
  <el-form
    :inline="true"
    :model="searchForm"
  >
    <el-form-item label="SKU">
      <el-input
        v-model.trim="searchForm.sku"
        placeholder="SKU"
      />
    </el-form-item>
    <el-form-item label="英文品名">
      <el-input
        v-model.trim="searchForm.enName"
        placeholder="英文品名"
      />
    </el-form-item>
    <el-form-item label="中文品名">
      <el-input
        v-model.trim="searchForm.cnName"
        placeholder="中文品名"
      />
    </el-form-item>
    <el-form-item label="品牌">
      <el-input
        v-model.trim="searchForm.brand"
        placeholder="品牌"
      />
    </el-form-item>
    <el-form-item label="材质">
      <el-input
        v-model.trim="searchForm.material"
        placeholder="材质"
      />
    </el-form-item>
    <el-form-item label="海关编码">
      <el-input
        v-model.trim="searchForm.custCode"
        placeholder="海关编码"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="query"
      >
        查询
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Test1',
  setup() {
    const searchForm = ref({})

    return {
      searchForm,
    }
  },
  data() {
    return {}
  },
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
