const http = require('http');
const fs = require('fs');
const csvParser = require('csv-parser');

const server = http.createServer((req, res) => {
    if (req.url === '/api/data') {
        const data = [];
        fs.createReadStream('data.csv')
            .pipe(csvParser())
            .on('data', (row) => {
                data.push(row);
            })
            .on('end', () => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(data));
            });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
