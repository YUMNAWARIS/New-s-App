
const topHeadlines = document.getElementById("topHeadlines");
console.log(topHeadlines)
let topHeadlinesItems = "";

let apiKey = "6781ce9ae56f965cdebddf1604b789f1"
let sources = "bbc"
let country = "us"
let lang = "en"
let baseUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}&sources=${sources}&countries=${country}&languages=${lang}`
let xhr =  new XMLHttpRequest();
xhr.open("GET", baseUrl);
xhr.send();
xhr.onload=
    ()=>{
        let text = JSON.parse(xhr.responseText);
        let info = text.pagination;
        let newsList = text.data;
        
        if(info.count >= 6){
            for (let i = 0; i < 6; i++) {
                let news = newsList [i];
                let body =  
                            `
                            <div class="card card-styling bg-dark  ">
                                <div class="card-body">
                                    <h5 class="card-title">${news.title}</h5>
                                    <p class="card-text">${news.description}</p>
                                </div>
        
                                <a href="${news.url}" class="btn btn-primary">Go somewhere</a>
                            </div>
                            `
                topHeadlinesItems += body;
            }
            topHeadlines.innerHTML = topHeadlinesItems;
        }
        else
        {
            newsList.forEach((news,index) => {
            console.log(index+1, news)
    
            let body =  
                        `
                        <div class="card card-styling bg-dark  ">
                            <div class="card-body">
                                <h5 class="card-title">${news.title}</h5>
                                <p class="card-text">${news.description}</p>
                            </div>
    
                            <a href="${news.url}" class="btn btn-primary">Go somewhere</a>
                        </div>
                        `

    
                    // `<div class="accordion-item">
                    //     <h2 class="accordion-header" id="news${index+1}">
                    //     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    //         data-bs-target="#collapse${index+1}" aria-expanded="true" aria-controls="collapse${index+1}">
                    //         <strong>${news.title}</strong>
                    //     </button>
                    //     </h2>
                    //     <div id="collapse${index+1}" class="accordion-collapse collapse" aria-labelledby="news${index+1}"
                    //     data-bs-parent="#topHeadlines">
                    //     <div class="accordion-body">
                    //         ${news.description}
                            
                    //     </div>
                    //     </div>
                    // </div>` 
    
    
            topHeadlinesItems += body;
            });
            topHeadlines.innerHTML = topHeadlinesItems;
        }

    }


