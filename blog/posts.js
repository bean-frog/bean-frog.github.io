const postData = [
    {
        "id":"1",
        "title":"Hello World!",
        "date":"18 Sep 2023",
        "preview":"Hello World!! This is the first post on my new blog. Hopefully this place won't turn into a dumpster fire."
    },
    {
        "id":"2",
        "title":"Tryharding a beginner-level course: AP CS Principles",
        "date":"19 Sep 2023",
        "preview":"I'm in AP CSP in my junior year of high school. My actual skill level is somewhat larger, so I often find myself finishing quickly. This is where the tryharding begins."
    },
    {
      "id":"3",
      "title":"Project Overview: Beansuite",
      "date":"21 Sep 2023",
      "preview":"Somewhat recently, I published a repository called beansuite. This is a custom piece of software that mimics Google Drive and Docs. Here's an overview and explanation of the project."
  }
  
    ]
    
    postData.forEach((post) => {
        const postTemplate = `
          <article id="${post.id}" class="searchable bg-gray-800 rounded-lg shadow p-4 mb-8">
            <span><div class="badge badge-outline text-white"><span class="text-white">${post.date}</span></div></span>
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
