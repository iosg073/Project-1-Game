

let name1=prompt( 'what is your name ');

alert(` your name is ${name1}`);

console.log(name1);

b=Array.from(name1)
console.log(b)
// let str;
// let a=[]
// a[2]=3;
// a[1]=5
// a[0]=6
// for (let u=0;u<3; u++)
// console.log(a[u])

let holder=[]
count=b.length;
for(let i=0; i<(2+b.length); i++ ){


   str=prompt(' Enter Letter to gues')
for(let j=0;j<b.length;j++)
    if(str===b[j])
    {
        holder[j]=str;
        b[j]='~';
        count--;
    }
    // else{
    // holder[j]='~'
    
    }

    if(count===0)
    // i=2+b.length;
    i=2+b.length;


}
console.log(holder)
console.log(b)

