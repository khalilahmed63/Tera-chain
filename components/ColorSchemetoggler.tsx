import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { FaMoon, FaSun } from 'react-icons/fa';
import { BsMoonStars } from 'react-icons/bs';

export function ColorSchemeToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Group position="center" mt="xl">
            <ActionIcon
                onClick={() => toggleColorScheme()}
                size="xl"
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    color: theme.colorScheme === 'dark' ? 'white' : 'white',
                })}
                className="hover:bg-blue-400"
            >
                {colorScheme === 'dark' ? (
                    <FaSun size={22} />
                ) : (
                    <BsMoonStars size={22} />
                )}
            </ActionIcon>
        </Group>
    );
}
