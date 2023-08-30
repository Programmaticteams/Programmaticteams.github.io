<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav
    class="navbar--main text-white justify-between fixed shadow-md text-xl font-extrabold subpixel-antialiased flex py-4 top-0 w-full px-20 bg-gray-900 z-50"
  >
    <div class="flex items-center">
      <RouterLink to="/" tag="img">
        <img class="w-10" src="./assets/logo.png" />
      </RouterLink>

      <RouterLink to="/">Programmatics</RouterLink>
    </div>

    <ul class="flex gap-7 items-center">
      <li>
        <a href="/">Home</a>
      </li>
      <div
        class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
      ></div>
      <li>
        <a href="/about">About</a>
      </li>
      <div
        class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
      ></div>
      <li>
        <a href="/team">Our Team</a>
      </li>
      <div
        class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
      ></div>
      <li>
        <a href="/enroll">Enroll</a>
      </li>
      <div
        class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
      ></div>
      <li>
        <a href="/volunteer">Volunteer</a>
      </li>
      <div
        class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
      ></div>
      <li>
        <a href="/articles">Articles</a>
      </li>
      <div
        class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
      ></div>
      <li>
        <a href="https://discord.gg/PGUc95ZRYk">
          <img class="w-8" src="./assets/discord.png"
        /></a>
      </li>
      <li>
        <a href="https://www.instagram.com/programmatics_official/">
          <img class="w-9" src="./assets/instagram.png"
        /></a>
      </li>
    </ul>
  </nav>

  <RouterView />
  <footer class="bg-gray-800 text-white py-8 w-full bottom-0 footer">
    <div class="">
      <div class="flex justify-center gap-20 footer-div">
        <div class="flex justify-center items-center gap-4">
          <img
            src="./assets/logo.png"
            alt="Programmatic Logo"
            class="w-10 h-10"
          />
          <div>
            <h1 class="font-extrabold text-xl">Programmatic</h1>
          </div>
        </div>
        <div class="flex gap-7 items-center justify-center">
          <ul class="flex gap-7 items-center justify-center link-list">
            <li>
              <a href="/">Home</a>
            </li>
            <div class="bg-neutral-100 opacity-100 dark:opacity-50"></div>
            <li>
              <a href="/about">About</a>
            </li>
            <div class="bg-neutral-100 opacity-100 dark:opacity-50"></div>
            <li>
              <a href="/team">Our Team</a>
            </li>
            <div class="bg-neutral-100 opacity-100 dark:opacity-50"></div>
            <li>
              <a href="/enroll">Enroll</a>
            </li>
            <div class="bg-neutral-100 opacity-100 dark:opacity-50"></div>
            <li>
              <a href="/volunteer">Volunteer</a>
            </li>
            <div class="bg-neutral-100 opacity-100 dark:opacity-50"></div>
            <li>
              <a href="/articles">Articles</a>
            </li>
          </ul>
        </div>
        <div class="flex gap-12 justify-center items-center">
          <h1 class="font-bold text-lg mt-1">Socials:</h1>
          <a
            href="https://www.instagram.com/programmatics_official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/instagram.png" alt="Instagram" class="w-8 h-8" />
          </a>
          <a
            href="https://discord.gg/PGUc95ZRYk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/discord.png" alt="Discord" class="w-7 h-8" />
          </a>
          <a href="mailto:programmaticteams@gmail.com">
            <img src="./assets/gmail.png" alt="Gmail" class="w-8 h-7" />
          </a>
        </div>
      </div>
      <div>
        <p class="text-center para text-white mb-5 pt-6">
          Programmatic is an organization dedicated to teaching the next
          generation of students the fundementals of computer science.
        </p>
      </div>
    </div>
    <!-- <div class="flex items-center py-5 mb-4 footer-div gap-20">
      <div class="flex items-center gap-4">
        <img
          src="./assets/logo.png"
          alt="Programmatic Logo"
          class="w-10 h-10"
        />
        <div>
          <h1 class="font-extrabold text-xl">Programmatic</h1>
        </div>
      </div>
      <div class="item-center justify-center text-center">
        <ul class="flex gap-7 items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <div
            class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
          ></div>
          <li>
            <a href="/about">About</a>
          </li>
          <div
            class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
          ></div>
          <li>
            <a href="/team">Our Team</a>
          </li>
          <div
            class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
          ></div>
          <li>
            <a href="/enroll">Enroll</a>
          </li>
          <div
            class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
          ></div>
          <li>
            <a href="/volunteer">Volunteer</a>
          </li>
          <div
            class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
          ></div>
          <li>
            <a href="/articles">Articles</a>
          </li>
        </ul>
      </div>
      <div class="flex gap-12">
        <h1 class="font-bold text-lg mt-1">Socials:</h1>
        <a
          href="https://www.instagram.com/programmatics_official/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/instagram.png" alt="Instagram" class="w-8 h-8" />
        </a>
        <a
          href="https://discord.gg/PGUc95ZRYk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/discord.png" alt="Discord" class="w-7 h-8" />
        </a>
        <a href="mailto:programmaticteams@gmail.com">
          <img src="./assets/gmail.png" alt="Gmail" class="w-8 h-7" />
        </a>
      </div>
    </div>
    <p class="text-center text-sm font-semibold text-white mb-5">
      <em
        >Programmatic is an organization dedicated to teaching the next
        generation of students the fundementals of computer science.</em
      >
    </p> -->
  </footer>
</template>
<style>
.para {
  font-size: clamp(0.7rem, 1.5vw, 1rem);
}

@media screen and (max-width: 1350px) {
  .footer-div {
    flex-direction: column;
  }
  /* .footer {
    padding-bottom: 0;
  } */
}
/* media for phone screens */
@media screen and (max-width: 900px) {
  .link-list {
    flex-direction: column;
    gap: 0.7rem !important;
  }
}
</style>
