import { useState } from "react";
import Colors from "../../components/common/Colors/Colors";
import Sizes from "../../components/common/Sizes/Sizes";
import Images from "../../components/layout/Images/Images";
import Details from "../../components/layout/Details/Details";
import Header from "../../components/layout/Header/Header";

export default function Item() {

  return (
    <div className="flex justify-center items-center flex-col w-full">
        <Header />
        <div className="flex w-full mt-5 max-w-5xl flex-col gap-6 lg:flex-row lg:items-start" >
            <Images />
            <div className="relative w-full border border-gray-200 bg-white/60 p-8 pt-10 lg:w-80">
                <Details />
                <Colors />
                <div className="mt-8">
                    <Sizes />
                    <p className="mt-3 text-[10px] uppercase tracking-wide text-gray-500">
                    <button className="hover:text-neutral-900">Find your size</button>
                    {" | "}
                    <button className="hover:text-neutral-900">Measurement guide</button>
                    </p>
                </div>
                <button onClick={() => console.log("add")}
                    className="mt-6 w-full bg-gray-300 py-3 text-xs font-medium uppercase tracking-wide transition hover:bg-neutral-900 hover:text-white"
                >
                    Add
                </button>
            </div>
        </div>
    </div>
  );
}