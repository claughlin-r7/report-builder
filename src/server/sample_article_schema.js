
db.blog.insert (
    [
        {
            user_id: ObjectId("507f1f77bcf86cd799439011"),
            date: ISODate("2012-07-20T13:15:37Z"),
            text: "Welcome ME!",
            tags: [ "something", "angulaJS"]
        },
        {
            user_id: ObjectId("507f1f77bcf86cd799439012"),
            creationDate: ISODate("2012-07-20T13:15:37Z"),
            text: "Welcome YOU!",
            tags: [ "some else", "something else"]
        }
    ]
)