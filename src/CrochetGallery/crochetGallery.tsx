import { useContext } from "react"
import { NavLink } from "react-router-dom";
import { CrochetContext } from "../helper/CrochetContext";

export function CrochetGallery(){

  const data = useContext(CrochetContext);
  if (data == null)
    return

    return (
        <div className="grid grid-cols-4 justify-items-center text-center mt-15 gap-10 mb-10">
            {data.map(cp => (
              <div className="hover:scale-110 transform transition">
                <div title={`${cp.pattern_name}`} key={cp.id} className="w-92 h-92 flex flex-col items-center justify-center rounded-lg bg-[#A5B452] hover:opacity-50">
                  <NavLink to={`pattern/${cp.id}`}><img className="w-85 h-85 drop-shadow-lg rounded-lg" src={cp.image}/></NavLink>
                </div>
                <p className="text-3xl">{cp.pattern_name}</p>
              </div>
            ))}
        </div>
    )
}