let button = document.querySelector("#getData")

button.addEventListener("click", () => {
  sendApiRequest()
})


//fetch data from the API
function sendApiRequest() {
  let userInput = document.querySelector("#input").value
  const responce = fetch(`https://api.giphy.com/v1/gifs/search?api_key=bKgN9fTDyt4siFR46DXdpXAONqESQz4v&q=${userInput}&limit=1&offset=0&rating=PG&lang=en`);
  // console.log(giphy)

  responce
    .then(data => data.json())
    .then(data => {
      console.log(data)
      console.log(data.pagination.count)

      if (data.pagination.count === 0) {
        console.log("[Stopping program] Your input request is not valid! count = ", data.pagination.count)
      } else {
        console.log("[Found pictures] I will send them now. count = ", data.pagination.count)
        useApiData(data)
      }
    })
};


//do something with the API data you've received.
function useApiData(gifs) {
  console.log(gifs)
  // document.querySelector("#wrapper").innerHTLM = `<img src="${gifs.data[0].images.original.url}">`
  document.querySelector("#wrapper").innerHTML = `<img src="${gifs.data[0].images.original.url}">`
}

