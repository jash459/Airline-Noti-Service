const dotenv = require('dotenv')

dotenv.config()

module.exports={
    PORT :process.env.PORT,
    GMAIL_PASS : process.env.GAMIL_PASS,
    GAMIL_EMAIL:process.env.GAMIL_EMAIL,
}