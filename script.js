let button = document.querySelector("#getData")
let message = document.querySelector("#message")
document.querySelector("#message").innerHTML = "A message to you rudy : "

let input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("getData").click();
  }
});

button.addEventListener("click", () => {
  sendApiRequest()
})


//fetch data from the API
function sendApiRequest() {
  const count = 25;
  const rnd = Math.random()
  let ping = Math.round(rnd * count)

  let userInput = document.querySelector("#input").value
  const responce = fetch(`https://api.giphy.com/v1/gifs/search?api_key=bKgN9fTDyt4siFR46DXdpXAONqESQz4v&q=${userInput}&limit=20&offset=${ping}&rating=G&lang=en`);
  // console.log(giphy)

  responce
    .then(data => data.json())
    .then(data => {
      console.log(data)
      console.log(data.pagination.count)

      if (data.pagination.count === 0) {
        let log = `[Stopping program] Your input request is not valid! count = ${data.pagination.count}`
        document.querySelector("#message").innerHTML = log
        console.log(log)
      } else {
        log = `[Found pictures] I will send them now. count =  ${data.pagination.count}`
        document.querySelector("#message").innerHTML = log
        console.log(log)
        useApiData(data)
      }
    })
};


//do something with the API data you've received.
function useApiData(gifs) {
  let all = []
  document.querySelector("#message").innerHTML = gifs.data.length

  console.log(gifs)


  for (let i = 0; i < gifs.data.length; i++) {
    all.push(`<div id="container">`)
    all.push(`<img src="${gifs.data[i].images.original.url}">`)
    all.push(`<h2>${gifs.data[i].title}</h2>`)
    // all.push(`<p>${gifs.data[i].embed_url}</p>`)
    all.push(`<a a href = ${gifs.data[i].embed_url} > ${gifs.data[i].embed_url} </a>`)
    all.push(`</div>`)


  }
  document.querySelector("#wrapper").innerHTML = all.join("")


  console.log("foo", all)
  let str = all.join("")
  console.log("bar", str)
  // document.querySelector("#message").innerHTML = all.length
}

