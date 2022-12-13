const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const TripController = require('./controller/TripController')
const http = require('http')

const host = '127.0.0.1'
const port = 7000

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use( (req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(bodyParser.json())
app.use(cors())

mongoose.set('strictQuery', false);
mongoose.connect(
    'mongodb+srv://dzindzura:99fuduzat-99@cluster0.slpwi8p.mongodb.net/trip?retryWrites=true&w=majority'
).then(() => {console.log('DB OK')}
).catch((err) => console.log('DB ERROR', err))

app.get('/', (req, res) => {
    res.status(200).type('text/plain')
    res.send('Hi')
})

app.post('/posts/add', TripController.add);
app.delete('/trips/:id/delete', TripController.remove);
app.patch('/trips/:id/update', TripController.updateTrip);
app.get('/trips/getAll', TripController.getAll);

app.listen(port, () => {
    console.log(`Server is running: http:/${host}:${port}`)
})