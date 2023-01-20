<template>
  <div class="header-table">
    <div class="header-table-left">
      <h2>Manage Account</h2>
      <a-tooltip title="Add Account">
        <a-button
          type="primary"
          shape="circle"
          size="large"
          @click="
            $store.state.modalVisible = true;
            $store.state.modalAction = 'add';
          "
        >
          <template #icon>
            <PlusOutlined />
          </template>
        </a-button>
      </a-tooltip>
    </div>
    <a-input-search
      v-model:value="value"
      placeholder="Type here to search account..."
      enter-button="Search"
      size="large"
      allowClear
      bordered
      @search="onSearch"
      style="max-width: 600px"
    />
  </div>
  <div class="manage-account">
    <a-table
      :columns="columns"
      :data-source="listAccount"
      :scroll="{ x: 1500, y: '70vh' }"
      bordered
      :loading="$store.state.loadingTable"
      :customRow="customRow"
    >
      <template #action>
        <a-dropdown
          :trigger="['click']"
          overlayStyle="border: 0.5px solid var(--border-regular);
          "
        >
          <a class="ant-dropdown-link" @click.prevent>
            <span>Action</span>
            <CaretDownOutlined />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item
                key="detail"
                @click="
                  $store.state.modalVisible = true;
                  $store.state.modalAction = 'detail';
                "
              >
                <template #icon>
                  <EyeFilled />
                </template>
                <span>Detail</span>
              </a-menu-item>
              <a-menu-item
                key="edit"
                @click="
                  $store.state.modalVisible = true;
                  $store.state.modalAction = 'edit';
                "
              >
                <template #icon>
                  <EditFilled />
                </template>
                <span>Edit</span>
              </a-menu-item>
              <a-menu-item
                key="delelte"
                @click="
                  $store.state.modalVisible = true;
                  $store.state.modalAction = 'delete';
                "
              >
                <template #icon>
                  <DeleteFilled />
                </template>
                <span>Delete</span>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </template>
    </a-table>
    <JsxCom />
  </div>
  <teleport to="body"> <Modal :account="account" /></teleport>
</template>

<script>
import {
  CaretDownOutlined,
  EyeFilled,
  EditFilled,
  DeleteFilled,
  PlusOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref, reactive, toRaw } from 'vue';
import { useStore } from 'vuex';

import Modal from './Modal.vue';

export default defineComponent({
  components: {
    CaretDownOutlined,
    EyeFilled,
    EditFilled,
    DeleteFilled,
    PlusOutlined,
    Modal,
  },
  data() {
    return {};
  },
  setup() {
    const store = useStore();
    const columns = ref([
      {
        title: 'Id',
        width: 80,
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
      },
      {
        title: 'Full name',
        width: 200,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
        ellipsis: true,
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        width: 200,
      },
      {
        title: 'Iban',
        dataIndex: 'iban',
        key: 'iban',
        width: 150,
      },
      {
        title: 'Pin',
        dataIndex: 'pin',
        key: '3pin',
        width: 100,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: 250,
      },
      {
        title: 'Balance',
        dataIndex: 'balance',
        key: 'balance',
        width: 150,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: 250,
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        width: 150,
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
    ]);
    const account = reactive({});
    const value = ref('');

    const onSearch = (searchValue) => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };

    const customRow = (record) => {
      return {
        onClick: (e) => {
          // store.dispatch('getDetailAccount', { id: record.id });
          if (e.target.closest('.ant-dropdown-link.ant-dropdown-trigger')) {
            console.log(toRaw(record));
            store.state.detailAccount = toRaw(record);
            account.value = toRaw(record);
            store.state.loadingDetailAccount = true;

            setTimeout(() => {
              store.state.loadingDetailAccount = false;
            }, 1500);
          }
        },
      };
    };

    return {
      columns,
      value,
      onSearch,
      customRow,
      account,
    };
  },

  created() {
    this.$store.dispatch('getListAccount');
  },

  computed: {
    listAccount() {
      return this.$store.state.listAccount;
    },
    numberOfAccount() {
      return this.$store.state.numberOfAccount;
    },
  },
});
</script>

<style lang="scss" scoped>
.header-table {
  display: flex;
  justify-content: space-between;
  margin: 15px 0px;

  h2 {
    white-space: nowrap;
    margin-right: 30px;
  }
  .header-table-left {
    display: flex;
  }
}
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

.ant-table-cell {
  .ant-dropdown-link {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-right: 5px;
    }
  }
}
</style>
