import { useContext } from "react"
import { NavLink } from "react-router-dom";
import { CrochetContext } from "../helper/CrochetContext";

export function CrochetGallery(){
  const data = useContext(CrochetContext)

  if (data == null)
    return

    return (
        <div className="grid md:grid-cols-4 sm:ml-4 sm:mr-4 gap-8 mb-10 sm:mt-10 justify-items-center text-center md:mt-20 mt-20">
            {data.map(cp => (
              <div key={cp.id} className="hover:scale-110 transform transition">
                <div title={`${cp.pattern_name}`} key={cp.id} className="sm:w-92 sm:h-92 w-47 h-47 flex flex-col
                  items-center justify-center rounded-lg bg-[#A5B452] hover:opacity-50">
                  <NavLink to={`pattern/${cp.id}`}><img className="sm:w-85 sm:h-85 w-40 h-40 drop-shadow-lg rounded-lg" src={`/FreeCrochetPatterns/${cp.image}`}/></NavLink>
                </div>
                <p className="text-sm sm:text-2xl">{cp.pattern_name}</p>
              </div>
            ))}
        </div>
    )
}