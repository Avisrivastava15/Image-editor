let filters={
    brightness:{value:100,min:0,max:200,unit:"%"},
    contrast:{value:100,min:0,max:200,unit:"%"},
    saturation:{value:100,min:0,max:200,unit:"%"},
    hueRotation:{value:0,min:0,max:360,unit:"deg"},
    blur:{value:0,min:0,max:20,unit:"px"},
    grayscale:{value:0,min:0,max:100,unit:"%"},
    sepia:{value:0,min:0,max:100,unit:"%"},
    opacity:{value:100,min:0,max:100,unit:"%"},
    invert:{value:0,min:0,max:100,unit:"%"}
}

const presets = {
    vintage: {
        brightness: 110,
        contrast: 90,
        saturation: 70,
        hueRotation: 10,
        blur: 0,
        grayscale: 10,
        sepia: 35,
        opacity: 100,
        invert: 0
    },

    oldSchool: {
        brightness: 105,
        contrast: 85,
        saturation: 60,
        hueRotation: 0,
        blur: 1,
        grayscale: 20,
        sepia: 50,
        opacity: 100,
        invert: 0
    },

    cinematic: {
        brightness: 95,
        contrast: 130,
        saturation: 85,
        hueRotation: 15,
        blur: 0,
        grayscale: 0,
        sepia: 10,
        opacity: 100,
        invert: 0
    },

    drama: {
        brightness: 95,
        contrast: 145,
        saturation: 125,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    blackWhite: {
        brightness: 100,
        contrast: 130,
        saturation: 0,
        hueRotation: 0,
        blur: 0,
        grayscale: 100,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    faded: {
        brightness: 112,
        contrast: 80,
        saturation: 75,
        hueRotation: 0,
        blur: 0,
        grayscale: 5,
        sepia: 15,
        opacity: 100,
        invert: 0
    },

    warmGlow: {
        brightness: 108,
        contrast: 110,
        saturation: 120,
        hueRotation: -10,
        blur: 0,
        grayscale: 0,
        sepia: 20,
        opacity: 100,
        invert: 0
    },

    coolTone: {
        brightness: 95,
        contrast: 115,
        saturation: 85,
        hueRotation: 30,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0
    },

    softPortrait: {
        brightness: 108,
        contrast: 95,
        saturation: 105,
        hueRotation: 0,
        blur: 2,
        grayscale: 0,
        sepia: 10,
        opacity: 100,
        invert: 0
    },

    moodyDark: {
        brightness: 85,
        contrast: 140,
        saturation: 80,
        hueRotation: 0,
        blur: 0,
        grayscale: 10,
        sepia: 5,
        opacity: 100,
        invert: 0
    }
};


const resetButton = document.querySelector("#reset-btn");
const downloadButton = document.querySelector("#download-btn");
const filtersContainer= document.querySelector(".filters");
const imageCanvas = document.querySelector("#image-canvas");
const imgInput=document.querySelector("#image-input");
const canvasCtx = imageCanvas.getContext("2d");
const presetContainer = document.querySelector(".presets");
let file=null;
let image=null;

function createFilterElement(name,value,min,max,unit="%"){
    const div=document.createElement("div");
    div.classList.add("filter");

    const input=document.createElement("input");
    input.type="range";
    input.min=min;
    input.max=max;
    input.value=value;
    input.id=name;

    const p=document.createElement("p");
    p.innerText = name[0].toUpperCase() + name.slice(1); //making the first letter capital

    div.appendChild(p);
    div.appendChild(input);

    input.addEventListener("input",(event)=>{
        filters[name].value = input.value;
        applyFilters();
    })

    return div;
}

function createFilters(){
    Object.keys(filters).forEach(key => {
        const obj=filters[key];
        const filterElement = createFilterElement(key,obj.value,obj.min,obj.max,obj.unit);
        
        filtersContainer.appendChild(filterElement);
    });
}

createFilters();

imgInput.addEventListener("change",(event)=>{
    file=event.target.files[0];
    const imgPlaceholder=document.querySelector(".placeholder");
    imgPlaceholder.style.display="none";
    imageCanvas.style.display="block";

    const img = new Image();
    img.src=URL.createObjectURL(file);
    
    img.onload = ()=>{
        image=img;
        imageCanvas.width = img.width;
        imageCanvas.height = img.height;
        canvasCtx.drawImage(img,0,0);
    }
});

function applyFilters(){
    canvasCtx.clearRect(0,0,imageCanvas.width,imageCanvas.height);
    canvasCtx.filter=`
    brightness(${filters.brightness.value}${filters.brightness.unit})
    contrast(${filters.contrast.value}${filters.contrast.unit})
    saturate(${filters.saturation.value}${filters.saturation.unit})
    hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
    blur(${filters.blur.value}${filters.blur.unit})
    grayscale(${filters.grayscale.value}${filters.grayscale.unit})
    sepia(${filters.sepia.value}${filters.sepia.unit})
    opacity(${filters.opacity.value}${filters.opacity.unit})
    invert(${filters.invert.value}${filters.invert.unit})
    `.trim();
    canvasCtx.drawImage(image,0,0);
}

resetButton.addEventListener("click",()=>{
    filters={
    brightness:{value:100,min:0,max:200,unit:"%"},
    contrast:{value:100,min:0,max:200,unit:"%"},
    saturation:{value:100,min:0,max:200,unit:"%"},
    hueRotation:{value:0,min:0,max:360,unit:"deg"},
    blur:{value:0,min:0,max:20,unit:"px"},
    grayscale:{value:0,min:0,max:100,unit:"%"},
    sepia:{value:0,min:0,max:100,unit:"%"},
    opacity:{value:100,min:0,max:100,unit:"%"},
    invert:{value:0,min:0,max:100,unit:"%"}
    };

    applyFilters();

    filtersContainer.innerHTML="";
    createFilters();
})

downloadButton.addEventListener("click",()=>{
    if (!image) {
        alert("Please upload an image first");
        return;
    }

    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href=imageCanvas.toDataURL();
    link.click();
})


Object.keys(presets).forEach(presetName=>{
    const presetButton = document.createElement("button");
    presetButton.classList.add("preset-btn");
    presetButton.classList.add("btn");
    presetButton.innerText=presetName;
    presetContainer.appendChild(presetButton);

    presetButton.addEventListener("click",()=>{
        const preset = presets[presetName];

        Object.keys(preset).forEach(filterName =>{
            filters[filterName].value = preset[filterName];

            applyFilters();

            filtersContainer.innerHTML="";
            createFilters()
        })
    })
});