/*************
 * beanfrog.xyz content.js
 * contains all main page content, which is appended into the html 
 * switched to this method because the html is super messy especially when styling w/ tailwind
 * (c) 2023 beanfrog all rights reserved etc etc boring nerd shit
**************/


const panels = {
    bio: {
        "text": "Hello world! I'm <abbr title='pronounced like Graham, yeah its a weird spelling thanks for noticing'>Graeme</abbr>, and I'm currently a Junior (11th grade) in high school. I've been into computers and programming since 6th grade, since my first encounter with HTML in 6th grade. Since then, I've come a long way, expanding into building more robust projects and picking up frontend tools like Tailwind and Vue as well as backend technologies, most notably NodeJS and Express. Outside of VSCode, I love to hang out with my 2 golden retrievers and do stupid stuff my friends. (shoutout to m-nasty u a real one)"
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
            "html": `<ul><li>CachyOS (Arch-based)</li><li>Desktop: XFCE | Shell: FISh</li><li>i7 9th Gen | Intel Graphics</li><li>16GB RAM | 1TB SSD</li></ul>`
        },
        3: {
            "title": "Linux 2",
            "html": `<ul><li>Linux Mint</li><li>Desktop: XFCE | Shell: FISh</li><li>AMD A6-9220c | Radeon R5 </li><li>4GB RAM | 128GB SSD</li></ul>`
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
        },
        2: {
            "icon": "vue",
            "label": "Vue"
        },
        3: {
            "icon": "mongodb",
            "label": "MongoDB"
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
            "icon": "rust",
            "label": "Rust"
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
        "title": "W I D E S H O T",
        "desc": "what if deadshot.io could be SUPER UNPLAYABLY WIDE AND THICCCCC",
        "href":"projects/wideshot"
    },
    7: {
        "title": "PVA v2",
        "desc": "Personal Verbal Abuser - a study timer that verbally abuses you :D",
        "href":"pva-v2"
    },
    8: {
        "title": "W I D E Z E N",
        "desc":"what if cryzen.io could be SUPER UNPLAYABLY THICCC LIKE UR MOM",
        "href": "projects/widezen"
    },
    9: {
        "title": "simplesettings.js",
        "desc": "a small javascript library that makes saving user settings in local storage easy",
        "href": "https://github.com/bean-frog/simplesettings.js"
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
        <h1 class="text-xl font-bold">${item.title}</h1>
              <h1 class="text-md">${item.desc}</h1>
              <a target="_blank" href="${item.href}" class="mt-auto text-black btn glass">Check it out</a>
    `
    projectsElement.appendChild(div)
}