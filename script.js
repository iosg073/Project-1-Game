

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


})














