# node-netjobs
RESTApi for netjobs using Express and MongoDB

## API Overview

Start development server: `npm start`<br>

Development server api endpoint: http://localhost:5000/<br>
Public api endpoint: http://localhost:5000/public/<br>
Private api endpoint: http://localhost:5000/private/<br>


```javascript
JOB_SCHEMA = {
  company_name: {
    type: String,
    min: 3,
    max: 100,
    required: true
  },
  position: {
    type: String,
    min: 3,
    max: 100,
    required: true
  },
  experience: {
    needExperience: {
      type: Boolean,
      required: true
    },
    requiredExperience: {
      type: Number,
      required: true
    },
    required: true
  },
  salary: {
    negotiable: {
      type: Boolean,
      required: true
    },
    ammount: {
      type: Number,
      min: 1000,
      required: false
    },
    required: true,
  },
  category: [{
    type: String,
    min: 3,
    max: 20,
    required: true
  }]
}
```
### Sample GET request to Get All Jobs
```json
GET  http://localhost:5000/public/jobs HTTP/1.1
```
### Sample GET response to Get All Jobs
```json
{
  "jobs": [
    {
      "experience": {
        "needExperience": true,
        "requiredExperience": 3.5
      },
      "salary": {
        "negotiable": false,
        "ammount": 30000
      },
      "category": [
        "shitposter",
        "senior"
      ],
      "_id": "606578607feb6b03ac1fded5",
      "company_name": "Bittu inc",
      "position": "Sr. Shitposter",
      "__v": 0
    },
    {
      "experience": {
        "needExperience": true,
        "requiredExperience": 3.5
      },
      "salary": {
        "negotiable": false,
        "ammount": 30000
      },
      "category": [
        "shitposter",
        "senior"
      ],
      "_id": "60657898b3823810ac61f39b",
      "company_name": "Bittu inc",
      "position": "Sr. Shitposter",
      "__v": 0
    }
  ]
}
```

### Sample POST request to Add New Job
```json
POST http://localhost:5000/private/job HTTP/1.1
content-type: application/json

{
  "company_name": "Bittu inc",
  "position": "Sr. Shitposter",
  "experience": {
    "needExperience": true,
    "requiredExperience": 3.5
  },
  "salary": {
    "negotiable": false,
    "ammount": 30000
  },
  "category": [
    "shitposter",
    "senior"
  ]
}
```
### Sample POST response to Add New Job
```
HTTP/1.1 201 Created
```
