const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || "5000";
app.get('/', (req , res) => {
    res.send('server started')
})

app.listen(port, () => {
    console.log('this server start on port ' + port);
})