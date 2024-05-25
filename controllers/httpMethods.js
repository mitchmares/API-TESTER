const axios = require("axios");


exports.httpHandler = (req, res) => {


    let httpReq = req.query; 
    
    if (checkParamsGood(httpReq)) {
        return res.json(false);
    }
    
    // Create options
    const options = {
        method: httpReq.method,
        headers: {
            "Content-Type": httpReq.headers,
            "Content-Length": httpReq.body ? Buffer.byteLength(httpReq.body) : 0
        },
        data: httpReq.body
    };
    
    // Do Request
    axios(httpReq.url, options)
        .then(httpRes => {
            // Handle Res
            return res.send(httpRes.data);
            
        })
        .catch(err => {
            return res.json(err);
        });

}

function checkParamsGood(req) {
    // { body: "", method: "", header: "", url: "" } - format
    if(typeof req.body === "string" && typeof req.method === "string" && typeof req.header === "string" && typeof req.url === "string") {
        return true;
    }

    return false;
}