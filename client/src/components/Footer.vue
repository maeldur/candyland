<template>
  <div class="footer">
    <div class="sections">
      <div class="section">
        <div class="name">
          About
        </div>
        <div class="link">
          About this project
        </div>
        <div class="link">
          How we get our data
        </div>  
      </div>
      <div class="section">
        <div class="name">
          Contact
        </div>
        <div class="link">
          Email
        </div>
        <div class="link">
          Donate
        </div>  
      </div>
      <div class="section">
        <div class="name">
          Policies
        </div>
        <div class="link">
          Privacy Policy
        </div>
        <div class="link">
          Terms of Use
        </div>  
      </div>
      <div class="section">
        <div class="name">
          Resources
        </div>
        <div class="link">
          For Developers
        </div>
        <div class="link">
          For Candidates
        </div>  
      </div>
    </div>
    <div class="share">
      <div class="message">
      Share this site to get others informed.
      </div>
      <div class="icons">
        <img src="../assets/email.png">
        <img src="../assets/share.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
div.footer {
  padding: 85px 40px;
  div.sections {
    display: flex;
    margin-bottom: 60px;

    div.section {
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .name {
        color: #333333;
        font-family: Roboto;
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 15px;
      }
      .link {
        color: #333333;
        font-family: Roboto;
        font-size: 18px;
        line-height: 21px;
      }
    }
  }

  div.share {
    div.message {
      color: #333333;
      font-family: Roboto;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 15px;
    }
    div.icons {
      img {
        height: 20px;
        margin: 0px 10px;
      }
    }
  }
}
</style>
