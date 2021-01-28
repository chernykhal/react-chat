import React from "react";

import { Message } from "../index";

import "./DialogWindow.scss";

const DialogWindow = () => {
  return (
    <div className="dialog-window">
      <Message
        key={Math.random()}
        text={
          "Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        }
        date={"Sat Jan 23 2021 19:33"}
        user={{
          _id: "a0eac53d7dc80c154fa80c1c8f1513e1",
          fullname: "Alexey",
          avatar: "",
        }}
        isOutgoing={false}
      />
      <Message
        key={Math.random()}
        text={
          "Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        }
        date={"Sat Jan 23 2021 18:00:03"}
        user={{
          _id: "a0eac53d7dc80c154fa80c1c8f1513e1",
          fullname: "Alexey",
          avatar: null,
        }}
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
      <Message
        key={Math.random()}
        user={{
          _id: "a0eac53d7dc80c154fa80c1c8f1513e1",
          fullname: "Alexey",
          avatar: null,
        }}
        isOutgoing={false}
        isTyping={true}
      />
      <Message
        key={Math.random()}
        text={"🌝"}
        user={{
          _id: "a0eac53d7dc80c154fa80c1c8f1513e1",
          fullname: "Alexey",
          avatar: null,
        }}
        outgoing={false}
      />
      <Message
        key={Math.random()}
        date={"Sat Jan 23 2021 18:00:03"}
        user={{
          _id: "a0eac53d7dc80c154fa80c1c8f1513e1",
          fullname: "Alexey",
          avatar: null,
        }}
        isOutgoing={true}
        isReaded={true}
        attachments={[
          {
            filename: "image1.jpg",
            url: "https://source.unsplash.com/1920x1080/?random=1&nature,water",
          },
        ]}
      />
      <Message
        key={Math.random()}
        date={"Sat Jan 23 2021 18:00:03"}
        user={{
          _id: "a0eac53d7dc80c154fa80c1c8f1513e1",
          fullname: "Alexey",
          avatar: null,
        }}
        isOutgoing={false}
        attachments={[
          {
            filename: "image1.jpg",
            url: "https://source.unsplash.com/1920x1080/?random=7&nature,water",
          },
          {
            filename: "image1.jpg",
            url: "https://source.unsplash.com/1920x1080/?random=8&nature,water",
          },
        ]}
      />
      <Message
        key={Math.random()}
        date={"Sat Jan 23 2021 18:00:03"}
        user={{
          _id: "a0eac53d7dc80c154fa80c1c8f1513e1",
          fullname: "Alexey",
          avatar: null,
        }}
        isOutgoing={true}
        attachments={[
          {
            filename: "image1.jpg",
            url: "https://source.unsplash.com/1920x1080/?random=9&nature,water",
          },
          {
            filename: "image1.jpg",
            url:
              "https://source.unsplash.com/1920x1080/?random=10&nature,water",
          },
        ]}
      />
      <Message
        key={Math.random()}
        date={"Sat Jan 23 2021 18:00:03"}
        user={{
          _id: "a0eac53d7dc80c154fa80c1c8f1513e1",
          fullname: "Alexey",
          avatar: null,
        }}
        isOutgoing={false}
        audio={
          "https://notificationsounds.com/storage/sounds/file-c2_men-laughing.ogg"
        }
      />
      <Message
        key={Math.random()}
        date={"Sat Jan 23 2021 18:00:03"}
        user={{
          _id: "a0eac53d7dc80c154fa80c1c8f1513e1",
          fullname: "Alexey",
          avatar: null,
        }}
        isOutgoing={true}
        audio={
          "https://notificationsounds.com/storage/sounds/file-c2_men-laughing.ogg"
        }
      />
    </div>
  );
};

export default DialogWindow;
