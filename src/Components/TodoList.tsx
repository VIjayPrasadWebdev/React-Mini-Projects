"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { FiDelete, FiEdit } from "react-icons/fi";
import { TbEdit, TbTrash } from "react-icons/tb";
export default function TodoList() {
  let [activeurl] = useState("/todolistapp");

  let data = [
    {
      id: 1,
      value: "Tomato",
    },
    {
      id: 2,
      value: "Orange",
    },
  ];
  let [list, setlist] = useState(data);
  let [input, setinput] = useState("");
  let [inputid, setinputid] = useState(null);
  let [edit, setedit] = useState(false);
  let [alert, setalert] = useState({
    show: false,
    text: "",
    type: null,
  });

  //   console.log(alert);

  function handleform(e: any) {
    e.preventDefault();
    if (!input && input == "") {
      showAlert(true, "plese enter the text", "danger");
    } else if (input && edit) {
      setlist(
        list.map((list) => {
          if (list.id === inputid) {
            return { ...list, value: input };
          }
          return list;
        })
      );

      setinput("");
      setedit(false);
      setinputid(null);
      showAlert(true, "Item is saved", "success");
    } else {
      showAlert(true, "Item is saved", "success");
      let updatedlist = { id: new Date().getTime().toString(), value: input };
      console.log(updatedlist);
      setlist([...(list as any), updatedlist]);
      setinput(" ");
    }
  }

  function showAlert(show = false, text?: any, type?: any) {
    return setalert({ show: true, text, type });
  }

  useEffect(() => {
    let timeout = setTimeout(() => {
      showAlert();
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  function handleinput(e: any) {
    let value = e.target.value;
    setinput(value);
  }

  function handleeditbtn(id: any) {
    let editdata: any = list.find((list) => list.id === id);
    setedit(true);
    setinputid(id);
    setinput(editdata.value);

    showAlert(true, "You are editing the existing item", "warning");
  }
  function handleremovebtn(id: number) {
    let removeeachlist = list.filter((list) => list.id !== id);
    setlist(removeeachlist);
    showAlert(true, "Item is removed", "danger");
  }

  function handleclearbtn() {
    if (list.length == 0) {
      showAlert(true, "Items are restored", "success");
      setlist(data);
    } else {
      showAlert(true, "All the items are removed", "danger");
      setlist([]);
    }
  }

  return (
    <section
      className={`${
        list.length > 3 ? "h-auto" : "h-screen"
      }lg:h-screen md:h-screen h-screen   p-6 flex items-center flex-col justify-center bg-blue-300`}
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
              Todo List
            </Link>
          </li>
        </ul>
      </div>
      <p className=" text-black text-center text-4xl">Todo List App</p>

      <div className="grocery-bud-box bg-white h-auto mx-auto shadow-xl rounded-sm mt-6 p-6 flex flex-col justify-center items-center gap-2">
        {alert && (
          <p
            className={`${
              alert.type == "success"
                ? "bg-green-200"
                : alert.type == "warning"
                ? "bg-yellow-200"
                : alert.type == "danger"
                ? "bg-red-200"
                : null
            } p-2 w-full font-normal text-center text-gray-600  rounded-md Alert alert-${
              alert.type
            }`}
          >
            {alert.text}
          </p>
        )}
        <form
          onSubmit={handleform}
          className="flex items-center justify-center lg:gap-2 gap-4 max-md:flex-wrap"
        >
          <input
            type="text"
            value={input}
            className="bg-gray-200 p-2 w-full h-10 outline-none placeholder:text-center text-black"
            onChange={handleinput}
            placeholder="eg: Tomato..."
          />
          <button className="px-5 py-2 rounded-md bg-blue-700 text-white font-medium w-32">
            {edit ? "Edit" : "Submit"}
          </button>
        </form>
        <div className="content-container flex flex-col w-full justify-between items-center gap-3">
          {list.length > 0 &&
            list.map(({ id, value }) => {
              return (
                <article
                  className="flex w-full justify-between items-center lg:p-4 md:p-4 p-3 lg:mt-0 "
                  key={id}
                >
                  <p className="text-black">{value}</p>
                  <div className="btn-container flex items-center  gap-2">
                    <button onClick={() => handleeditbtn(id)}>
                      <TbEdit className="text-blue-500" />
                    </button>
                    <button onClick={() => handleremovebtn(id)}>
                      <TbTrash className="text-red-500" />
                    </button>
                  </div>
                </article>
              );
            })}
        </div>

        <button
          className="px-5 py-3 rounded-md bg-black text-white font-medium w-full"
          onClick={handleclearbtn}
        >
          {list.length == 0 ? "Refresh List" : "Clear All"}
        </button>
      </div>
    </section>
  );
}
