<template>
  <a-layout-content style="height: calc(100vh - 129px)">
    <a-breadcrumb
      style="
        padding: 15px 30px;
        background-color: var(--breadcrumb-background-color);
        border-bottom: 1px solid var(--border-regular);
      "
    >
      <a-breadcrumb-item><a href="/">Home</a></a-breadcrumb-item>
      <a-breadcrumb-item>
        <a :href="this.$route.path" v-if="this.$route.path == '/'">
          Dashboard
        </a>
        <a :href="this.$route.path" v-else>{{
          this.$route.path.charAt(1).toUpperCase() + this.$route.path.slice(2)
        }}</a>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <div
      style="
        padding: 15px 30px;
        background-color: var(--background-content-color);
        height: 100%;
      "
    >
      <slot />
    </div>
  </a-layout-content>
</template>

<style lang="scss">
.ant-menu-title-content {
  user-select: none;
}

// .ant-breadcrumb span a {
//   color: #c9c9c9;
// }

// .ant-breadcrumb span:last-child a {
//   color: #fff;
// }

.body-content {
  margin-left: 250px;
  min-height: calc(100vh - var(--header-heigh));
  margin-top: var(--header-height);
  transition: all 0.2s;
}

.body-content.expand {
  margin-left: var(--sider-collapsed-width);
}
</style>
