
import ProjectCard from './ProjectCard'
import projectInfo from '../../util/projectInfo.json'
import createKey from '../../util/keyId'
import {useState} from 'react';


export interface ProjectsState{
    selected: boolean
    name: string
    desc: string
    libraries: string[]
    links: {
        repo:string
        live:string
    }
    video:string
    projectType: string
    live: string
    dateCompleted: string
}

const initialState: ProjectsState = {
    selected: false,
    name: '',
    desc: '',
    libraries: [],
    links: {
        repo: '',
        live: ''
    },
    video: '',
    projectType: '',
    live: '',
    dateCompleted: ''

}

const Projects: React.FC = () =>{
const [isCard, setCard] = useState<ProjectsState>(initialState);

function setProjectState(card: ProjectsState){
    if(isCard.selected){
        return setCard(initialState)
    }else{
        return setCard({
    selected: true,
    name: card.name,
    desc: card.desc,
    libraries: [...card.libraries],
    links: {
        repo: card.links.repo,
        live: card.links.live
    },
    video: card.video,
    projectType: card.projectType,
    live: card.live,
    dateCompleted: card.dateCompleted
        })
    }
}

if(!isCard.selected){
    return(
<div className="flex flex-col mb-5">
    <h2 className='text-4xl lg:text-6xl text-center  w-fit shadow-md rounded-3xl  mx-auto mb-5 py-2 px-8 bg-white'>Projects</h2>
    <div className='flex flex-wrap justify-center'>
            {
        projectInfo.projects.map((e) => {
            return (
                    <ProjectCard
                    key={createKey()}
                    toggleState={setProjectState}
                    name={e.name}
                    desc={e.desc}
                    libraries={e.libraries}
                    links={e.links}
                    video={e.video}
                    stateType={isCard.selected}
                    projectType={e.projectType}
                    dateCompleted={e.dateCompleted}
                    live={e.live}
                />
            )
              
        })
    }
    </div>

</div>
    )
}

    return (
        <div className='mb-5'>
    <h2 className='text-2xl sm:text-4xl lg:text-6xl text-center  w-fit shadow-md rounded-3xl  mx-auto mb-5 py-2 px-8 bg-white'>Project: {isCard.name}</h2>
                    <ProjectCard         
        key={createKey()}
                    name={isCard.name}
                    toggleState={setProjectState}
                    desc={isCard.desc}
                    libraries={isCard.libraries}
                    links={isCard.links}
                    video={isCard.video}
                    stateType={isCard.selected}
                    projectType={isCard.projectType}
                    dateCompleted={isCard.dateCompleted}
                    live={isCard.live}
                    
                    />
        
        </div>

    )
}

export default Projects;

