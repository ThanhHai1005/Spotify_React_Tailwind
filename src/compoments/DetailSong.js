import React from "react";
export default function DetailSong() {
    return (
        <div className="col-span-1">
            <h2 className="text-cyan-500 font-bold">Now playing </h2>
            <h2 className="text-neutral-400 text-2xl">Sing me to sleep</h2>
            <div className="w-[240px] m-auto mt-10">
                <img className="w-full" src='https://i.pinimg.com/736x/5f/bf/88/5fbf886023fc382bddde76594c895ff3.jpg' alt='avatar' />
            </div>
            <div className=" flex justify-evenly items-center mt-10">
                <img className="w-[70px] rounded-full" src='https://i.pinimg.com/originals/56/67/2a/56672af0b4d31a37b29a213a46a91edf.jpg' alt='avatar' />
                <span className="text-xl text-white"> Neymar Jr</span>
            </div>
        </div>
    )
}