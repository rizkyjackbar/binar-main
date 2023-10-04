const { Feed } = require("./models");
const { v4: uuidv4 } = require("uuid");
// const getAllFeeds = async()=>{
//     const data = await Feeds.findAll();
//     console.log(data);
// }

// getAllFeeds();

// Feeds.findAll().then((data)=>{console.log(data)}).catch(err)=>{console.log(err)};

// INSERT
// Feed.update(
//     {title:'Title Update', content:'Content Update', category:'Cat Update', {where:{}}}
// )

// UPDATE
// Feed.update(
//   { title: "Title Update", content: "Content Update", category: "Cat Update" },
//   {
//     where: {
//       id: "5538592e-0a95-4952-ad6b-4e902c15d02a",
//     },
//   }
// );

//DELETE
// Feed.destroy(
//     {where:{id: '9b6d3974-c56f-420f-a69f-e3984094f3c9'}}
// )
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)})
