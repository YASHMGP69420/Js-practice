function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`Making request to ${location}`)
        if(location === "Google")
            resolve("Reached google")
        else{
            reject("we can only make request to google")
        }
    })
}

function processReq(response){
    return new Promise((resolve,reject)=>{
        console.log("Processing response")
        resolve(`extra info:${response}`)
    })
}

//  
     
//traditional way

async function dowork() {
    try{
        const response =  await makeRequest("facebook")
        console.log("resposne received", response)
        const processResponse = await processReq(response)
        console.log(processResponse);
        
    }catch(err){
        console.log(err)
    }
}
dowork()