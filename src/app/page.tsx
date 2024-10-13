import React, { useContext } from "react";
import Birthdaypic from "./birthday.png";
import { projectdata } from "./utils/projectdata";
import Link from "next/link";
// console.log(projectdata);

let filteredprojectdata = projectdata.filter((data, index) => index > 0);
// console.log(filteredprojectdata);

export default function Home() {
  return (
    <main className="bg-white h-auto p-6 flex flex-col justify-center items-center gap-10 ">
      <h1 className="lg:text-4xl md:text-4xl text-3xl text-black">
        React Mini Projects
      </h1>
      <section className="projects-container flex  justify-center items-center gap-10 flex-wrap">
        {filteredprojectdata.map(({ label, img, href }) => {
          return (
            <Link href={href} key={label}>
              <div className="card bg-base-100 h-auto w-72 shadow-md cursor-pointer hover:shadow-xl">
                <figure>
                  <img
                    src={img?.src}
                    alt={label}
                    className="object-cover h-52 w-72"
                  />
                </figure>
                <div className="card-body">
                  <h2 className=" text-center text-xl font-semibold">
                    {label}
                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
