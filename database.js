const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const MongoConnect =(callback)=>{
    MongoClient.connect('mongodb+srv://jeniferchavez878:j7abjVGOA7pvEarW@democluster0.8xp485m.mongodb.net/?retryWrites=true&w=majority&appName=DemoCluster0'
    )
    .then(client => {
        console.log('Connected!!');
        callback(client);
    })
    .catch(err => {
    console.log(err);
    } );
};

module.exports = MongoConnect;