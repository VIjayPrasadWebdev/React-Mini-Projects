"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Musicdata from "@/Data/Music";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  RiArrowLeftSLine,
  RiPauseFill,
  RiPlayFill,
  RiShuffleFill,
  RiSkipBackFill,
  RiSkipForwardFill,
  RiTimeFill,
  RiVolumeMuteFill,
  RiVolumeUpFill,
} from "react-icons/ri";

export default function MusicPlayerapp() {
  let [activeurl, setactiveurl] = useState("/musicplayer");
  let [bg, setbg] = useState("");
  let [value, setValue] = useState(0);
  let [active, setActive] = useState(false);
  let [currentTime, setCurrenttime] = useState(0);
  let [duration, setDuration] = useState(0);
  let [volume, setVolume] = useState(1);

  let { path, name, artist, pic, background } = Musicdata[value];

  let tracksong = useRef<HTMLAudioElement>(null);
  let progressbar = useRef<HTMLInputElement>(null);
  let animationref = useRef<number>(0);

  const handleIndex = (number: number) => {
    if (number > Musicdata.length - 1) return 0;
    if (number < 0) return Musicdata.length - 1;
    return number;
  };

  const handleMusic = () => {
    setActive((prev) => !prev);
    if (!active) {
      tracksong.current?.play();
      animationref.current = requestAnimationFrame(whilePlaying);
    } else {
      tracksong.current?.pause();
      cancelAnimationFrame(animationref.current);
    }
  };

  useEffect(() => {
    let audio = tracksong.current;
    const updateDuration = () => {
      if (audio && audio.duration) {
        const seconds = Math.floor(audio.duration);
        setDuration(seconds);
        if (progressbar.current) {
          progressbar.current.max = seconds.toString();
        }
      }
    };
    if (audio) {
      audio.addEventListener("loadedmetadata", updateDuration);

      if (audio.readyState >= 1) {
        updateDuration();
      }
    }

    return () => {
      if (audio) {
        audio.removeEventListener("loadedmetadata", updateDuration);
      }
    };
  }, [tracksong]);

  const handleDuration = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const correctedminutes = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(secs % 60);
    const correctedseconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${correctedminutes}:${correctedseconds}`;
  };
  const changecurrentTime = () => {
    setCurrenttime(progressbar.current!.valueAsNumber);
  };

  const handleRange = () => {
    if (tracksong.current) {
      tracksong.current.currentTime = progressbar.current!.valueAsNumber;
      changecurrentTime();
    }
  };

  const whilePlaying = () => {
    if (tracksong.current) {
      progressbar.current!.value = tracksong.current.currentTime.toString();
      changecurrentTime();
      animationref.current = requestAnimationFrame(whilePlaying);
    }
  };
  useEffect(() => {
    if (tracksong.current) {
      tracksong.current.volume = volume;
    }
  }, [volume]);

  return (
    <section
      className={`${
        value == 0 ? "bg-slate-100" : value == 1 ? "bg-red-500" : null
      }lg:h-screen md:h-screen h-auto p-6 flex items-center flex-col justify-center bg-slate-100`}
    >
      <div className="breadcrumbs text-lg mr-auto absolute left-3 top-6 mb-4">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link
              href={activeurl}
              className={`${activeurl ? "active-link" : null}`}
            >
              Music Player
            </Link>
          </li>
        </ul>
      </div>

      <p className="text-black text-center text-4xl lg:mb-14 md:mb-10 mb-4 lg:mt-0 md:mt-0 mt-14">
        Music Player
      </p>
      <article className="relative   top-0 left-0 bottom-0 right-0 music-player h-auto bg-white flex flex-col items-center justify-center gap-2 p-6 rounded-md shadow-xl">
        <div className="upper-btn-container flex items-center justify-between w-full">
          <button>
            <RiArrowLeftSLine />
          </button>
          <p className="text-xl font-semibold">
            Music <span className="text-red-500"> Player</span>
          </p>
          <button>
            <BiDotsVerticalRounded />
          </button>
        </div>

        <div className="img-container relative flex justify-center items-center mt-5">
          <img
            src={pic}
            alt={artist}
            className={`h-56 w-full rounded-full object-contain ${
              active ? "animate-spin" : ""
            }`}
          />
          <div className="absolute circle h-16 w-16 rounded-full bg-white"></div>
        </div>

        <div className="text-container flex items-center justify-center flex-col  mt-5">
          <p className="text-black font-semibold text-xl">{name}</p>
          <p className="text-red-500 text-artistfont font-normal animate-name">
            {artist}
          </p>
        </div>

        <audio src={path} ref={tracksong} />
        <div className="duration-container w-full flex items-center gap-6">
          <p>{handleDuration(currentTime)}</p>
          <input
            type="range"
            id="range"
            defaultValue="0"
            ref={progressbar}
            onChange={handleRange}
            className="cursor-pointer"
          />
          <p>{handleDuration(duration)}</p>
        </div>

        <div className="btn-container flex items-center justify-center w-full gap-6">
          <button>
            <RiTimeFill />
          </button>
          <button
            className="player-btn bg-slate-100 p-2 shadow-lg rounded-full flex justify-center items-center play-icon"
            onClick={() =>
              setValue((prev) => {
                setActive(false);
                return handleIndex(prev - 1);
              })
            }
          >
            <RiSkipBackFill className="h-6 w-6 " />
          </button>
          <button
            className="player-btn bg-slate-100 p-2 shadow-lg rounded-full flex justify-center items-center play-icon"
            onClick={handleMusic}
          >
            {active ? (
              <RiPauseFill className="h-8 w-8" />
            ) : (
              <RiPlayFill className="h-8 w-8" />
            )}
          </button>
          <button
            className="player-btn  bg-slate-100 p-2 shadow-lg rounded-full flex justify-center items-center play-icon"
            onClick={() =>
              setValue((next) => {
                setActive(false);
                return handleIndex(next + 1);
              })
            }
          >
            <RiSkipForwardFill className="h-6 w-6" />
          </button>
          <button>
            <RiShuffleFill />
          </button>
        </div>

        <div className="volume-container flex items-center justify-center  gap-3 mt-6">
          <button>
            {volume == 0 ? <RiVolumeMuteFill /> : <RiVolumeUpFill />}
          </button>
          <input
            type="range"
            defaultValue="0"
            className="w-6 volume-range cursor-pointer"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
          />
        </div>
      </article>
    </section>
  );
}
