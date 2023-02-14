import { useState } from "react"
import yelp from "../api/yelp"

export default function useRestaurants() {
    const [results, setResults] = useState("")
    const searchRestaurants= async(term)=>{
        const response=await yelp.get('/search'
        ,{params: {
            limit:15,
            term:term,
            location:"Toronto"}
            }
            )
            console.log(response)
        // axios({
        //     method: 'get',
        //     url: 'http://bit.ly/2mTM3nY',
        //     responseType: 'stream'
        //   })
        //     .then(function (response) {
        //       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        //       console.log(response)
        //     }).catch((err)=>{console.log(err)});
        // axios({
        //     method: 'get',
        //     url: 'https://api.yelp.com/v3/businesses/search',
        //     headers: {
        //         Authorization: `Bearer fuefE5XzFBOYQrWACxEa1NzsOuUyCd9iKXGlotUC-9H4l5WHkveHLsd5yk60F7KGX1Mj9hKZ4M7eZYlMg0UfxdtYpTexTmCHPvGlCfPtKbHgThE90LtoQYyRfIMbYnYx`,
        //       },
        //   data: {
        //     limit:15,
        //     term:"Desert",
        //     location:"Toronto"}
        //   }).then(function (response) {
        //           console.log(response)
        //         }).catch((err)=>{console.log(err)});;
        //     }
        setResults(response.data.businesses)
    }
    return [results,searchRestaurants]
}