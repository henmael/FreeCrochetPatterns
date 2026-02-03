import { useContext } from "react";
import { useParams } from "react-router-dom"
import { CrochetContext } from "../helper/CrochetContext";
import { Chip, Rating } from "@mui/material";
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';

export function CrochetPattern(){
    const id = useParams();

      const pattern = useContext(CrochetContext);

      var specificPattern = pattern.find(i => i.id.toString() == id.id);
      if (!specificPattern)
        return <p>Loading pattern...</p>

      if (!specificPattern.image)
        return <p>No image...</p>
    
    return (
        <div className="flex justify-center text-left gap-50 mt-10">
            <div className="flex flex-col gap-3">
                <h1 className="text-7xl leading-none w-40">{specificPattern.pattern_name.toUpperCase()}</h1>
                {specificPattern.note ? <p className="text-2xl text-bold w-100 text-[#F374AE]">NOTE: {specificPattern.note}</p> : ''}
                <Rating name="half-rating" defaultValue={specificPattern.skill_level} precision={1} max={6} readOnly
                emptyIcon={<StarRateOutlinedIcon style={{color: 'white', opacity: 0.8}}/>}/>
                <div className="flex gap-2">
                    {specificPattern.materials.map(material => (
                        <Chip label={material} style={{backgroundColor: '#F374AE', color: "white", fontWeight: "bold", fontSize: "1rem"}} className="w-fit"/>
                    ))}
                </div>
                <p className="text-3xl mt-10">Pattern</p>
                <ul className="text-2xl">
                    {specificPattern.pattern.map(rounds => (
                        <li>
                                {rounds}
                            </li>
                    ))}
            </ul>
            </div>
            <img title={`${specificPattern.pattern_name}`} className="w-150 outline-20 rounded-lg outline-solid outline-[#A5B452]" 
                src={`/${specificPattern.image}`} alt={`${specificPattern.pattern_name}`}/>
        </div>
    )
}