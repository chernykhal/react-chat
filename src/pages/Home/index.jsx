import React from "react";

import { Dialogs, Message } from "../../components";

import "./Home.scss";

const Home = () => {
  return (
    <section className={"home"}>
      <Dialogs
        dialogs={[
          {
            _id: Math.random(),
            message: {
              text: "За что игнор?",
              isReaded: true,
              createdAt: new Date(),
              user: {
                _id: 1,
                fullname: "Ринат Гильманов",
                isOnline: true,
                avatar:
                  "https://sun9-59.userapi.com/impg/Q0fZCr512TiBYJbg83G3uSKKe10UnMwOKyN8FQ/Izot0rXoCWE.jpg?size=1408x1400&quality=96&proxy=1&sign=3c33bb98d66d8091fe4b5f2e6a494156&type=album",
              },
            },
            unReaded: 15,
          },
          {
            _id: Math.random(),
            message: {
              text: "Привет!",
              isReaded: true,
              createdAt: new Date(),
              user: {
                _id: 2,
                fullname: "Алексей Степанов",
                isOnline: true,
                avatar:
                  "https://sun1-98.userapi.com/impf/c850732/v850732481/179e66/0jQ0DVIldDk.jpg?size=100x0&quality=96&crop=56,20,288,288&sign=2f5b62b1c86a4a0820f04372f89a6409&ava=1",
              },
            },
            unReaded: 5,
          },
        ]}
        authUser={{
          _id: 1,
          fullname: "Александр Черных",
          isOnline: true,
          avatar:
            "https://sun9-11.userapi.com/impf/c852136/v852136556/1584d0/tkiAUimwgSw.jpg?size=600x472&quality=96&proxy=1&sign=e7d6d0e05707900d90e9b7f665cdba9b&type=album",
        }}
      />
      {/*<Message*/}
      {/*  avatar={*/}
      {/*    "https://sun1-98.userapi.com/impf/c850732/v850732481/179e66/0jQ0DVIldDk.jpg?size=100x0&quality=96&crop=56,20,288,288&sign=2f5b62b1c86a4a0820f04372f89a6409&ava=1"*/}
      {/*  }*/}
      {/*  text={*/}
      {/*    "Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"*/}
      {/*  }*/}
      {/*  date={"Sat Jan 23 2021 19:33"}*/}
      {/*  user={{ fullname: "Alexey" }}*/}
      {/*  isOutgoing={false}*/}
      {/*/>*/}
      {/*<Message*/}
      {/*  avatar={*/}
      {/*    "https://sun1-98.userapi.com/impf/c850732/v850732481/179e66/0jQ0DVIldDk.jpg?size=100x0&quality=96&crop=56,20,288,288&sign=2f5b62b1c86a4a0820f04372f89a6409&ava=1"*/}
      {/*  }*/}
      {/*  text={*/}
      {/*    "Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"*/}
      {/*  }*/}
      {/*  date={"Sat Jan 23 2021 18:00:03"}*/}
      {/*  user={{ fullname: "Alexey" }}*/}
      {/*  isOutgoing={true}*/}
      {/*  isReaded={true}*/}
      {/*  attachments={[*/}
      {/*    {*/}
      {/*      filename: "image1.jpg",*/}
      {/*      url: "https://source.unsplash.com/1920x1080/?random=1&nature,water",*/}
      {/*    },*/}
      {/*    {*/}
      {/*      filename: "image2.jpg",*/}
      {/*      url: "https://source.unsplash.com/100x100/?random=2&nature,water",*/}
      {/*    },*/}
      {/*    {*/}
      {/*      filename: "image3.jpg",*/}
      {/*      url: "https://source.unsplash.com/100x100/?random=3&nature,water",*/}
      {/*    },*/}
      {/*    {*/}
      {/*      filename: "image4.jpg",*/}
      {/*      url: "https://source.unsplash.com/1920x1080/?random=4&nature,water",*/}
      {/*    },*/}
      {/*    {*/}
      {/*      filename: "image5.jpg",*/}
      {/*      url: "https://source.unsplash.com/100x100/?random=5&nature,water",*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<Message*/}
      {/*  avatar={*/}
      {/*    "https://sun1-98.userapi.com/impf/c850732/v850732481/179e66/0jQ0DVIldDk.jpg?size=100x0&quality=96&crop=56,20,288,288&sign=2f5b62b1c86a4a0820f04372f89a6409&ava=1"*/}
      {/*  }*/}
      {/*  user={{ fullname: "Alexey" }}*/}
      {/*  isOutgoing={false}*/}
      {/*  isTyping={true}*/}
      {/*/>*/}
      {/*<Message*/}
      {/*  avatar={*/}
      {/*    "https://sun1-98.userapi.com/impf/c850732/v850732481/179e66/0jQ0DVIldDk.jpg?size=100x0&quality=96&crop=56,20,288,288&sign=2f5b62b1c86a4a0820f04372f89a6409&ava=1"*/}
      {/*  }*/}
      {/*  text={"🌝"}*/}
      {/*  user={{ fullname: "Alexey" }}*/}
      {/*  outgoing={false}*/}
      {/*/>*/}
      {/*<Message*/}
      {/*  avatar={*/}
      {/*    "https://sun1-98.userapi.com/impf/c850732/v850732481/179e66/0jQ0DVIldDk.jpg?size=100x0&quality=96&crop=56,20,288,288&sign=2f5b62b1c86a4a0820f04372f89a6409&ava=1"*/}
      {/*  }*/}
      {/*  date={"Sat Jan 23 2021 18:00:03"}*/}
      {/*  user={{ fullname: "Alexey" }}*/}
      {/*  isOutgoing={true}*/}
      {/*  isReaded={true}*/}
      {/*  attachments={[*/}
      {/*    {*/}
      {/*      filename: "image1.jpg",*/}
      {/*      url: "https://source.unsplash.com/1920x1080/?random=1&nature,water",*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<Message*/}
      {/*  avatar={*/}
      {/*    "https://sun1-98.userapi.com/impf/c850732/v850732481/179e66/0jQ0DVIldDk.jpg?size=100x0&quality=96&crop=56,20,288,288&sign=2f5b62b1c86a4a0820f04372f89a6409&ava=1"*/}
      {/*  }*/}
      {/*  date={"Sat Jan 23 2021 18:00:03"}*/}
      {/*  user={{ fullname: "Alexey" }}*/}
      {/*  isOutgoing={false}*/}
      {/*  attachments={[*/}
      {/*    {*/}
      {/*      filename: "image1.jpg",*/}
      {/*      url: "https://source.unsplash.com/1920x1080/?random=7&nature,water",*/}
      {/*    },*/}
      {/*    {*/}
      {/*      filename: "image1.jpg",*/}
      {/*      url: "https://source.unsplash.com/1920x1080/?random=8&nature,water",*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<Message*/}
      {/*  avatar={*/}
      {/*    "https://sun1-98.userapi.com/impf/c850732/v850732481/179e66/0jQ0DVIldDk.jpg?size=100x0&quality=96&crop=56,20,288,288&sign=2f5b62b1c86a4a0820f04372f89a6409&ava=1"*/}
      {/*  }*/}
      {/*  date={"Sat Jan 23 2021 18:00:03"}*/}
      {/*  user={{ fullname: "Alexey" }}*/}
      {/*  isOutgoing={true}*/}
      {/*  attachments={[*/}
      {/*    {*/}
      {/*      filename: "image1.jpg",*/}
      {/*      url: "https://source.unsplash.com/1920x1080/?random=9&nature,water",*/}
      {/*    },*/}
      {/*    {*/}
      {/*      filename: "image1.jpg",*/}
      {/*      url:*/}
      {/*        "https://source.unsplash.com/1920x1080/?random=10&nature,water",*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}
    </section>
  );
};

export default Home;
