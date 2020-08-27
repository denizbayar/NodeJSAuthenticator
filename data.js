const ROLE = {
    ADMIN:"Admin",
    USER: "User"
}

const data = {
    users:[
    {
        name:'Seweryn' , surname: 'Lach', id:1, projectId:1, role:ROLE.ADMIN
    }
    ,{
        name:'Deniz' , surname: 'Bayar', id:2, projectId:2, role:ROLE.USER
    },
    {
        name:'Hasan Ali' , surname: 'Yuzgec', id:3, projectId:3, role:ROLE.USER
    }],

    projects: [
        {
            name:"BigFix WebUI", id:1, usersId:[2,3], creatorId:1
        },{
            name:"BigFix Inventory", id:2, usersId:[7,8,11], creatorId:1
        },{
            name:"BigFix Learning", id:3, usersId:[2,3], creatorId:2
        },
    ]
}

module.exports = {
    ROLE:ROLE,
    users:data.users,
    projects:data.projects
}