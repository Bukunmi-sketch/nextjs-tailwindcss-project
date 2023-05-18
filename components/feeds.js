import React, { useState, useEffect } from 'react';
import {SparklesIcon} from '@heroicons/react/24/outline'
import Input from './input'
import Post from './Post';


function Feeds() {
    
  const [posts, setPosts] = useState([]);
  const [comments, setcomments] = useState([]);

  
//   useEffect(()=>{
//     getProduce();
//  }, []); 

//   async function getProduce(){
//     setError("wait a minute ,fetching products");
//     try {
//        const API_LINK="http://afrimamafarms.onlinewebshop.net/endpoint/Api/getproducts.php";

//      const response= await axios.get(API_LINK,
//       { headers:{
//         "Content-Type":"application/json"
//         }
//        });
//       // console.log("lol response",response.data);
//        setProduce(response.data);
//        setError("");
//        showMessage();
//        setTimeout(()=> setMsgdisplay({ display:"none" }),1000);
//        setMessage("product loaded succesfully");
//       }catch(error){
//         if(error.response){
//                 console.log(error.response.data)
//                 console.log('error fetching products!');
//                 setError("Oops,an error occured while fetching products, refresh this page");
//                 showMessage();
//                 setTimeout(()=> setMsgdisplay({ display:"none" }),3000);
//                 setMessage("unable to fetch product, reload this page");
//         }
//       }
//   }



  return (
    <div className='flex-grow border border-gray-700 max-w-2xl sm:ml-[72px]  xl:ml-[370px]'>
          <div className='text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700'>
            <h2 className='text-lg sm:text-xl font-bold'>Home</h2>
            <div className='hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto'>
              <SparklesIcon className='h-5 text-white'/>
            </div>
          </div>

          <Input/>
          <div className='pb-72'>
            {/* {posts.map( post =>(<Post key={post.id} id={post.id}  post={post.data()} /> ) )} */}
            <Post/>
          </div>

    </div>
  )
}

export default Feeds