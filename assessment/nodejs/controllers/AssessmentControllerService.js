'use strict';

exports.assessmentPOST = function(args, res, next) {
  /**
   * Create a New Assessment
   * You may create your own assessment using this action. It takes a JSON object containing an assessment.
   *
   * no response value expected for this operation
   **/

  var postObj = [
      {
          "attemptId":"123456",
          "assessmentName":"Example Assessment",
          "assessmentType":"step by step / all at once / adaptive",
          "mode":"review",
          "maxAttempts":2,
          "items":[
              {
                  "itemId":"111",
                  "title":"Item 1",
                  "pointsEarned":0,
                  "maxPoints":1,
                  "attempts":1,
                  "itemStatus":"started"
              },
              {
                  "itemId":"222",
                  "title":"Item 2",
                  "pointsEarned":0,
                  "maxPoints":1
              },
              {
                  "itemId":"333",
                  "title":"Item 3",
                  "pointsEarned":0,
                  "maxPoints":1
              }
          ],
          "status":{
              "currentitem":"111",
              "state":"completed"
          },
          "pointsEarned":0,
          "maxPoints":31
      }
  ];

  var myPostJSON = JSON.stringify(postObj);


  res.end(myPostJSON);
   
}

exports.attemptGET = function(args, res, next) {
  /**
   * Get Assessment Item
   * Get item and state data by service-assigned id.
   *
   * no response value expected for this operation
   **/

  var getObj = {
      
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

  };

  var myGetJSON = JSON.stringify(getObj);

  res.end(myGetJSON);

}

