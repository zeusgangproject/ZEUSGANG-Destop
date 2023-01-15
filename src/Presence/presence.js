const rpc = require("discord-rpc");
const config = require('./config.json');

const client = new rpc.Client({ transport: 'ipc'});

client.on('ready', () => {
    console.log('RPC starting.');
    
    client.setActivity({
    details: config.description,
    state: config.explanation,
    startTimestamp: new Date(),
    instance: true,
    largeImageKey: config.bigImageName,
    largeImageText: config.bigPictureText,
    buttons : [{label : "Our Website",url : "https://zeusgang.1bt.uk/"}]
  });
});

rpc.register(config.AppID);
client.login({ clientId: config.AppID }).catch((error) => {
  throw error.message;
});