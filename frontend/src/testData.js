
const testData = 
[{"users": [
    {
        "_id": 0,
        "username": "Colin99",
        "password": "password",
        "projects": [0,2]
    },

    {
        "_id": 1,
        "username": "Poggers",
        "password":"password",
        "projects": [1,2]
    }
    ]
},
{"projects": [
    {
        "_projectId": 0,
        "title": "Project 1",
        "_ownerId": 0, 
        "contributors": [ 0 ]
    },

    {
        "_projectId": 1,
        "title": "Project 2",
        "_ownerId": 0, 
        "contributors": [ 0 ]
    },

    {
        "_projectId": 2,
        "_ownerId": 0, 
        "contributors": [0, 1]
    },
    {
        "_projectId": 3,
        "_ownerId": 1,
        "contributors":[1]
    }
]}]

export default testData
