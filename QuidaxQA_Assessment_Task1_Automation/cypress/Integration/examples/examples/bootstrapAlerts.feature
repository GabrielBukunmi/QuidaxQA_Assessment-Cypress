Feature: Bootstrap Alerts

  Scenario: Verify all bootstrap alerts buttons are enabled and clickable
    Given I open the bootstrap alerts page
    Then I should see all alert buttons enabled
    When I click all alert buttons
    Then all alerts should be displayed

  Scenario: Verify autoclosable alerts close within their duration
    Given I open the bootstrap alerts page
    When I click the autoclosable success button
    Then the success alert should close after 5 seconds
    When I click the autoclosable warning button
    Then the warning alert should close after 4 seconds
    When I click the autoclosable danger button
    Then the danger alert should close after 6 seconds
    When I click the autoclosable info button
    Then the info alert should close after 7 seconds

  Scenario: Verify normal alerts are displayed and can be closed
    Given I open the bootstrap alerts page
    When I click the normal success button
    Then the success alert should be visible
    And I close the success alert
    When I click the normal warning button
    Then the warning alert should be visible
    And I close the warning alert
    When I click the normal danger button
    Then the danger alert should be visible
    And I close the danger alert
    When I click the normal info button
    Then the info alert should be visible
    And I close the info alert
