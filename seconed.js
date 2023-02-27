document.querySelector(".fa-cog").onclick = function(){
    
    this.classList.toggle("fa-spin");
    document.querySelector(".settings").classList.toggle("open");
};
//**********************************************//

const colorLi = document.querySelectorAll(".color-list li");
colorLi.forEach(li =>{
    li.addEventListener("click",(e) =>{
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        localStorage.setItem("color_option",e.target.dataset.color);
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            
           element.classList.remove("active"); 
        });
        e.target.classList.add("active");
    });
});
//**********************************************//
let mainColors = localStorage.getItem("color_option");
if(mainColors != null){
   // console.log("main color is not null");
    document.documentElement.style.setProperty('--main-color',mainColors);
    document.querySelectorAll(".color-list li").forEach(element =>{
        element.classList.remove("active");
        if(element.dataset.color === mainColors){
            element.classList.add("active");
        }
    });
}
//**********************************************//
let randomClick = true;
let backgroundInterval;
const BackLi = document.querySelectorAll(".randomBackgrounds span");
BackLi.forEach(span =>{
    span.addEventListener("click",(e) =>{
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            
           element.classList.remove("active"); 
        });
        e.target.classList.add("active");
        if(e.target.dataset.background === 'yes'){
            randomClick = true;
            randomizeBg();
        }else{
            randomClick = false;
            clearInterval(backgroundInterval);
        }
    });
});

//**********************************************//

let mainPage = document.querySelector(".main");
let imgArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg"];
function randomizeBg(){
    if(randomClick === true){
    backgroundInterval = setInterval(function(){
    
    let randomNum = Math.floor(Math.random() * imgArray.length);
    mainPage.style.backgroundImage = 'URL("imgs/'+imgArray[randomNum]+'")';
    },7000);
    }}
//**********************************************//
let ourSkills = document.querySelector(".skills");
window.onscroll = function(){
    let skillOffsetTop = ourSkills.offsetTop;
    let skillOuterHeight = ourSkills.offsetHeight;
    let skillWindow = this.innerHeight;
    let scrollTop = this.pageYOffset;
    
    if(scrollTop > (skillOffsetTop+skillOuterHeight-skillWindow)){
        let allSkill = document.querySelectorAll(".skill-progress span");
        allSkill.forEach(span =>{
            span.style.width = span.dataset.progress;
        });
    }
    
    
};
//**********************************************//
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img =>{
    img.addEventListener('click', (e)=>{
        
        let OverLay = document.createElement("div");
        OverLay.className = "overImg";
        document.body.appendChild(OverLay);
        
        let imgBx = document.createElement("div");
        imgBx.className = "imgBx";
        
        if(img.alt !== null){
            let imgHeading = document.createElement("h3");
            let textHeading = document.createTextNode(img.alt);
            imgHeading.appendChild(textHeading);
            imgBx.appendChild(imgHeading);
        }
        
        let imgg = document.createElement("img");
        imgg.src = img.src;
        imgBx.appendChild(imgg);
        document.body.appendChild(imgBx);
        
        let closeButton = document.createElement("span");
        let textClose = document.createTextNode("X");
        closeButton.className = 'close_Button';
        closeButton.appendChild(textClose);
        OverLay.appendChild(closeButton);
    });  
});
document.addEventListener("click",(e) =>{
    if(e.target.className == 'close_Button'){
        e.target.parentNode.remove();
        document.querySelector(".imgBx").remove();
    }
} );












