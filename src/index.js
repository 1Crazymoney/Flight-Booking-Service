const express = require('express');
const {serverConfig,Logger,Queue} = require('./config');
const apiRoutes = require('./routes');
const CRON = require('./utils/common/cron-jobs');

const app = express();

app.use('/api',apiRoutes);
app.use('/bookingService/api',apiRoutes);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(serverConfig.PORT,async ()=>{
    console.log(`Successfully started the server at port ${serverConfig.PORT}`);
    Logger.info('Successfully Started The Server','root',{});
    CRON();
    await Queue.connectQueue();
    console.log('Queue Connected');

}) 