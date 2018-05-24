# XSS Servers

In this project, three servers can be found that each use different templating systems. The servers are written
in node.js and requires node to run. The servers have the following locations in the folder structure:

* xss-handlebars/bin/www
* xss-jade/bin/www
* xss-pug/bin/www

To run, for example, the handlebars server, move to the handlebars folder and install dependencies like this:

    path/to/repo/ $ cd xss-handlebars
    path/to/repo/xss-handlebars $ npm install
    path/to/repo/xss-handlebars $ node bin/www
    
Handlebars and Jade run on port 8000 and pug runs on port 8001. The servers take an HTTP requests and echoes them back
using the respective auto-escaping template system.
     
    

