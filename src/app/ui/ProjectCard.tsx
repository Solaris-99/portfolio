import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function ProjectCard() {
  return (
    <Card className="flex-row">
      <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
        <div className="w-fit">

        <CardHeader>
          <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
        <CardBody>
          <p>description</p>
        </CardBody>
        </div>
    </Card>
  );
}