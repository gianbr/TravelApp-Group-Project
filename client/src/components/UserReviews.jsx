import React, { useState } from "react";

export default function UserReviews() {
  const [input, setInput] = useState({
    rating: 1,
  });

  const star = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  function handleChange(e) {
    e.preventDefault(e);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div
      className="flex flex-row-reverse w-full justify-center items-center pt-6"
      onChange={(e) => handleChange(e)}
    >
      <input type="checkbox" id="5" class="hidden peer" value="5" />
      <label
        for="5"
        class="w-10 h-10 cursor-pointer text-black border-gray-500 peer-checked:text-yellow-400 peer-hover:text-yellow-400"
      >
        {star}
      </label>
      <input type="checkbox" id="4" class="hidden peer" value="4" />
      <label
        for="4"
        class="w-10 h-10 cursor-pointer text-black border-gray-500 peer-checked:text-yellow-400 peer-hover:text-yellow-400"
      >
        {star}
      </label>
      <input type="checkbox" id="3" class="hidden peer" value="3" />
      <label
        for="3"
        class="w-10 h-10 cursor-pointer text-black border-gray-500 peer-checked:text-yellow-400 peer-hover:text-yellow-400"
      >
        {star}
      </label>
      <input type="checkbox" id="2" class="hidden peer" value="2" />
      <label
        for="2"
        class="w-10 h-10 cursor-pointer text-black border-gray-500 peer-checked:text-yellow-400 peer-hover:text-yellow-400"
      >
        {star}
      </label>
      <input type="checkbox" id="1" class="hidden peer" value="1" />
      <label
        for="1"
        class="w-10 h-10 cursor-pointer text-black border-gray-500 peer-checked:text-yellow-400 peer-hover:text-yellow-400"
      >
        {star}
      </label>
    </div>
  );
}
