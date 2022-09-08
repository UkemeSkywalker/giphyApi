const baseURL = 'http://api.giphy.com/v1/gifs/random'
const apiKey = 'P9M2MgOfU0O7hgFX8xEHdnF7yGVFF8j9'

fetch(`${baseURL}?api_key=${apiKey}&tag=Cat&rating=g`)
  .then((data) => data.json())
  .then((data) => {

    try {
        const originalUrl = data.data.images.original.url;
        const gif = document.createElement("img");
        gif.setAttribute("src", originalUrl);
        document.body.appendChild(gif);
        // console.log(data)    
    } catch (error) {
        console.log(error);
    }
    
  })
