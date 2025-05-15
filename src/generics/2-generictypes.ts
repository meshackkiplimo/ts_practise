const genericTypes = () =>{



    type ApiResponse ={
        data:any,
        error?:string
    }
    const response:ApiResponse = {
        data:{
            name:"John",
            age:30
        },
        error:""
    }
    console.log(response.data.name)
    type ApiResponse1<Data>={
        data:Data,
        error:string
    }
    const response1:ApiResponse1<{name:string, age:number}> = {
        data:{
            name:"John",
            age:30
        },
        error:""
    }
    console.log(response1)


    type BlogResponse= ApiResponse1<{title:string, content:string}>
    const blogResponse:BlogResponse = {
        data:{
            title:"Hello World",
            content:"This is my first blog post"
        },
        error:""
    }
    console.log(blogResponse.data.title)

}

export default genericTypes;