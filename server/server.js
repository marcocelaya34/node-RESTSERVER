const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/usuario', function(req, res) {
    res.json('get Usuario')
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }



});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;
    res.json({

        id

    });
});
app.delete('/usuario', function(req, res) {
    res.json('delete Usuario')
});
app.listen(3000, () => {

    console.log('Esuchando Puerto', 3000);

});