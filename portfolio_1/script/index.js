//グローバル汚染対策
(()=>{
    'use strict';


    //ハンバーガーメニュー
    const hamburger=()=>{
        let counterH=0;
        const headerIcon=document.querySelector("#headerIcon");
        const one=document.querySelector(".one");
        const two=document.querySelector(".two");
        const three=document.querySelector(".three");
        const iconLine=document.querySelector(".iconLine");
        const hamHeaderLinks=document.querySelector("#hamHeaderLinks");
        const mainConstents=document.querySelector("#mainConstents");
        headerIcon.addEventListener("click",()=>{
            if(counterH==0){
                one.style.transition=".3s";
                two.style.transition=".3s";
                three.style.transition=".3s";
                iconLine.style.position="absolute";
                two.style.display="none";
                headerIcon.style.margin="25px 0 20px 30px"
                one.style.transform="rotate(45deg)";
                three.style.transform="rotate(-45deg)";
                hamHeaderLinks.style.transition=".3s";
                hamHeaderLinks.style.transform="translateX(300px)";
                //three.style.backgroundColor="white";
                //one.style.backgroundColor="white";
                counterH=1;
            }else if(counterH==1){
                one.style.transition=".2s";
                two.style.transition=".2s";
                three.style.transition=".2s";
                iconLine.style.position="initial";
                two.style.display="block";
                headerIcon.style.margin="14px 0 20px 30px"
                one.style.transform="none";
                three.style.transform="none";
                hamHeaderLinks.style.transition=".1s";
                hamHeaderLinks.style.transform="none";
                //three.style.backgroundColor="black";
                //one.style.backgroundColor="black";
                counterH=0;
            }
        });
        mainConstents.addEventListener("click",()=>{
            if(counterH==1){
                one.style.transition=".2s";
                two.style.transition=".2s";
                three.style.transition=".2s";
                iconLine.style.position="initial";
                two.style.display="block";
                headerIcon.style.margin="14px 0 20px 30px"
                one.style.transform="none";
                three.style.transform="none";
                hamHeaderLinks.style.transition=".1s";
                hamHeaderLinks.style.transform="none";
                //three.style.backgroundColor="black";
                //one.style.backgroundColor="black";
                counterH=0;
            }
        });
    }
    hamburger();



    //worksのスライダー
    const slider=()=>{
        const next=document.querySelector("#next");
        const prev=document.querySelector("#prev");

        const sliderList=document.querySelector("#sliderList");
        const slItem=document.querySelectorAll(".slItem");

        let counter=0;

        next.addEventListener("click",function(){
            counter --;
            prev.style.display="block";
            sliderList.style.transition=".4s";
            let xpoint= 560 * counter;
            sliderList.style.transform="translateX(" + xpoint + "px)";
            if(counter == -4){
                next.style.display="none";
            }
            
        });
        prev.addEventListener("click",function(){
            counter ++;
            next.style.display="block";
            sliderList.style.transition=".4s";
            let xpoint= 560 * counter;
            sliderList.style.transform="translateX(" + xpoint + "px)";
            if(counter == 0){
                prev.style.display="none";
            }
            
        });
    };
    slider();
    

})();
