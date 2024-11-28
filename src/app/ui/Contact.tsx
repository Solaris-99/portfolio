import {Card, CardFooter} from "@nextui-org/react";

export default function Contact({name, link, icon}:{name: string, link: string, icon: React.ReactNode}) {
  return (
    <Card
    isFooterBlurred
    className="border-none p-2 m-2 hover:outline-sky-400"
    >
        <a href={link} target="_blank">
        {icon}
        <CardFooter className="text-center block p-2 w-fit mx-auto rounded-lg">
            <p className="text-tiny">{name}</p>
        </CardFooter>
        </a>
    </Card>
  );
}