
// let name1=prompt( 'what is your name ');
let worldEnter='abv';

let btn=document.getElementById('btnSubmit1')
console.log(btn)



btn.addEventListener('click', function(){
    event.preventDefault()
    domtxt=document.getElementById('txtword')
    worldEnter=domtxt.value

    txtboxDisap=document.getElementById('domtry');
    txtboxDisap.style.display= 'none';
    btnBox=document.querySelector('.buttonDiv');
    btnBox.style.display= 'none';
    mainBox=document.querySelector('.mainarea');
    console.log(mainBox)
    let keyA=document.getElementById('buttonA');

    
   
    for (let i=0;i<worldEnter.length;i++){
        let divNew=document.createElement('div');
        text = document.createTextNode(' ');
        divNew.appendChild(text);
        divNew.classList.add('inputHolder');
        mainBox.parentNode.insertBefore(divNew,mainBox.nextSibling)
    }

    
    


keyA.addEventListener('click',function(){
    key='a';
    document.querySelector('.inputHolder').innerHTML='a';
    // text = document.createTextNode(key);
    // console.log(worldEnter.length);
    // for (let i=0;i<worldEnter.length;i++){
    //     let divNew=document.createElement('div');
    //     // text = document.createTextNode(key);
    //     divNew.appendChild(text);
    //     divNew.classList.add('inputHolder');
    //     mainBox.parentNode.insertBefore(divNew,mainBox.nextSibling)
        // btnBox.insertAdjacentHTM('beforebegin','divNew')
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