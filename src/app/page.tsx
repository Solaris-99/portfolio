'use client'

import { experience } from './../../public/locale/experience';
import { translations } from '../../public/locale/translations';
import { useState } from 'react';
import ProjectCard from '@/app/ui/ProjectCard';
import Nav from '@/app/ui/Nav'
import { projectItem, projects } from '../../public/locale/projects';
import { Divider } from '@nextui-org/react';
import ExperienceCard from './ui/ExperienceCard';
import Github from './ui/icons/Github';
import Contact from './ui/Contact';
import LinkedIn from './ui/icons/LinkedIn';
import Gmail from './ui/icons/Gmail';
import ProjectView from './ui/ProjectView';
export default function Home(){
    const [lang, setLang] = useState<"en"|"es">('en');
    const [selectedProject, setSelectedProject] = useState<projectItem>(projects[projects.length-1]);
    const changeLang = ()=>{
        if(lang == 'en'){
            setLang('es')
        }
        else{
            setLang('en')
        }
    }
    const home = translations.home

    return (
        <div>
            <Nav className="border-b border-sky-400" lang={lang} setLang={changeLang} ></Nav>
            <div className='w-11/12 mx-auto '>
                <header id='home' className='flex my-48 py-4'>
                    <div className='w-2/4'>
                        <p className="text-xl">{home[lang].greeting[0]}</p>
                        <h2 className='text-3xl'>{home[lang].greeting[1]}</h2> {/* name */}
                        <h1 className='text-6xl'>{home[lang].greeting[2]}</h1> {/* title */}
                        <p>{home[lang].bio}</p>
                    </div>
                    <div>

                    </div>
                </header>
                <Divider/>
                <main>
                    <section id='projects'>
                        <h2>{home[lang].projectTitle}</h2>
                        <div className='flex h-75vh'>
                            <div className='w-5/12 overflow-auto'>  
                                {
                                    projects.toReversed().map((e,i)=>{
                                        return <ProjectCard setProject={setSelectedProject} project={e} lang={lang} key={i}/>
                                    })
                                }
                            </div>
                            <div className='w-7/12 p-2'>
                                <ProjectView project={selectedProject} lang={lang} />
                            </div>
                        </div>
                    </section>
                    <Divider/>
                    <section id='experience'>
                        <h2 className='my-4'>{home[lang].experienceTitle}</h2>
                        <div>
                            {
                                experience.toReversed().map((e,i)=>{
                                    return <ExperienceCard exp={e} lang={lang} key={i}/>
                                })
                            }
                        </div>
                    </section>
                    <Divider/>
                    <section id='contact'>
                        <h2>{home[lang].contactTitle}</h2>
                        <div className='flex justify-center'>
                            <Contact icon={<Github className={""} width={75} height={75}/>} name={"Github"} link={"https://github.com/Solaris-99"}/>
                            <Contact icon={<Gmail className={""} width={75} height={75}/>} name={"GMail"} link={"mailto:e.cifuentes996@gmail.com"}/>
                            <Contact icon={<LinkedIn className={""} width={75} height={75}/>} name={"LinkedIn"} link={"https://www.linkedin.com/in/emanuel-cifuentes/"}/>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}