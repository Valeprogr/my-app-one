import express from 'express';
const app = express()
const port = 3000
app.route('/')
.get((req, res) => {res.send('This is a GET REQUEST!')})
.post((req, res) => {res.send('This is a POST REQUEST!')})
.put((req, res) => {res.send('This is a PUT REQUEST!')})
.delete((req, res) => {res.send('This is a DELETE REQUEST!')})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})