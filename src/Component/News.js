import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
 Article = [
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Naman Ramachandran",
            "title": "How JioStar’s Sanjog Gupta Plans to Win India’s $130 Billion Sports Market: ‘The Journey Has to be Distinct and Unique’ (EXCLUSIVE)",
            "description": "From cricket to Coldplay, one executive is redefining how India consumes live entertainment. As India’s entertainment landscape undergoes seismic shifts, few executives are positioned as strategically as Sanjog Gupta. One of three CEOs at JioStar – alongside …",
            "url": "https://variety.com/2025/tv/news/jiostar-sanjog-gupta-india-130-billion-sports-market-1236445874/",
            "urlToImage": "https://variety.com/wp-content/uploads/2025/07/Sanjog-Gupta.jpg?w=1000&h=563&crop=1",
            "publishedAt": "2025-07-02T10:06:48Z",
            "content": "From cricket to Coldplay, one executive is redefining how India consumes live entertainment.\r\nAs India’s entertainment landscape undergoes seismic shifts, few executives are positioned as strategical… [+8490 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Associated Press",
            "title": "India rests Bumrah and been made to bat first by England in 2nd test at Edgbaston",
            "description": "India rested fast bowler Jasprit Bumrah amid three lineup changes against England on Wednesday in its bid to level the test series at Edgbaston.  Bumrah...",
            "url": "https://sports.yahoo.com/article/india-rests-bumrah-made-bat-095740525.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/UTcnKi__IqjrDmBF5xJL9A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA7Y2Y9d2VicA--/https://media.zenfs.com/en/ap.org/5a0d5f2dcd69b4310aea4ee7ddd26cda",
            "publishedAt": "2025-07-02T09:57:40Z",
            "content": "BIRMINGHAM, England (AP) India rested fast bowler Jasprit Bumrah amid three lineup changes against England on Wednesday in its bid to level the test series at Edgbaston.\r\nBumrah, India's best bowler … [+1943 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Associated Press",
            "title": "Sri Lanka wins toss and elects to bat in 1st ODI vs. Bangladesh",
            "description": "Sri Lanka captain Charith Asalanka won the toss and elected to bat first in the opening game of a three-match one-day international cricket series against...",
            "url": "https://sports.yahoo.com/article/sri-lanka-wins-toss-elects-090550081.html",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png",
            "publishedAt": "2025-07-02T09:05:50Z",
            "content": "COLOMBO, Sri Lanka (AP) Sri Lanka captain Charith Asalanka won the toss and elected to bat first in the opening game of a three-match one-day international cricket series against Bangladesh at R. Pre… [+810 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sky Sports"
            },
            "author": null,
            "title": "Arsenal sign Kelly on permanent deal after Man City exit",
            "description": "Arsenal have signed Chloe Kelly on a free transfer following the expiration of her Manchester City contract, after a loan spell at the Gunners last season.",
            "url": "https://www.skysports.com/football/news/11095/13391307/chloe-kelly-arsenal-sign-england-forward-on-permanent-deal-after-man-city-contract-expires",
            "urlToImage": "https://e0.365dm.com/25/07/1600x900/skysports-chloe-kelly-arsenal-women_6955061.jpg?20250702090417",
            "publishedAt": "2025-07-02T09:00:00Z",
            "content": "Arsenal have signed Chloe Kelly on a free transfer following the expiration of her Manchester City contract, after a loan spell at the Gunners last season.\r\nThe England forward has turned her loan in… [+3654 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNA"
            },
            "author": null,
            "title": "Maharaj sidelined, Mulder to lead South Africa against Zimbabwe",
            "description": "South Africa will be further depleted for the second test against Zimbabwe starting in Bulawayo on Sunday after stand-in skipper Keshav Maharaj was ruled out with a left groin strain.South Africa won the first test at the same venue by 328 runs on Tuesday, fi…",
            "url": "https://www.channelnewsasia.com/sport/maharaj-sidelined-mulder-lead-south-africa-against-zimbabwe-5216036",
            "urlToImage": "https://dam.mediacorp.sg/image/upload/s--Hz8qZgOo--/fl_relative,g_south_east,l_mediacorp:cna:watermark:2024-04:reuters_1,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2025-07-02t085304z_1_lynxmpel6109q_rtroptp_3_cricket-test-zaf-win.jpg?itok=waSkNeZU",
            "publishedAt": "2025-07-02T08:53:04Z",
            "content": "South Africa will be further depleted for the second test against Zimbabwe starting in Bulawayo on Sunday after stand-in skipper Keshav Maharaj was ruled out with a left groin strain.\r\nSouth Africa w… [+544 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The-independent.com"
            },
            "author": "Maira Butt",
            "title": "Judy Murray explains how ‘feeling trapped’ as a mother inadvertently led to son Andy’s tennis career",
            "description": "‘I didn’t set out to raise sports stars – I just wanted my kids to enjoy sports,’ said the mother of the former champion",
            "url": "https://www.the-independent.com/life-style/andy-murray-judy-tennis-wimbledon-b2780937.html",
            "urlToImage": "https://static.the-independent.com/2025/07/02/8/59/GettyImages-2160614081.jpg?trim=83,285,319,216&width=1200&height=800&crop=1200:800",
            "publishedAt": "2025-07-02T08:36:47Z",
            "content": "Your support helps us to tell the story\r\nFrom reproductive rights to climate change to Big Tech, The Independent is on the ground when the story is developing. Whether it's investigating the financia… [+3819 chars]"
        },
        {
            "source": {
                "id": "the-irish-times",
                "name": "The Irish Times"
            },
            "author": "Pat Carty",
            "title": "Simple Minds in Dublin: seasoned pros bring the party atmosphere",
            "description": "Crowd roar along to hit after hit from Scottish band at the Trinity’s Summer Series",
            "url": "https://www.irishtimes.com/culture/music/review/2025/07/02/simple-minds-in-dublin-seasoned-pros-bring-the-party-atmosphere/",
            "urlToImage": "https://www.irishtimes.com/resizer/v2/DQ7GCQF4URDUNM7GYLKDYFC3IA.jpg?smart=true&auth=271a9c547c4eb84068c944172f23a7234771409ee44ee00efdb4a23e81f47d2e&width=1200&height=630",
            "publishedAt": "2025-07-02T08:34:26Z",
            "content": "Simple Minds \r\nTrinity Summer Series\r\nThe sound of that Waterfront bassline that everybody knows, ringing out over the salubrious surroundings of Trinity College, is akin to a tank rolling across the… [+3248 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "AFP",
            "title": "India cricket tour to Bangladesh could be rescheduled",
            "description": "India's cricket tour to Bangladesh faces a possible delay. The Bangladesh Cricket Board confirms the Board of Control for Cricket in India informed them of potential rescheduling. The tour, featuring ODIs and T20s, awaits Indian government clearance. Diplomat…",
            "url": "https://economictimes.indiatimes.com/news/sports/india-cricket-tour-to-bangladesh-could-be-rescheduled/articleshow/122201236.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-122201291,width-1200,height-630,imgsize-55538,overlay-economictimes/articleshow.jpg",
            "publishedAt": "2025-07-02T08:19:07Z",
            "content": "India's white-ball tour of Bangladesh in August could be rescheduled because it needs clearance from the Indian government, a senior Bangladesh cricket official told AFP on Wednesday.The series, incl… [+970 chars]"
        }
    ] ;

    constructor()
    {
        super() ;
        this.state = {
            article : [] ,
            page : 1
         }
    }

    async componentDidMount()
    {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fd8a393be88247bda5423f001d365eef&page=1&pageSize=20" ;
        let data = await fetch(url) ;
        let parseData = await data.json() ;
        this.setState({article : parseData.articles , totalResults : parseData.totalResults})
    }

    handleprev= async()=>
    {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fd8a393be88247bda5423f001d365eef&page=${this.state.page - 1}&pageSize=20` ;
        let data = await fetch(url) ;
        let parseData = await data.json() ;
        this.setState({article : parseData.articles , page : this.state.page - 1 })

    }

     handlenxt= async()=>
    {
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20))
        {

        }
        else
        {
             let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fd8a393be88247bda5423f001d365eef&page=${this.state.page + 1}&pageSize=20` ;
        let data = await fetch(url) ;
        let parseData = await data.json() ;
        this.setState({article : parseData.articles , page : this.state.page + 1 })

        }
       
        
    }


  render() {
    return (
      <div className='container my-3'>
        <h2>THIS is daily News .</h2>
        <div className=' row'>
            
                {this.state.article.map((element)=>{
                    return <div className='col-md-3' key = {element.url}>
                    <NewsItems title = {element.title ? element.title : ""} description = {element.description ? element.description : "click to read more"} imageURL = {element.urlToImage ?element.urlToImage:"https://i0.wp.com/9to5toys.com/wp-content/uploads/sites/5/2025/07/Prime-Day-deals-sneak-peek.jpg?resize=1200%2C628&ssl=1" } url = {element.url}/> 
                    </div>
                })}
         </div>

         <div className='container my-4 d-flex justify-content-between'>
            <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handleprev}>&larr; Prev</button> 
            <button type="button" class="btn btn-dark" onClick={this.handlenxt}>Next &rarr;</button> 



         </div>
      
        
       
      </div>
    )
  }
}

export default News
