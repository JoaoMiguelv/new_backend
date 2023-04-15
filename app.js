const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server is running!")
})

app.use(express.json());

/* ROTAS DA APLICACAO */
const indexRouter = require('./src/routes/index');
app.use('/', indexRouter);
const taskRouter = require('./src/routes/taskRouter');
app.use('/tasks', taskRouter);

module.exports = app;