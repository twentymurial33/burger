var orm = require("../config/orm.js");


var burger={
    all:function(){
        orm.all("burgers",function(res){
            // cb(res);
        })
    }
}
  
module.exports = burger;
