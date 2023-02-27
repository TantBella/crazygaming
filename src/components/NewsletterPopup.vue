<template>
  <div id="newsletter-popup">
    <div class="newsletter-popup-content">
      <span class="close-btn">&times;</span>
      <h2>Subscribe to our Newsletter</h2>
      <form action="#" method="post">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <input type="submit" value="Subscribe" />
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      const newsletterPopup = document.getElementById('newsletter-popup')
      const closeBtn = document.querySelector('.close-btn')

      window.onload = function () {
        setTimeout(function () {
          newsletterPopup.style.display = 'block'
        }, 1000)
      }

      closeBtn.onclick = function () {
        newsletterPopup.style.display = 'none'
      }
    }
  }
</script>

<style lang="scss" scoped>
  #newsletter-popup {
    display: none;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .newsletter-popup-content {
    display: none; //block
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(#9857c2, #4361ee, #9857c2);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    text-align: center;
  }

  .close-btn {
    display: none; //block
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
  }
</style>
