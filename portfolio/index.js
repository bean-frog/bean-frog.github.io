const stuff = {
	seminar: {
		1: {
			"name": "S1 Mock IRR",
			"topic":"Negative psychological effects of racism in maternal care",
			"desc":"A practice run of the IRR (Individual Research Report), completed Semester 1 of the 2023-24 school year.",
			"url":"irr-semester-1.html"
		},
		2: {
			"name": "S1 Mock TMP",
			"topic":"Maternal mortality in African-American women in the US",
			"desc":"A practice run of the TMP (Team Multimedia Presentation), completed Semester 1 of the 2023-24 school year.",
			"url":"tmp-semester-1.html"
		}/*,
		3: {
			"name": "S1 Mock IWA",
			"topic":"Racial inequity in natural disaster aid in the southern US",
			"desc":"A practice run of the IWA (Individual Written Argument), completed Semester 1 of the 2023-24 school year.",
			"url":"iwa-semester-1.html"
		}
		*/
	}
};

let apsem = document.getElementById("apsem");
for (const key in stuff.seminar) {
    const item = stuff.seminar[key];
    let template = `
					<div class="w-fit h-fit p-2 my-2 border-full border-white border-[1px] rounded-md hover:scale-[1.01]">
      					<a href="files/${item.url}" class="w-fit h-fit">
      							<h1 class="text-lg">${item.name}</h1>
      							<h1 class="text-md">${item.topic}</h1>
      							<h1 class="text-md">${item.desc}</h1>

      						</a>
      					</div>
    `
    apsem.insertAdjacentHTML('beforeend', template)
}