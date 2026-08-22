import ratelimit from "../confi/upstash.js";


const rateLimiter =async (req,res ,next)=>{
    try {
        const {success} = await ratelimit.limit("my-limit-kry")

        if(!success){
            return res.status(429).json({
                message :"Too many requests , please try again later"
            })
        } 
        next();
    } catch (error) {
        console.log("Rate limit error ",error)
    }
}
export default rateLimiter;