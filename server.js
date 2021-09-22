const express = require('express');
const app = express();
const port = 3000;

// get '/' = 99 bottles of soda on the wall
app.get('/', (req, res) => {

})
app.get('/:number_of_bottles', (req, res) => {
    // for (let i = 1; i > 0; i--) {
    //     console.log(i); }
    // would this work with an if else statement?^^^^^

        if(req.params.number_of_bottles > 0){
            res.send(`<h3>${req.params.number_of_bottles} Bottles of soda on the wall</h3> <h4><a href='${req.params.number_of_bottles-1}'>Take one down, Pass it around</a></h4>`);
        } else {
            res.send(`<h3>0 Bottles of soda on the wall</h3> <h4><a href='${req.params.number_of_bottles+99}'>Start Over</a></h4>`)
        }


});

app.listen(port, () => {
    console.log('listening on port' + port);
})