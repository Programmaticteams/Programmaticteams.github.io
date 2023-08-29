
<script setup>
window.onload = function () {
  const articlesListElement = document.getElementById('articles-list');
  const markdownContentElement = document.getElementById('markdown-content');
  const backBtn = document.getElementById('back-btn')
  const hiddenstuff = document.getElementById('hidden-content')
  function fetchMarkdownAndConvert(filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(markdown => {
        const html = marked(markdown);
        markdownContentElement.innerHTML = html;
      })
      .catch(error => console.error('Error fetching or converting Markdown:', error));
  }
  // Attach click event listeners to each link
  articlesListElement.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      const filePath = event.target.getAttribute('href');
      articlesListElement.classList.add("hidden")
      hiddenstuff.classList.remove("hidden")
      fetchMarkdownAndConvert(filePath);
    }
  });

  backBtn.addEventListener('click', function (event) {
    event.preventDefault()
    articlesListElement.classList.remove("hidden")
    hiddenstuff.classList.add("hidden")
  })

  function fetchMarkdownAndConvert(filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(markdown => {
        const html = marked.parse(markdown);
        markdownContentElement.innerHTML = html;
        console.log(html)
      })
      .catch(error => console.error('Error fetching or converting Markdown:', error));
  }
}
</script>

<template>
  <div id="hidden-content" class="ml-60 mr-60 markdown-content hidden bg-gray-700 p-10 pt-5">
    <button id="back-btn"
      class=" mt-20 justify-left hover:text-gray-300 focus:outline-none bg-white text-gray-900 rounded-sm w-32 h-10 font-extrabold mb-5">
      &larr;  &nbsp;&nbsp; Back
    </button>
    <hr>
    <div id="markdown-content" class="mb-20">


    </div>
  </div>





  <div id="articles-list" class="gap-10 mt-20 flex mb-60">

    <div class="rounded-sm bg-gray-600 p-5 w-72 m-10">
      <h2 class="font-extrabold text-white text-lg">Home </h2>
      <br>
      <p class="font-semibold text-white text-sm">A brief explanation about this page :D </p>
      <br>
      <a id="read-button" href="/articles/HOME.md"> Read Article </a>
    </div>

    <div class="rounded-sm bg-gray-600 p-5 w-72 m-10">
      <h2 class="font-extrabold text-white text-lg">Behind Programmatic.org </h2>
      <br>
      <p class="font-semibold text-white text-sm">An article detailing the creation and development of Programmatic.org</p>
      <br>
      <a id="read-button" href="/articles/programmatic.md"> Read Article </a>
    </div>



  </div>
</template>

<style>
.markdown-content h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  font-family: monospace;
  margin-bottom: 0.9rem;
  letter-spacing: 1px;
  color: white;
  font-size: 2rem;
}

.markdown-content li {
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #ffffffd6;
  margin-bottom: 0.3rem;
  font-weight: 400;
}

.markdown-content p {

  font-size: 1.2rem;
  line-height: 1.5;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #F5F5F5;
  margin-bottom: 1rem;
  font-weight: 400;


}

.markdown-content {

  padding: 1rem, 1rem, 1rem, 1rem;
}
</style>