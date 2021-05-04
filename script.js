
let name1=prompt( 'what is your name ');

// alert(` your name is ${name1}`);

// console.log(name1);
// name1='asdf'
b=Array.from(name1)
c=b
console.log(c.toString())
console.log(c)
console.log(b)
const tt=c.toString()
let totalChoices=3;
let holder=[]
let position=[]
let h=[]
count=b.length;


for(let i=0; i<2+b.length; i++ )

{


        str=prompt(' Enter Letter to gues')
        h.push(str)

        for(let j=0;j<b.length;j++)
            if(str===b[j])
                {
                    holder[j]=str;
                    b[j]='~';
                    count--;
                    position[j]=j
                }
            else
                {
                   // holder[j]='~'
                
                }

            if(count===0)
                {
                    // i=2+b.length;
                     i=2+b.length;
                     j=b.length;

                }
            


}

if(holder.toString()===tt)
console.log('you Won');

console.log(" The holder :"+holder)
console.log(" The orignal :"+tt)
console.log(" Orignal : "+ c)
console.log(" Position : "+ position)
console.log(h)

















// let str;
// let a=[]
// a[2]=3;
// a[1]=5
// a[0]=6
// for (let u=0;u<3; u++)
// console.log(a[u])