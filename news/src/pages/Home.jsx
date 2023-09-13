import React, { useEffect } from 'react'
import News from '../comp/News'
import { useState } from 'react';
import "./home.scss"
function Home() {
    const [news,setNews]=useState([]);
    useEffect(()=>
    {
        const fetchNews= async ()=>
        {
            const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-08-12&sortBy=publishedAt&apiKey=bba197a0ef11472ca7bf03febc48a88a");
            const news=await response.json();
            setNews(news.articles);
        };
        fetchNews();
    },[]);
  return (
    <>
    <div className="banner my-4">
        <div className="row flex-wrap">
            <div className="col-lg-7">
            {news.slice(0,1).map((a)=>(
                <>
                <div className="bg-img-banner">
                  <img style={{height:500,objectFit:"cover"}} className='w-100 vignette' src={a.urlToImage} alt="" />
                <div className="bg-content pt-5">
                   
                    <span class="badge bg-primary p-2 fs-6 text mb-3">Source: {a.source.name}</span>
                    <h2 style={{width:400}} className='fw-bold text-light'>{a.title}</h2>
                    <div className="d-flex gap-3 mt-4">
                    <p className='text-light badge bg-secondary fs-6 text fw-medium'>Author:{a.author}</p>
                    <p className='text-light fs-7 text '><i class="fa fa-clock-o" aria-hidden="true"></i> {a.publishedAt}</p>
                    </div>
                </div>
                </div>

                
                
                </>
            ))}
            
            </div>
            <div className="col-lg-5">
            {news.slice(5,6).map((a)=>(
                <>
              
                <div className="bg-img-banner">
                  <img style={{height:300,objectFit:"cover"}} className='w-100 vignette'  src={a.urlToImage} alt="" />
                <div className="bg-content ">
                   
                    <span className="badge bg-primary p-2 fs-7 text mb-3">Source: {a.source.name}</span>
                    <h4 style={{width:450}}  className='fw-bold text-light'>{a.title}</h4>
                    <div className="d-flex gap-3 mt-4">
                    <p className='text-light badge bg-secondary fs-6 text fw-medium'>Author:{a.author}</p>
                    <p className='text-light fs-7 text '><i class="fa fa-clock-o" aria-hidden="true"></i> {a.publishedAt}</p>
                    </div>
                    
                </div>
                </div>

                
                
                </>
            ))}
            <div className='mt-4 d-flex gap-3'>
                {news.slice(6,7).map((a)=>(
                    <>

                    <img style={{width:200,height:175}} src={a.urlToImage} alt="" />
                    <div>
                    <span class="badge bg-primary p-2 fs-7 text mb-2">Source: {a.source.name}</span>

                    <h4 style={{}} className='fw-bold'>{a.title}</h4>
                    <div className="d-flex gap-3 ">
                    <p  className=' badge bg-secondary    fw-medium'>By:{a.author}</p>
                    <p className='fs-7 text  '><i class="fa fa-clock-o" aria-hidden="true"></i> {a.publishedAt}</p>
                    </div>
                    
                    </div>
                    </>
                ))}
            </div>
            </div>
        </div>
    </div>
    <News cat="business"/>
    <News cat="entertainment"/>
    <News cat="health"/>
    </>
  )
}

export default Home