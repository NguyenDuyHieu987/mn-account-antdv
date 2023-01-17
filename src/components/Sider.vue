<template>
  <a-layout-sider
    v-model:collapsed="$store.state.collapsed"
    collapsible
    width="var(--sider-width)"
    trigger
    style="
      position: fixed;
      left: 0;
      top: var(--header-height);
      bottom: 0;
      border-right: 1px solid var(--border-regular);
    "
  >
    <a-list>
      <template #header>
        <div
          style="
            color: var(--text-color);
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <h3 v-if="!$store.state.collapsed">DuyHieu</h3>
          <div v-else class="user-name-container">
            <h4>{{ 'DuyHieu'.slice(0, 2).toUpperCase() }}</h4>
          </div>
        </div>
      </template>
      <TheMenu />
    </a-list>
  </a-layout-sider>
</template>

<script>
import { ref } from 'vue';
import TheMenu from './TheMenu.vue';

export default {
  components: {
    TheMenu,
  },
  data() {
    return {
      selectedKeys1: ref(['2']),
      selectedKeys2: ref(['1']),
      collapsed: ref(false),
      openKeys: ref(['sub1']),
    };
  },
};
</script>
<style lang="scss">
.ant-list-split .ant-list-header {
  border-bottom: 1px solid var(--border-regular);
}

.ant-layout-sider-trigger {
  background-color: #001529;
  border-top: 1px solid var(--border-regular);
  border-right: 1px solid var(--border-regular);
}

.ant-layout-sider-children {
  min-height: 100%;
  overflow-y: scroll;
}

.ant-list-header {
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #001529;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: center;
}

.ant-layout-sider-children::-webkit-scrollbar {
  display: none;
}

.ant-spin-container {
  margin-bottom: 30px;
}
</style>
