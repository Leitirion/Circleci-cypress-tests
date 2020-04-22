### Cypress UI automation project with CircleCI and Telegram notifications
[![CircleCI](https://circleci.com/gh/Leitirion/My-circleci-cypress-ui-automation/tree/master.svg?style=svg)](https://circleci.com/gh/Leitirion/My-circleci-cypress-ui-automation/tree/master)

### Table of Contents

- Maintainers:

  [github.com/mikementor](https://github.com/mikementor)

  	
		
  [github.com/leitirion](https://github.com/leitirion)
	 
- Installation
- Running (locally / CI)
- Examples and tests

### Installation
 1. Fork current repository.
 2. Go to ```https://circleci.com/add-projects/gh/<YOURUSERNAME>``` or 
https://circleci.com/dashboard -> add projects -> set up project (choose the fork) and click  ```Start building```.
 3. Clone repository with command ```git clone https://github.com/<YOUR_USER_NAME>/My-circleci-cypress-ui-automation.git```
 4. ```cd My-circleci-cypress-ui-automation```
 5. Install npm with ```npm i```.
 6. Go to https://t.me/botfather , create new bot by ```/newbot``` command, remember ```TELEGRAM_BOT_TOKEN```.
 7. Add bot to your group or start chat with bot.
 8. Go to ```https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/getUpdates``` to get ```chatId``` and copy ```chatId``` with ```-```.
 9. At ```Circleci > Settings  > Contexts (https://circleci.com/gh/organizations/<YOUR_USER_NAME>/settings#contexts)``` create context ```project_context``` (If you want to change name of context, then also change name at ```.circleci/config.yml ```)
 10. At ```Circleci > Settings > Contexts (https://circleci.com/gh/organizations/<YOUR_USER_NAME>/settings#contexts)``` create environment variables: 
 - TELEGRAM_CHAT_ID from  step (7)
 - CYPRESS_URL with value ```https://google.com```
 - TELEGRAM_BOT_TOKEN from step (5)
 - NODE_ENV with value ```production```

###  Running (locally / CI)
1. Create file ```cypress.env.json``` in project's root folder.
2. Open file ```cypress.env.json``` and add ```{ "URL":"https://google.com" }```
3. Run test on your local machine with command ```npm run cy:run```. (Also you can open cypress menu with ```npm run cy:open``` then choose which test you need and run it.)
4. If test succeed, then add all (```gaa```) your changes, commit (```git -commit 'branch_name'```) them and push (```ggp```) to your repository on github.


### Examples and tests
In this repository in folder ```<project_name>/cypress/integration``` you cand find example test: ```smokes.js```.
This test visit URL ```https://google.com/``` and is looking for word ```Google``` in the title. (If you need, you can change this title to your value in URL). If its true then test succeed, else test failed.
 
