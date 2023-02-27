<template>
  <div id="talk">
    <h2>Want to talk in person?</h2>
    <p>
      Do you want to visit us instead? Our school is located in Gothenburg. The
      address is Ebbe Lieberathsgatan 18C. Join us for a coffee, will ya?
    </p>
  </div>
  <div id="computer">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2133.2085873385877!2d11.999377016604093!3d57.67893418111201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff369d0835015%3A0xba46082e9c214f49!2sIT-H%C3%B6gskolan!5e0!3m2!1ssv!2sse!4v1677099770739!5m2!1ssv!2sse"
      width="600"
      height="450"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
  <div id="phone">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2133.2085873385877!2d11.999377016604093!3d57.67893418111201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff369d0835015%3A0xba46082e9c214f49!2sIT-H%C3%B6gskolan!5e0!3m2!1ssv!2sse!4v1677100081350!5m2!1ssv!2sse"
      width="300"
      height="300"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
</template>

<style scoped>
  #talk,
  #phone,
  #computer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
    margin-top: 30px;
    white-space: break-spaces;
    color: white;
  }
  #talk {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 650px) {
    #phone {
      display: none;
    }
  }
  @media (max-width: 650px) {
    #computer {
      display: none;
    }
  }
</style>
