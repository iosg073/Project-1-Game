

let btnSubmit=document.getElementById('btnSubmit1')
let totalScore=0;
let totalChances=8;
let c=0;
let randWord=['brush','house','bird','pen','ball','chicken','program','sun','play','letter'];
let test=randWord[Math.floor(Math.random()*randWord.length)];
document.querySelector('.keyBoard').style.display='none';


//////////////////////////////Random Word button /////////////////////////////

document.getElementById('btnRand').addEventListener('click',function()

{
    event.preventDefault()
    domtxt=document.getElementById('txtword')
    worldEnter=randWord[Math.floor(Math.random()*randWord.length)]
    w=worldEnter;
    domtxt.style.display="none";
    worldLength=worldEnter.length;
    console.log(worldLength)
    let counter=0;
    document.querySelector('.keyBoard').style.display='flex';
    txtboxDisap=document.getElementById('domtry');
    btnBox=document.querySelector('.buttonDiv');
    btnBox.style.display= 'none';
    mainBox=document.querySelector('.mainarea');
    console.log(btnBox)
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


    let divwraper=document.createElement('div');
for (let i=0;i<worldEnter.length;i++)
{
    let divNew=document.createElement('div');
    text = document.createTextNode(' ');
    divNew.appendChild(text);
    divNew.classList.add('inputHolder');
   divwraper.append(divNew)
}

divwraper.classList.add("flexContainer")
mainBox.prepend(divwraper)


///////////////////////// Getting Input from screen keyboad ///////////////////////////////

const wordGetter= function(eventObj)
            {
                eventObj.preventDefault();

                if(worldEnter.indexOf(eventObj.target.textContent.toLowerCase())<0)
                {
                  totalChances--;
                  
                  eventObj.target.style.visibility='hidden';                      
               
                if(totalChances==0)
                    {
                    btnBox.style.display='flex';
                    totalChances=8;
                    alert(` You lose, it was ( ${w} )`);
                    location.reload();
                    }   
                    document.getElementById('lbl').innerHTML=`Chances Remaining: ${totalChances}`;
                } else
                {
                    eventObj.target.style.color='red';
                  eventObj.target.style.border='red';
                }        

                for(let i=0;i<worldEnter.length;i++)
                            {
                                if(worldEnter.indexOf(eventObj.target.textContent.toLowerCase())>-1)
                                    {
                                        tt=document.getElementsByClassName('inputHolder');
                                        tt[worldEnter.indexOf(eventObj.target.textContent.toLowerCase())].innerHTML=eventObj.target.textContent.toLowerCase();
                                        worldEnter=worldEnter.replace(eventObj.target.textContent.toLowerCase(), "%");
                                        console.log(worldEnter);
                                        c++;
                                    }
                            }
                     
                        if(c===worldEnter.length)
                            {
                                
                                alert(` You win! it is ( ${w} )`);
                                location.reload();                           
                               
                            }
                            console.log(domtxt);
                            
            }
                                
    keyA.addEventListener('click',wordGetter);

    keyB.addEventListener('click',wordGetter)

    keyC.addEventListener('click',wordGetter)

    keyD.addEventListener('click',wordGetter)

    keyE.addEventListener('click',wordGetter)

    keyF.addEventListener('click',wordGetter)

    keyG.addEventListener('click',wordGetter)

    keyH.addEventListener('click',wordGetter)

    keyI.addEventListener('click',wordGetter)

    keyJ.addEventListener('click',wordGetter)

    keyK.addEventListener('click',wordGetter)

    keyL.addEventListener('click',wordGetter)

    keyM.addEventListener('click',wordGetter)

    keyN.addEventListener('click',wordGetter)

    keyO.addEventListener('click',wordGetter)

    keyP.addEventListener('click',wordGetter)

    keyQ.addEventListener('click',wordGetter)

    keyR.addEventListener('click',wordGetter)

    keyS.addEventListener('click',wordGetter)

    keyT.addEventListener('click',wordGetter)

    keyU.addEventListener('click',wordGetter)

    keyV.addEventListener('click',wordGetter)

    keyW.addEventListener('click',wordGetter)

    keyX.addEventListener('click',wordGetter)

    keyY.addEventListener('click',wordGetter)

    keyZ.addEventListener('click',wordGetter)

});



//////////////////////// Reset Button ////////////////////////////////


document.getElementById('btnreset').addEventListener('click', function(){
    location.reload();   
})

////////////////////////Enter key feature to text box/////////////////

document.getElementById('txtword').addEventListener('keydown', function(event)
{
    if(event.keyCode===13)
    
    {
    // document.querySelector('.buttonDiv').style.display='none';
    btnSubmit.click();
    }
})

////////////////////////////Submit Button//////////////////////////


btnSubmit.addEventListener('click', function()
    {
        event.preventDefault()
        domtxt=document.getElementById('txtword')
        worldEnter=domtxt.value.toLowerCase();
        w=worldEnter;
        domtxt.value=''
        domtxt.style.placeholder="Guess the word!"


        worldLength=worldEnter.length;
        console.log(worldLength)

        let counter=0;
        document.querySelector('.keyBoard').style.display='flex';
        // document.getElementById('lbl').style.display='flex';
        txtboxDisap=document.getElementById('domtry');
        // txtboxDisap.style.display= 'none';
        btnBox=document.querySelector('.buttonDiv');
        btnBox.style.display= 'none';
        document.getElementById('txtword').style.display='none';
        mainBox=document.querySelector('.mainarea');
        console.log(btnBox)

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

    
        let divwraper=document.createElement('div');
    for (let i=0;i<worldEnter.length;i++)
    {
        let divNew=document.createElement('div');
        text = document.createTextNode(' ');
        divNew.appendChild(text);
        divNew.classList.add('inputHolder');
       divwraper.append(divNew)
    }

    divwraper.classList.add("flexContainer")
    mainBox.prepend(divwraper)
   
    const wordGetter= function(eventObj)
               {
                    eventObj.preventDefault();

                    if(worldEnter.indexOf(eventObj.target.textContent.toLowerCase())<0)
                    {
                      totalChances--;
                      
                      eventObj.target.style.visibility='hidden';
                     
                     
                    //   txtboxDisap.className='';
                    if(totalChances==0)
                        {
                        btnBox.style.display='flex'
                        totalChances=8;
                        alert(` You lose,  it was ( ${w} )`);
                        location.reload();
                        }   
                        document.getElementById('lbl').innerHTML=`Chances Remaining: ${totalChances}`;
                    } else
                    {
                        eventObj.target.style.color='red'
                      eventObj.target.style.border='red'
                    }        

                     // console.log(worldEnter.indexOf(key))
                    for(let i=0;i<worldEnter.length;i++)
                          {
                            if(worldEnter.indexOf(eventObj.target.textContent.toLowerCase())>-1)
                                 {
                                    tt=document.getElementsByClassName('inputHolder')
                                    tt[worldEnter.indexOf(eventObj.target.textContent.toLowerCase())].innerHTML=eventObj.target.textContent.toLowerCase();
                                    worldEnter=worldEnter.replace(eventObj.target.textContent.toLowerCase(), "%");
                                    console.log(worldEnter);
                                    c++;
                                 }
                          }
                         
                                // console.log(eventObj.target.textContent.toLowerCase())
                                if(c===worldEnter.length)
                                {
                                    // btnBox.style.display='flex'
                                    // document.querySelector('.keyBoard').style.display='none';
                                    
                                    // divwraper.style.display='none'
                                    // c=0;
                                    // totalChances=8;
                                    alert(` You win! it is ( ${w} )`);
                                    location.reload();

                                   
                                }
                                console.log(domtxt);
                                // console.log(worldEnter.indexOf(eventObj.target.textContent.toLowerCase()))
                            }
                                


keyA.addEventListener('click',wordGetter);
//){
    // key='a'
    
    // console.log(worldEnter.indexOf(key))
    // if(worldEnter.indexOf(key)>-1)
    //     {
    //         tt=document.getElementsByClassName('inputHolder')
    //         tt[worldEnter.indexOf(key)].innerHTML=key;
    //     }
    // console.log(worldEnter)



    // tt=document.getElementsByClassName('inputHolder')
    // tt[counter++].innerHTML=key;
//      console.log(key)
// })

 keyB.addEventListener('click',wordGetter)
 //{
//     key='b';
//     console.log(worldEnter.indexOf(key))
//     if(worldEnter.indexOf(key)>-1)
//         {
//             tt=document.getElementsByClassName('inputHolder')
//             tt[worldEnter.indexOf(key)].innerHTML=key;
//         }
//     console.log(worldEnter)
//     // tt=document.getElementsByClassName('inputHolder')
//     // tt[3].innerHTML=key;
//     // console.log(key)
// })
keyC.addEventListener('click',wordGetter)
// {
//     key='c';
//     console.log(worldEnter.indexOf(key))
//     if(worldEnter.indexOf(key)>-1)
//         {
//             tt=document.getElementsByClassName('inputHolder')
//             tt[worldEnter.indexOf(key)].innerHTML=key;
//         }
//     console.log(worldEnter)
//     // tt=document.getElementsByClassName('inputHolder')
//     // tt[counter++].innerHTML=key;
//     // console.log(key)
// })

keyD.addEventListener('click',wordGetter)
// {
//     key='d';
//     console.log(worldEnter.indexOf(key))
//     if(worldEnter.indexOf(key)>-1)
//         {
//             tt=document.getElementsByClassName('inputHolder')
//             tt[worldEnter.indexOf(key)].innerHTML=key;
//         }
//     console.log(worldEnter)
// //     tt=document.getElementsByClassName('inputHolder')
// //     tt[counter++].innerHTML=key;
// //     console.log(key)
// })


keyE.addEventListener('click',wordGetter)
// {
//     key='e';
//     tt=document.getElementsByClassName('inputHolder')
//     tt[counter++].innerHTML=key;
//     console.log(key)
// })

keyF.addEventListener('click',wordGetter)
// {
//     key='f';
//     tt=document.getElementsByClassName('inputHolder')
//     tt[counter++].innerHTML=key;
//     console.log(key)
// })
keyG.addEventListener('click',wordGetter)
// {
//     key='g';
//     tt=document.getElementsByClassName('inputHolder')
//     tt[counter++].innerHTML=key;
//     console.log(key)
// })

keyH.addEventListener('click',wordGetter)
// {
//     key='h';
//     tt=document.getElementsByClassName('inputHolder')
//     tt[counter++].innerHTML=key;
//     console.log(key)
// })

keyI.addEventListener('click',wordGetter)

// {
//     key='i';
//     tt=document.getElementsByClassName('inputHolder')
//     tt[counter++].innerHTML=key;
//     console.log(key)
// })

keyJ.addEventListener('click',wordGetter)
// {
//     key='j';
//     tt=document.getElementsByClassName('inputHolder')
//     tt[counter++].innerHTML=key;
//     console.log(key)
// })
keyK.addEventListener('click',wordGetter)
// {
//     key='k';
//     tt=document.getElementsByClassName('inputHolder')
//     tt[counter++].innerHTML=key;
//     console.log(key)
// })

keyL.addEventListener('click',wordGetter)
// {
//     key='l';
//     tt=document.getElementsByClassName('inputHolder')
//     tt[counter++].innerHTML=key;
//     console.log(key)
// })

keyM.addEventListener('click',wordGetter)
// {
//     key='m';
//     tt=document.getElementsByClassName('inputHolder')
//     tt[counter++].innerHTML=key;
//     console.log(key)
// })

keyN.addEventListener('click',wordGetter)
//{
//     key='n';
//     tt=document.getElementsByClassName('inputHolder')
//     tt[counter++].innerHTML=key;
//     console.log(key)
// })
keyO.addEventListener('click',wordGetter)

// {
//     key='o';
//     tt=document.getElementsByClassName('inputHolder')
//     tt[counter++].innerHTML=key;
//     console.log(key)
// })

keyP.addEventListener('click',wordGetter)
// {
//     key='p';
//     tt=document.getElementsByClassName('inputHolder')
//     tt[counter++].innerHTML=key;
//     console.log(key)
// })

keyQ.addEventListener('click',wordGetter)
// {
//     key='q';
//     tt=document.getElementsByClassName('inputHolder')
//     tt[counter++].innerHTML=key;
//     console.log(key)
// })

keyR.addEventListener('click',wordGetter)
// {
//     key='r';
//     tt=document.getElementsByClassName('inputHolder')
//     tt[counter++].innerHTML=key;
//     console.log(key)
// })
keyS.addEventListener('click',wordGetter)
// {
//     key='s';
//     tt=document.getElementsByClassName('inputHolder')
//     tt[counter++].innerHTML=key;
//     console.log(key)
// })

keyT.addEventListener('click',wordGetter)
// {
//     key='t';
//     tt=document.getElementsByClassName('inputHolder')
//     tt[counter++].innerHTML=key;
//     console.log(key)
// })

keyU.addEventListener('click',wordGetter)
// {
//     key='u';
//     tt=document.getElementsByClassName('inputHolder')
//     tt[counter++].innerHTML=key;
//     console.log(key)
// })

keyV.addEventListener('click',wordGetter)
// {
    // key='v';
    // console.log(worldEnter.indexOf(key))
    // if(worldEnter.indexOf(key)>-1)
    //     {
    //         tt=document.getElementsByClassName('inputHolder')
    //         tt[worldEnter.indexOf(key)].innerHTML=key;
    //     }
    // console.log(worldEnter)
    // tt=document.getElementsByClassName('inputHolder')
    // tt[counter++].innerHTML=key;
    // console.log(key)
// })
keyW.addEventListener('click',wordGetter)
// {
//     key='w';
//     console.log(worldEnter.indexOf(key))
//     if(worldEnter.indexOf(key)>-1)
//         {
//             tt=document.getElementsByClassName('inputHolder')
//             tt[worldEnter.indexOf(key)].innerHTML=key;
//         }
//     console.log(worldEnter)
//     // tt=document.getElementsByClassName('inputHolder')
//     // tt[counter++].innerHTML=key;
//     // console.log(key)
// })

keyX.addEventListener('click',wordGetter)
// {
//     key='x';
//     console.log(worldEnter.indexOf(key))
//     if(worldEnter.indexOf(key)>-1)
//         {
//             tt=document.getElementsByClassName('inputHolder')
//             tt[worldEnter.indexOf(key)].innerHTML=key;
//         }
//     console.log(worldEnter)
// //     tt=document.getElementsByClassName('inputHolder')
// //     tt[counter++].innerHTML=key;
// //     console.log(key)
// })


keyY.addEventListener('click',wordGetter)
// {
//     key='y';
//     console.log(worldEnter.indexOf(key))
//     if(worldEnter.indexOf(key)>-1)
//         {
//             tt=document.getElementsByClassName('inputHolder')
//             tt[worldEnter.indexOf(key)].innerHTML=key;
//         }
//     console.log(worldEnter)
//     // tt=document.getElementsByClassName('inputHolder')
//     // tt[counter++].innerHTML=key;
//     // console.log(key)
// })

keyZ.addEventListener('click',wordGetter)

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
// console.log(worldEnter);

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