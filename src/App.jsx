import React from 'react';
import Price from './components/Price';

const App = () => {
    const plans=[
      {
        "id":1,
        "planName": "free",
        "price":"$0/month",
        features: [
          {
            "feature": "single user",
            "value": true
          },
          {
            "feature":  "50GB storage",
            "value": true
          },
          {
            "feature": "unlimited public projects",
            "value": true
          },
          {
            "feature": "community access",
            "value": true
          },
                    {
            "feature": "unlimited private projects",
            "value": false
          },
          {
            "feature":  "dedicated phone support",
            "value": false
          },
          {
            "feature": "free subdomain",
            "value": false
          },
          {
            "feature": "monthly status reports",
            "value": false
          }          
        ]
      },
      {
        "id":2,
        "planName": "plus",
        "price":"$9/month",
      features: [
          {
            "feature": "5 users",
            "value": true
          },
          {
            "feature":  "50GB storage",
            "value": true
          },
          {
            "feature": "unlimited public projects",
            "value": true
          },
          {
            "feature": "community access",
            "value": true
          },
                    {
            "feature": "unlimited private projects",
            "value": true
          },
          {
            "feature":  "dedicated phone support",
            "value": true
          },
          {
            "feature": "free subdomain",
            "value": true
          },
          {
            "feature": "monthly status reports",
            "value": false
          }          
        ]
      },
      {
        "id":3,
        "planName": "pro",
        "price":"$49/month",
features: [
          {
            "feature": "unlimited users",
            "value": true
          },
          {
            "feature":  "50GB storage",
            "value": true
          },
          {
            "feature": "unlimited public projects",
            "value": true
          },
          {
            "feature": "community access",
            "value": true
          },
                    {
            "feature": "unlimited private projects",
            "value": true
          },
          {
            "feature":  "dedicated phone support",
            "value": true
          },
          {
            "feature": "free subdomain",
            "value": true
          },
          {
            "feature": "monthly status reports",
            "value": true
          }          
        ]
      }
    ]
  return (
    <div>
      <Price plans={plans}/>
    </div>
  );
};

export default App;