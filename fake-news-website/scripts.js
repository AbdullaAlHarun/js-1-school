let news =[
    {
        headline: "Watch Hesh landing on the Moon",
        summary: "He landed  with his super jet",
    },
    {
        headline: "Planet Nibiru is headed straight for Earth",
        summary: "Sound the alarms and start digging your bunkers, everybody. Planet Nibiru (also known as Planet X and Planet Nine) ‘was’ to be on a direct collision course with Earth all the way back in March 2016.",
    },
    {
        headline: "Pope Francis endorsed President Trump",
        summary: "The 2016 US Presidential election was a hotbed of fake stories, slamming and glorifying both contentious candidates. ",
    }
];

console.log(news);
// Select the news class
const newsContainer = document.querySelector(".news");
console.log("newsContainer: ", newsContainer);

const totalNumberOfNews = news.length;

let genaretedHTML='';

for(let i=0; i<totalNumberOfNews; i++ ){ 
    console.log(news[i].headline);
    console.log(news[i].summary);
   
    genaretedHTML = genaretedHTML + `

    <div>
        <h2>${news[i].headline} </h2>
        <p>${news[i].summary} </p>
    </div> 
    `
}

newsContainer.innerHTML = genaretedHTML;
