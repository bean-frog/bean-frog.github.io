/*************
 * beanfrog.xyz content.js
 * contains all main page content, which is appended into the html 
 * switched to this method because the html is super messy especially when styling w/ tailwind
 * (c) 2023 beanfrog all rights reserved etc etc boring nerd shit
**************/


const panels = {
    bio: {
        "text": "Hello world! I'm <abbr title='pronounced like Graham, yeah its a weird spelling thanks for noticing'>Graeme</abbr>, and I'm currently a Junior (11th grade) in high school. In 6th grade, I was forced to take a computer class where I learned HTML and Scratch, which is what initially sparked my interest in computers. Ever since, I've been expanding my knowledge into frontend development with JS, Tailwind, React, and more. I've also been learning electronics and c++ via the Arduino microcontroller platform. I'm currently learning Rust, Ruby, and Firebase."
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
    },
    tech: {
        1: {
            "title": "Main PC (dualboot)",
            "html": `<ul><li>Windows 10</li><li>Manjaro (KDE Plasma)</li><li>RTX 3060 | i9 10th Gen</li><li>16GB RAM | 2TB SSD</li></ul>`
        },
        2: {
            "title": "Linux 1",
            "html": `<ul><li>CachyOS</li><li>Desktop: XFCE | Shell: FISh</li><li>WM: xfwm4</li><li>i7 9th Gen | Intel Graphics</li><li>16GB RAM | 1TB SSD</li></ul>`
        },
        3: {
            "title": "Linux 2",
            "html": `<ul><li>Linux Mint</li><li>Desktop: XFCE | Shell: FISh</li><li>WM: Compiz (X11)</li><li>AMD A6-9220c | Radeon R5 </li><li>4GB RAM | 128GB SSD</li></ul>`
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
        },
          5: {
         "icon": "rust",
            "label": "Rust"
        } 
    },
    low: {
        1: {
            "icon": "react",
            "label": "React"
        },
        2: {
            "icon": "vue",
            "label": "Vue"
        },
        3: {
         "icon": "ruby",
            "label": "Ruby"
        }
    },
    learning: {
        1: {
            "icon":"firebase",
            "label": "Firebase"
        },
        2: {
            "icon":"docker",
            "label": "Docker"
        },
        3: {
             "icon": "mongodb",
            "label": "MongoDB"
        }
    }
}
const projects = {
    1: {
        "title": "Tuneguessr",
        "desc": "A musical geography game similar to Geoguessr. Players are given a song and must guess which country it is from.",
        "href":"tuneguessr",
        "icons": "html,tailwind,js"
    },
     2: {
        "title": "Stupid Trivia",
        "desc": "A trivia game where most of the answers are stupid.",
        "href":"projects/stupid-trivia",
        "icons": "react,js,tailwind"
    },
    3: {
        "title": "ligma.js",
        "desc": "stupid javascript library thats mostly useless but has a couple of cool things I guess",
        "href":"projects/ligmajs",
        "icons": "js"
    },
    4: {
        "title": "beancord",
        "desc": "(kind of abandoned) custom discord client. Will probably return in the future.",
        "href":"projects/beancord",
        "icons": "html,js,css,electron"
    },
    5: {
        "title": "beansuite",
        "desc": "Sorry Larry and Sergei, I stole your document editor >:)",
        "href":"projects/beansuite",
        "icons": "html,js,tailwind,nodejs,express"
    },
    6: {
        "title": "clock-app",
        "desc": "Simple clock app built using Electron. Should work on all major OS/Architectures as long as they support NodeJS and Electron.",
        "href":"projects/clock-app",
        "icons": "html,js,tailwind,electron,nodejs"
    },
    7: {
        "title": "PVA v2",
        "desc": "Personal Verbal Abuser - a study timer that verbally abuses you :D",
        "href":"pva-v2",
        "icons": "html,js,tailwind"
    },
    8: {
        "title": "simplesettings.js",
        "desc": "a small javascript library that makes saving user settings in local storage easy",
        "href": "https://github.com/bean-frog/simplesettings.js",
        "icons": "js"
    },
    9: {
        "title": "Goober FX",
        "desc": "simple theater sound cue app that I made for a school thing using Electron.",
        "href": "https://github.com/bean-frog/GooberFX",
        "icons": "html,js,tailwind,electron,nodejs"
    },
     10: {
        "title": "Userscripts",
        "desc": "My collection of userscripts that I've made.",
        "href": "projects/userscripts.html",
        "icons": "js"
    },
     11: {
        "title": "Github Lookup",
        "desc": "Retrieve info about a Github user through the public api",
        "href": "https://beanfrog.xyz/github-lookup",
        "icons": "react,tailwind,js"
    }
}
const goober = {
    1: {
        "title": "Curse of Ra upon you!!!!!",
        "href": "funstuff.html?open=curseofra"
    },
    2: {
        "title": "Ea-Nasir sells terrible copper :(",
        "href": "funstuff.html?open=shittycopper"
    },
    3: {
        "title": "W I D E S H O T",
        "href": "projects/wideshot.html"
    },
    4: {
        "title": "W I D E Z E N",
        "href": "projects/widezen.html"
    },
    5: {
        "title": "Non-Coding stuff",
        "href": "portfolio"
    }
}
const skillsHigh = document.getElementById('skills-high')
const skillsMid = document.getElementById('skills-mid')
const skillsLow = document.getElementById('skills-low')
const skillsLearning = document.getElementById('skills-learning')
for (const key in skills.high) {
    const num = skills.high[key]
    const card = document.createElement('div');
    card.setAttribute('class', 'flex flex-row items-center p-2 m-2 rounded-md bg-emerald-500/25 border-[1px] border-full border-stone-300');
    card.innerHTML = `
    <img src="https://skillicons.dev/icons?i=${num.icon}" class="mr-2 w-6 h-6">
    <h2 class="font-bold text-white">${num.label}</h2>
    `
    skillsHigh.appendChild(card);
}
for (const key in skills.mid) {
    const num = skills.mid[key]
    const card = document.createElement('div');
    card.setAttribute('class', 'flex flex-row items-center p-2 m-2 rounded-md bg-yellow-500/25 border-[1px] border-full border-stone-300');
    card.innerHTML = `
    <img src="https://skillicons.dev/icons?i=${num.icon}" class="mr-2 w-6 h-6">
    <h2 class="font-bold text-white">${num.label}</h2>
    `
    skillsMid.appendChild(card);
}
for (const key in skills.low) {
    const num = skills.low[key]
    const card = document.createElement('div');
    card.setAttribute('class', 'flex flex-row items-center p-2 m-2 rounded-md bg-orange-500/25 border-[1px] border-full border-stone-300');
    card.innerHTML = `
    <img src="https://skillicons.dev/icons?i=${num.icon}" class="mr-2 w-6 h-6">
    <h2 class="font-bold text-white">${num.label}</h2>
    `
    skillsLow.appendChild(card);
}
for (const key in skills.learning) {
    const num = skills.learning[key]
    const card = document.createElement('div');
    card.setAttribute('class', 'flex flex-row items-center p-2 m-2 rounded-md bg-red-500/25 border-[1px] border-full border-stone-300');
    card.innerHTML = `
    <img src="https://skillicons.dev/icons?i=${num.icon}" class="mr-2 w-6 h-6">
    <h2 class="font-bold text-white">${num.label}</h2>
    `
    skillsLearning.appendChild(card);
}
document.getElementById('bio').innerHTML = panels.bio.text;
const conElement = document.getElementById('contact');
for (const key in panels.contact) {
    const link = panels.contact[key];
       const anchor = document.createElement('a');
    anchor.setAttribute('class', 'm-2');
    anchor.setAttribute('href', link.href);
    anchor.innerHTML = `<i class="${link.icon} text-xl"></i>`;
    conElement.appendChild(anchor);
}


const techElement = document.getElementById('tech');
for (const key in panels.tech) {
    const item = panels.tech[key];
    const div = document.createElement('div');
    div.setAttribute('class', 'flex flex-col justify-center p-2 m-2 rounded-md bg-white/[0.21]');
    div.innerHTML += `<h1 class="text-xl font-bold">${item.title}</h1>` + item.html;
    techElement.appendChild(div);
}

const projectsElement = document.getElementById('projects');
for (const key in projects) {
    const item = projects[key];
    const div = document.createElement('div');
    div.setAttribute('class', 'flex flex-col justify-center p-2 m-2 rounded-md bg-white/[0.21]');
    div.innerHTML = `
        <div class="flex flex-row items-center">
        <h1 class="text-xl font-bold">${item.title}</h1>
    <img src="https://skillicons.dev/icons?i=${item.icons}" class="m-2 h-6 w-fit">

  </div>
              <h1 class="text-md">${item.desc}</h1>
              <a target="_blank" href="${item.href}" class="mt-auto text-black btn glass">Check it out</a>
    `
    projectsElement.appendChild(div)
}

const goofyactivities = document.getElementById("otherstuff")
for (const key in goober) {
    const item = goober[key];
    const a = document.createElement('a');
    a.href = item.href;
    a.innerText = item.title;
    a.setAttribute('class', 'text-white underline');
    goofyactivities.appendChild(a)
}
