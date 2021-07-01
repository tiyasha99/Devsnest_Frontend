/*1. Write a JavaScript function to check whether an `input` is an array or not*/
let dummy = prompt("Enter dummy text:");
if(dummy === "")
{
  dummy=false;
}
else if(dummy[0]==='[' && dummy[dummy.length-1]===']')
{
  dummy = new Array(dummy);
}   
if(Array.isArray(dummy))
{
  console.log('true');
  console.log(`${dummy} is an Array!`);
}
else
{
  console.log('false');
  console.log(`${dummy} is not an Array!`);
}

/*2. Write a JavaScript function to clone an array*/
dummy=[1, "Tiyasha", 2.3, [1,2]];
let dummyCopy = [...dummy];
console.log(dummyCopy);

/* 3. Write a JavaScript function to get the first element of an array. 
Passing a parameter 'n' will return the first 'n' elements of the array.*/

function arrayPrint(dummy,n)
{
  if(n===undefined)
  {
    console.log(dummy[0]);
  }
  else if(dummy === [] || n<0)
  {
    console.log('[]');
  }
  else if(n> dummy.length)
  {
    console.log(`Function arrayPrint: ${dummy}`);
  }
  else{
    console.log(`Function arrayPrint: ${dummy}`);
    console.log(`The first ${n} elements of the array are:`)
    for(let i=0; i<n; i++){
      console.log(`${dummy[i]} `);
  }
  
  }
}
arrayPrint([1.2], 3);

/*4. Write a simple JavaScript program to join all elements of the following array into a string.
*/
function join(a){
  let concatenated="";
  for(let i=0; i<a.length; i++)
  {
    concatenated += a[i]+',';
  }
  console.log(concatenated);
  console.log(String(a));
}
join(["Red", "Green", "White", "Black"]);

/*5. Write a JavaScript program to find the most frequent item of an array*/
function getMapSize(x) {
  var len = 0;
  for (var count in x) {
          len++;
  }

  return len;
}
function freq(a){
  let map = {};
  for(let i=0;i<a.length;i++)
  {
    map[a[i]]=0;
  }
  for(let i=0;i<a.length;i++)
  {
    map[a[i]]= map[a[i]]+1;
  }
  let mn=-1;
  let k=0;
  let size= getMapSize(map);
  for(let i=0;i<size;i++)
  {
    //console.log(map[a[k]]);
      if(map[a[k]] > mn)
      {
        mn=map[a[k]];
      }
      k=k+1;
  }
  //console.log(mn);

  
  let j=0;
  for (let i=0;i<size;i++) {
    if (map[a[j]] === mn)
    {
      console.log(`${a[j]} (${mn} times)`);
      break;
    }
    j=j+1;
  }
}
freq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);


