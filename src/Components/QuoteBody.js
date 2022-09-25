import React from 'react'

export default function QuoteBody() {


    const fetchQuote = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f2d5629a96msh54d76e6a9ff8185p1b5e79jsneda93256a7d9',
                'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
            }
        };

        //let response;
        fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let content = data.content;
                if(content !== 'undefined')
                {
                    let quotes = document.getElementById('quotes');
                    quotes.innerText = `"${content}"`;
                }
                let author = document.getElementById('author');
                let auth = data.originator.name;
                author.innerText = `${auth}`;
            })

    }
    return (
        <>

            <div className='d-flex align-items-center justify-content-center flex-column query' style={{ height: "99vh" }}>
                <h5 className='fs mb-3'>Quote of the day..</h5>
                <div className="p-3 mb-5 text-white bg">
                    <figure className="text-center d-flex justify-content-center align-items-center flex-column my-0">
                        <blockquote className="blockquote w-100 pd">
                            <p id='quotes' className='fs-18 my-2'>"Click the button to get the quote"</p>
                        </blockquote>
                        <figcaption id='author' className="blockquote-footer text-white my-1 fi">
                            Unknown
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <button type="button" className="btn btn-light fs-18 my-3 shadow-lg rounded" onClick={fetchQuote} style={{ width: "11rem" }}>Get a Quote</button>
                </div>
            </div>

        </>
    )
}
