<template>
  <div class="manage-account">
    <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{ x: 1500, y: 550 }"
      bordered
    >
      <template #action>
        <a>action</a>
      </template>
    </a-table>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    slots: {
      customRender: 'action',
    },
  },
];
const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

export default defineComponent({
  data() {
    return {
      data,
      columns,
    };
  },
});
</script>
<style lang="scss">
.ant-table {
  background-color: var(--background-content-color);
  color: #fff;

  .ant-table-thead > tr > th {
    background-color: #2e2e2e;
    color: #fff;
  }
}

.ant-table-tbody > tr.ant-table-row:hover > td,
.ant-table-tbody > tr > td.ant-table-cell-row-hover {
  background: #4a4a4a;
}

.ant-pagination-prev .ant-pagination-item-link {
  background-color: var(--background-content-color);
  color: #fff;
}

.ant-pagination-next .ant-pagination-item-link {
  background-color: var(--background-content-color);
  color: #fff;
}

.ant-pagination-item {
  background-color: var(--background-content-color);
  a {
    color: #fff;
  }
}

.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  background-color: var(--background-content-color);
  color: #fff;
}

.ant-table-content {
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  overflow: auto;
}

.ant-select-dropdown {
  background-color: var(--background-content-color);
  .ant-select-item {
    color: #fff;
  }
}

.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
  background-color: #4a4a4a;
}

.ant-select-item-option-active:not(.ant-select-item-option-disabled) {
  background-color: #232323;
}

.ant-pagination-jump-prev
  .ant-pagination-item-container
  .ant-pagination-item-ellipsis,
.ant-pagination-jump-next
  .ant-pagination-item-container
  .ant-pagination-item-ellipsis {
  color: #838383;
}

.ant-table-cell-fix-left,
.ant-table-cell-fix-right {
  background-color: var(--background-content-color);
  z-index: 1;
}
</style>
