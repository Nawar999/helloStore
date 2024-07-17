"use client";
import React from "react";
import { useCatogryNav } from "../(stateStore)/useCatogryNav";
import ButtonIcon from "./Button";

const CatogryNavBar = () => {
  const netflex = useCatogryNav((state) => state.setToNetflex);
  const shahid = useCatogryNav((state) => state.setToShahid);
  const youtube = useCatogryNav((state) => state.setToYoutube);
  const iptv = useCatogryNav((state) => state.setToIptv);
  const all = useCatogryNav((state) => state.setToAll);

  return (
    <div className="flex flex-row justify-center m-10 gap-3 ">
      <ButtonIcon action={all} title={"All"} />
      <ButtonIcon action={shahid} title={"Shahid"} />
      <ButtonIcon action={netflex} title={"Netflex"} />
      <ButtonIcon action={youtube} title={"Youtube"} />
      <ButtonIcon action={iptv} title={"IPTV"} />
    </div>
  );
};

export default CatogryNavBar;
