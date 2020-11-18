<template>
<div>
  <div class="top">
    <div class="info">
      <h1 class="header-1">{{post.title}}</h1>
      <p class="mission-statement">{{post.author}} | {{post.date}}</p>
    </div>
    <div class="image">
      <img :src="post.path">
    </div>
  </div>
  <div class="content">
    <p>{{post.content}}</p>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
     post: {},
    }
  },
  created() {
    this.getPost();
  },
  methods: {
    async getPost() {
      try {
        let response = await axios.get("/api/posts/" + this.$attrs.id);
        this.post = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

.top {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.image, .content, .info {
  margin: 50px;
}

.info {
  margin-top: 150px;
}

img {
  max-width: 600px;
}

</style>
