import { timeout } from "q";

/* 
 * Presc by Ryan Wans
 * A Tool For Responsive Web Applications
 * (C) 2019 Ryan Wans of ryanwans.com
 */

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
    let q = ['You Can Live In A Car, But You Can\'t Race A House', 'Life Is Tough, But It\'s Tougher When You\'re Stupid',
    'Getting money on your birthday is the real life version of \'collect 200 as you pass go\'',
    'Have we checked all food to see if exploding them makes them into something better or did we just stop with corn?',
    'If you are a twin, one of you was 100% unplanned', '\'What happens in Vegas stays in Vegas\' doesn\'t apply to STDs.',
    'It must be awful for giraffes to throw up.', 'Volleyball is advanced hot potato.', 'We‘d all be very healthy if we couldn‘t taste food.'];
    const gr = function(){var ii=0, a=q.length; return Math.floor(Math.random() * (+a - +ii)) + +ii;}
    return q[gr()];
}

let RenderedPackages = ['GIPE Analytics', 'SafeSite', 'Header Setter'] // Pre-Rendered List
log('Loaded RyanWans API Packages: '+RenderedPackages, 'log');
if(window.location.pathname==='/'){console.log("started");setTimeout(function(){$('#aaa').text("CONTENT LOAD FAILED");
$('#aaa').css("color", "$error!important");}, 1000);console.log("ended")}
