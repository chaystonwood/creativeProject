<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="/images/logo.png">
        </router-link>
      </div>
      <div id="links">
        <router-link to="/recent-posts">
          <div class="menu-item">
            <p>Recent Posts</p>
          </div>
        </router-link>
        <router-link to="/search">
          <div class="menu-item">
            <p>Search</p>
          </div>
        </router-link>
        <router-link to="/about">
          <div class="menu-item">
            <p>About</p>
          </div>
        </router-link>
        <router-link to="/admin">
          <div class="menu-item">
            <p>Admin</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header-1 {
  border-radius: 10px;
  border: 2px solid #75BEFF;
  text-align: center;
  padding: 1em;
  max-width: 15em;
  margin: 1em auto 1em auto;
}

.header-2 {
  color: #75BEFF;
  margin-top: 3em;
}

.header-2-centered {
  color: #75BEFF;
  margin-top: 3em;
  text-align: center;
}

ul {
  padding-left: 2em;
}

li {
  padding-top: 0.5em;
}

.mission-statement {
  font-style: italic;
  font-weight: lighter;
  font-size: 20px;
  text-align: center;
  padding: 0em 3em 3em 3em;
}

#menu {
  background-color: #75BEFF;
  display: flex;
}

#menu a {
  color: #D3D3D3;
}

#menu a:hover {
  color: white;
}

#brand {
}

#brand img {
  height: 60px;
  margin: 10px;
}

#links {
  display: flex;
  align-items: flex-end;
  margin-bottom: 5px;
}

.menu-item {
  display: flex;
  margin: 10px;
}

.menu-item p {
  margin: 0px;
}
</style>
