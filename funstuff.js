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
𒀀𒈾𒂍𒀀𒈾𒍢𒅕𒆠𒉈𒈠𒌝𒈠𒈾𒀭𒉌𒈠𒀀𒉡𒌑𒈠𒋫𒀠𒇷𒆪𒆠𒀀𒄠𒋫𒀝𒁉𒄠𒌝𒈠𒀜𒋫𒀀𒈠𒄖𒁀𒊑𒁕𒄠𒆪𒁴𒀀𒈾𒄀𒅖𒀭𒂗𒍪𒀀𒈾𒀜𒁲𒅔𒋫𒀠𒇷𒅅𒈠𒋫𒀝𒁉𒀀𒄠𒌑𒆷𒋼𒁍𒍑𒄖𒁀𒊑𒆷𒁕𒄠𒆪𒁴𒀀𒈾𒈠𒅈𒅆𒅁𒊑𒅀𒋫𒀸𒆪𒌦𒈠𒌝𒈠𒀜𒋫𒈠𒋳𒈠𒋼𒇷𒆠𒀀𒇷𒆠𒀀𒋳𒈠[𒆷]𒋼𒇷𒆠𒀀𒀜𒆷𒅗𒅀𒋾𒀀𒈾𒆠𒈠𒈠𒀭𒉌𒅎𒌅𒅆𒅎𒈠𒉌𒈠𒆠𒀀𒄠𒋼𒈨𒊭𒀭𒉌𒈠𒊑𒀀𒉿𒇷𒀀𒈾𒆠𒈠𒅗𒋾𒀀𒈾𒆠𒋛𒅀𒈠𒄩𒊑𒅎𒀸𒁍𒊏𒄠𒈠𒌅𒈨𒄿𒊭𒄠𒈠𒄿𒈾𒂵𒂵𒅈𒈾𒀝𒊑𒅎𒅖𒋾𒅖𒋗𒅇𒅆𒉌𒋗𒊑𒆪𒋢𒉡𒌅𒋼𒅕𒊏𒄠𒄿𒈾𒀀𒇷𒅅𒋼𒂖𒈬𒌦𒈠𒀭𒉡𒌝𒊭𒆠𒀀𒄠𒄿𒁍𒊭𒀭𒉌𒄿𒈠𒀜𒋫𒈠𒅈𒅆𒅁𒊑𒅀𒌅𒈨𒂊𒅖𒀀𒈾𒈠𒆷𒅗𒊍𒉿𒅎𒊭𒄿𒈾𒂵𒋾𒅀𒌅𒊺𒍪𒌑𒆠𒀀𒄠𒋫𒁕𒁍𒌒𒅇𒀸𒋳𒄿𒅗𒀀𒈾𒂍𒃲𒇷𒌋𒐍𒄘𒍏𒀀𒈾𒆪𒀜𒁲𒅔𒅇𒋗𒈪𒀀𒁍𒌝𒌋𒐍𒄘𒍏𒄿𒁲𒅔𒂊𒍣𒅁𒊭𒀀𒈾𒂍𒀭𒌓𒆪𒉡𒊌𒅗𒄠𒉌𒍣𒁍𒀀𒈾𒉿𒊑𒅎𒊭𒀀𒋾𒆠𒄿𒋼𒁍𒊭𒀭𒉌𒆠𒋛𒄿𒈾𒂵𒂵𒅈𒈾𒀝𒊑𒌅𒊌𒋾𒅋𒆠𒋛𒀀𒈾𒂵𒋾𒅀𒋗𒇻𒈠𒄠𒂊𒇷𒅗𒄿𒋗𒆠𒈠𒀭𒉌𒆠𒀀𒄠𒉿𒊑𒀀𒄠𒆷𒁺𒈬𒂵𒄠𒆷𒀀𒈠𒄩𒊒𒅗𒋫𒆷𒈠𒀜𒄿𒈾𒆠𒊓𒇷𒅀𒅖𒋾𒈾𒀀𒌑𒈾𒍝𒀝𒈠𒂊𒇷𒆠𒅇𒀀𒈾𒊭𒌅𒈨𒄿𒊭𒀭𒉌𒈾𒋛𒄴𒋫𒄠𒂊𒁍𒍑𒅗
`
document.getElementById('cun').textContent = cuneiform;