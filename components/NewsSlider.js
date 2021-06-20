import { Transition } from "@headlessui/react";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

function SliderItem({ active, children }) {
  
  return (
    <Transition
      show={active}
      as={React.Fragment}
      enter="duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <section className="absolute top-0 right-0 left-0 transition-opacity flex flex-col content-around">
        {children}
      </section>
    </Transition>
  );
}
export default function NewsSlider({className, itemNum = 3, interval = 6000, onTemplate = (article, idx) => null, articles = [1, 2, 3, 4, 5, 6, 7] }) {
  let [currPage, setCurrPage] = useState(0);
  let pages = useMemo(() => {
    if (articles.length === 0) return [];
    let pageArr = [];
    for (let index = 0; index < articles.length; index = index + itemNum) {
      pageArr.push(articles.slice(index, index + itemNum));
    }
    return pageArr;
  }, [articles]);

  let timer = useCallback(() => {
    if (currPage === pages.length - 1) {
      setCurrPage(0);
    } else {
      setCurrPage(currPage + 1);
    }
  }, [currPage])

  useEffect(() => {
    let TmId = setInterval(timer , interval);
    return  () => clearInterval(TmId)
  });
  return (
    <section className="w-full mt-4">
      <section className={className}>
        {pages.map((p, i) => (
          <SliderItem active={i === currPage}>
            {p.map((a, idx) => onTemplate(a, idx))}
          </SliderItem>
        ))}
      </section>
      <section className="flex space-x-2 justify-center items-center">
        {pages.map((p, i) => (
          <button
            onClick={(e) => {
              setCurrPage(i);
            }}
            className={`${
              i === currPage ? "bg-purple-600" : "bg-purple-200"
            } w-2 h-2 rounded-full`}
          ></button>
        ))}
      </section>
    </section>
  );
}
