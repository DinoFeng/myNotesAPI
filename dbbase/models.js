module.exports = {
    tag: {
        name: { type: String, required: true }
    },

    note: {
        title: { type: String, required: true },
        content: { type: String, required: true },
        createTime: { type: String, required: true },
        createUser: { type: String, required: true },
  //      tags: [exports.tag]
    },

    user: {
        username: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        phone: { type: String, required: true },
        userStatus: { type: Number, required: true },
    }
};

// const note = {
//         title: { type: String, required: true },
//         content: { type: String, required: true },
//         createTime: { type: String, required: true },
//         createUser: { type: String, required: true },
//         tags: [this.tag]
//     },

// const userSchema = {
//     username: { type: String, required: true },
//         firstName: { type: String, required: true },
//         lastName: { type: String, required: true },
//         email: { type: String, required: true },
//         password: { type: String, required: true },
//         phone: { type: String, required: true },
//         userStatus: { type: Number, required: true },
// }

// export { userSchema }