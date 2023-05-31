let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongodb = require('./database/db');

mongoose.Promise = global.Promise;
mongoose.connect(mongodb.db, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected')
}), error => {
    console.log('Database could not connected: ' + error)
}

const plamoRoute = require('./routes/plamo.routes')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors());

// Static directory path
app.use(express.static(path.join(__dirname, 'dist/')));
// Basic Routing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

//Api root
app.use('/api', plamoRoute)

//Port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Connected to port ' + port)
})

//404 Handler
app.use((req, res, next) => {
    next(createError(404));
})

//Error Handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message)
})