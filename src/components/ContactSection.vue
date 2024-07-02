<template>
  <div class="d-flex justify-content-center align-content-center">
    <div>
      <form
        id="fs-frm"
        name="simple-contact-form"
        accept-charset="utf-8"
        action="https://formspree.io/f/xqkrjklb"
        method="POST"
      >
        <div class="row">
          <div>
            <h2 class="text-center mt-5">Contact Me:</h2>
            <div class="">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name..."
                required
                class="my-2 rounded"
              />
            </div>
            <div class="">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email..."
                required
                class="my-2 rounded"
              />
            </div>
            <div class="">
              <textarea
                name="message"
                id="message"
                placeholder="Add message here..."
                required
                class="my-2 rounded"
              ></textarea>
            </div>
            <div class="">
              <input type="submit" value="Submit" class="my-2 rounded" />
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center mt-4">
          <a href="https://www.facebook.com/24AhmedOfficial/" target="_blank"
            ><i class="lab la-facebook m-2"></i
          ></a>
          <a
            href="https://github.com/Ismaaeel-A?tab=repositories"
            target="_blank"
            ><i class="lab la-github m-2"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/ismaaeel-ahmed-4125b72a1/"
            target="_blank"
            ><i class="lab la-linkedin m-2"></i
          ></a>
        </div>
      </form>
    </div>
  </div>
</template>

<script></script>

<style></style>
