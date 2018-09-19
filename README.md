# How can you limit the scope on a directive and why would you do this?

## Prerequisite

1. **Nodejs** must be installed in your system
 

## Project 1

### Run code

1. Open terminal in project folder
```
  cd macroPoloInstructions/
  node macroPoloInstructions.js
``` 

### Run Test

1. Open terminal in project folder
```
  cd macroPoloInstructions/
  npm install 
  npm run test                
``` 

## Project 2

### Run code

1. Open index.html in browser, location: userStory1InvoiceProject/index.html 
2. click on choose file
3. Goto userStory1InvoiceProject/ and select input_user_story_1.txt

### Run Test

```  
cd userStory1InvoiceProject/
npm install 
npm run test
```



# Question: How can you limit the scope on a directive and why would you do this?

## Answer:
The scope is used as the "glue" that we use to communicate between the parent controller, the directive, and the directive template. Whenever the AngularJS application is bootstrapped, a rootScope object is created. Each scope created by controllers, directives, and services are prototypically inherited from rootScope.

Yes, we can limit the scope on a directive. We can do so by creating an isolated scope for the directive.

#### There are 3 types of directive scopes:
1. Scope: False ( Directive uses its parent scope )
2. Scope: True ( Directive gets a new scope )
3. Scope : { } ( Directive gets a new isolated scope )

**Directives with the new isolated scope:**  When we create a new isolated scope then it will not be inherited from the parent scope. This new scope is called Isolated scope because it is completely detached from its parent scope.
Why? should we use isolated scope:  We should use the isolated scope when we want to create a custom directive because it will make sure that our directive is generic, and placed anywhere inside the application. Parent scope is not going to interfere with the directive scope.

**Example of isolated scope:**

```var app = angular.module("test",[]);

app.controller("Ctrl1",function($scope){
    $scope.name = "Prateek";
    $scope.reverseName = function(){
        $scope.name = $scope.name.split('').reverse().join('');
    };
});
app.directive("myDirective", function(){
    return {
        restrict: "EA",
        scope: {},
        template: "<div>Your name is : {{name}}</div>"+
        "Change your name : <input type='text' ng-model='name'/>"
    };
});

There’re 3 types of prefixes AngularJS provides for isolated scope these are : 
1. "@"   (  Text binding / one-way binding )
2. "="   ( Direct model binding / two-way binding )
3. "&"   ( Behaviour binding / Method binding  )

All these prefixes receive data from the attributes of the directive element like : 

<div my-directive 
  class="directive"
  name="{{name}}" 
  reverse="reverseName()" 
  color="color" >
</div>

```



