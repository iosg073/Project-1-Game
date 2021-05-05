
// let name1=prompt( 'what is your name ');
let worldEnter='abv';

let btn=document.getElementById('btnSubmit1')
console.log(btn)



btn.addEventListener('click', function(){
    event.preventDefault()
    domtxt=document.getElementById('txtword')
    worldEnter=domtxt.value


    worldLength=worldEnter.length;
    console.log(worldLength)

    let counter=0;

    txtboxDisap=document.getElementById('domtry');
    txtboxDisap.style.display= 'none';
    btnBox=document.querySelector('.buttonDiv');
    btnBox.style.display= 'none';
    mainBox=document.querySelector('.mainarea');
    console.log(mainBox)

    let keyA=document.getElementById('buttonA');
    let keyB=document.getElementById('buttonB');
    let keyC=document.getElementById('buttonC');
    let keyD=document.getElementById('buttonD');
    let keyE=document.getElementById('buttonE');
    let keyF=document.getElementById('buttonF');
    let keyG=document.getElementById('buttonG');
    let keyH=document.getElementById('buttonH');
    let keyI=document.getElementById('buttonI');
    let keyJ=document.getElementById('buttonJ');
    let keyK=document.getElementById('buttonK');
    let keyL=document.getElementById('buttonL');
    let keyM=document.getElementById('buttonM');
    let keyN=document.getElementById('buttonN');
    let keyO=document.getElementById('buttonO');
    let keyP=document.getElementById('buttonP');
    let keyQ=document.getElementById('buttonQ');
    let keyR=document.getElementById('buttonR');
    let keyS=document.getElementById('buttonS');
    let keyT=document.getElementById('buttonT');
    let keyU=document.getElementById('buttonU');
    let keyV=document.getElementById('buttonV');
    let keyW=document.getElementById('buttonW');
    let keyX=document.getElementById('buttonX');
    let keyY=document.getElementById('buttonY');
    let keyZ=document.getElementById('buttonZ');

    
   
    for (let i=0;i<worldEnter.length;i++)
    {
        let divNew=document.createElement('div');
        text = document.createTextNode(' ');
        divNew.appendChild(text);
        divNew.classList.add('inputHolder');
        mainBox.parentNode.insertBefore(divNew,mainBox.nextSibling)
    }

    
    


keyA.addEventListener('click',function(){
    key='a';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

keyB.addEventListener('click',function(){
    key='b';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})
keyC.addEventListener('click',function(){
    key='c';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

keyD.addEventListener('click',function(){
    key='d';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})


keyE.addEventListener('click',function(){
    key='e';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

keyF.addEventListener('click',function(){
    key='f';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})
keyG.addEventListener('click',function(){
    key='g';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

keyH.addEventListener('click',function(){
    key='h';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

keyI.addEventListener('click',function(){
    key='i';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

keyJ.addEventListener('click',function(){
    key='j';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})
keyK.addEventListener('click',function(){
    key='k';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

keyL.addEventListener('click',function(){
    key='l';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

keyM.addEventListener('click',function(){
    key='m';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

keyN.addEventListener('click',function(){
    key='n';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})
keyO.addEventListener('click',function(){
    key='o';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

keyP.addEventListener('click',function(){
    key='p';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

keyQ.addEventListener('click',function(){
    key='q';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

keyR.addEventListener('click',function(){
    key='r';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})
keyS.addEventListener('click',function(){
    key='s';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

keyT.addEventListener('click',function(){
    key='t';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

keyU.addEventListener('click',function(){
    key='u';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

keyV.addEventListener('click',function(){
    key='v';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})
keyW.addEventListener('click',function(){
    key='w';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

keyX.addEventListener('click',function(){
    key='x';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})


keyY.addEventListener('click',function(){
    key='y';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

keyZ.addEventListener('click',function(){
    key='z';
    tt=document.getElementsByClassName('inputHolder')
    tt[counter++].innerHTML=key;
    console.log(key)
})

    // console.log(worldEnter.length);
    // for (let i=0;i<worldEnter.length;i++){
    //     let divNew=document.createElement('div');
    //     // text = document.createTextNode(key);
    //     divNew.appendChild(text);
    //     divNew.classList.add('inputHolder');
    //     mainBox.parentNode.insertBefore(divNew,mainBox.nextSibling)
    //     // btnBox.insertAdjacentHTM('beforebegin','divNew')
  
    // }

})
console.log(worldEnter);

// alert(` your name is ${name1}`);

// console.log(name1);
// name1='asdf'
// b=Array.from(worldEnter)
// c=b
// console.log(c.toString())
// console.log(c)
// console.log(b)
// const tt=c.toString()
// let totalChoices=3;
// let holder=[]
// let position=[]
// let h=[]
// count=b.length;


// for(let i=0; i<2+b.length; i++ )

// {


//         str=prompt(' Enter Letter to gues')
//         h.push(str)

//         for(let j=0;j<b.length;j++)
//             if(str===b[j])
//                 {
//                     holder[j]=str;
//                     b[j]='~';
//                     count--;
//                     position[j]=j
//                 }
//             else
//                 {
//                    // holder[j]='~'
                
//                 }

//             if(count===0)
//                 {
//                     // i=2+b.length;
//                      i=2+b.length;
//                      j=b.length;

//                 }
            


// }

// if(holder.toString()===tt)
// console.log('you Won');

// console.log(" The holder :"+holder)
// console.log(" The orignal :"+tt)
// console.log(" Orignal : "+ c)
// console.log(" Position : "+ position)
// console.log(h)

















// // let str;
// // let a=[]
// // a[2]=3;
// // a[1]=5
// // a[0]=6
// // for (let u=0;u<3; u++)
// // console.log(a[u])