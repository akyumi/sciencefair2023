# Science Fair 2023 Website
## Add a Group Folder
1. Get invited into the [SMC-26](https://github.com/SMC-26) GitHub Organization. Consult your CS3 teacher or your section representative on how to get invited.
2. Create or upload your group's research folder inside the [sciencefair2023](https://github.com/SMC-26/sciencefair2023/) repository. It should be named in SectionName-GroupNumber format. For example: `Unobtainium-420`.
3. Insert your web page files in your group's folder. Make sure to name it `index.html` otherwise you might encounter some issues.
## Adding the Website Navbar
**Edit: the files and file links are modified to simplify the process.**
To promote a uniform experience across all of the research pages published through this repository, a universal navigation bar will be mandatory to maintain seamless acess throughout the whole site. In order to make this work for your group's webpage, follow these instructions:

1. As the navigation bar is dependent on the use of Bootstrap for it to work properly, you need to import both the CSS and Javascript Files. For the Bootstrap CSS and Javascript, insert the code below inside your web page's `<head>`. The Bootstrap base Javascript code and Navbar function has been combined into one for ease of use:
```md
<link href="https://smc-26.github.io/sciencefair2023/bootstrap.css" rel="stylesheet">
<script src="https://smc-26.github.io/sciencefair2023/bootstrap.js"></script>
```
2. Lastly, in your HTML file, insert the Javascript Function call to add the navigation bar. The ideal place to insert the code would be just below the opening `<body>` element.
```md
<script>addNavbar();</script>
```
### In summary...
The file structure with these modifications should look like this:
```md
<!DOCTYPE html>
<html>
  <head>
      ...
      <link href="https://smc-26.github.io/sciencefair2023/bootstrap.css" rel="stylesheet">
      <script src="https://smc-26.github.io/sciencefair2023/bootstrap.js"></script>
      ...
  </head>
  <body>
      <script>addNavbar();</script>
      ...
  </body>
</html>
```
A project with a working navbar is shown [here.](https://smc-26.github.io/sciencefair2023/Lithium-3/)

Work in Progress...
