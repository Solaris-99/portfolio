import {Switch} from "@nextui-org/react";
import {MoonIcon} from "@/app/ui/MoonIcon";
import {SunIcon} from "@/app/ui/SunIcon";

export default function ThemeSwitch({handleTheme, lang}: {handleTheme: ()=>void, lang: string}) {
  return (
    <Switch onClick={handleTheme}
      defaultSelected
      size="sm"
      color="primary"
      thumbIcon={({ isSelected}) =>
        isSelected ? (
          <MoonIcon/>
        ) : (
          <SunIcon/>

        )
      }
    >
      <span className="hidden sm:inline">
        {lang=="en"?"Dark Mode":"Modo oscuro"}
      </span>

    </Switch>
  );
}