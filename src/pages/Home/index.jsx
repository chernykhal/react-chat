import React from "react";

import "./Home.scss";
import Message from "../../components/Message";

const Home = () => {
  return (
    <section className={"home"}>
      <Message
        avatar={
          "https://sun1-98.userapi.com/impf/c850732/v850732481/179e66/0jQ0DVIldDk.jpg?size=100x0&quality=96&crop=56,20,288,288&sign=2f5b62b1c86a4a0820f04372f89a6409&ava=1"
        }
        text={
          "Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        }
        date={"Sat Jan 23 2021 19:33"}
        user={{ fullname: "Alexey" }}
        outgoing={false}
      />
      <Message
        avatar={
          "https://sun1-98.userapi.com/impf/c850732/v850732481/179e66/0jQ0DVIldDk.jpg?size=100x0&quality=96&crop=56,20,288,288&sign=2f5b62b1c86a4a0820f04372f89a6409&ava=1"
        }
        text={
          "Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        }
        date={"Sat Jan 23 2021 18:00:03"}
        user={{ fullname: "Alexey" }}
        isOutgoing={true}
        isReaded={true}
        attachments={[
          {
            filename: "image1.jpg",
            url: "https://source.unsplash.com/1920x1080/?random=1&nature,water",
          },
          {
            filename: "image2.jpg",
            url: "https://source.unsplash.com/100x100/?random=2&nature,water",
          },
          {
            filename: "image3.jpg",
            url: "https://source.unsplash.com/100x100/?random=3&nature,water",
          },
          {
            filename: "image4.jpg",
            url: "https://source.unsplash.com/1920x1080/?random=4&nature,water",
          },
          {
            filename: "image5.jpg",
            url: "https://source.unsplash.com/100x100/?random=5&nature,water",
          },
        ]}
      />
    </section>
  );
};

export default Home;
