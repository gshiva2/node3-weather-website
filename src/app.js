const path = require('path')
const express = require('express')
const hbs = require('hbs')

// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))
const app = express()

const publicDiretoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDiretoryPath))

app.get('',(req,res) => {
    res.render('index', {
        title:'Weather App',
        name:'Shiva'
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        title:"About Me",
        name:'Shiva'
    })
})

app.get('/help',(req,res) => {
    res.render('help',{
        title:' Help',
        msg:'This is some helpful text'
    })
})

app.get('/weather',(req,res) => {
    if(!req.query.address) {
        return res.send({
            error:'You must provide address'
        })
    }
    console.log(req.query.address)
    res.send({
        location:'Hyderabad',
        forecast:18,
        address:req.query.address
    })
})

app.get('/products',(req,res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products:[]
    })
})

app.get('/help/*',(req,res) => {
    res.render('404', {
        title:'404',
        name:'Shiva',
        error:'Help article not found'
    })
})

app.get('*',(req,res) => {
    res.render('404', {
        title:'404',
        name:'Shiva',
        show:"Page not Found"
    })
})


app.listen(3000,() => {

    console.log('server started')
})