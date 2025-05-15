const Promises =()=>{

    const promise = new Promise((resolved, rejected) => {

        const isSuccess = true;
        if(isSuccess){
            resolved("Promise is resolved");
        }
        else{
            rejected("Promise is rejected");
        }
    })
    promise
       .then((message)=>{
        console.log(message);
       })

       .catch((err)=>{
        console.log(err);
       })

       const fetchPosts = ()=>{
        return new Promise((resolved, rejected) => {
            fetch("https://dummyjson.com/posts")
            
            .then((response) => {
                
                if(response.ok){
                    return response.json();
                    
                }
                else{
                    throw new Error("Network response was not ok");
                }
            })
            .then((data) => {
                resolved(data.posts);
            })

            .catch((error) => {
                console.log("There was a problem with the fetch operation:", error);
                rejected(error);
            })
        })
       }
         fetchPosts()
}

export default Promises;