
const topHeadlines = document.getElementById("topHeadlines");
console.log(topHeadlines)
let topHeadlinesItems = "";

let apiKey = "6781ce9ae56f965cdebddf1604b789f1"
let sources = "bbc"
let country = "us"
let lang = "en"
let baseUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}&sources=${sources}&countries=${country}&languages=${lang}`

async function getNewsTopheadlines(url) {
    const response = await fetch(url)
    const data = await response.json();
    return data;
}
getNewsTopheadlines(baseUrl).then((data) => {
    let info = data.pagination;
    let newsList = data.data;
    newsList.forEach((news, index) => {
        console.log(index + 1, news)
        createNewsElement(news)
    })
    topHeadlines.innerHTML = topHeadlinesItems; 
}).catch(e => console.log("Sorry Cant process your request due to network error...", e));
function createNewsElement(news) {
    let body = `   <div class="card card-styling bg-dark  ">
                        <div class="card-body">
                            <h5 class="card-title">${news.title}</h5>
                            <p class="card-text">${news.description}</p>
                        </div>
                        <a href="${news.url}" class="btn btn-primary">Go somewhere</a>
                    </div>
                `
    topHeadlinesItems += body;
}

