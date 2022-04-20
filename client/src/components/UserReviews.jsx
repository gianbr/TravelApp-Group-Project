import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { addReview, getIsAdmin } from "../actions";

export default function UserReviews() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const admin = useSelector((state) => state.isAdmin);
  const user = localStorage.getItem("user");
  const [input, setInput] = useState({
    score: 0,
    comments: [{ body: "" }],
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
  useEffect(() => {
    dispatch(getIsAdmin());
  }, [dispatch]);

  function handleScore(e) {
    e.preventDefault(e);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleComments(e) {
    e.preventDefault();
    setInput({
      ...input,
      comments: [{ ...input.comments.body, body: e.target.value }],
    });
  }

  console.log(input);
  function handleSubmit(e) {
    if (!input.comments) {
      e.preventDefault();
      swal({
        title: "Complete todos los campos",
        icon: "error",
      });
    } else {
      e.preventDefault();
      const toni = { ...input, score: Number(input.score) };
      console.log(input);
      dispatch(addReview(id, toni));
      swal({ title: "¡Servicio creado exitosamente!", icon: "success" });
      setShowModal(false);
    }
  }

  return (
    <>
      {user && !admin ? (
        <div flex items-center>
          <button
            className="flex mb-20 mx-auto  bg-indigo-400 text-white active:bg-blue-300 font-bold uppercase text-sm px-3 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Añadir experiencia
          </button>
        </div>
      ) : null}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Calificación y Experiencia
                  </h3>
                  <button
                    className="p-1 ml-20 bg-transparent border-0 text-black opacity-5 text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form onSubmit="">
                    <div className="form-group mb-6">
                      <h3>Puntuación:</h3>
                      <div
                        className="flex flex-row-reverse w-full justify-center items-center pt-6"
                        onChange={(e) => handleScore(e)}
                      >
                        <input
                          type="checkbox"
                          id="5"
                          class="hidden peer"
                          name="score"
                          value="5"
                        />
                        <label
                          for="5"
                          class="w-10 h-10 cursor-pointer text-black border-gray-500 peer-checked:text-yellow-400 peer-hover:text-yellow-400"
                        >
                          {star}
                        </label>
                        <input
                          type="checkbox"
                          id="4"
                          class="hidden peer"
                          name="score"
                          value="4"
                        />
                        <label
                          for="4"
                          class="w-10 h-10 cursor-pointer text-black border-gray-500 peer-checked:text-yellow-400 peer-hover:text-yellow-400"
                        >
                          {star}
                        </label>
                        <input
                          type="checkbox"
                          id="3"
                          class="hidden peer"
                          name="score"
                          value="3"
                        />
                        <label
                          for="3"
                          class="w-10 h-10 cursor-pointer text-black border-gray-500 peer-checked:text-yellow-400 peer-hover:text-yellow-400"
                        >
                          {star}
                        </label>
                        <input
                          type="checkbox"
                          id="2"
                          class="hidden peer"
                          name="score"
                          value="2"
                        />
                        <label
                          for="2"
                          class="w-10 h-10 cursor-pointer text-black border-gray-500 peer-checked:text-yellow-400 peer-hover:text-yellow-400"
                        >
                          {star}
                        </label>
                        <input
                          type="checkbox"
                          id="1"
                          class="hidden peer"
                          name="score"
                          value="1"
                        />
                        <label
                          for="1"
                          class="w-10 h-10 cursor-pointer text-black border-gray-500 peer-checked:text-yellow-400 peer-hover:text-yellow-400"
                        >
                          {star}
                        </label>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="py-4">Comentario:</h3>
                      <textarea
                        className="
                                  block
                                  w-full
                                  px-3
                                  py-1.5
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                  "
                        id="comments"
                        name="comments"
                        rows="3"
                        placeholder="Contá tu experiencia"
                        onChange={(e) => handleComments(e)}
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
