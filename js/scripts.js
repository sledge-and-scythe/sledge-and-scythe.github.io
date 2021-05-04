// Sleep function for color cycling, sourced from
// https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}        

// Reformats rgb as into string to pass as attribute value
// Option to set opacity for different instances
let packRGBA = function(r, g, b, a=0.25) {
    return "rgba("+r+", "+g+", "+b+", "+a+")";
}

// On page load, get three random RGB triples
// Use them to set the background and link colors
let colors = [];
let open = () => {
    let rgbArr = [];
    for (let i = 0; i < 3; i++) {
        let rgb = {r: 0, g: 0, b: 0, target: "stop[n]"};
        rgb.r = Math.floor(Math.random() * 155) + 6;
        rgb.g = Math.floor(Math.random() * 155) + 6;
        rgb.b = Math.floor(Math.random() * 155) + 6;
        rgb.target = "#stop" + (i + 1).toString();
        // Add the new color to our array
        rgbArr[i] = rgb;
        // Pack the rgb values into a string  0.15 OPACITY
        colors[i] = packRGBA(rgbArr[i].r, rgbArr[i].g, rgbArr[i].b, 1);
        // Update each gradient stop
        document.querySelector(rgbArr[i].target).style.stopColor = colors[i]
    }
    // Get a fourth (darker) color
    let color = {r: 0, g: 0, b: 0};
    color.r = Math.min.apply(Math, [rgbArr[0].r, rgbArr[1].r, rgbArr[2].r]);
    color.g = Math.min.apply(Math, [rgbArr[0].g, rgbArr[1].g, rgbArr[2].g]);
    color.b = Math.min.apply(Math, [rgbArr[0].b, rgbArr[1].b, rgbArr[2].b]);
    rgbArr[3] = color;
    // Set thumbnail to dark color 0.15 OPACITY
    colors[3] = packRGBA(rgbArr[3].r, rgbArr[3].g, rgbArr[3].b,0.15);
    document.querySelectorAll('.thumb').forEach(thumb => {
        thumb.style.backgroundColor = colors[3]
    })
    // Set overlay to dark color FULL OPACITY
    colors[4] = packRGBA(rgbArr[3].r, rgbArr[3].g, rgbArr[3].b,1);
    document.querySelectorAll('.overlay').forEach(thumb => {
        thumb.style.backgroundColor = colors[4]
    })
    // Reveal the lables now to mitigate flash 
    document.querySelectorAll('.label').forEach(thumb => {
        thumb.style.backgroundColor = 'white'
    })

    // Get a fifth (lightest) color
    let lcolor = {r: 0, g: 0, b: 0};
    lcolor.r = Math.max.apply(Math, [rgbArr[0].r, rgbArr[1].r, rgbArr[2].r]);
    lcolor.g = Math.max.apply(Math, [rgbArr[0].g, rgbArr[1].g, rgbArr[2].g]);
    lcolor.b = Math.max.apply(Math, [rgbArr[0].b, rgbArr[1].b, rgbArr[2].b]);
    rgbArr[4] = lcolor;
    // Set links to light color FULL OPACITY
    colors[5] = packRGBA(rgbArr[4].r, rgbArr[4].g, rgbArr[4].b,1);
    document.querySelectorAll('.nav-link').forEach(link => {
        link.style.color = colors[5]
    })
    document.querySelectorAll('.content a').forEach(link => {
        link.style.color = colors[5]
    })

    // Get colors for logo hover - colors[6-10]
    for (let i=0; i<5; i++){
        index = i + 6;
        colors[index] = packRGBA(rgbArr[i].r, rgbArr[i].g, rgbArr[i].b,0.55);
    }
};

open();



// Reload link gets new colors without reloading page
document.querySelectorAll('.reload').forEach(link => {
    link.onclick = () => {
        open()
        return false
    }
})

// On link hover, color 5=>4
document.querySelectorAll('a').forEach(link => {
    link.onmouseover = () => {
        link.style.color = colors[4]
    }
    link.onmouseleave = () => {
        link.style.color = colors[5]
    }
})

// On logo hover, cycle through colors 6-11
document.querySelectorAll('.logo').forEach(logo => {
    let hover
    logo.onmouseover = async () => {
        hover = true
        let i = 0
        while (hover) {
            logo.style.color = colors[i+6]
            i++
            if (i === 5) {
                i = 0
            }
            await sleep(100)
        }
        logo.style.color = '#252525'
    } 

    logo.onmouseleave = () => {
        hover = false
    }
})