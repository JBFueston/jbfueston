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
try{$('#app').html("<h2>GIPE ANALYTICS PAGE</h2>");}
catch(e){log('jQuery was not installed or is unaccessable', 'error')}}})()


let RenderedPackages = ['GIPE Analytics', 'SafeSite', 'Header Setter'] // Pre-Rendered List
log('Loaded RyanWans API Packages: '+RenderedPackages, 'log');
if(window.location.pathname==='/'){console.log("started");setTimeout(function(){$('#aaa').text("CONTENT LOAD FAILED");
$('#aaa').css("color", "$error!important");}, 1000);console.log("ended")}
