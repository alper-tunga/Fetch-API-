document.getElementById('getText').addEventListener('click',getText)
document.getElementById('getUsers').addEventListener('click',getUsers)
document.getElementById('getPosts').addEventListener('click',getPosts)
document.getElementById('addPost').addEventListener('submit',addPost)
document.getElementById('getTebessum').addEventListener('click',getTebessum)

function getText(){
  // fetch('sample.txt').then(function(res){
  //   return res.text()
  // }).then(function(data){
  //   return data
  // })

  fetch('sample.txt').then((res)=> res.text()).then((data)=>{
    document.getElementById("output").innerHTML= data
  }).catch((err)=> console.log(err))
}
function getUsers(){
  fetch('users.json').then((res)=> res.json()).then((data)=>{
    let output ='<h2 class="mb-4">Users</h2>';
    data.forEach((user) => {
      output += `
      <ul class="list-group mb-3">
      <li class="list-group-item">ID: ${user.id}</li>
      <li class="list-group-item">Name: ${user.name}</li>
      <li class="list-group-item">Email: ${user.email}</li>
      <li class="list-group-item">Detay: ${user.detay_bilgi}</li>
      </ul>
      `
    });
    document.getElementById("output").innerHTML=output
  })
}
function getPosts(){
  fetch('http://jsonplaceholder.typicode.com/posts').then((res)=> res.json()).then((data)=>{
    let output ='<h2 class="mb-4">Posts</h2>';
    data.forEach((post) => {
      output += `
      <div class="card card-body mb-3">
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      </div>
      `
    });
    document.getElementById("output").innerHTML=output
  })
}
function addPost(e){
  e.preventDefault()

  let title = document.getElementById('title').value
  let body  = document.getElementById('body').value

  fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({title:title, body:body})
  }).then((res)=>res.json()).then((data)=> console.log(data))
}
function getTebessum(){
  fetch('https://test.eronsoftware.com:5780/admin/kullaniciIslemleri/kullaniciListesi',{
    method:'GET',
    headers : {
      'X-API-KEY':'EF15FB50-01E2-4F46-9909-451E700E9B98',
      'Accept': '*/*',
      'Content-Type' : 'text/plain',
      'Origin' : 'http://localhost:5500'
    }
  }).then((res)=> console.log(res))
}

