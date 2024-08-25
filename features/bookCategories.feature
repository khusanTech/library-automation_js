@lib-03
Feature: Book Categories

    As a user, I want to see 21 book categories, so I can filter my favorite books.

    #* AC1: users should see 21 book categories When users click the Book Categories drop down
    #*      ALL, Action and Adventure, Anthology, Classic, Comic and Graphic Novel, Crime and Detective, Drama
    #*      , Fable, Fairy Tale, Fan-Fiction, Fantasy, Historical Fiction, Horror, Science Fiction, Humor
    #*      , Biography/Autobiography ,Romance, Short Story, Essay, Memoir, Poetry

    @lib-03-01
    # TODO: verify users see 21 book categories
    Scenario Outline: Verify that user sees 21 book categories
        Given user is already on the login page
        And user is already logged in as "<user-type>"
        When user clicks Books link
        And user clicks the Book categories drop down
        Then user should see 21 book categories
        Examples:
            | user-type |
            | admin     |
            | student   |
# TODO: verify that all 21 book categories are displayed under the Book Categories drop down


#? Should there be more scenarios for this user story? Feel free to add more scenarios.