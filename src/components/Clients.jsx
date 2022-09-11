import React from "react";

import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section id="clients" className={` ${styles.flexCenter} my-4`}>
      <div className={` ${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={` flex-1 ${styles.flexCenter} min-w-[120px] sm:min-w-[192px]  `}
          >
            <img
              src={client.logo}
              alt="client"
              className=" w-[100px] sm:w-[192px] object-contain "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
