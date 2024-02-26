# learn_angular

https://www.udemy.com/course/the-complete-guide-to-angular-2

# Course notes:

### Course 2 What is Angular

-   angular is a JavaScript Framework which allows you to create reactive Single-Page-Applications(SPAs).

```text
A single page application is a website or web application that dynamically rewrites a current web page with new data from the
web server, instead of the default method of a web browser loading entire new pages
```

```text
A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages
```

### Course 6 Project setup and first app

## for install and set the npm version:

nvm install v18.16.0
nvm list
nvm use 18.16.0
for working:
nvm use 14.21.2

when have error:
PS C:\Users\TinyEYE\.Admin Bonnie Guo\Document\notes\learn_angular> ng serve
Node.js version v14.21.2 detected.
The Angular CLI requires a minimum of v16.13.
solution:
nvm use 18.16.0

## install @angular/cli:

npm install @angular/cli@latest --save

## run the app:

ng serve

### Course 7 Editing the first app

import { FormsModule } from '@angular/forms';
@NgModule({
imports: [FormsModule],
})

### Course 12 A Basic Project Setup using Bootstrap for Styling

1. npm install --save bootstrap@3

2. in file my-first-app\angular.json
   add
   "node_modules/bootstrap/dist/css/bootstrap.min.css",
   in projects.my-first-app.architect.build.options.styles
   will be like:

```json
{ "styles": ["node_modules/bootstrap/dist/css/bootstrap.min.css", "src/styles.css"] }
```

3. re-run ng serve
   Bootstrap v3.4.1 (https://getbootstrap.com/)
   should be able to shown in inspect Source: localhost:4200.style.css

### Course 20. Creating Components with the CLI & Nesting Components

auto generate servers components:
ng generate component servers
ng g c servers
ng g c WarningAlert
ng g c SuccessAlert
ng g c single-referrals

### Course 21. Working with Component Templates

inline template

```ts
@Component({
  selector: 'app-servers',
  template: `<app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
```

### Course 23. Fully Understanding the Component Selector

selector: 'app-servers':
<app-servers></app-servers>
selector: '[app-servers]':

<div app-servers></div>
selector: '.app-servers':
<div class="app-servers"></div>

### Course 25. What is Databinding?

### Course 26. String Interpolation

```html
<p>{{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}</p>
```

### Course 27. Property Binding

keywords: setTimeout, button[disabled] binding

### Course 28. Property Binding vs String Interpolation

keywords: [innerText]

### Course 29. Event Binding

keywords: button (click), onCreateServer

### Course 30. Bindable Properties and Events

```txt
Ways to get the Properties or Events of HTML Elements you may bind
1. console.log()  the element you're interested in to see which properties and events it offers.

Important: For events, you don't bind to onclick but only to click (=> (click)).

2. The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties  or YOUR_ELEMENT events  should yield nice results.
```

### Course 31. Passing and Using Data with Event Binding

keywords: input, onUpdateServerName($event), (<HTMLInputElement>event.target).value

change port: learn_angular\my-first-app\angular.json

```json
{
	"$schema": "./node_modules/@angular/cli/lib/config/schema.json",
	"projects": {
		"my-project": {
			"architect": {
				"serve": {
					"options": {
						"port": 4201
					}
				}
			}
		}
	}
}
```

### Course 33. Two-Way-Databinding

ngModel: two way binding

### Course 34. Combining all Forms of Databinding

### Course 37. Using ngIf to Output Data Conditionally
```html
<p *ngIf='serverCreated'>do something when serverCreated == true</p>
```

### Course 39.Enhancing ngIf with an Else Condition
```html
<p *ngIf='serverCreated; else noServer'>Server was created, server name is {{ serverName }}</p>
<ng-template #noServer>
  <p>NO Server was created</p>
</ng-template>
```


### Course 40. Angular 17: Alternative "if" Syntax
Instead of using *ngIf, you can use a built-in @if template control flow statement.
```html
@if (someCondition) {
  <p>Only visible if 'someCondition' is true</p>
}
would replace

<p *ngIf="someCondition">Only visible if 'someCondition' is true</p>
```
