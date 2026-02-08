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
        <div className="grid justify-items-center justify-center sm:gap-50 mb-10 sm:flex sm:text-center mt-10">
            <div className="sm:flex sm:flex-col sm:gap-3 text-center">
                <h1 className="text-2xl sm:text-7xl sm:w-30 sm:w-40">{specificPattern.pattern_name.toUpperCase()}</h1>
                {specificPattern.note ? <p className="text-sm mx-auto sm:text-2xl text-bold w-50 sm:w-100 text-[#F374AE] animate-wiggle">NOTE: {specificPattern.note}</p> : ''}
                <Rating name="half-rating" defaultValue={specificPattern.skill_level} precision={1} max={6} readOnly
                emptyIcon={<StarRateOutlinedIcon style={{color: 'white', opacity: 0.8}}/>}/>
                <div className="grid justify-center sm:justify-normal sm:flex gap-2">
                    {specificPattern.materials.map(material => (
                        <Chip label={material} style={{backgroundColor: '#F374AE', color: "white", fontWeight: "bold", fontSize: "1rem"}} className="w-fit"/>
                    ))}
                </div>
                {specificPattern.pattern ? (
                    <>
                        <p className="text-2xl text-center sm:text-left sm:text-3xl sm:mt-10">Pattern</p>
                        <ul className="whitespace-pre-line text-md mb-10 sm:text-2xl">
                        {specificPattern.pattern.map(rounds => (
                                <li className="text-center sm:text-left w-120">
                                        {rounds}
                                    </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <>
                        <p className="text-2xl text-center sm:text-left sm:text-3xl sm:mt-10">Youtube video patterns for...</p>
                        <ol className="text-left text-md sm:text-2xl mb-10">
                            {Object.entries(specificPattern.video!).map(([video_name, url]) => (
                                <li className="text-center sm:text-left w-120"><a href={`${url}`} target="_blank" rel="noopener noreferrer">{video_name}</a></li>
                            ))}
                        </ol>
                    </>
                )}
            </div>
            <img title={`${specificPattern.pattern_name}`} className="w-50 sm:w-100 sm:h-150 outline-20 rounded-lg outline-solid outline-[#A5B452]" 
                src={`/FreeCrochetPatterns/${specificPattern.image}`} alt={`${specificPattern.pattern_name}`}/>
        </div>
    )
}