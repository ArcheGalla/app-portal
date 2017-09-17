import * as feathers from 'feathers';
import * as rest from 'feathers-rest';
import * as memory from 'feathers-memory';
import * as bodyParser from 'body-parser';
import * as socketIO from 'feathers-socketio';
import * as handler from 'feathers-errors/handler';
import * as favicon from 'serve-favicon';
import {join} from 'path';

const app: feathers.Application = feathers();

app.use(favicon(join(__dirname, '../../client/src/assets/favicon.ico')));
// app.use('/', function (req, res) {
//     res.json({status: 200}).status(200);
// });

app.configure(rest());
app.configure(socketIO());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/messages', memory());
app.use(handler());

app.listen(3000, function () {
    console.log('Application started  on port 3000');
});