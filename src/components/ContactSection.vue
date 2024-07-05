<template>
  <div class="d-flex justify-content-center align-content-center" id="formDiv">
    <form
      id="fs-frm"
      name="simple-contact-form"
      accept-charset="utf-8"
      action="https://formspree.io/f/xqkrjklb"
      method="POST"
    >
      <div class="row no-gutters d-flex justify-content-center">
      
          <h2 class="text-center">Contact Me:</h2>
          <div class="noPadding fitContent">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name..."
              required
              class="my-2 rounded"
            />
          </div>

          <div class="fitContent">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email..."
              required
              class="my-2 rounded"
            />
          </div>

          <div class="fitContent">
            <textarea
              name="message"
              id="message"
              placeholder="Add message here..."
              required
              class="my-2 rounded"
            ></textarea>
          </div>
          <div class="fitContent">
            <input type="submit" value="Submit" class="my-2 rounded" />
          </div>
      
      </div>

      <div class="d-flex justify-content-center mt-4">
        <i class="bi bi-telephone-fill"><span>081 789 8384</span></i>
        <a href="https://github.com/Ismaaeel-A?tab=repositories" target="_blank"
          ><i class="bi bi-github"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/ismaaeel-ahmed-4125b72a1/"
          target="_blank"
          ><i class="bi bi-linkedin"></i
        ></a>
      </div>
      
    </form>
  </div>
</template>

<style scoped>
#formDiv {
  width: fit-content;
}

* {
  padding: 0;
}

[type="submit"]:hover {
  color: #ce9461;
  transform: scale(0.95);
}

[type="submit"]:active {
  color: #242423;
  transform: scale(0.95);
}

.fitContent{
  display: flex;
  justify-content: center;
}
</style>
