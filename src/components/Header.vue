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
      style="height: 100%; background: transparent"
    >
      <a-menu-item key="1">
        <UserOutlined style="margin-right: 10px" />
        <a-dropdown
          :trigger="['click']"
          overlayStyle="border: 0.25px solid var(--border-regular);"
        >
          <a class="ant-dropdown-link" @click.prevent>
            <CaretDownOutlined />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item key="my-profile">
                <a href="/profile"
                  ><span>My Profile</span>
                  <br />
                  <span style="font-size: 12px">DuyHieu</span>
                </a>
              </a-menu-item>
              <a-menu-item key="account">
                <a href="/">Account Home</a>
              </a-menu-item>
              <a-menu-item key="login">
                <a href="/login">Log out </a>
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
  padding: 0 20px 0px calc(var(--sider-width) / 2.4);
  border-bottom: 0.25px solid var(--border-regular);
  height: var(--header-height);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 3;
  background-image: linear-gradient(
    to right,
    var(--sider-header-background-color2),
    var(--sider-header-background-color1),
    var(--sider-header-background-color2)
  );
}
</style>
