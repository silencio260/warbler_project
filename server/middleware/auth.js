require('dotenv').load()
const jwt = require('jsonwebtoken')

exports.loginRequired = function(req, res, next){

    try{

        const token = req.headers.authorization.split(' ')[1]
        
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
            if(decoded){
                return next()
            }else{
                return next({
                    status: 401,
                    message: 'AH, I see u trying to hack my site, f**k off mate'
                }) 
            }
        })
        


    }catch(err){
        return next({
            status: 401,
            message: 'AH, I see u trying to hack my site, f**k off mate'
        })
    }

}

exports.ensureCorrectUser = function(req, res, nex){

    
    try{

        const token = req.headers.authorization.split(' ')[1]
        
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
            if(decoded && decoded.id === req.params.id ){

                return next()
            }else{
                return next({
                    status: 401,
                    message: 'Unauthorized'
                }) 
            }
        })
        


    }catch(err){
        return next({
            status: 401,
            message: 'Unauthorized'
        }) 
    }
}


