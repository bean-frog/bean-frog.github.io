var ligmajs = (function() {
  return {
 inYourWalls: function(interval, type) {
   setInterval(function() {
     if (type === "message") {
       console.log("I'm in your walls");
     } else if (type === "warn") {
       console.warn("I'm in your walls");
     } else if (type === "error") {
       console.error("I'm in your walls");
     } else {
       console.error("ligmajs error in module 'inYourWalls'. invalid type provided:" + type);
     }
   }, interval);
 },
 lagmachine: function() {
   function lag(n) {
     var now = new Date().getTime();
     while( (new Date().getTime()) - now < n*1000 ) {}
 }
 function run() {
     lag(Math.floor(Math.random()*10)+1);
     setTimeout(run, Math.random()*10000);
 }
 run();
 },
 scammer: function(company, amount, cardtype, msgtype) {
   let validcompanies = ['apple', 'google', 'microsoft', 'norton', 'mcafee'];
   let validcardtypes = ['googleplay', 'amazon', 'visa', 'bassproshop'];
   let validmsgtypes = ['alert', 'message'];
   if (validcompanies.includes(company)) {
     if (validcardtypes.includes(cardtype)) {
       if(Number.isInteger(amount)) {
         if (validmsgtypes.includes(msgtype)) {
           if (msgtype = validmsgtypes[0]) {
             alert('helo my friend this is adam smith from ' + company + '. your computer has a virus and to remove it please send to me a ' + amount + ' dollar ' + cardtype + ' card thank you sir')
           } else if (msgtype = validmsgtypes[1]) {
             console.log('helo my friend this is adam smith from ' + company + '. your computer has a virus and to remove it please send to me a ' + amount + ' dollar ' + cardtype + ' card thank you sir')
           }
         } else {
           console.error('ligmajs error in module "scammer". invalid msgtype provided: ' + msgtype)
         }
       } else {
         console.error('ligmajs error in module "scammer". invalid amount arg provided: ' + amount)
       }
     } else {
     console.error('ligmajs error in module "scammer". invalid cardtype arg provided: ' + cardtype)
     }
   } else {
     console.error('ligmajs error in module "scammer". invalid company arg provided: ' + company)
   }
 },
bluescreen: function(timeout) {
 setTimeout(function() {
   const imagecdn = 'https://cdn.wallpapersafari.com/19/92/Gxzukd.png';
   let bsod = document.createElement('div');
   bsod.style.position = 'fixed';
   bsod.style.height = "100%";
   bsod.style.width = '100%';
   bsod.style.top = '0';
   bsod.style.right = '0';
   bsod.style.backgroundImage = `url(${imagecdn})`;
   document.body.insertAdjacentElement('afterbegin', bsod)
   bsod.requestFullscreen();
 }, timeout);
},
secretPassage: function(id, password, content) {
 let element = document.getElementById(id);
 element.contentEditable = 'true';
 element.spellcheck = 'false';
 let popup = null; 
 element.addEventListener('input', function() {
   if (element.textContent === password) {
     if (!popup) {
       popup = document.createElement('div');
       popup.style.textAlign = 'center';
       popup.style.margin = 'auto';
       popup.style.position = 'fixed';
       popup.style.top = '50%';
       popup.style.left = '50%';
       popup.style.transform = 'translate(-50%, -50%)'; 
       popup.style.zIndex = '9999'; 
       popup.innerHTML = content;
       document.body.appendChild(popup);
     }
   } else {
     if (popup) {
       document.body.removeChild(popup);
       popup = null;
     }
   }
 });
},
dancingBanana: function(action, amount) {
  if (action == "create") {
    for (i = 0; i < amount; i++) {
      const template = `
      <img 
      src="https://media.tenor.com/YhKAJhNKFeoAAAAM/dance-dancing.gif"
      class="ligmabanana"
      style="
      position: absolute;
      top: ${Math.floor(Math.random() * 101)}vh;
      right: ${Math.floor(Math.random() * 101)}vw;
      "
      >
      </img>
      `
      document.body.insertAdjacentHTML('afterbegin', template)
    }
  } else if (action == "destroy") {
    const bananas = document.querySelectorAll('.ligmabanana');
    if (bananas) {
      bananas.forEach(e => e.parentNode.removeChild(e));
      console.log('ligmajs dancingBanana (destroy): removed bananas!')
    } else {
      console.log('ligmajs dancingBanana (destroy): no bananas found!')
    }
  } else {
    console.error('ligmajs error in module "dancingBanana". invalid action arg provided: ' + action)
  }

} 


};
})();
