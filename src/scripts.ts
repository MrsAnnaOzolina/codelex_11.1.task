class Dog {
    rootElement:HTMLDivElement;
    pictureElement: HTMLImageElement;
    backButtton: HTMLButtonElement;
    forwardButton: HTMLButtonElement;
    image:HTMLDivElement;
    imageArr:number[];
    pictureNumber:string 

    constructor (selector:string){
        this.rootElement = document.querySelector(selector);
        this.pictureElement = this.rootElement.querySelector(".dog__picture");
        this.backButtton = this.rootElement.querySelector(".dog__button--js-back");
        this.forwardButton = this.rootElement.querySelector(".dog__button--js-forward");
        // picutre number, need to upadeta if add new picture 
        this.imageArr = [2,3,4,5,6,7,8,9]
        this.pictureNumber = ""; 
        //izdomāt kā mainīt elementa numuru , pie src. 
    
        this.changePicture();
   
    } 
       changePicture(){ 
        // console.log(this.imageArr.length)
        this.backButtton.addEventListener("click", ()=> {
            this.pictureNumber =  this.pictureElement.src.toString().charAt(40)
            if (Number(this.pictureNumber) < this.imageArr.length+2  && Number(this.pictureNumber) > this.imageArr[0] ){
                this.pictureElement.src = `assets/images/Lulu${Number(this.pictureNumber)-1}.JPG`;
            } else if (Number(this.pictureNumber) === Number(this.imageArr[0])){
                this.pictureElement.src = `assets/images/Lulu${this.imageArr.length+1}.JPG`;
            } 
            // this.pictureElement.src.toString().substr(22,45)
        })
        this.forwardButton.addEventListener("click", ()=> {
            this.pictureNumber =  this.pictureElement.src.toString().charAt(40)
            if (Number(this.pictureNumber) < this.imageArr.length+1  && Number(this.pictureNumber) > this.imageArr[0]-1 ){
                this.pictureElement.src = `assets/images/Lulu${Number(this.pictureNumber)+1}.JPG`;
            } else if (Number(this.pictureNumber) === Number(this.imageArr.length+1)){
                this.pictureElement.src = `assets/images/Lulu${this.imageArr[0]}.JPG`;
            }
        })
    }
}



class Dog1 extends Dog {
    dots:HTMLDivElement;
    dot1:HTMLSpanElement;
    dot2:HTMLSpanElement;
    dot3:HTMLSpanElement;
    dot0:HTMLSpanElement;
    dot4:HTMLSpanElement;

    constructor (selector: string){
        super(selector)
        this.dot1 = this.rootElement.querySelector(".dot1")
        this.dot2 = this.rootElement.querySelector(".dot2")
        this.dot3 = this.rootElement.querySelector(".dot3")
        this.dot0 = this.rootElement.querySelector(".dot0");
        this.dot4 = this.rootElement.querySelector(".dot4");

        this. dotEvent();
    }
    dotEvent(){
        this.backButtton.addEventListener("click", ()=> {
            this.pictureNumber = this.pictureElement.src.toString().charAt(40)
            if( Number(this.pictureNumber) === 7 ){
               this.dot2.style.backgroundColor = "darkgrey"
               this.dot1.style.backgroundColor = "#bbb"
                this.dot3.style.backgroundColor = "#bbb"
                this.dot0.style.backgroundColor = "#bbb"
                this.dot4.style.backgroundColor = "#bbb"
               
            } 
            else if (Number(this.pictureNumber) === 8){
                this.dot3.style.backgroundColor = "darkgrey"
                this.dot2.style.backgroundColor = "#bbb"
                this.dot1.style.backgroundColor = "#bbb"
                this.dot0.style.backgroundColor = "#bbb"
                 this.dot4.style.backgroundColor = "#bbb"
                
            } 
            else if ( Number(this.pictureNumber) == 6) {
                this.dot1.style.backgroundColor = "darkgrey"
                this.dot2.style.backgroundColor = "#bbb"
                this.dot3.style.backgroundColor = "#bbb"
                this.dot0.style.backgroundColor = "#bbb"
                this.dot4.style.backgroundColor = "#bbb"
                
            }  else if ( Number(this.pictureNumber) == 5) {
                this.dot0.style.backgroundColor = "darkgrey"
                this.dot2.style.backgroundColor = "#bbb"
                this.dot3.style.backgroundColor = "#bbb"
                this.dot1.style.backgroundColor = "#bbb"
                this.dot4.style.backgroundColor = "#bbb"
                
            }  else if ( Number(this.pictureNumber) == 9) {
                this.dot4.style.backgroundColor = "darkgrey"
                this.dot2.style.backgroundColor = "#bbb"
                this.dot3.style.backgroundColor = "#bbb"
                this.dot0.style.backgroundColor = "#bbb"
                this.dot1.style.backgroundColor = "#bbb"
                
            }  else{
                this.dot4.style.backgroundColor = "#bbb"
                this.dot2.style.backgroundColor = "#bbb"
                this.dot3.style.backgroundColor = "#bbb"
                this.dot0.style.backgroundColor = "#bbb"
                this.dot1.style.backgroundColor = "#bbb"
            }
        })
        this.forwardButton.addEventListener("click", ()=> {
            this.pictureNumber = this.pictureElement.src.toString().charAt(40);
            if( Number(this.pictureNumber) === 7 ){
                this.dot2.style.backgroundColor = "darkgrey"
                this.dot1.style.backgroundColor = "#bbb"
                 this.dot3.style.backgroundColor = "#bbb"
                 this.dot0.style.backgroundColor = "#bbb"
                 this.dot4.style.backgroundColor = "#bbb"
                
             } 
             else if (Number(this.pictureNumber) === 8){
                 this.dot3.style.backgroundColor = "darkgrey"
                 this.dot2.style.backgroundColor = "#bbb"
                 this.dot1.style.backgroundColor = "#bbb"
                 this.dot0.style.backgroundColor = "#bbb"
                  this.dot4.style.backgroundColor = "#bbb"
                 
             } 
             else if ( Number(this.pictureNumber) == 6) {
                 this.dot1.style.backgroundColor = "darkgrey"
                 this.dot2.style.backgroundColor = "#bbb"
                 this.dot3.style.backgroundColor = "#bbb"
                 this.dot0.style.backgroundColor = "#bbb"
                 this.dot4.style.backgroundColor = "#bbb"
                 
             }  else if ( Number(this.pictureNumber) == 5) {
                 this.dot0.style.backgroundColor = "darkgrey"
                 this.dot2.style.backgroundColor = "#bbb"
                 this.dot3.style.backgroundColor = "#bbb"
                 this.dot1.style.backgroundColor = "#bbb"
                 this.dot4.style.backgroundColor = "#bbb"
                 
             }  else if ( Number(this.pictureNumber) == 9) {
                 this.dot4.style.backgroundColor = "darkgrey"
                 this.dot2.style.backgroundColor = "#bbb"
                 this.dot3.style.backgroundColor = "#bbb"
                 this.dot0.style.backgroundColor = "#bbb"
                 this.dot1.style.backgroundColor = "#bbb"
                 
             }  else{
                 this.dot4.style.backgroundColor = "#bbb"
                 this.dot2.style.backgroundColor = "#bbb"
                 this.dot3.style.backgroundColor = "#bbb"
                 this.dot0.style.backgroundColor = "#bbb"
                 this.dot1.style.backgroundColor = "#bbb"
             }
            
        })
        this.dot1.addEventListener("click", ()=>{
            this.pictureElement.src = "assets/images/Lulu6.JPG";
            this.dot1.style.backgroundColor = "darkgrey"
            this.dot2.style.backgroundColor = "#bbb"
            this.dot3.style.backgroundColor = "#bbb"
            this.dot0.style.backgroundColor = "#bbb"
            this.dot4.style.backgroundColor = "#bbb"
        })
        this.dot2.addEventListener("click", ()=>{
            this.pictureElement.src = "assets/images/Lulu7.JPG";
            this.dot1.style.backgroundColor = "#bbb"
            this.dot2.style.backgroundColor = "darkgrey"
            this.dot3.style.backgroundColor = "#bbb"
            this.dot0.style.backgroundColor = "#bbb"
            this.dot4.style.backgroundColor = "#bbb"
        })
        this.dot3.addEventListener("click", ()=>{
            this.pictureElement.src = "assets/images/Lulu8.JPG";
            this.dot1.style.backgroundColor = "#bbb"
            this.dot2.style.backgroundColor = "#bbb"
            this.dot3.style.backgroundColor = "darkgrey"
            this.dot0.style.backgroundColor = "#bbb"
            this.dot4.style.backgroundColor = "#bbb"
        })
    }
}

class Dog2 extends Dog1 {
    dot0:HTMLSpanElement;
    dot4:HTMLSpanElement;
    smlImg1:HTMLImageElement;
    smlImg2:HTMLImageElement;
    smlImg3:HTMLImageElement;
    smlImg4:HTMLImageElement;
    smlImg5:HTMLImageElement;

    constructor(selector:string){
        super(selector)
        this.dot0 = this.rootElement.querySelector(".dot0");
        this.dot4 = this.rootElement.querySelector(".dot4");
        this.smlImg1= this.rootElement.querySelector(".dog__smallPiture--1")
        this.smlImg2= this.rootElement.querySelector(".dog__smallPiture--2")
        this.smlImg3= this.rootElement.querySelector(".dog__smallPiture--3")
        this.smlImg4= this.rootElement.querySelector(".dog__smallPiture--4")
        this.smlImg5= this.rootElement.querySelector(".dog__smallPiture--5")

      
        this.dotEvent2();
    }
    dotEvent2(){
        this.dot0.addEventListener("click", ()=>{
            this.pictureElement.src = "assets/images/Lulu5.JPG";
            this.dot4.style.backgroundColor = "#bbb"
            this.dot3.style.backgroundColor = "#bbb"
            this.dot1.style.backgroundColor = "#bbb"
            this.dot0.style.backgroundColor = "darkgrey"
            this.dot2.style.backgroundColor = "#bbb"
            // this.smlImg1.style.transform = 'scale(1.05)'
            // this.smlImg1.style.transition = 'transform 1s'
        })
        this.dot4.addEventListener("click", ()=>{
            this.pictureElement.src = "assets/images/Lulu9.JPG";
            this.dot1.style.backgroundColor = "#bbb"
            this.dot2.style.backgroundColor = "#bbb"
            this.dot4.style.backgroundColor = "darkgrey"
            this.dot0.style.backgroundColor = "#bbb"
            this.dot3.style.backgroundColor = "#bbb"
        })
        this.smlImg1.addEventListener("click", ()=>{
            this.pictureElement.src = "assets/images/Lulu5.JPG";
            this.dot4.style.backgroundColor = "#bbb"
            this.dot2.style.backgroundColor = "#bbb"
            this.dot0.style.backgroundColor = "darkgrey"
            this.dot1.style.backgroundColor = "#bbb"
            this.dot3.style.backgroundColor = "#bbb"
        })
        this.smlImg2.addEventListener("click", ()=>{
            this.pictureElement.src = "assets/images/Lulu6.JPG";
            this.dot4.style.backgroundColor = "#bbb"
            this.dot2.style.backgroundColor = "#bbb"
            this.dot1.style.backgroundColor = "darkgrey"
            this.dot0.style.backgroundColor = "#bbb"
            this.dot3.style.backgroundColor = "#bbb"
        })
        this.smlImg3.addEventListener("click", ()=>{
            this.pictureElement.src = "assets/images/Lulu7.JPG";
            this.dot4.style.backgroundColor = "#bbb"
            this.dot0.style.backgroundColor = "#bbb"
            this.dot2.style.backgroundColor = "darkgrey"
            this.dot1.style.backgroundColor = "#bbb"
            this.dot3.style.backgroundColor = "#bbb"
        })
        this.smlImg4.addEventListener("click", ()=>{
            this.pictureElement.src = "assets/images/Lulu8.JPG";
            this.dot4.style.backgroundColor = "#bbb"
            this.dot2.style.backgroundColor = "#bbb"
            this.dot3.style.backgroundColor = "darkgrey"
            this.dot1.style.backgroundColor = "#bbb"
            this.dot0.style.backgroundColor = "#bbb"
        })
        this.smlImg5.addEventListener("click", ()=>{
            this.pictureElement.src = "assets/images/Lulu9.JPG";
            this.dot0.style.backgroundColor = "#bbb"
            this.dot2.style.backgroundColor = "#bbb"
            this.dot4.style.backgroundColor = "darkgrey"
            this.dot1.style.backgroundColor = "#bbb"
            this.dot3.style.backgroundColor = "#bbb"
        })
    }
}
class Dog3 extends Dog2 {
imgArray: string[]
dogpicture:HTMLDivElement
zoomButton:HTMLButtonElement
fullPage:HTMLDivElement
    imageTimer: NodeJS.Timer;

    i:number = 1;
    numberI:number 
    constructor(selector:string){
        super(selector)
        this.dogpicture = document.querySelector(".dog_picture2")
        this.zoomButton = this.rootElement.querySelector(".button__zoom");
        this.fullPage = this.rootElement.querySelector('.fullpage');

this.timer();
 
    }
timer(){
    this.imageTimer = setInterval(imageTimers,1000)
    this.zoomButton.addEventListener("click", ()=>{
        this.pictureNumber = this.pictureElement.src.toString().charAt(40)
        this.fullPage.style.display="block"
        this.fullPage.style.backgroundImage = `url('assets/images/Lulu${this.pictureNumber}.JPG')`
    })
   
    this.dot0.addEventListener('click', () => {
        clearInterval(this.imageTimer);
        setTimeout(() => {
            this.imageTimer = setInterval(imageTimers, 3000)
        }, 1000)
    })
    this.dot1.addEventListener('click', () => {
        clearInterval(this.imageTimer);
        setTimeout(() => {
            this.imageTimer = setInterval(imageTimers, 3000)
        }, 1000)
    })
    this.dot2.addEventListener('click', () => {
        clearInterval(this.imageTimer);
        setTimeout(() => {
            this.imageTimer = setInterval(imageTimers, 3000)
        }, 1000)
    })
    this.dot3.addEventListener('click', () => {
        clearInterval(this.imageTimer);
        setTimeout(() => {
            this.imageTimer = setInterval(imageTimers, 3000)
        }, 1000)
    })
    this.dot4.addEventListener('click', () => {
        clearInterval(this.imageTimer);
        setTimeout(() => {
            this.imageTimer = setInterval(imageTimers, 3000)
        }, 1000)
    })
    this.smlImg1.addEventListener("click", ()=>{
        clearInterval(this.imageTimer);
        setTimeout(() => {
            this.imageTimer = setInterval(imageTimers, 3000)
        }, 1000)
    })
    this.smlImg2.addEventListener("click", ()=>{
        clearInterval(this.imageTimer);
        setTimeout(() => {
            this.imageTimer = setInterval(imageTimers, 3000)
        }, 1000)
    })
    this.smlImg3.addEventListener("click", ()=>{
        clearInterval(this.imageTimer);
        setTimeout(() => {
            this.imageTimer = setInterval(imageTimers, 3000)
        }, 1000)
    })
    this.smlImg4.addEventListener("click", ()=>{
        clearInterval(this.imageTimer);
        setTimeout(() => {
            this.imageTimer = setInterval(imageTimers, 3000)
        }, 1000)
    })
    this.smlImg5.addEventListener("click", ()=>{
        clearInterval(this.imageTimer);
        setTimeout(() => {
            this.imageTimer = setInterval(imageTimers, 3000)
        }, 1000)
    })
    this.backButtton.addEventListener("click", ()=> {
        clearInterval(this.imageTimer);
        setTimeout(() => {
            this.imageTimer = setInterval(imageTimers, 3000)
        }, 1000)
    })

    let n = this.i
    
    function imageTimers(){
        n = n+1
        if (n >1 && n < 10){
            console.log(`assets/images/Lulu${n}.JPG`)
           // this.pictureElement.src += `assets/images/Lulu${n}.JPG`;
        // this.dogpicture.style.display = "inline-block"
       // this.pictureElement.style.display = "none"
        // this.dogpicture.src = `assets/images/Lulu${n.toString()}.JPG`;
        }
        else {
            n=1
          
        }
    }
}
}


const dogs0 = new Dog('.js-dog');
const dogs1 = new Dog1('.js-dog1');
const dogs2 = new Dog2('.js-dog2');
const dogs3 = new Dog3('.js-dog3');