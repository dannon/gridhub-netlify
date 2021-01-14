<template>
  <div class="layout">
    <header id="masthead">
      <g-link to="/">
        <img id="masthead-logo" src="/images/galaxy_logo_hub_white.svg" alt="Galaxy Community Hub">
      </g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/use/">Use</g-link>
        <g-link class="nav__link" to="/news/">News</g-link>
        <g-link class="nav__link" to="/events/">Events</g-link>
        <g-link class="nav__link" to="/jobs/">Jobs</g-link>
        <g-link class="nav__link" to="/jxtx/">@jxtx</g-link>
      </nav>
    </header>
    <section class="main">
      <slot/>
    </section>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  margin: 0 auto;
}

#masthead {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
  height: 65px;
  background-color: #2c3143;
}

#masthead-logo {
  height: 30px;
}

#masthead a {
  color: rgba(255, 255, 255, 0.5);
}

.nav__link {
  margin-left: 20px;
}

.main {
  margin-left: 40px;
  margin-right: 40px;
}

a {
  color: #2882dc;
  text-decoration: none;
  font-weight: normal;
}
</style>
