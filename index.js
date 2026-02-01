import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.get('/post/:id', (req, res) => {
    res.send(`${req.params.id}`)
})

app.listen(port, () => {
    console.log('App has been started')
})
