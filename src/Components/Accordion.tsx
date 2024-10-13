"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Accodiondata from "@/Data/Accordation";
import { BiMinus, BiPlus } from "react-icons/bi";
export default function AccordionComponent() {
  let [activeurl, setactiveurl] = useState("/accordion");
  let [questiondata, setquestion] = useState(Accodiondata);
  let [active, setActive] = useState(null);

  function handlebtn(id: any) {
    setActive(id == active ? null : id);
    // console.log(id);
  }
  return (
    <section className="lg:h-screen md:h-screen h-auto   p-6 flex items-center flex-col justify-center bg-slate-50">
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
              Accordion
            </Link>
          </li>
        </ul>
      </div>
      <p className="lg:m-0 md:m-0 mt-20 text-black text-center text-4xl">
        Accordion{" "}
      </p>
      <div className="accordion-container flex  items-center justify-between gap-6 p-6 flex-col lg:w-full md:w1-full w-72">
        {questiondata.map((data) => (
          <EachQuestion
            key={data.id}
            data={data}
            handlebtn={handlebtn}
            active={active}
          />
        ))}
      </div>
    </section>
  );
}

function EachQuestion({ data, handlebtn, active }: any) {
  let { title, id, info } = data;
  return (
    <article className="bg-white transition-all shadow-md rounded-md flex  items-center  gap-4 lg:p-6 lg:w-full md:w-screen md:p-6  w-screen p-7 ">
      <div className="text-container flex flex-col  gap-4">
        <div className="question-container flex items-center justify-between  w-full">
          <p className="text-black  font-medium">{title}</p>
          <button
            className="bg-slate-900 text-white rounded-full p-1 absolute  lg:right-20 md:right-10 right-5"
            onClick={() => handlebtn(id)}
          >
            {active == id ? <BiMinus /> : <BiPlus />}
          </button>
        </div>

        {active == id ? (
          <p className="font-normal transition-all">{info}</p>
        ) : (
          ""
        )}
      </div>
    </article>
  );
}
