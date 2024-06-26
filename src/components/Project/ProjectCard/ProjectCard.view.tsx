import * as React from "react"
import {withPrefix} from 'gatsby'
import {
    Text,
    Group,
    Card,
    Avatar,
    Stack,
    NumberFormatter,
    ActionIcon,
    rem
} from '@mantine/core'
import {IconBrandGithub, IconWorld, IconBrandSlack, IconBrandDiscord} from '@tabler/icons-react'
import type {Project} from "@core/types";


type Props = {
    repo: Project;
}


export default function ProjectCardView({repo}: Props): React.JSX.Element {
    return <>
        <Card withBorder padding="xl" radius="md">
            <Card.Section
                h={80}
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.03)',
                }}
            />
            <Avatar
                src={repo.hosted_logo ? withPrefix(`/hosted_logos/${repo.hosted_logo}`) : repo.owner.avatar_url}
                size={80}
                mx="auto"
                mt={-40}
            />
            <Text ta="center" size="lg" fw={700} mt="sm" tt="uppercase">
                {repo.name}
            </Text>
            <Text ta="center" size="xs" tt="uppercase">
                {repo.owner.login}
            </Text>
            <Text mt="xs" c="dimmed" size="sm" lineClamp={2}>
                {repo.description}
            </Text>
            <Group mt="md" justify="space-evenly">
                <Stack>
                    <Text ta="center" fz="lg">
                        <NumberFormatter value={repo.stargazers_count} thousandSeparator/>
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed" lh={1}>
                        Stars
                    </Text>
                </Stack>
                <Stack>
                    <Text ta="center" fz="lg">
                        <NumberFormatter value={repo.forks_count} thousandSeparator/>
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed" lh={1}>
                        Forks
                    </Text>
                </Stack>
                <Stack>
                    <Text ta="center" fz="lg">
                        <NumberFormatter value={repo.open_issues_count} thousandSeparator/>
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed" lh={1}>
                        Open Issues
                    </Text>
                </Stack>
            </Group>
            <Group justify="flex-end" gap="sm" mt="xl">
                {repo.slack_url && (
                    <ActionIcon variant="default" size="xl"
                                component="a"
                                href={repo.slack_url}
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                                target="_blank" rel="noopener noreferrer"
                    >
                        <IconBrandSlack style={{width: rem(20)}} stroke={1.5}/>
                    </ActionIcon>
                )}
                {repo.discord_url && (
                    <ActionIcon variant="default" size="xl"
                                component="a"
                                href={repo.discord_url}
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                                target="_blank" rel="noopener noreferrer"
                    >
                        <IconBrandDiscord style={{width: rem(20)}} stroke={1.5}/>
                    </ActionIcon>
                )}
                {repo.homepage && (
                    <ActionIcon variant="default" size="xl"
                                component="a"
                                href={repo.homepage}
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                                target="_blank" rel="noopener noreferrer"
                    >
                        <IconWorld style={{width: rem(20)}} stroke={1.5}/>
                    </ActionIcon>
                )}
                {repo.html_url && (
                    <ActionIcon variant="default" size="xl"
                                component="a"
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                                href={repo.html_url}
                                target="_blank" rel="noopener noreferrer"
                    >
                        <IconBrandGithub style={{width: rem(20)}} stroke={1.5}/>
                    </ActionIcon>
                )}
            </Group>
        </Card>
    </>
}
