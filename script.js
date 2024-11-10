
let btn = document.querySelector('button')

btn.addEventListener('click' , ()=>{

    fetch('https://api.randomuser.me/')
    .then((res)=> res.json()  )
    .then((data)=>{
        let user = data.results[0];
        let div = document.querySelector('div')
        console.log(user);
        
        div.innerHTML = `
        <img src=${user.picture.large} alt="">
        <h1>${user.name.first}</h1>
        <p>${user.email}</p>
        <p>${user.gender}</p>
        
       `

       if (user.gender === 'male') {
        div.style.backgroundColor = ' blue';

    } else {
        div.style.backgroundColor = ' red';

    }
       
        
      
    });

 
    
  
})
