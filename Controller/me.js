const Grades = require('../Model/Grades');

module.exports.homepage = async(req, res) => {
    res.render('homepage.html', {
        title: 'Homepage'//,
        //Me: Me.me
  });
  };

  module.exports.CrashSortByGradeGL = async(req, res) => {
    //sends the collection over with it sorted by the example fatalities
    //It sorts the collection from greatest to least 

      let query = Crash.find().sort({ Grade: -1 }).lean();
      let promise = query.exec();
  
        promise.then((result) => {

          console.log("Sucessfully sorted grades greatest to least");  
          res.send(result);      

        });
  }

