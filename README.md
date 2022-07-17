# Assignment-Test-Repository
<h1>Cypress-Cucumber E-LabNext Testing Challenge</h1>

Create an automated test that does the following steps:
- go to https://sandbox.elabjournal.com/
- log in with credentials : ranorex@elabjournal.com aSPIlcIc
- navigate to https://sandbox.elabjournal.com/members/inventory/samples/
- Via "Add Sample" button create one sample of a sample type "sample type ranorex"
(you can fill in only Sample Name, no other fields are needed.)
- assert it was created
-and then delete created sample
-assert it was deleted.
-Log Out

<B>» Pre-requisites to this Test Framework include:</B>

- Node.js: https://nodejs.org/en/download/
- Visual Studio Code: https://code.visualstudio.com/download


<B>» Steps to use this project:</B>

Install dependencies by running the following command in terminal (from inside your app directory i.e. where package.json is located): 
<I><B>npm -i init -y </I></B>
<I><B>npm install cypress --save-dev </I></B>
<I><B>npx cypress open </I></B> to see the Cypress runner
</I></B> npm install --save-dev cypress-cucumber-preprocessor </I></B> 

To run test in headless mode, please type below given code in terminal to run @smoke test.
<I><B>npx cypress-tags run -e TAGS="@smoke" </I></B>

To run test in headless mode Syncronised with  Cypress Dashboard on Cypress Runnner-Runs Tab.Reports and test video is uploded on the Dashboard.
Invite Link:https://dashboard.cypress.io/invitation/64b56c08-4258-4f25-97f6-ddae4c8dac40
<I><B>npm run cypress-run</I></B>


You can watch test results under the Videos folder# AssignmentELabNext
# AssignmentELabNext

[![ELabJournal](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/inx5gc/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/inx5gc/runs)