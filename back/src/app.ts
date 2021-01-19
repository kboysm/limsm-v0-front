import express from 'express'

const app = express()

app.get('/', ( req : express.Request, res : express.Response, next : express.NextFunction )=> {
    res.send( 'hello ')
})

app.listen(5000 , () => {
    console.log( 'Server Running ');
} )