const express = require('express');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch')

const PORT = process.env.PORT || 5000;

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.get('/home', (req, res) => {
        const filePath = path.resolve(__dirname, './build', 'index.html');
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if(err){
                return console.log(err);
            }
            
            data=data.replace(/__TITLE__/g, 'Hamza"s Homepage').replace(/__DESC__/g, 'Home of the Hamchargers!').replace(/__IMG__/g, 'https://images.pexels.com/photos/364308/pexels-photo-364308.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
            
            res.send(data);
        })
    })
    app.get('/about', (req, res) => {
        const filePath = path.resolve(__dirname, './build', 'index.html');
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if(err){
                return console.log(err);
            }
            
            data=data.replace(/__TITLE__/g, 'About Hamza').replace(/__DESC__/g, 'Learn about Hamza and chargers and how they came to be').replace(/__IMG__/g, 'https://images.pexels.com/photos/132340/pexels-photo-132340.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
            
            res.send(data);
        })
    })
    app.get('/:name', async (req,res) => {
        try{
            const response = await fetch(`https://azeroth.peerlist.io/api/v1/users/${req.params.name}`)
            const resdata = await response.json();
            console.log(resdata.data.first_name);
            const filePath = path.resolve(__dirname, './build', 'index.html');
            fs.readFile(filePath, 'utf-8', (err, data) => {
                if(err){
                    return console.log(err);
                }
        
                data=data.replace(/__TITLE__/g, `${resdata.data.first_name} ${resdata.data.last_name}`).replace(/__DESC__/g, resdata.data.headline).replace(/__IMG__/g, `${resdata.data.profile_picture}?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`);
        
                res.send(data);
            })
        }catch(err){
            console.log(err)
        }
    })
    
    app.use(express.static(path.resolve(__dirname, './build')))

}

app.listen(PORT, () =>{
    console.log(`Server is listening on PORT ${PORT}`);
})