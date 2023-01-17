<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    theme="dark"
  >
    <a-menu-item key="dashboard">
      <template #icon>
        <HomeOutlined />
      </template>
      <router-link :to="{ name: 'dashboard' }"
        ><span>Dashboard</span>
      </router-link>
    </a-menu-item>

    <a-menu-item key="analytics">
      <template #icon>
        <LineChartOutlined />
      </template>
      <router-link :to="{ name: 'analytics' }">
        <span>Analytics</span></router-link
      >
    </a-menu-item>
    <a-menu-item key="about">
      <template #icon>
        <InfoCircleOutlined />
      </template>
      <router-link :to="{ name: 'about' }"> <span>About</span></router-link>
    </a-menu-item>
    <a-sub-menu key="setting">
      <template #icon>
        <SettingOutlined />
      </template>
      <!-- <router-link :to="{ name: 'setting' }"><span>Setting</span></router-link> -->
      <template #title>Setting</template>
      <a-menu-item key="switch-mode">
        <div style="display: flex">
          <span style="margin-right: 20px">Dark Mode</span>
          <Switch />
        </div>
      </a-menu-item>
    </a-sub-menu>
    <a-menu-item key="1">
      <template #icon>
        <SettingOutlined />
      </template>
      <span>Setting</span>
    </a-menu-item>
    <a-menu-item key="2">
      <template #icon>
        <SettingOutlined />
      </template>
      <span>Setting</span>
    </a-menu-item>
    <a-menu-item key="3">
      <template #icon>
        <SettingOutlined />
      </template>
      <span>Setting</span>
    </a-menu-item>
    <a-menu-item key="4">
      <template #icon>
        <SettingOutlined />
      </template>
      <span>Setting</span>
    </a-menu-item>
    <a-menu-item key="5">
      <template #icon>
        <SettingOutlined />
      </template>
      <span>Setting</span>
    </a-menu-item>
    <a-menu-item key="6">
      <template #icon>
        <SettingOutlined />
      </template>
      <span>Setting</span>
    </a-menu-item>
    <a-menu-item key="7">
      <template #icon>
        <SettingOutlined />
      </template>
      <span>Setting</span>
    </a-menu-item>
    <a-menu-item key="8">
      <template #icon>
        <SettingOutlined />
      </template>
      <span>Setting</span>
    </a-menu-item>
    <a-menu-item key="9">
      <template #icon>
        <SettingOutlined />
      </template>
      <span>Setting</span>
    </a-menu-item>
    <a-menu-item key="10">
      <template #icon>
        <SettingOutlined />
      </template>
      <span>Setting</span>
    </a-menu-item>
  </a-menu>
</template>

<script>
import { reactive, toRefs, watch } from 'vue';
import {
  // MenuFoldOutlined,
  // MenuUnfoldOutlined,
  SettingOutlined,
  HomeOutlined,
  LineChartOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons-vue';
import Switch from '@/components/Switch.vue';

export default {
  components: {
    // MenuFoldOutlined,
    // MenuUnfoldOutlined,
    HomeOutlined,
    SettingOutlined,
    LineChartOutlined,
    InfoCircleOutlined,
    Switch,
  },
  setup() {
    const state = reactive({
      selectedKeys: ['dashboard'],
      openKeys: ['1'],
      preOpenKeys: ['1'],
    });

    watch(
      () => state.openKeys,
      (_val, oldVal) => {
        state.preOpenKeys = oldVal;
      }
    );

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped lang="scss"></style>
