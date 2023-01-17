<template>
  <a-layout-header class="header">
    <div class="logo">
      <router-link :to="{ name: 'dashboard' }">
        <img src="@/assets/logo.png" />
      </router-link>
    </div>
    <a-menu
      theme="dark"
      mode="horizontal"
      :selectable="false"
      style="line-height: var(--header-height)"
    >
      <a-menu-item key="1">
        <UserOutlined style="margin-right: 10px" />
        <a-dropdown
          :trigger="['click']"
          overlayStyle="border: 0.5px solid var(--border-regular);"
        >
          <a class="ant-dropdown-link" @click.prevent>
            <CaretDownOutlined />
          </a>
          <template #overlay>
            <a-menu theme="dark">
              <a-menu-item key="1">
                <a href="http://www.alipay.com/">Account</a>
              </a-menu-item>
              <a-menu-item
                key="2"
                style="border-top: 0.5px solid var(--border-regular)"
              >
                <a href="/auth">Log out </a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
import { UserOutlined, CaretDownOutlined } from '@ant-design/icons-vue';

export default {
  components: {
    UserOutlined,
    CaretDownOutlined,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.logo {
  img {
    height: 40px;
    object-fit: cover;
  }
}

.ant-layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0px calc(var(--sider-width) / 2.3);
  border-bottom: 1px solid var(--border-regular);
  height: var(--header-height);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;
}
</style>
