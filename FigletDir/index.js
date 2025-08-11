
const figlet=require("figlet");//don't use path

figlet("Hello World  ", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});