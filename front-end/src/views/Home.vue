<template>
<div class="body">
  <h1 class="header-1">Welcome to WoodBlog</h1>
  <div class="mission-statement">
    some tips and tricks for the modern-day college student
  </div>

  <p>This is a blog written by college students attending Brigham Young
    University. It's meant to address the joys and hardships of living as
    a college student in the 2020s. Please feel free to browse the
    Recent Posts or learn more about the authors. If you need
    help finding something, look for keywords on the search page.</p>

  <div class="common-posts">
    <h2 class="header-2">Common Post Topics</h2>
    <ul>
      <li>Study Techniques</li>
      <li>College Jobs</li>
      <li>The Joys of Campus Life</li>
      <li>Social Interaction</li>
      <li>Overcoming Anxiety and Depression</li>
    </ul>
  </div>

  <h2 class="header-2-centered">Three Most Recent Posts</h2>
  <div>
    <PostList :posts="posts" />
  </div>

  <h2 class="header-2">Contact Us</h2>
  <p>Please send us an email to ourwoodlife@gmail.com for any questions,
    comments, concerns, or feedback!</p>
</div>
</template>

<script>
import PostList from "../components/PostList.vue";
import axios from 'axios';
export default {
  name: 'Home',
  components: {
    PostList
  },
  data() {
    return {
     posts: [],
    }
  },
  created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      try {
        let response = await axios.get("/api/posts");
        let posts = response.data;
        this.posts = posts.slice((posts.length - 3), (posts.length));
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.body {
  margin: 50px 100px;
  font-size: 20px;
}

.common-posts {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
