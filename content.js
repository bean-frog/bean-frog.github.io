/*************
 * beanfrog.xyz content.js
 * contains all main page content, which is appended into the html using template literals
 * switched to this method because the html is super messy especially when styling w/ tailwind
 * (c) 2023 beanfrog all rights reserved etc etc boring nerd shit
**************/

//____content arrays____
//top 4 panels (bio, stack prefs, quick links, contact)
const panels = {
    bio: {
        "text":`Hey there! I'm <abbr title="'graham'">Graeme</abbr>, and I'm a Junior in high school. I've been into computers and programming since 6th grade, when I was first introduced to HTML in my school's computer lab. Since then, I've been expanding my knowledge daily. Outside of VSCode, I love to hang out with my 2 golden retrievers and my amazing friends. (shoutout to the homie m-nasty)`
    },
    quicklinks: {
        1: {
            "title": "Cool stuff I made",
            "href": "#projects"
        },
        2: {
            "title": "Blog (yap sessions)",
            "href": "blog/"
        },
        3: {
            "title": "Random project",
            "href": ""
        }, 
        4: {
            "title": "Games",
            "href": "games"
        }
    },
    stackpref: {
        "icons": "js,html,tailwind,nodejs,express" //list for use in skillicons.dev url
    },
    contact: {
        //fa icons
        1: {
            "icon": "fab fa-github text-5xl",
            "href": "https://github.com/bean-frog"
        },
        2: {
            "icon": "fas fa-cloud text-5xl",
            "href": "https://bsky.app/profile/beanfrog.bsky.social"
        },
        3: {
            "icon": "fas fa-envelope text-5xl",
            "href": "mailto:beanfrog@sug.ma"
        },
        4: {
            "icon": "fab fa-instagram text-5xl",
            "href": "https://instagram.com/beanfrog_"
        },
        5: {
            "icon": "fab fa-discord text-5xl",
            "href": "https://discord.gg/PAeZHF2yjJ"
        },
    }
}
//skills section
const skills = {
    //skillicons.dev icons
    high: {
        1: {
            "icon":"html",
            "label": "HTML5"
        },
        2: {
            "icon":"js",
            "label": "Javascript"
        },
        3: {
            "icon":"css",
            "label": "CSS3"
        },
        4: {
            "icon":"tailwind",
            "label": "Tailwind CSS"
        },
        5: {
            "icon":"arduino",
            "label": "Arduino (C++)"
        }
    },
    mid: {
        1: {
            "icon":"nodejs",
            "label": "NodeJS"
        },
        2: {
            "icon":"express",
            "label": "Express"
        },
        3: {
            "icon":"jquery",
            "label": "jQuery/jQueryUI"
        },
        4: {
            "icon":"vercel",
            "label": "Vercel"
        }
    },
    low: {
        1: {
            "icon": "react",
            "label": "React"
        }
    },
    learning: {
        1: {
            "icon":"firebase",
            "label": "Firebase"
        },
        2: {
            "icon":"express",
            "label": "Express"
        },
        3: {
            "icon":"docker",
            "label": "Docker"
        },
        4: {
            "icon":"vue",
            "label":"Vue"
        }
    }
}
const projects = {
    1: {
        "title": "Tuneguessr",
        "desc": "A musical geography game similar to Geoguessr. Players are given a song and must guess which country it is from.",
        "href":"tuneguessr"
    },
    2: {
        "title": "ligma.js",
        "desc": "stupid javascript library thats mostly useless but has a couple of cool things I guess",
        "href":"projects/ligmajs"
    },
    3: {
        "title": "beancord",
        "desc": "(kind of abandoned) custom discord client. Will probably return in the future.",
        "href":"projects/beancord"
    },
    4: {
        "title": "beansuite",
        "desc": "Sorry Larry and Sergei, I stole your document editor >:)",
        "href":"projects/beansuite"
    },
    5: {
        "title": "clock-app",
        "desc": "Simple clock app built using Electron. Should work on all major OS/Architectures as long as they support NodeJS and Electron.",
        "href":"projects/clock-app"
    },
    6: {
        "title": "task-organizer",
        "desc": "SImple web based task organizer. Still buggy and missing some features, will be merging with PVA soon",
        "href":"task-organizer"
    },
    7: {
        "title": "W I D E S H O T",
        "desc": "what if deadshot.io could be SUPER UNPLAYABLY WIDE AND THICCCCC",
        "href":"projects/wideshot"
    },
    8: {
        "title": "PVA",
        "desc": "Personal Verbal Abuser - a study timer that verbally abuses you :D",
        "href":"projects/pva"
    },
    9: {
        "title": "W I D E Z E N",
        "desc":"what if cryzen.io could be SUPER UNPLAYABLY THICCC LIKE UR MOM",
        "href": "projects/widezen"
    }
}
const funstuff = {
    1: {
        "title": "Curse of Ra upon you!!!!!",
        "desc": "Generates a random set of Hieroglyphics",
        "href": "funstuff.html?open=curseofra"
    },
    2: {
        "title": "Ea-Nasir sells terrible copper :(",
        "desc": "I am NEVER purchasing my copper from Ea-Nasir EVER AGAIN",
        "href": "funstuff.html?open=shittycopper"
    }
}
const bioTemplate = `
<h3 class="text-xl font-bold">Bio</h3>
<p>${panels.bio.text}</p>
`
const prefsTemplate = `
<h3 class="text-lg font-bold">Stack Preferences</h3>
<img src="https://skillicons.dev/icons?i=${panels.stackpref.icons}" class="mr-2">
`

//content append code

//first section
const spElement = document.getElementById('stackprefs');
spElement.insertAdjacentHTML('afterbegin', prefsTemplate)
const bioElement = document.getElementById('bio');
bioElement.insertAdjacentHTML('afterbegin', bioTemplate)
const qlElement = document.getElementById('quicklinks');
for (const key in panels.quicklinks) {
    const link = panels.quicklinks[key];
       const anchor = document.createElement('a');
    anchor.setAttribute('class', 'underline text-blue-700 hover:text-blue-500');
    if (!link.href == "") {
        anchor.setAttribute('href', link.href);
    }
    if (link.title == "Random project") {
        anchor.setAttribute('id', 'randomproject')
    }
    anchor.innerHTML = link.title;
    qlElement.appendChild(anchor);
}
const projectsArr = [
    "tuneguessr",
    "projects/beansuite",
    "projects/wideshot",
    "projects/ligmajs",
    "projects/beancord",
    "projects/clock-app",
    "projects/widezen"
];
function luhcalmfit() {
var randomIndex = Math.floor(Math.random() * projectsArr.length);
var randomURL = projectsArr[randomIndex];
window.open(randomURL, '_blank');
}
document.getElementById('randomproject').addEventListener('click', luhcalmfit);
const conElement = document.getElementById('contact');
for (const key in panels.contact) {
    const link = panels.contact[key];
       const anchor = document.createElement('a');
    anchor.setAttribute('class', 'm-2');
    anchor.setAttribute('href', link.href);
    anchor.innerHTML = `<i class="${link.icon}"></i>`;
    conElement.appendChild(anchor);
}
//second section
const highElement = document.getElementById('skills-high');
for (const key in skills.high) {
    const num = skills.high[key]
    const card = document.createElement('div');
    card.setAttribute('class', 'p-2 border border-gray-300 rounded-md shadow-sm flex items-center w-fit');
    card.innerHTML = `
    <img src="https://skillicons.dev/icons?i=${num.icon}" class="mr-4">
    <h2 class="text-xl font-bold">${num.label}</h2>
    `
    highElement.appendChild(card);
}
const midElement = document.getElementById('skills-mid');
for (const key in skills.mid) {
    const num = skills.mid[key]
    const card = document.createElement('div');
    card.setAttribute('class', 'p-2 border border-gray-300 rounded-md shadow-sm flex items-center w-fit');
    card.innerHTML = `
    <img src="https://skillicons.dev/icons?i=${num.icon}" class="mr-4">
    <h2 class="text-xl font-bold">${num.label}</h2>
    `
    midElement.appendChild(card);
}

const lowElement = document.getElementById('skills-low');
for (const key in skills.low) {
    const num = skills.low[key]
    const card = document.createElement('div');
    card.setAttribute('class', 'p-2 border border-gray-300 rounded-md shadow-sm flex items-center w-fit');
    card.innerHTML = `
    <img src="https://skillicons.dev/icons?i=${num.icon}" class="mr-4">
    <h2 class="text-xl font-bold">${num.label}</h2>
    `
    lowElement.appendChild(card);
}
const noElement = document.getElementById('skills-no');
for (const key in skills.learning) {
    const num = skills.learning[key]
    const card = document.createElement('div');
    card.setAttribute('class', 'p-2 border border-gray-300 rounded-md shadow-sm flex items-center w-fit');
    card.innerHTML = `
    <img src="https://skillicons.dev/icons?i=${num.icon}" class="mr-4">
    <h2 class="text-xl font-bold">${num.label}</h2>
    `
    noElement.appendChild(card);
}
//third section
const pElement = document.getElementById('projects-sect')
for (const key in projects) {
    const num = projects[key];
    const card = document.createElement('a');
    card.setAttribute('class', 'block p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1');
    card.setAttribute('href', num.href);
    card.innerHTML = `
    <h3 class="text-lg font-bold">${num.title}</h3>
    <p>${num.desc}</p>
    `
pElement.appendChild(card)
}
//fourth section
const fsElement = document.getElementById('funstuff-sect')
for (const key in funstuff) {
    const num = funstuff[key];
    const card = document.createElement('a');
    card.setAttribute('class', 'block p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1');
    card.setAttribute('href', num.href);
    card.setAttribute('target', "_blank");
    card.innerHTML = `
    <h3 class="text-lg font-bold">${num.title}</h3>
    <p>${num.desc}</p>
    `
fsElement.appendChild(card)
}