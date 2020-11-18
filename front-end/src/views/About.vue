<template>
  <div class="about">
    <div class="about-container">
      <div class="text">
        <h1 class="header-1">About Us</h1>

        <p>We are the Woods! We got married September 5th, 2020 (yes, we were
          a COVID wedding...) and we attend BYU. Chayston is studying Computer
          Science while Erin is studying Physical Science Education. We know
          that life can be unpredictable and hard as a college student, so we
          started a blog to share what little we've figured out along the way.
          We currently live in Provo, Utah with our cat Lucy.</p>

        <h2 class="header-2">Favorite Hobbies</h2>
        <ul>
          <li>Travelling</li>
          <li>Anything Harry Potter</li>
          <li>Cooking together</li>
          <li>Watching TV in bed</li>
          <li>Swimming at the local rec center</li>
        </ul>

        <h2 class="header-2">Blog Collaboration</h2>
        <p>Please send us an email to ourwoodlife@gmail.com if you are interested
          in having your very own article featured on our blog! We'd love to hear
          what you have to say!</p>
      </div>
      <div class="image">
        <img style="max-width:400px;" src="/images/wedding.jpg">
      </div>

    </div>
  </div>
</template>

<style scoped>
.about-container {
  margin: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.text,
.image {
  margin-bottom: 10px;
}

.image {
  padding: 30px;
}
</style>
