const mysql = require('mysql2')


const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'mypassword',
    database: 'social_media'
}).promise()
 async function readPosts() {
    const output = await connection.query("select * from posts")
    return output[0]
}
 async function readUsers(profile) {
    const output = await connection.query("select * from users where profile ='" + profile + "'")
    return output[0]
}
 async function insertUsers(name, profile, password, headline) {
    const output=await connection.query("insert into users(name,profile,password,headline) values (?,?,?,?)", [name, profile, password, headline]);

}
 async function insertPosts(profile, content) {
    const res = await connection.query("insert into posts(profile,content,likes,shares) values(?,?,?,?)", [profile, content, 0, 0]);
}
  async function likeFun (content){
    const output= await connection.query("select likes from posts and where content='"+ content+"' ")
    const likes = output[0][0]. likes
    const incLikes=likes+1;
    await connection.query("update posts set likes = " + incLikes + " where content='" + content + "' ")
}

 async function shareFun(content) {
    const output = await connection.query("select shares from posts and where content ='" + content + "' ")
    const shares = output[0][0].shares
    const incShares = shares + 1;
    await connection.query("update posts set shares = " + incShares + " where content='" + content + "' ")
}

 async function deleteFun(content) {
    const output = await connection.query("delete from posts where content ='" + content + "' ")
}


async function main() {
    const result = await readUsers('krishnavamsi')
    console.log(result)
}
main()
module.exports = { readPosts, readUsers, insertPosts, insertUsers,likeFun,shareFun,deleteFun }