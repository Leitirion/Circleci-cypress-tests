### Cypress UI  automation project
[![CircleCI](https://circleci.com/gh/Leitirion/My-circleci-cypress-ui-automation/tree/master.svg?style=svg)](https://circleci.com/gh/Leitirion/My-circleci-cypress-ui-automation/tree/master)

### Table of Contents

- Getting Started
- Maintainers:

  [github.com/mikementor](https://github.com/mikementor)

  	
		
  [github.com/leitirion](https://github.com/leitirion)
	 
- Installation
- Running (locally / CI)
- Examples/How to write tests

### Getting Started
1. [About Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#Setting-up-tests)
2. [About Circleci](https://circleci.com/docs/2.0/getting-started/)

### Installation
 1. Fork current repository 
 2. Clone repository with command ```git clone https://github.com/Leitirion/My-circleci-cypress-ui-automation.git```
 3. Install node with ```npm i```  

###  Running (locally / CI)
1. Create file ```cypress.env.json``` in folder ```</Project_name>```. 
2. Open file ```cypress.env.json``` and add 
```{```
   ``` "URL":"https://google.com"``` 
```}```
3. Run test on your local machine with command: ```npm run cy:run```
4. If test succeed, then add all your changes, commit them and push to your repository on github.


### Examples/How to write tests
In this repository in folder ```<project_name>/cypress/integration``` you cand find example test ```smokes.js```.
This test visit ```https://google.com/``` and find in the title word ```Google```.
If its true - test succeed, else failed.
 
