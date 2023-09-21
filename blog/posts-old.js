const posts = [
{
    "id":"1",
    "title":"First Post: Hello World!",
    "date":"18 Sep 2023",
    "content":"Hello World!! This is the first post on my new blog. Hopefully this place won't turn into a dumpster fire. <br> Today I also added some new splash texts to the homepage. pretty interesting I guess."
},
{
  "id":"2",
  "title":"Tryharding a beginner level course: AP CSP",
  "date":"19 Sep 2023",
  "content":"I'm in AP CSP in my junior year of high school. My actual skill level is somewhat larger, so I often find myself finishing quickly. This is where the tryharding begins. <br> In one project, I had the bright idea to waste hours recreating Windows. Yes, THAT Windows. The Bill Gates one. We use a program called <a class='underline' href='https://snap.berkeley.edu'>Snap</a> which is a visual block coding language. So how did I recreate Windows with this ooga booga caveman technology? Simple: I didn't (technically I did but we'll get to that). I opted to use Javascript which Snap happens to support natively (*happy nerd noises*). However I quickly saw an issue. The sheer amount of HTML and Javascript I was using began to overload Snap's GUI, causing immense clientside lag. For this reason, I moved the main portion of the code <a class='underline' href='https://gkieran.github.io/schoolstuff/snapwindows/index.html'>here</a>, and referenced it through an iframe in the Snap project. The only requirement for this project was that we had to use custom blocks in Snap, which I fulfilled by creating a block to add dependencies, a block to create a content frame, and several blocks to manipulate said content frame. Alright, this post is getting kind of long, so I'll end it here. You can check out the project on Snap <a class='underline' href='https://snap.berkeley.edu/snap/snap.html#present:Username=beanfrog&ProjectName=csp%20choice%20assignment%20%28windows%20clone%29&editMode&noRun'>here</a>. The comments in the code of this project explain the details a bit better. Be sure to enable Javascript through the settings menu in Snap before running, too. "
}
]

posts.forEach((post) => {
    const postTemplate = `
      <article id="${post.id}" class="searchable bg-gray-600 rounded-lg shadow p-4 mb-8">
        <span><div class="badge badge-outline text-white">${post.date}</div></span>
        <h2 class="title text-2xl font-bold mb-4 text-white">${post.title}</h2>
        <p class="text-gray-200">${post.content}</p>
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
  