import * as React from "react"
import {useState} from 'react'
import {Carousel} from "@mantine/carousel";
import {REPOS} from "@core/mock_data";
import {ProjectCard} from '@components/Project';


export default function ProjectsSectionView(): React.JSX.Element {
    const [repos] = useState(() => {
        return REPOS.toSorted((a, b) => b.stargazers_count - a.stargazers_count).filter((repo) => repo.featured);
    });

    return <>
        <Carousel
            mt="lg"
            controlsOffset="lg"
            controlSize={40}
            loop
            align="start"
            slideSize={{base: '100%', sm: '33.333333%'}}
            slideGap={{base: 0, sm: 'lg'}}
            slidesToScroll={1}
        >
            {repos.map((repo) => <Carousel.Slide><ProjectCard repo={repo}/></Carousel.Slide>)}
        </Carousel>
    </>
}
