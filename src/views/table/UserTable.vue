<template>
  <el-row>
    <a href="">element-pro-components docs</a>
  </el-row>
  <el-row>
    <pro-crud
      v-model="form"
      v-model:search="serachForm"
      :columns="columns"
      :menu="{ label: '操作' }"
      :data="data"
      @search="search"
      @submit="submit"
      @delete="deleteRow"
    />
  </el-row>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'UserTable',
  setup() {
    const form = ref({})
    const serachForm = ref({})
    const columns = ref([
      {
        label: '日期',
        prop: 'date',
        component: 'el-input',
        add: true,
        edit: true,
        search: true,
      },
      {
        label: '姓名',
        prop: 'name',
        component: 'el-input',
        add: true,
        search: true,
      },
      {
        label: '地址',
        prop: 'address',
        component: 'el-input',
        add: true,
        edit: true,
      },
    ])
    const data = ref([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ])

    const search = (done: () => void, isValid: any, invalidFields: any) => {
      console.log('search', isValid, invalidFields)
      setTimeout(() => {
        done()
      }, 1000)
    }

    const submit = (
      close: () => Function,
      done: () => Function,
      formType: any,
      isValid: any,
      invalidFields: any,
    ) => {
      console.log('submit', formType, isValid, invalidFields)
      setTimeout(() => {
        // eslint-disable-next-line no-unused-expressions
        isValid ? close() : done()
      }, 1000)
    }

    const deleteRow = (row: any) => {
      console.log('deleteRow', row)
    }

    return {
      form,
      serachForm,
      data,
      columns,
      search,
      submit,
      deleteRow,
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
