document.getElementById('form').addEventListener('submit',async function(event){
    event.preventDefault();
    let firstName=document.getElementById('firstName').value
    let lastName=document.getElementById('lastName').value
    let age=document.getElementById('age').value

    let data={
        firstName:firstName,
        lastName:lastName,
        age:age

    }
    console.log({data});

   let result=await fetch('https://dummyjson.com/users/add',{  //fetch returns a promise
        method:'POST',
        headders:{
            "Content-Type":`application/json`
        },

body:JSON.stringify(data)
    
    })
    .then(response => response.json())
    .then(response => response)
    .catch(error => error.message)
    console.log(result)
    // .then(response => console.log({response}))
    // .then(error => console.log({error}))

    let success=document.getElementById('success');
    result.id? success.innerHTML="user added successfuly":success.innerHTML="user not added"
})