const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req)
    // console.log(req.url);
    
    if (req.url === '/'){
        res.end('Welcome to our home page');
    }
    else if (req.url === '/about'){
        res.end('Contact page');
    }
    else 
        res.end(`Page not found <a href="/">Home</a>`);
        
})

server.listen(5000);