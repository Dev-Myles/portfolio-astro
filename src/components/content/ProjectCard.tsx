import type { ProjectsState } from "./Projects"
import createKey from '../../util/keyId'
import imageMap from '../../util/imageMap'

export interface CardProps{
    toggleState: (card: ProjectsState) => void
    key: string
      projectType: string
        dateCompleted: string
        live: string
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



const ProjectCard: React.FC<CardProps> = ({toggleState, name, desc, links, libraries, video, stateType, projectType, dateCompleted, live})=>{
    
    const thisCard: ProjectsState = {
    selected: true,
    name,
    desc,
    libraries,
    links,
    video,
    projectType,
    dateCompleted, 
    live

    }

    if(stateType){
        return (
          
                <div className="flex flex-col p-4 bg-neutral-50 w-11/12 shadow-xl xl:w-2/3 mx-auto rounded-xl" >
            <div className="flex h-fit  justify-start items-center">
            <div className="w-fit rounded-full  px-4 py-1 flex justify-center items-center bg-gray-200 hover:bg-slate-300 duration-300 hover:cursor-pointer" onClick={()=>toggleState(thisCard)}>
           <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m2 11l7-9v5c11.953 0 13.332 9.678 13 15c-.502-2.685-.735-7-13-7v5l-7-9Z"/></svg>
            <span className="pl-1 font-bold">Back</span>
            </div>
            </div>
             <div className="text-center mb-3 mt-2 sm:mt-0 text-xl">
                            <h4  className='font-PopBold  inline mr-2'>
                                Project Type: 
                            </h4>
                            <span>
                                {projectType}
                            </span>
                        </div>
            <div className="flex flex-col  justify-around lg:flex-row-reverse ">
                   
                <div className="lg:w-1/2">
                    <video  controls src={video} />
                </div>
                <div className="lg:w-1/2 lg:px-3 lg:mr-1">
                    <div className="flex justify-around my-3">
                    
                   
                   
                                 <div className="text-center mx-2">
                            <h4 className='font-PopBold underline underline-offset-2'>
                                Date Completed
                            </h4>
                            <span>
                                {dateCompleted}
                            </span>
                        </div>
                                 <div className="text-center mx-2">
                            <h4 className='font-PopBold underline underline-offset-2'>
                                Live
                            </h4>
                            <span>
                                {live}
                            </span>
                        </div>
                    </div>
                    <p className="overflow-y-scroll h-60 sm:h-fit sm:overflow-y-hidden lg:overflow-y-scroll lg:h-48 mb-3">{desc}</p>
                        <h4 className="text-center">Tech Used:</h4>
                    <ul className="[&>li]:inline flex justify-center flex-wrap [&>li]:mx-2">
                        {libraries.map((e)=><li className='flex h-fit text-xl align-middle justify-center items-center' key={createKey()}>{e} {imageMap.get(e)}</li>)}
                    </ul>
                </div>
            </div>
            <div className="mx-auto mt-5 [&>a:hover]:underline  [&>a]:shadow-lg [&>a]:mx-4 [&>a]:bg-[#f39f86] [&>a]:px-6 text-xl [&>a]:py-1 [&>a]:rounded-full [&>a]:font-PopBold">
            <a href={links.repo}>
                Repo
                </a>
            <a href={links.live}>Live</a>

            </div>
        </div>
        )
    }
    return (
        <div className="flex flex-col p-4 bg-neutral-50 transition-opacity ease-in-out shadow-xl w-11/12 md:w-2/3 mx-2 my-2 lg:w-1/3 xl:w-1/4  rounded-xl" >

            <h2 className="text-2xl ">{name}</h2>
            <div className="flex flex-col my-4 justify-around">
                <div>
                    <video controls src={video} />
                </div>
              
            </div>
          <button onClick={()=>toggleState(thisCard)} className="hover:cursor-pointer text-center px-4 w-fit mx-auto rounded-full font-HindReg  hover:scale-105 duration-300 text-xl text-white  hover:bg-gray-700 bg-gray-600 py-2 shadow-md"><strong>Details...</strong></button>
        </div>
    )
}


export default ProjectCard;