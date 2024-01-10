import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        "name" : "url",
        "type": "input",
        "message": "what is your url?"
    }
  ])
  .then((answers) => {
    // console.log(answers);
    var qr_image = qr.image(answers.url, { type: 'png' });
    qr_image.pipe(fs.createWriteStream('url_qr.png'));

    fs.writeFile("url.text", answers.url, (err)=> {
        if(err) throw err;
        else {
            console.log("text file created.");
        }
    })

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });