const mongoose = require("mongoose");

const conn = async () => {
    try {
        await mongoose.connect("mongodb+srv://arjuntyagi19:rajyog302@cluster0.po0k2oq.mongodb.net/")
        .then(() => {
            console.log("Connected");
          });
      } catch (error) {
        console.log(error);
      }
    };
    conn(); 