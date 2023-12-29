const userscripts = {
	1: {
		"title":"Spaleon.com Answer Spammer",
		"code":"https://github.com/bean-frog/site-tweaks/blob/main/spaleon/correct-answer-spammer.user.js",
		"install":"https://github.com/bean-frog/site-tweaks/raw/main/spaleon/correct-answer-spammer.user.js",
	},
	2: {
		"title":"Fake Cloudflare Page (all sites)",
		"code":"https://github.com/bean-frog/site-tweaks/blob/main/every%20website%20ever/notfakeddos.user.js",
		"install":"https://github.com/bean-frog/site-tweaks/raw/main/every%20website%20ever/notfakeddos.user.js",
	},
	3: {
		"title":"F**k you lol (all sites)",
		"code":"https://github.com/bean-frog/site-tweaks/blob/main/every%20website%20ever/fuckyoulol.user.js",
		"install":"https://github.com/bean-frog/site-tweaks/raw/main/every%20website%20ever/fuckyoulol.user.js",
	},
}

for (const key in userscripts) {
	const num = userscripts[key];
	const html = `

 <div class="h-fit w-fit p-4  rounded backdrop-blur-sm bg-white/20"><a class="pr-2" href="${num.install}"><i class="fa-regular fa-download"></i></a><a class="pr-2"  href="${num.code}"><i class="fa-regular fa-code"></i></a>${num.title}</div>
	`
	document.getElementById('scripts').insertAdjacentHTML('beforeend', html)
} 