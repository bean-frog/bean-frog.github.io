function openItem(name) { 
    if (name == "curseofra") {
        curseofra.showModal();
    }
    if (name == "shittycopper") {
        shittycopper.showModal();
    }
}
document.addEventListener('DOMContentLoaded', function() {
        const loadParam = new URLSearchParams(window.location.search).get('open');
        if (loadParam) {
          openItem(loadParam);
        } else {
          return;
        }
});
document.getElementById('gen').addEventListener('click', function() {
    let len = parseInt(document.getElementById('length').value);
    let chars = "𓃝𓃞𓃟𓃠𓃡𓃢𓃣𓃤𓃥𓃦𓃧𓃨𓃩𓃪𓃫𓃬𓃭𓃮𓃯𓃰𓃱𓃲𓃳𓃴𓃵𓃶𓃷𓃸𓃹𓃺𓃻𓃼𓃽𓃾𓃿𓄀𓄁𓄂𓄃𓄄𓄅𓄆𓄇𓄈𓄉𓄊𓄋𓄌𓄍𓄎𓄏𓄕𓄖𓄗𓄘𓄙𓄚𓄛𓄜𓄝𓄞𓄟𓄠𓄡𓄢𓄣𓄤𓄥𓄦𓄧𓄨𓄩𓄪𓄫𓄬𓄭𓄮𓄯𓄰𓄱𓄲𓄳𓄴𓄵𓄶𓄷𓄸𓄹𓄺𓄻𓄼𓄽𓄾𓄿𓅀𓅁𓅂𓅃𓅄𓅅𓅆𓅇𓅈𓅉𓅊𓅋𓅌𓅍𓅎𓅏𓅐𓅑𓅒𓅓𓅔𓅕𓅖𓅗𓅘𓅙𓅚𓅛𓅜𓅝𓅞𓅟𓅠𓅡𓅢𓅣𓅤𓅥𓅦𓅧𓅨𓅩𓅪𓅫𓅬𓅭𓅮𓅯𓅰𓅱𓅲𓅳𓅴𓅵𓅶𓅷𓅸𓅹𓅺𓅻𓅼𓅽𓅾𓅿𓆀𓆁𓆂";
    chars = [...chars];
    let final = "";
    for (let i = 0; i < len; i++) {
        var num = Math.floor(Math.random() * chars.length);
        final += chars[num];
    }
    document.getElementById('output').textContent = "don't care lol CURSE OF RA! " + final;
    document.getElementById('copy').removeAttribute('disabled');
});
document.getElementById('copy').addEventListener('click', function() {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(document.getElementById('output').textContent);
        this.textContent = 'Copied!';
        setTimeout(function() {
            document.getElementById('copy').textContent = 'Copy';
        }, 1000);
    }
})
const cuneiform = `
𒀀 𒈾 𒂍 𒀀 𒈾 𒍢 𒅕
𒆠 𒉈 𒈠
𒌝 𒈠 𒈾 𒀭 𒉌 𒈠
𒀀 𒉡 𒌑 𒈠 𒋫 𒀠 𒇷 𒆪
𒆠 𒀀 𒄠 𒋫 𒀝 𒁉 𒄠
𒌝 𒈠 𒀜 𒋫 𒀀 𒈠
𒄖 𒁀 𒊑 𒁕 𒄠 𒆪 𒁴
𒀀 𒈾 𒄀 𒅖 𒀭 𒂗𒍪 𒀀 𒈾 𒀜 𒁲 𒅔
𒋫 𒀠 𒇷 𒅅 𒈠 𒋫 𒀝 𒁉 𒀀 𒄠
𒌑 𒆷 𒋼 𒁍 𒍑
𒄖 𒁀 𒊑 𒆷 𒁕 𒄠 𒆪 𒁴
𒀀 𒈾 𒈠 𒅈 𒅆 𒅁 𒊑 𒅀
𒋫 𒀸 𒆪 𒌦 𒈠 𒌝 𒈠 𒀜 𒋫 𒈠
𒋳 𒈠 𒋼 𒇷 𒆠 𒀀 𒇷 𒆠 𒀀
𒋳 𒈠 [𒆷] 𒋼 𒇷 𒆠 𒀀 𒀜 𒆷 𒅗
𒅀 𒋾 𒀀 𒈾 𒆠 𒈠 𒈠 𒀭 𒉌 𒅎
𒌅 𒅆 𒅎 𒈠 𒉌 𒈠
𒆠 𒀀 𒄠 𒋼 𒈨 𒊭 𒀭 𒉌
𒈠 𒊑 𒀀 𒉿 𒇷 𒀀 𒈾 𒆠 𒈠 𒅗 𒋾
𒀀 𒈾 𒆠 𒋛 𒅀 𒈠 𒄩 𒊑 𒅎
𒀸 𒁍 𒊏 𒄠 𒈠
𒌅 𒈨 𒄿 𒊭 𒄠 𒈠
𒄿 𒈾 𒂵 𒂵 𒅈 𒈾 𒀝 𒊑 𒅎
𒅖 𒋾 𒅖 𒋗 𒅇 𒅆 𒉌 𒋗
𒊑 𒆪 𒋢 𒉡 𒌅 𒋼 𒅕 𒊏 𒄠
𒄿 𒈾 𒀀 𒇷 𒅅 𒋼 𒂖 𒈬 𒌦
𒈠 𒀭 𒉡 𒌝 𒊭 𒆠 𒀀 𒄠
𒄿 𒁍 𒊭 𒀭 𒉌 𒄿 𒈠
𒀜 𒋫 𒈠 𒅈 𒅆 𒅁 𒊑 𒅀 𒌅 𒈨 𒂊 𒅖
𒀀 𒈾 𒈠 𒆷 𒅗 𒊍 𒉿 𒅎
𒊭 𒄿 𒈾 𒂵 𒋾 𒅀 𒌅 𒊺 𒍪 𒌑
𒆠 𒀀 𒄠 𒋫 𒁕 𒁍 𒌒
𒅇 𒀸 𒋳 𒄿 𒅗
𒀀 𒈾 𒂍 𒃲 𒇷
𒌋 𒐍 𒄘 𒍏 𒀀 𒈾 𒆪 𒀜 𒁲 𒅔
𒅇 𒋗 𒈪 𒀀 𒁍 𒌝
𒌋 𒐍 𒄘 𒍏 𒄿 𒁲 𒅔
𒂊 𒍣 𒅁 𒊭 𒀀 𒈾 𒂍 𒀭 𒌓
𒆪 𒉡 𒊌 𒅗 𒄠 𒉌 𒍣 𒁍
𒀀 𒈾 𒉿 𒊑 𒅎 𒊭 𒀀 𒋾
𒆠 𒄿 𒋼 𒁍 𒊭 𒀭 𒉌
𒆠 𒋛 𒄿 𒈾 𒂵 𒂵 𒅈 𒈾 𒀝 𒊑
𒌅 𒊌 𒋾 𒅋
𒆠 𒋛 𒀀 𒈾 𒂵 𒋾 𒅀
𒋗 𒇻 𒈠 𒄠 𒂊 𒇷 𒅗 𒄿 𒋗
𒆠 𒈠 𒀭 𒉌 𒆠 𒀀 𒄠
𒉿 𒊑 𒀀 𒄠 𒆷 𒁺 𒈬 𒂵 𒄠
𒆷 𒀀 𒈠 𒄩 𒊒 𒅗 𒋫 𒆷 𒈠 𒀜
𒄿 𒈾 𒆠 𒊓 𒇷 𒅀
𒅖 𒋾 𒈾 𒀀 𒌑 𒈾 𒍝 𒀝 𒈠
𒂊 𒇷 𒆠
𒅇 𒀀 𒈾 𒊭 𒌅 𒈨 𒄿 𒊭 𒀭 𒉌
𒈾 𒋛 𒄴 𒋫 𒄠 𒂊 𒁍 𒍑 𒅗
`
document.getElementById('cun').textContent = cuneiform;