// function fazGet(url){
//   let request = new XMLHttpRequest()
//   request.open("GET", url, false)
//   return request.responseText
// }

// function main(){
//   console.log(fazGet("https://api-info-store.herokuapp.com/produtos"))
  
// }

// main()
// var data
fetch("https://api-info-store.herokuapp.com/produtos").then(resposta => {
  return resposta.json()
}).then(result => {
  for(i in result){
    console.log(result[i].productName)
    // document.getElementById('products').innerText += result[i].productName
    document.getElementById('products').innerHTML += `<li> ${result[i].productName} </li>`
    // document.getElementById('products').innerHTML += `<img src="${result[i].image}">  </img>`
  }
  console.log(result)
  
})
//usar esse codigo no info-store