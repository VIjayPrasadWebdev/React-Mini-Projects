import React, { useState } from "react";
import Reviewsdata from "@/Data/reviews";
import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";
import Link from "next/link";
export default function Review() {
  let [index, setindex] = useState(0);

  let { id, name, job, image } = Reviewsdata[index];
  let [activeurl] = useState("/reviews");

  function Validatereviewbasedonlength(number: number) {
    if (number > Reviewsdata.length - 1) {
      return 0;
    } else if (number < 0) {
      return Reviewsdata.length - 1;
    }

    return number;
  }

  function handlenext() {
    setindex((index) => {
      let updatedindex = index + 1;
      console.log(updatedindex);
      return Validatereviewbasedonlength(updatedindex);
    });
  }

  function handleprev() {
    setindex((index) => {
      let updatedindex = index - 1;
      console.log(updatedindex);
      return Validatereviewbasedonlength(updatedindex);
    });
  }

  return (
    <section className="lg:h-screen md:h-screen h-auto p-6 flex items-center flex-col justify-center bg-indigo-100">
      <div className="breadcrumbs text-lg mr-auto">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link
              href={activeurl}
              className={`${activeurl ? "active-link" : null}`}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-4xl p-6 text-center text-black">Reviews</p>
      <div className="review-container flex items-center justify-center gap-2 p-6">
        <article className="review-box rounded-md hover:shadow-md cursor-pointer  bg-white h-96 lg:w-96 md:w-96 w-72 flex justify-center items-center flex-col gap-3 p-4 relative">
          <div className="img-container h-52 w-52 bg-indigo-600 rounded-full flex items-center justify-center">
            <img
              src={image}
              alt={name}
              className="review-pic rounded-full h-48 w-48 object-cover"
            />
          </div>

          <div className="text-container flex flex-col items-center justify-center">
            <p className="text-2xl text-center text-black">
              {" "}
              {name.replace(/^./, name[0].toUpperCase())}
            </p>
            <p className="text-base text-indigo-800 text-center">
              {" "}
              {job.replace(/^./, job[0].toUpperCase())}
            </p>
          </div>

          <div className="btn-container flex justify-center gap-6 items-center mt-4">
            <button
              className=" bg-indigo-500 text-white p-1 rounded-sm"
              onClick={handleprev}
            >
              <RxTriangleLeft />
            </button>

            <button
              className="bg-indigo-500 text-white p-1 rounded-sm"
              onClick={handlenext}
            >
              <RxTriangleRight />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
