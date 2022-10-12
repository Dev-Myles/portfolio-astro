import type { ProjectsState } from "./Projects"
import createKey from '../../util/keyId';
import {AiOutlineClose} from 'react-icons/ai'

export interface CardProps{
    toggleState: (card: ProjectsState) => void
    key: string
    name: string
    desc: string
    links: {
        repo: string
        live: string
    }
    libraries: string[]
    video: string
    stateType: boolean
}

const ProjectCard: React.FC<CardProps> = ({toggleState, name, desc, links, libraries, video, stateType})=>{
    
    const thisCard: ProjectsState = {
    selected: true,
    name,
    desc,
    libraries,
    links,
    video,

    }

    if(stateType){
        return (
            
                <div className="flex flex-col p-4 bg-white w-11/12 lg:w-1/2 mx-auto rounded-lg" >
            <div className="flex justify-end items-center">
            <div className="w-fit h-fit rounded-full mb-2 p-2 bg-gray-200 hover:bg-slate-300 duration-300 hover:cursor-pointer" onClick={()=>toggleState(thisCard)}>
                <AiOutlineClose/>
            </div>
            </div>
            <div className="flex flex-col  justify-around lg:flex-row-reverse overflow-y-scroll">
                <div className="lg:w-1/2">
                    <video  controls src={video} />
                </div>
                <div className="w-1/2">
                    <p className="">{desc}</p>
                    <ul>
                        <span>Tech Used:</span>
                        {libraries.map((e)=><li key={createKey()}>{e}</li>)}
                    </ul>
                </div>
            </div>
            <div className="mx-auto mt-5 [&>a]:shadow-lg [&>a]:mx-4 [&>a]:bg-[#f39f86] [&>a]:px-4 [&>a]:py-2 [&>a]:rounded-full [&>a]:font-PopBold">
            <a href={links.repo}>Repo</a>
            <a href={links.live}>Live</a>

            </div>
        </div>
            
        )
    }
    return (
        <div className="flex flex-col p-4 bg-white shadow  w-11/12 md:w-2/3 mx-2 my-2 lg:w-1/3 xl:w-1/4  rounded-lg" onClick={()=>toggleState(thisCard)}>

            <h2 className="text-2xl ">{name}</h2>
            <div className="flex flex-col justify-around">
                <div>
                    <video controls src={video} />
                </div>
                <div>
                    <p>{desc}</p>
                    <ul>
                        {libraries.map((e)=><li key={createKey()}>{e}</li>)}
                    </ul>
                </div>
            </div>
          <h3 className="hover:cursor-pointer text-center">Read more...</h3>
        </div>
    )
}


export default ProjectCard;