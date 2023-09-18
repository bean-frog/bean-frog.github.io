const posts = [
{
    "id":"1",
    "title":"First Post: Hello World!",
    "date":"18 Sep 2023",
    "content":"Hello World!! This is the first post on my new blog. Hopefully this place won't turn into a dumpster fire. <br> Today I also added some new splash texts to the homepage. pretty interesting I guess."
}
]

posts.forEach((post) => {
    const postTemplate = `
      <article id="${post.id}" class="searchable bg-white rounded-lg shadow p-4 mb-8">
        <span><div class="badge badge-outline text-custom">${post.date}</div></span>
        <h2 class="title text-2xl font-bold mb-4 text-custom">${post.title}</h2>
        <p class="text-custom prose">${post.content}</p>
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
  