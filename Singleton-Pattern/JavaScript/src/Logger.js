
let instance = null;

class Logger {
    constructor() {
        if(!instance){
            instance = this;
        }
        this.time = new Date();
        this.logs = [];
        return instance;
    }  
    
    print(msg) {
        console.log(msg);
    }
    
    log(msg) {
        this.logs.push(msg);
    }
}

module.exports = Logger;