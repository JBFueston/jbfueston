
/* 
 * Presc by Ryan Wans
 * A Tool For Responsive Web Applications
 * (C) 2019 Ryan Wans of ryanwans.com
 */

/* eslint-disable */

function log(mes, level) {console[level]('%c[RWAPI] '+mes, 'color: blue;');}

// DevDet (Device Determination)
// By Ryan Wans

let cs; if(screen.width === window.innerWidth 
&& screen.height === window.innerHeight) {
    cs = {w: screen.width, h: screen.height}
} else {cs = {w: window.innerWidth, h: window.innerHeight}}
let devchart = {
    mobile: 550,
    tablets: 780,
    tabletl: 990,
    desktop: 3000,
    expant: 10000
}, i, device;
for (i=0; i<Object.keys(devchart).length; i++) {
    if(cs.w < Object.values(devchart)[i]) {
        device = Object.keys(devchart)[i-1];
    } else {device;}}
if(device === undefined) {console['log']("Undefined Device (4K Display, Oversided?)");}


// GIPE INLINE SCRIPT FOR VUE
// (C) RYAN WANS 
// C+PASTED INLINE FROM GIPE
// DO NOT EDIT
(function gipea(){if(window.location.pathname==="/gipe"||window.location.pathname==="/analytics"){
try{$('#app').html("<h2>GIPE ANALYTICS PAGE</h2> <gipe />");}
catch(e){log('jQuery was not installed or is unaccessable', 'error')}}})()

// qotd
export function qwet() {
    function getKeyByValue(object, value) {return Object.keys(object).find(key => object[key] === value);}
    let q = ['You Can Live In A Car, But You Can\'t Race A House', 'Life Is Tough, But It\'s Tougher When You\'re Stupid',
    'Getting money on your birthday is the real life version of \'collect 200 as you pass go\'',
    'Have we checked all food to see if exploding them makes them into something better or did we just stop with corn?',
    'If you are a twin, one of you was 100% unplanned', 'SkIgTGlrZXMgTWVu', 'Bros before hoes',
    'It must be awful for giraffes to throw up.', 'Volleyball is advanced hot potato.', 
    'We‘d all be very healthy if we couldn‘t taste food.', 'Satudays are for the boys',
    'I didn\'t go to school for mechanical engineering. In fact, I didn\'t go to school at all.'];
    let vv= {'j':'k','b':'4','l':'j','i':'q','k':'8','e':'9','s':'b','m':'e','n':'t',' ':'!'};
    const gr = function(){var ii=0, a=q.length; return Math.floor(Math.random() * (+a - +ii)) + +ii;}, key="923h46d27896h3948d762h9"; let retstring = q[gr()]
    if(retstring.includes('SkIg')) {return window.atob(retstring);} else { return retstring; }
}

let RenderedPackages = ['GIPE Analytics', 'SafeSite', 'Header Setter'] // Pre-Rendered List
log('Loaded RyanWans API Packages: '+RenderedPackages, 'log');
if(window.location.pathname==='/'){setTimeout(function(){$('#aaa').text("CONTENT LOAD FAILED");
$('#aaa').css("color", "$error!important");}, 1000);}
