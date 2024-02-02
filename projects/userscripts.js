const userscripts = {
	1: {
		"title":"Spaleon.com Answer Spammer",
		"code":"https://github.com/bean-frog/site-tweaks/blob/main/spaleon/correct-answer-spammer.user.js",
		"install":"https://github.com/bean-frog/site-tweaks/raw/main/spaleon/correct-answer-spammer.user.js",
		"desc": "Spams thousands of correct answers on the Spaleon.com spanish conjugation trainer."
	},
	2: {
		"title":"Fake Cloudflare Page (all sites)",
		"code":"https://github.com/bean-frog/site-tweaks/blob/main/every%20website%20ever/notfakeddos.user.js",
		"install":"https://github.com/bean-frog/site-tweaks/raw/main/every%20website%20ever/notfakeddos.user.js",
		"desc":"appends a (somewhat convincing?) Cloudflare DDOS protection screen to every site"
	},
	3: {
		"title":"F**k you lol (all sites)",
		"code":"https://github.com/bean-frog/site-tweaks/blob/main/every%20website%20ever/fuckyoulol.user.js",
		"install":"https://github.com/bean-frog/site-tweaks/raw/main/every%20website%20ever/fuckyoulol.user.js",
		"desc":"totally not pasted from some Gist. Messes up every page ever, a good prank."
	},
	4: {
		"title":"PAUSD schoology quick course bar",
		"code":"https://github.com/bean-frog/site-tweaks/blob/main/pausd.schoology.com/quickCourseBar.user.js",
		"install":"https://github.com/bean-frog/site-tweaks/raw/main/pausd.schoology.com/quickCourseBar.user.js",
		"desc":`Adds a bar with links to all of your courses under the header. Only works for PAUSD, other schools require modification. <a class="underline" href="https://beanfrog.xyz">contact</a> me if unsure`
	},
		5: {
		"title":"PAUSD schoology slope game overlay",
		"code":"https://github.com/bean-frog/site-tweaks/blob/main/pausd.schoology.com/addSlopeGame.user.js",
		"install":"https://github.com/bean-frog/site-tweaks/raw/main/pausd.schoology.com/addSlopeGame.user.js",
		"desc":`Adds a mostly transparent slope game overlay to PAUSD schoology. works on any other site if you change the @match url at the top.`
	}
}

for (const key in userscripts) {
	const num = userscripts[key];
	const html = `

 <div class="h-fit w-fit p-4 m-4 rounded backdrop-blur-sm bg-white/20"><a class="pr-2" href="${num.install}"><i class="fa-regular fa-download"></i></a><a class="pr-2"  href="${num.code}"><i class="fa-regular fa-code"></i></a><span class="font-bold">${num.title}</span> <p>${num.desc}</p></div>
	`
	document.getElementById('scripts').insertAdjacentHTML('beforeend', html)
} 
