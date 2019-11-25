// Require inquirer and FS

// Prompt the user for the manager information
// prompt the user for the employee information
// name
// id
// email
// getRole - job title

// use classes to make objects for each employee
// build HTML and WRITE it to HTML file
function buildTeam() {
  let htmlString = "";
  const headHtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>`;
}
teamMembers.forEach(member => {
  let memberDiv = `<div>${member.getName()}</div>
    <div>${member.getId()}</div>`;
});
