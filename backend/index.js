const express = require("express");
const app = express();

const dogs = [
    {
        id: 1,
        name: "Win",
        breed: "Chó ta",
        price: "2000",
        description: "Rất ngoan và thông minh, nhưng ăn nhiều",
        imageUrl: 'https://dogily.vn/wp-content/uploads/2019/09/Ban-nang-cua-cho-co-von-da-kha-thuan-thuc-cach-trong-nha-va-bao-ve-chu-nhan.jpg'
    },
    {
        id: 2,
        name: "Ricky",
        breed: "Hucky",
        price: "1000",
        description: "Ngáo và quậy",
        imageUrl: 'https://cdn.laohac.vn/2020/10/1-min.png'
    },
    {
        id: 3,
        name: "Seechi",
        breed: "Corgy",
        price: "1500",
        description: "chân ngắn cute",
        imageUrl: 'https://thucanh.net/wp-content/uploads/2021/03/anh-cho-corgi90.jpg'
    },
    {
        id: 4,
        name: "Seechi",
        breed: "Corgy",
        price: "1500",
        description: "chân ngắn cute",
        imageUrl: 'https://thucanh.net/wp-content/uploads/2021/03/anh-cho-corgi90.jpg'
    },
    {
        id: 5,
        name: "Seechi",
        breed: "Corgy",
        price: "1500",
        description: "chân ngắn cute",
        imageUrl: 'https://thucanh.net/wp-content/uploads/2021/03/anh-cho-corgi90.jpg'
    },
    {
        id: 6,
        name: "Sachi",
        breed: "Alaska",
        price: "1500",
        description: "Sói dữ",
        imageUrl: 'https://dogily.vn/wp-content/uploads/2020/04/cho-alaska.jpg'
    },

    {
        id: 7,
        name: "mema",
        breed: "Pug",
        price: "1500",
        description: "chân ngắn cute",
        imageUrl: 'https://thucanh.net/wp-content/uploads/2021/03/anh-cho-corgi90.jpg'
    },
    {
        id: 8,
        name: "sacu",
        breed: "Corgy",
        price: "2500",
        description: "chân ngắn cute",
        imageUrl: 'https://thucanh.net/wp-content/uploads/2021/03/anh-cho-corgi90.jpg'
    },
]

app.get("/v1/dogs", (req, res) => {
    res.status(200).json(dogs);
});

app.listen("8080", () => {
    console.log('Server is running...');
});