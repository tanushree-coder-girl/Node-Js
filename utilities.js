function myName (name) {
    console.log('My name is ' +name)
}

let profession = 'I am a developer'
//module.exports = myName;
//module.exports.myName = myName;
//module.exports.profession = profession;
module.exports = {myName, profession }
