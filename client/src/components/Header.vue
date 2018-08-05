<template>
  <div class="header">
    <img class="logo" src="../assets/votersedge-california-square-100-@2x.png">
    <div class="name">
      <div>Candidate Form</div>
      <div>{{ election || 'Fall 2018 Special Election' }}</div>
    </div>
    <div class="nav">
      <router-link to="/faq">FAQ</router-link> 
      <router-link to="/guide">VOTING GUIDE</router-link> 
      <router-link to="/about">ABOUT</router-link> 
      <router-link to="/contact-us">CONTACT US</router-link>
      <div class="button">
        EN ESPAÑOL
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["election"]
};
</script>

<style lang="scss" scoped>
div.header {
  padding: 13px 40px 30px;
  display: flex;
  img.logo {
    width: 80px;
    height: 80px;
    margin-right: 24px;
  }
  div.name {
    align-items: flex-start;
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
    color: #536169;
    font-size: 20px;
    font-weight: 500;
    line-height: 23px;
  }

  div.nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1 0 auto;
    a {
      text-decoration: none;
      color: #333d44;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      text-align: center;
      margin-right: 25px;
    }
    div.button {
      border: 2px solid #006cab;
      border-radius: 4px;
      color: #006cab;
      font-size: 18px;
      height: 53px;
      font-weight: 500;
      text-align: center;
      padding: 13px 20px;
      box-sizing: border-box;
    }
  }
}
</style>
