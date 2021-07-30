const mongoose = require("mongoose");
var bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
      username: {type: String,required: true, minlength:1,maxlength:20},

      email:   {type: String,required:true},

      password: {type: String,required:true},
    
})
userSchema.methods = {
  validPassword: function(password){
      return bcrypt.compareSync(password,this.password)
  },
  hashPassword: function(password){
      return bcrypt.hashSync(password, 10)
  }
};

userSchema.pre('save', function (next){
  if (!this.password){
      console.log('No password')
  }else{
      console.log('Password Saved')
      this.password = this.hashPassword(this.password);
      next();
  }
})

const User = mongoose.model("User", userSchema);

module.exports = User;
