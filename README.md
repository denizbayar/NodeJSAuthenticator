# NodeJSAuthenticator
Learning projects here

Some of the quesries as follows:

(Everybody)
GET -> http://localhost:3000/

(Only users)
GET  http://localhost:3000/dashboard
Content-Type: application/json

{   
    "userId":4
}

(Only Admin-See admin Panel)
GET ->http://localhost:3000/admin
Content-Type: application/json

{   
    "userId":1
}


(Only Admin-See all projects)
GET ->http://localhost:3000/projects
Content-Type: application/json

{   
    "userId":1
}

(Only users who is in the project can access the project)
GET ->http://localhost:3000/projects/1
Content-Type: application/json

{   
    "userId":1,
    "projectId":2
}


(Only users who is in the project can delete the project)
DELETE http://localhost:3000/projects/1
Content-Type: application/json

{   
    "projectId":3,
    "userId":3
}
