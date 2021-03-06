FORMAT: 1A
HOST: http://polls.apiblueprint.org/

# Assessment API

Assessment is a simple API allowing consumers to create and access assessment.

## Attempt [/attempt]

### Get Assessment Item [GET]

Get item and state data by service-assigned id.

+ Response 200 (application/json)

        {
            "timeStamp": "{ms}",
            "assessmentItem": {
            "id": "###########",
            "title": "Example of a simple mcq single part assessment item",
            "type": "assessmentItem",
            "schema": "https://schema.pearson.com/cite/schema/assessmentItem/1.0",
            "stimulus": {
                "content": [{
                            "type": "text",
                            "text": "This text is considered the problem statement for this item."
                            }]
                },
            "body": {
                "parts": [{
                    "content": [{
                                "type": "text",
                                "value": "This can be some random content preceeding the mcq interation."
                                },
                                {
                                "type": "multipleChoiceInteraction",
                                "schema": "https://schema.pearson.com/cite/schema/multipleChoiceInteraction/1.0",
                                "id": "mcq1",
                                "prompt": {
                                    "content": [{
                                    "type": "text",
                                    "text": "This is the prompt for the multiple choice interaction."
                                    }]
                                },
                                "maxChoices": 1,
                                "choices": [{
                                            "id": "choice_1",
                                            "content": [{
                                                        "type": "text",
                                                        "text": "This is the first defined choice."
                                                        }]
                                            },
                                            {
                                            "id": "choice_2",
                                            "content": [{
                                                        "type": "text",
                                                        "text": "This is the second defined choice."
                                                        }]
                                            },
                                            {
                                            "id": "choice_3",
                                            "content": [{
                                                        "type": "text",
                                                        "text": "This is the third choice which happens to be the correct choice based on the validation object defined above."
                                                        }]
                                            },
                                            {
                                            "id": "choice_4",
                                            "content": [{
                                                        "type": "text",
                                                        "text": "All of the above. (this choice will always remain in the 4th spot since it's referred to in the fixed_choices property."
                                                        }]
                                            }
                                ]
                            }
                        ]
                    }],
                    "policy": {
                            "maxAttempts": 0,
                            "maxScore": 0,
                            "penalty": 0
                    },
                    "state": {
                        "inputs": {
                                    "id": "mcq1",
                                    "value": "choice_1"
                                }
                    }
                }
            }
        }

## Assessment Collection [/assessment]

### Create a New Assessment [POST]

You may create your own assessment using this action. It takes a JSON
object containing an assessment.

+ Request (application/json)

        {
            “assessmentPolicyUrl”: “https://revel.pearson.com/assessments/config/blahblah”,
            “reviewMode”: false
        }

+ Response 201 (application/json)

        [
            {
                "attemptId": "123456",
                "assessmentName": "Example Assessment",
                "assessmentType": "step by step / all at once / adaptive",
                "mode": "review",
                "maxAttempts": 2,
                "items": [
                        {
                            "itemId": "111",
                            "title": "Item 1",
                            "pointsEarned": 0,
                            "maxPoints": 1,
                            "attempts": 1,
                            "itemStatus": "started"
                        },
                        {
                            "itemId": "222",
                            "title": "Item 2",
                            "pointsEarned": 0,
                            "maxPoints": 1
                        },
                        {
                            "itemId": "333",
                            "title": "Item 3",
                            "pointsEarned": 0,
                            "maxPoints": 1
                        }
                    ],
                "status": {
                "currentitem": "111",
                "state": "completed"
            },
            "pointsEarned": 0,
            "maxPoints": 31
            }
        ]

