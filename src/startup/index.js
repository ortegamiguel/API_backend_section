const express = require('express');

let _express = null;
let _config = null;

class Server {
    constructor({config, router}){
        _config = config;
        _express = express().use(router);
    }

    start(){
        console.log('PORT', process.env.PORT);
        console.log('PORT 2', _config.PORT);
        return new Promise(resolve => {
            console.log('pasa por aqui');
            _express.listen(process.env.PORT, () => {
                console.log('pasa por aquisasa');
                console.log(`${_config.APPLICATION_NAME} API running on port ${_config.PORT}`)        
            });
            resolve();
        })
    }
}

module.exports = Server;