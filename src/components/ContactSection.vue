<template>
  <div class="">
    <form
      id="fs-frm"
      name="simple-contact-form"
      accept-charset="utf-8"
      action="https://formspree.io/f/xqkrjklb"
      method="POST"
    >
      <div class="row">
        <div class="col-md-6 col-sm-12">
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

        <div class="col-md-6 col-sm-12">
          <h2 class="text-center">Find me at:</h2>
          <div class="fitContent2">
            <p class="bi bi-telephone text-center"> : 081 789 8384</p>
          <p class="bi bi-envelope text-center"> : ismaaeelahmed42@gmail.com</p>
          <p class="bi bi-github text-center"> : <a href="https://github.com/Ismaaeel-A">Github</a></p>
          <p class="bi bi-linkedin text-center"> : <a target="_blank" href="https://www.linkedin.com/in/ismaaeel-ahmed-4125b72a1/">Linkedin</a></p>
          <p class="bi bi-pin-map text-center"> : <a target="_blank" href="https://maps.app.goo.gl/erjxTWQ1FVStxECP8">Surrey Estate, Cape Town, 7764</a></p>
          </div>
        </div>
      </div>

      <!-- <div class="d-flex justify-content-center mt-4">
        <a href="https://maps.app.goo.gl/erjxTWQ1FVStxECP8" target="_blank">
          <i class="bi bi-geo-alt-fill"></i>
        </a>
        <a href="https://github.com/Ismaaeel-A?tab=repositories" target="_blank"
          ><i class="bi bi-github"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/ismaaeel-ahmed-4125b72a1/"
          target="_blank"
          ><i class="bi bi-linkedin"></i
        ></a>
      </div> -->
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

.fitContent {
  display: flex;
  justify-content: center;
  padding: 0.5rem;
}

.fitContent2 {
  padding: 0.5rem;
}

i {
  padding-inline: 0.5rem;
  color: var(--accent);
}

p{
  color: var(--background);
  margin-bottom: 1.3rem;
}

p a{
  transition: transform 0.3s , color 0.3s;
  color: var(--background);
}

a:hover{
  transform: scale(1.2);
  color: var(--accent);
}

input:focus , textarea:focus{
  outline-color: var(--accent);
  border: none;
}

h2 {
    color: var(--accent);
    text-decoration: underline;
    text-decoration-color: var(--primary);
}
</style>
