# learn_angular
https://www.udemy.com/course/the-complete-guide-to-angular-2

# Course notes:
### Course 2 What is Angular
* angular is a JavaScript Framework which allows you to create reactive Single-Page-Applications(SPAs).
``` text
A single page application is a website or web application that dynamically rewrites a current web page with new data from the
web server, instead of the default method of a web browser loading entire new pages
```
``` text
A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages
```
### Course 6 Project setup and first app
## for install and set the npm version:
nvm install v18.16.0
nvm list
nvm use 18.16.0
for working:
nvm use 14.21.2
## install @angular/cli:
npm install @angular/cli@latest --save
## run the app:
ng serve

### Course 7 Editing the first app
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [FormsModule],
})
