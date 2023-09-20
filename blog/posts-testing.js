const postData = [
    {
        "id":"1",
        "title":"Hello World!",
        "date":"20 Sep 2023",
        "preview":"Hello World! preview test. "
    },
    {
        "id":"2",
        "title":"Hello World! 2",
        "date":"21 Sep 2023",
        "preview":"Hello World 2! preview test 2. "
    },
  
    ]
    
    postData.forEach((post) => {
        const postTemplate = `
          <article id="${post.id}" class="searchable bg-gray-600 rounded-lg shadow p-4 mb-8">
            <span><div class="badge badge-outline text-white">${post.date}</div></span>
            <h2 class="title text-2xl font-bold mb-4 text-white">${post.title}</h2>
            <p class="text-gray-200">${post.preview} <br> .... </p>
            <button onclick="showdownModal(${post.id})"class="btn btn-ghost"><span class="text-gray-200">Read More &rarr;</span></button>
          </article>
        `;
      
        const postListTemplate = `
          <li class="mb-2 text-gray-200">
            <a class="hover:underline text-gray-200" onclick="scrollToElement(${post.id})">${post.title}</a>
          </li>
        `;
      
        document.getElementById("mainArea").insertAdjacentHTML('afterbegin', postTemplate);
        document.getElementById("postsList").insertAdjacentHTML('afterbegin', postListTemplate);
       });
function showdownModal(id) {
    var converter = new showdown.Converter();
    fetch(`posts/${id}.md`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.text();
  })
  .then(md => {
    console.log(md);
  })
  .catch(error => {
    console.error(`Error fetching file: ${error.message}`);
  });
}