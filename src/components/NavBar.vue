<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><h2 logo>Ismaa'eel</h2></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto px-3">
          <li class="nav-item">
            <a class="nav-link mx-2" href="#landing">Home</a>
          </li>

          <li class="nav-item">
            <a class="nav-link mx-2" href="#about">About</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link mx-2" href="#skills">Skills</a>
          </li>

          <li class="nav-item">
            <a class="nav-link mx-2" href="#education">Education / Experience</a>
          </li>


          <li class="nav-item">
            <a class="nav-link mx-2" href="#project">Projects</a>
          </li>

          <li class="nav-item">
            <a class="nav-link mx-2" href="#reachMe">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  transition: color 0.3s , text-decoration 0.3s, transform 0.3s;
  &:hover{
    color: var(--font);
    text-decoration: underline;
    transform: scale(1.2);
  }

}

a{
  max-width: fit-content;
}
</style>
