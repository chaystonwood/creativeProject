<template>
<div class="wrapper">
  <div class="posts">
    <div class="post" v-for="post in posts" :key="post.id">
      <router-link class="router-link" :to="'/post/' + post._id">
        <div class="info">
          <h1>{{post.title}}</h1>
          <p>{{post.author}} | {{post.date}}</p>
        </div>
        <div class="content">
          <p><em>{{content(post.content)}}...</em></p>
        </div>
        <div class="image">
          <img :src="post.path">
        </div>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    posts: Array
  },
  methods: {
    content(content) {
      if (content) {
        return content.substring(0, 100);
      }
      return "undefined";
    }
  },
}
</script>

<style scoped>

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 100px;
}

.posts {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.post {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.post img {
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.post .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.router-link {
  text-decoration: none;
  color: black;
}

.info {
  text-align: center;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.content {
  margin-top: 5px;
  font-size: 12px;
}
</style>
