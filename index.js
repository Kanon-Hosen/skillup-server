const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || "5000";
const courses = require('./data/course.json')
app.get('/', (req , res) => {
    res.send('server started')
})
app.get('/courses', (req , res) => {
    res.send(courses)
})
app.get('/courses/:id', (req , res) => {
    const id = req.params.id;
    const course = courses.find(co => co.id == id);
    res.send(course)
})
const catagory = require('./data/category.json')
app.get('/category', (req , res) => {
    res.send(catagory)
})

app.listen(port, () => {
    console.log('this server start on port ' + port);
})