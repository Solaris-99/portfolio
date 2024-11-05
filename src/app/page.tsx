'use client'

import { experience } from './../../public/locale/experience';
import { translations } from '../../public/locale/translations';
import { useState } from 'react';
import ProjectCard from '@/app/ui/ProjectCard';
import Nav from '@/app/ui/Nav'

export default function Home(){
    const [lang, setLang] = useState<"en"|"es">('en');
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
            <div className='w-9/12 mx-auto '>
                <header className='flex'>
                    <div>
                        <p>{home[lang].greeting[0]}</p>
                        <h2>{home[lang].greeting[1]}</h2> {/* name */}
                        <h1>{home[lang].greeting[2]}</h1> {/* title */}
                        <p>{home[lang].bio}</p>
                    </div>
                    <div>

                    </div>
                </header>
                <main>
                    <section id='projects'>
                        <h2>{home[lang].projectTitle}</h2>
                        <p>{home[lang].projectBody}</p>
                        <div className='flex max-h-50vh'>
                            <div className='w-5/12 overflow-auto'>  
                                <ProjectCard/>
                                <ProjectCard/>
                                <ProjectCard/>
                                <ProjectCard/>
                            </div>
                            <div>
                                {/* <currentproject/> */}
                            </div>
                        </div>
                    </section>
                    <section id='experience'>
                        <h2>{home[lang].experienceTitle}</h2>
                        card card card...
                    </section>
                    <section id='contact'>
                        <h2>{home[lang].contactTitle}</h2>
                        img img img
                    </section>
                </main>
            </div>
        </div>
    )
}