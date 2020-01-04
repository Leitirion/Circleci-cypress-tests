### Cypress UI automation project with CircleCI and Telegram notifications
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
 4. Go to https://t.me/botfather , create new bot by /newbot command
 5. At ```Circleci > Settings > Build settings > Environment Variables at https://circleci.com/gh/<yourname>/<your_project_name>/edit#env-vars``` create TELEGRAM_BOT_TOKEN and copy your token
 6. Add bot to your group or start chat with bot 
 7. Go to ```https://api.telegram.org/bot<your bot token>/getUpdates``` to get chatId and copy chatId with ```-```
 8. At ```Circleci > Settings > Build settings > Environment Variables at https://circleci.com/gh/<yourname>/<your_project_name>/edit#env-vars``` create TELEGRAM_CHAT_ID and copy your chatId
 9. Go to ```https://circleci.com/gh/organizations/<yourname>/settings#contexts```, create context ```project_context```
 10. At context create env ```URL``` with value ```https://google.com```

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
 
