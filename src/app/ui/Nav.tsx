import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Switch} from "@nextui-org/react";
import ThemeSwitch from '@/app/ui/ThemeSwitch'
import { translations } from '../../../public/locale/translations';
const navLocale = translations.nav;

export default function Nav({lang, setLang, className}: {lang:"en"| "es", setLang:()=>void, className:string}) {
  const changeTheme = ()=>{
    const html = document.getElementsByTagName("html")[0];
    if(html.className == "dark"){
      html.className = "light"
    }else{
      html.className = "dark"
    }
  }


  return (
    <Navbar className={className}>
      <NavbarBrand>
        <div className="mr-2 font-mono">
            &gt;
            <span className="blinking-cursor">_</span>
        </div>
        <p className="font-bold text-inherit">Emanuel Cifuentes</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#home">
            {navLocale[lang].home }
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#projects">
            {navLocale[lang].projects }        
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#experience">
              {navLocale[lang].experience }          
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contact">
              {navLocale[lang].contact }          
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Switch size="sm" color="default" onClick={()=>setLang()}>{lang.toUpperCase()}</Switch>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch lang={lang} handleTheme={()=>{changeTheme()}}/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}