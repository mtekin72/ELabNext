Feature: Adding and Removing Sampels

@smoke
Scenario Outline: Add and Remove New Sapmle 

Given user navigates to loginpage
When user enters valid email and password
And user should be able to successfully login
And user shoule be landed to Dashboard
And user navigates to Samples
And user click -Add Sample- button
And user selects  -sample type ranorex- "<value>" from options
And user clicks -Proceed- button
And user should be landed to Inventory-Browser Tab "<pagetitle>"
And user fill "<text>" on name  field "<fieldname>"
And user clicks -Save and Close- button
Then user should see Samples Lists table "<Name>" ,"<Owner>" ,"<Type>" information
Then user should remove Sample "<Name>"
Then LogOut


 Examples:
 | select              | value | pagetitle                     | text        | fieldname | Name        | Owner        | Type                |
 | sample type ranorex | 19394 | Createnew sample type ranorex | Test name-1 | Name      | Test name-1 | Ranorex User | sample type ranorex | 
