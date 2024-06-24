"use client";
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
        </Tab>
        <Tab key="Demos" title="Demos"/>
        <Tab key="Links" title="Links"/>
    </Tabs>
  );
}
