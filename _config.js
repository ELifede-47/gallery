var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://elvislifede:HkOSAYkZmU6X6Nm6@ip01.sbtnrb6.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://elvislifede:HkOSAYkZmU6X6Nm6@ip01.sbtnrb6.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://elvislifede:HkOSAYkZmU6X6Nm6@ip01.sbtnrb6.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = {
    DB: 'mongodb+srv://elvislifede:HkOSAYkZmU6X6Nm6@cluster0.abcd.mongodb.net/myAppDB?retryWrites=true&w=majority'
};