const posts = [
{
    "id":"1",
    "title":"First Post: Hello World!",
    "date":"date 1",
    "content":"goofy ah content goes here it is definitely very good and relevant and is not completely random"
}
]

posts.forEach((post) => {
    const postTemplate = `
      <article id="${post.id}" class="searchable bg-white rounded-lg shadow p-4 mb-8">
        <span><div class="badge badge-outline text-custom">${post.date}</div></span>
        <h2 class="title text-2xl font-bold mb-4 text-custom">${post.title}</h2>
        <p class="text-custom">${post.content}</p>
      </article>
    `;
  
    const postListTemplate = `
      <li class="mb-2">
        <a class="text-blue-500 hover:underline text-custom" onclick="scrollToElement(${post.id})">${post.title}</a>
      </li>
    `;
  
    document.getElementById("mainArea").insertAdjacentHTML('afterbegin', postTemplate);
    document.getElementById("postsList").insertAdjacentHTML('afterbegin', postListTemplate);
  
   
  });
  