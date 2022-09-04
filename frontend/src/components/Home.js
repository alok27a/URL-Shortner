import { Button, Input, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { DarkMode } from '@chakra-ui/react';

function Home() {

    const [longUrl, setUrl] = useState('');
    const [result, setResult] = useState(false);
    const toast = useToast()

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
            console.log(longUrl)
            let res = await result.json()
            console.log(res)
            setUrl(res.shortUrl)
            setResult(true)
            toast({
                type: 'success',
                description: "Short URL generated successfully",
                status: 'success',
                duration: 9000,
                isClosable: true
            })
        } catch (error) {
            console.log(error)
            toast({
                type: 'error',
                description: "Something went wrong",
                status: 'error',
                duration: 9000,
                isClosable: true      
            })
        }
    }

    return (
        <DarkMode>
        <>

            <div className='flex flex-col my-10 justify-around text-center'>
                <div className="heading">
                    <h1 className='text-3xl font-bold '>Enter Your URL Here</h1>
                </div>
                <form onSubmit={postUrl}>
                    <div className="input flex flex-col my-10 mx-14 text-center">
                        <div className="input">
                            <Input className="border py-2 px-3 text-grey-darkest" type="text" name="longUrl" id="longUrl" onChange={(e) => setUrl(e.target.value)} size="md" ml="10px" mr="10px"/>
                        </div>
                        <div className="submit my-5">
                            <Button type="submit" onClick={postUrl} className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-3 text-xl font-bold rounded-2xl" >
                                GET SHORT URL
                            </Button>
                        </div>
                        <div className="shorturl" >
                            {
                                result &&
                                <>
                                    <Text className='text-xl font-bold' color="grey"> Your shortend URL is {longUrl}</Text>
                                </>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </>
        </DarkMode>
    )
}

export default Home