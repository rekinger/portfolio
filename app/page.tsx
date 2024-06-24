"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/Card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const [isVertical, setIsVertical] = useState(false)

  return (
    <Tabs classNames={{
        tabList: isMobile ? "gap-10 w-screen": "gap-10 w-full",
      }} 
      key={"nav tabs"} variant={"underlined"} isVertical={!isMobile} size={"lg"} aria-label="Tabs variants">
        <Tab key="Me" title="Me">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image 
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">NextUI</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </CardHeader>
            <Divider/>
            <CardBody>
              <p>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
            <Divider/>
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui"
              >
                Visit source code on GitHub.
              </Link>
            </CardFooter>
          </Card>
        </Tab>
        <Tab key="Demos" title="Demos"/>
        <Tab key="Links" title="Links"/>
    </Tabs>
  );
}
