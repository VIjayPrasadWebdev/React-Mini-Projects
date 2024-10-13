import React, { useState } from "react";
import Birthdaydata from "@/Data/birthday";
import Link from "next/link";
export default function BirthdayRemainder() {
  let [data, setdata] = useState<any>(Birthdaydata);
  let [activeurl] = useState("/birthdayremainder");
  //console.log(data);

  function Removeeachperson(id: number) {
    let Filterperson = data.filter((data: any) => data.id !== id);
    setdata(Filterperson);
  }

  function RefreshBtn() {
    setdata(Birthdaydata);
  }

  function ClearBtn() {
    setdata([]);
  }
  return (
    <section
      className={`lg:h-screen h-auto p-6 flex items-center justify-center flex-col gap-6 bg-slate-100 ${
        data.length == 0 ? "h-screen" : null
      }`}
    >
      <div className="breadcrumbs text-lg mr-auto absolute left-3 top-6">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link
              href={activeurl}
              className={`${activeurl ? "active-link" : null}`}
            >
              Birthday Remainder
            </Link>
          </li>
        </ul>
      </div>
      <p className="lg:text-4xl text-3xl text-center text-black  lg:mt-0 md:mt-0 mt-20">
        Birthday Remainder
      </p>
      <p className="text-2xl text-center text-black">
        Today <span className="text-fuchsia-500"> {data.length}</span> people
        have Bithday
      </p>
      <div className="birthday-contaniner flex gap-6 items-center justify-center flex-wrap">
        {data.map(({ id, name, age, image }: any) => {
          return (
            <article
              key={id}
              className="bg-white rounded-sm shadow-2xl flex justify-center items-center flex-col gap-2 p-3"
            >
              <img src={image} alt={name} className="h-56 w-56 object-cover" />
              <p className="text-black font-medium">{name}</p>
              <p className=" text-slate-600">{age}</p>
              <button
                className="btn btn-active  bg-fuchsia-500 rounded-md text-white"
                onClick={() => Removeeachperson(id)}
              >
                Remove Person
              </button>
            </article>
          );
        })}
      </div>
      {data.length < 1 ? (
        <button
          className="btn btn-active bg-indigo-500 text-white btn-wide"
          onClick={RefreshBtn}
        >
          Refresh list
        </button>
      ) : (
        <button
          className="btn btn-active  bg-indigo-500 text-white btn-wide"
          onClick={ClearBtn}
        >
          Clear All
        </button>
      )}
    </section>
  );
}
