Feature: The PASS GENIUS WEBSITE FEATURE

  As a caregiver
  I want to be able to login to the website
  so that I can add a new resident

  Scenario Outline: Add a new resident

    Given I am on the login page
    And I login with <username> and <password>
    And I should see a message saying <message>
    And I clicked on the residents tab
    And I have clicked on the add a new resident button
    And I have selected title for the resident title on the add resident page
    And I have entered the first name for the resident first name on the add resident page
    And I have entered the surname for the resident surname on the add resident page
    And I have entered the knownAs for the field on the add resident page
    And I have selected male from sex on the add resident page
    And I have selected date of birth on the add resident page
    And I have entered the ssn number for the resident social service number on the add resident page
    And I have entered weight for the resident weight on the add resident page
    And I have entered height for the resident height on the add resident page
    And I have entered admission date for the resident start date on the add resident page
    And I have selected the building name on the add resident page
    And I have selected the floor name on the add resident page
    And I have entered the room name on the add resident page
    And I have entered the internal tel for the add resident page
    And I have entered address1 for the resident address 1 on the add resident page
    And I have entered address2 for the resident address 2 on the add resident page
    And I have entered city name for the resident city name on the add resident page
    And I have entered county name for the resident county name on the add resident page
    And I have entered postcode for the resident postcode on the add resident page
    And I have entered country name for the resident country name on the add resident page
    And I have entered telephone number for the resident tel number on the add resident page
    And I have entered an email address for the resident email address on the add resident page
    And I have entered a mobile number for the resident mobile on the add resident page
    And I have entered access details for the resident access details on the add resident page
    And I have entered allergies for the resident add resident page
    And I have entered next of kin for the resident next of kin on the add resident page
    And I have entered next of kin tel for the resident next of kin telepone number on the add resident page
    And I have entered other relevent people on the add resident page
    And I entered the nhs number on the add resident page
    And I have entered doctor on the add resident page
    And I have entered surgery for the resident surgery on the add resident page
    And I have entered surgery tel for the resident on the add resident page
    And I have clicked the save button on the add resident page
    When I have clicked on the residents details tab
    When I have set the status to active on the resident details page with reason 
    And I clicked on the residents tab
    When I have search for the resident by name
    Then the resident details page displays the correct data for the new resident

  

    Examples:
      | username          | password         | message        |
      | femiAjiboye999123 | TechTest446655++ | EveryLIFE Care |




