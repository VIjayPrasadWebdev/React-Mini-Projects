"use client";
import React from "react";
import { projectdata } from "@/app/utils/projectdata";

import Link from "next/link";
export default function Header() {
  let href = projectdata.map((data) => data.href);
  let label = projectdata.map((data) => data.label);
  let correctlink = href.filter((link) => link == window.location.pathname);
  let findlabel = projectdata.find((data, index) => data.id == index);
  console.log(findlabel);

  return (
    <section className="relative">
      <div className="breadcrumbs text-lg absolute top-4 left-4">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {correctlink ? (
              <Link
                href={correctlink[0]}
                className={`${correctlink ? "active-link" : null}`}
              >
                <p>{correctlink[0]}</p>
              </Link>
            ) : (
              "dummy"
            )}
          </li>
        </ul>
      </div>
    </section>
  );
}
