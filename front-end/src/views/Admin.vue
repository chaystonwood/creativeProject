<template>
<div class="admin">
  <h1>Admin Controls to Create, Edit, and Delete Posts</h1>
  <div class="page">
    <div class="container">
      <div class="heading">
        <h2>Create Post</h2>
      </div>
      <div class="add">
        <div class="form">
          <input v-model="title" placeholder="Title" class="textbox">
          <input v-model="author" placeholder="Author" class="textbox">
          <p></p>
          <textarea v-model="content" placeholder="Post Content" class="textarea"></textarea>
          <p></p>
          <input type="file" name="photo" @change="fileChanged">
          <button @click="upload"> Post </button>
        </div>
        <div class="upload" v-if="addPost">
          <h2>{{addPost.title}}</h2>
          <p><em>{{addPost.author}}</em> | {{addPost.date}}</p>
          <img :src="addPost.path" />
          <p>{{addPost.content}}</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="heading">
        <h2>Edit or Delete a Post</h2>
      </div>
      <div class="edit">
        <div class="form">
          <input v-model="findTitle" placeholder="Search">
          <div class="suggestions" v-if="suggestions.length > 0">
            <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectPost(s)">{{s.title}}
            </div>
          </div>
        </div>
        <div class="upload" v-if="findPost">
          <input v-model="findPost.title" class="textbox">
          <input v-model="findPost.author" class="textbox">
          <p></p>
          <textarea v-model="findPost.content" class="textarea"></textarea>
          <p></p>
          <img :src="findPost.path" />
        </div>
        <div class="actions" v-if="findPost">
          <button @click="deletePost(findPost)">Delete</button>
          <button @click="editPost(findPost)">Edit</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Admin',
  data() {
    return {
      title: "",
      file: null,
      addPost: null,
      posts: [],
      findTitle: "",
      findPost: null,
      author: "",
      content: "",
    }
  },
  computed: {
    suggestions() {
      let posts = this.posts.filter(post => post.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
      return posts.sort((a, b) => a.title > b.title);
    }
  },
  created() {
    this.getPosts();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/posts', {
          title: this.title,
          author: this.author,
          content: this.content,
          path: r1.data.path
        });
        this.addPost = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getPosts() {
      try {
        let response = await axios.get("/api/posts");
        this.posts = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectPost(post) {
      this.findTitle = "";
      this.findPost = post;
    },
    async deletePost(post) {
      try {
        await axios.delete("/api/posts/" + post._id);
        this.findPost = null;
        this.getPosts();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editPost(post) {
      try {
        await axios.put("/api/posts/" + post._id, {
          title: this.findPost.title,
          author: this.findPost.author,
          content: this.findPost.content
        });
        this.findPost = null;
        this.getPosts();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
h1 {
  padding-top: 50px;
  margin: auto;
  text-direction: center;
}

.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.textbox {
  margin-bottom: 10px;
  margin-right: 10px;
}

.textarea {
  margin-bottom: 10px;
  width: 800px;
  height: 900px;
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}

.admin, .page {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: auto;
}
</style>
