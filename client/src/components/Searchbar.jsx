import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchDestination } from "../actions";
import { AiOutlineSearch } from "react-icons/ai";
import swal from 'sweetalert';

function Searchbar (){
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    
      const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
      };
    
      const handleClick = (e) => {
        e.preventDefault();
        if (name) {
          dispatch(searchDestination(name));
          setName("");
        } else{swal( {title: "No encontrado", icon: "warning"} );
      }
      };

      return(
        <div className="py-4 mr-4 flex justify-end">
        <form
          onSubmit={(e) => handleClick(e)}
          className="w-full flex justify-between items-center max-w-[700px] mx-auto rounded-2xl border-none text-black bg-gray-100/90 py-1"
        >
          <div>
            <input
              className=" px-3 py-2 font-semibold bg-transparent text-black focus:outline-none rounded-2xl border-none"
              type="text"
              placeholder="Busca tu destino"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <AiOutlineSearch
              size={25}
              className="icon mr-2"
              style={{ color: "#000000 " }}
              onClick={(e) => handleClick(e)}
            />
          </div>
        </form>
      </div>
      );
};
export default Searchbar;