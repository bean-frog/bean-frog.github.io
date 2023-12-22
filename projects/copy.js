const saddam = `
Saddam Hussein's hiding spot
           │Entrance hidden by
           │Bricks and rubble
       ▂▃▂▅▇▅▅▇▄▃
    ┳  ║                ║▔▔▔▔▔▔▔
    │  ╚╗          ╔╝
    │     ║         ║        │Saddam 
   6ft    ╚╗   ╔╝        │Hussein
    │====o   ╚════│════════╗
    │        │║@    ▇▅▆▇▆▅▅█      ║
    ┷        │╚│═════════════╝
Air vent │   │Fan
`


const copypastas = {
	1: {
		"title": "Saddam Hussein's Bunker",
		"text": saddam
	},
	2: {
		"title": "title2",
		"text": "text2"
	},
	3: {
		"title": "title3",
		"text": "text3"
	},
	4: {
		"title": "title4",
		"text": "text4"
	},
	5: {
		"title": "title5",
		"text": "text5"
	},

}

for (const item in copypastas) {
	const num = copypastas[item]
	const title = num.title;
	const text = num.text;
	console.log(title);
	console.log(text);

	const html = `
		<div class="p-2 rounded-md bg-white/20 text-white flex flex-col mt-2 justify-center shadow-md shadow-slate-700">
		<h1 class="text-lg font-bold">${title}</h1>
		<textarea class="bg-white/20 p-2 h-fit w-full border-full border-black border-2">${text}</textarea>
	</div>
	`
	document.getElementById("grid").insertAdjacentHTML('beforeend', html)
}