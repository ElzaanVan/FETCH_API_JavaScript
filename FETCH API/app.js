//Add event listener for getText button
//Get text file data
document.getElementById("button1").addEventListener("click", getText);
function getText(){
  //Promise//
  fetch("test.txt")
  .then((res) => {
    return res.text();
  })
  //Another Promise
  .then((data) => {
    document.getElementById("output").innerHTML = data
  })
  //If error - do .catch
  .catch((err) => {
    console.log(err)
  })
}


//Add event listener for getJSON button
//Get JSON file data
document.getElementById("button2").addEventListener("click", getJSON);
function getJSON(){
   //Promise//
   fetch("posts.JSON")
   .then((res) => {
     return res.json();
   })
   //Another Promise
   .then((data) => {
     console.log(data)
     let output= "";
     data.forEach((post) => {
        output += `<li>${post.title}</li>`
     })
     document.getElementById("output").innerHTML = output;
   })
   //If error - do .catch
   .catch((err) => {
     console.log(err)
   })

}

// https://api.github.com/users
//Add event listener for getData button
//External source
document.getElementById("button3").addEventListener("click", getData)
function getData(){
   //Promise//
   fetch("https://api.github.com/users")
   .then((res) => {
     return res.json();
   })
   //Another Promise
   .then((data) => {
     console.log(data)
     let output= "";
     data.forEach((user) => {
        output += `<li>${user.login}</li>`
     })
     document.getElementById("output").innerHTML = output;
   })
   //If error - do .catch
   .catch((err) => {
     console.log(err)
   })
}