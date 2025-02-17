function createLogger(){
    let messages = []
    return {
        log: function(message){
            messages.push(message);
        },
        getLogs: function(){
            return messages;
        },

    }
}

const logger = createLogger();
logger.log("Create object Logger");
logger.log("Check this method");
console.log(logger.getLogs());




function createRandomGenerator(min, max){
    return function generator(){
        console.log(Math.floor(Math.random() * (max - min)) + min);
    }
}

const closureFunction = createRandomGenerator(10, 20);
closureFunction();