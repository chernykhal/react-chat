import React from "react";

import { Dialogs } from "../../components";

import "./Home.scss";

const Home = () => {
  return (
    <section className={"home"}>
      <div className="chat">
        <Dialogs
          authUser={{
            _id: 1,
            fullname: "Александр Черных",
            isOnline: true,
            avatar:
              "https://sun9-11.userapi.com/impf/c852136/v852136556/1584d0/tkiAUimwgSw.jpg?size=600x472&quality=96&proxy=1&sign=e7d6d0e05707900d90e9b7f665cdba9b&type=album",
          }}
        />
        {/*<DialogWindow />*/}
      </div>
    </section>
  );
};

export default Home;
