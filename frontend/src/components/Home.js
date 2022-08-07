import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'

function Home() {

    const [longUrl, setUrl] = useState();


    async function postUrl(e) {
        e.preventDefault();
        try {
            // console.log(longUrl)
            // axios.post("https://www.link.imalok.me/api/url/shorten", {
            //     longUrl
            // }).then((response) => {
            //     console.log(response.data.shortUrl)
            //     setUrl(response.data.shortUrl)
            // })

            let result = await fetch("https://www.link.imalok.me/api/url/shorten", {
                method: "POST",
                body: JSON.stringify({
                    "longUrl": longUrl
                }),
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            })
            console.log(result)
            setUrl(result)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='flex flex-col my-10 justify-around text-center'>
                <div className="heading">
                    <h1 className='text-3xl font-bold '>Enter Your URL Here</h1>
                </div>
                <form onSubmit={postUrl}>
                    <div className="input flex flex-col my-10 mx-14 text-center">
                        <div className="input">
                            <input className="border py-2 px-3 text-grey-darkest" type="text" name="longUrl" id="longUrl" onChange={(e) => setUrl(e.target.value)} />
                        </div>
                        <div className="submit my-5">
                            <button type="submit" className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-3 text-xl font-bold rounded-2xl" >
                                GET SHORT URL
                            </button>
                        </div>
                        <div className="shorturl">
                            {
                                longUrl &&
                                <>
                                    <h3 className='text-xl font-bold'> Your shortend URL is {longUrl}</h3>
                                </>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Home