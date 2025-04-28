import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send('server is running')

})

//get a list of 5 jokes
app.get('/jokes', (req,res)=>{
    const jokes = [
        {id: 1, joke: 'Why did the chicken cross the road? To get to the other side!',
            title:'First Joke', content:'This is the first joke in the list.'},
        {id: 2, joke: 'Why don\'t scientists trust atoms? Because they make up everything!',
            title:'Second Joke', content:'This is the second joke in the list.'},
        {id: 3, joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!',
            title:'Third Joke', content:'This is the third joke in the list.'},

        {id: 4, joke: 'Why did the bicycle fall over? Because it was two-tired!',
            title:'Fourth Joke', content:'This is the fourth joke in the list.'},

        {id: 5, joke: 'What do you call fake spaghetti? An impasta!', title:'Fifth Joke',content:'This is the fifth joke in the list.'}
    ]
    res.json(jokes);
})
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Serve at http://localhost:${PORT}`)
})