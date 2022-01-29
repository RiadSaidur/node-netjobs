# node-netjobs
RESTApi for netjobs using Express and MongoDB

## API Overview

<span style="color:#ff485a; font-weight: bold; font-size: 1.5rem">FOR TESTING PURPOSE HOSTED LINK UPON REQUEST</span>

Start development server: `npm start`<br>

Development server api endpoint: http://localhost:5000/<br>
Public api endpoint: http://localhost:5000/public/<br>
Private api endpoint: http://localhost:5000/private/<br>

### Job Schema **Fields** and **Requirements**
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
### Sample **POST request** to **Signin**
```json
POST http://localhost:5000/public/auth/signin HTTP/1.1
content-type: application/json

{
  "email": "hello@world.com",
  "password": "##something123##"
}
```
### Sample **POST response** to **Signin**
```json
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 322
ETag: W/"142-864/Nogd1zPgS9bTZ6/4fWVAzrM"
Date: Sat, 29 Jan 2022 09:28:35 GMT
Connection: close

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvQHdvcmxkLmNvbSIsImlhdCI6MTY0MzQ0ODUxNX0.YQVsLNlH_2zCuGyIZPRStqfWibBgnbtk7qyueRb3KHI",
  "profile": {
    "_id": "61f508adb0f90529007e0f60",
    "name": "syd",
    "email": "hello@world.com",
    "createdAt": "2022-01-29T09:28:13.563Z",
    "updatedAt": "2022-01-29T09:28:13.563Z",
    "__v": 0
  }
}
```
### Sample **POST request** to **Signup**
```json
POST http://localhost:5000/public/auth/signup HTTP/1.1
content-type: application/json

{
  "name": "syd",
  "email": "hello@world.com",
  "password": "##something123##"
}
```
### Sample **POST response** to **Signup**
```json
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 322
ETag: W/"142-hbiq+s9JNJsybqyrwCDXAnwjWW0"
Date: Sat, 29 Jan 2022 09:28:13 GMT
Connection: close

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvQHdvcmxkLmNvbSIsImlhdCI6MTY0MzQ0ODQ5M30.YdAWWIjlih3_Cg79-ey2APtMs8u-lWcAwyKr4SXQCrM",
  "profile": {
    "_id": "61f508adb0f90529007e0f60",
    "name": "syd",
    "email": "hello@world.com",
    "createdAt": "2022-01-29T09:28:13.563Z",
    "updatedAt": "2022-01-29T09:28:13.563Z",
    "__v": 0
  }
}
```
### Sample **GET request** to **Get All Jobs**
```json
GET  http://localhost:5000/public/jobs HTTP/1.1
```
### Sample **GET response** to **Get All Jobs**
```json
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 492
ETag: W/"1ec-UTPGXomidU8/24rWwpRqpjPvHBo"
Date: Thu, 01 Apr 2021 16:12:22 GMT
Connection: close

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
### Sample **GET request** to **Get Single Job by ID**
```
GET  http://localhost:5000/public/jobs/606578607feb6b03ac1fded5 HTTP/1.1
```
### Sample **GET response** to Get **Single Job by ID**
```json
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 248
ETag: W/"f8-oq0mVI0LgsVHPhTa5y7Aamywsl8"
Date: Thu, 01 Apr 2021 16:09:44 GMT
Connection: close

{
  "job": {
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
  }
}
```

### Sample **GET request** to **Get Filtered Jobs**
```
GET  http://localhost:5000/public/jobs?salaryFrom=1000&salaryTo=50000&category=shitposter,senior&experience=4 HTTP/1.1
```
### Sample **GET response** to **Get Filtered Jobs**
```json
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 492
ETag: W/"1ec-UTPGXomidU8/24rWwpRqpjPvHBo"
Date: Thu, 01 Apr 2021 17:16:39 GMT
Connection: close

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

### Sample **POST request** to **Add New Job**
```json
POST http://localhost:5000/private/job HTTP/1.1
content-type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsnasdjkInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvQHdvcmxkLmNvbSIsImlhdCI6MTY0ajsbdMzQ0Nzg4NX0.6J46bDNaskndvdp-EdmQS7JIA2xEElh8LLk4N5F-Cz_p6WoI

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
### Sample **POST response** to **Add New Job**
```
HTTP/1.1 201 Created
```