import React from "react";

import { Dialogs, DialogWindow, Message } from "../../components";

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
                _id: "1fb75436ffe9ddf65efb1785c43744c4",
                fullname: "Ринат Гильманов",
                isOnline: true,
                avatar: "",
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
      <DialogWindow />
    </section>
  );
};

export default Home;
