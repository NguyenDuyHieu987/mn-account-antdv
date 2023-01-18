<template>
  <a-layout-content>
    <a-breadcrumb
      style="
        padding: 15px 30px;
        background-color: var(--breadcrumb-background-color);
      "
    >
      <a-breadcrumb-item><a href="/">Home</a></a-breadcrumb-item>
      <a-breadcrumb-item>
        <a :href="this.$route.path" v-if="this.$route.path == '/'">
          DashBoard
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
        min-height: 100vh;
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

.ant-breadcrumb span a {
  color: #c9c9c9;
}

.ant-breadcrumb span:last-child a {
  color: #fff;
}

.body-content {
  margin-left: 250px;
  min-height: calc(100vh - var(--header-heigh));
  margin-top: var(--header-height);
  transition: all 0.2s;
}

.body-content.expand {
  margin-left: 80px;
}
</style>
