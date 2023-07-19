/* eslint-disable max-len */
import {
    Burger,
    Group,
    Header,
    Image,
    Paper,
    Stack,
    Text,
    Transition,
    createStyles,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ColorSchemeToggle } from '@/components/ColorSchemetoggler';

const HEADER_HEIGHT = 90;

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
        // backgroundColor: '#6B94B3',
    },

    dropdown: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',
        // backgroundColor: 'white',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    header: {
        position: 'sticky',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },

        [theme.fn.smallerThan('sm')]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },
}));

const NavigationHeader = () => {
    const [opened, { toggle: settoggle }] = useDisclosure(false);
    const { classes } = useStyles();
    const Router = useRouter();


    return (
        <div className="sticky top-0 z-[1000] ">
            <Header height={HEADER_HEIGHT} className={`${classes.root} bg-[#6B94B3]/80 md:bg-[#6B94B3] backdrop-blur-sm`}>
                <div className="tracking-wide">
                    <div className="flex justify-between  mx-5 lg:mx-10">
                        <div className="w-[10%] md:w-[15%] flex justify-start items-center">
                            <Link href="/" id="">
                                <Image alt='logo' height={40} width={40} src="/favicon.ico" />
                            </Link>
                        </div>
                        <div className=" flex md:hidden justify-center items-center">
                            <div className="mb-6 mr-4">
                                <ColorSchemeToggle />
                            </div>
                            <Burger
                                opened={opened}
                                onClick={settoggle}
                                className={`${classes.burger} text-white`}
                                size="sm"
                                color="black"
                            />
                        </div>
                        <div className="w-[70%] hidden md:flex items-center justify-center">
                            <Group spacing={20} className={classes.links}>
                                <Link href="/" id="">
                                    <Text className="text-white hover:text-gray-300 underline-offset-4 text-sm">
                                        Resource Center
                                    </Text>
                                </Link>
                                <Link href="/hazardForms" id="">
                                    <Text className="text-white hover:text-gray-300 underline-offset-4 text-sm">
                                        Hazard Forms
                                    </Text>
                                </Link>
                                <Link href="/terabuilder" id="">
                                    <Text className="text-white hover:text-gray-300 underline-offset-4 text-sm">
                                        TERABuilder
                                    </Text>
                                </Link>
                                <Link href="#" id="">
                                    <Text className="text-white hover:text-gray-300 underline-offset-4 text-sm">
                                        Dashboard
                                    </Text>
                                </Link>
                                <div className="mb-6">
                                    <ColorSchemeToggle />
                                </div>
                            </Group>
                        </div>
                        <div className="w-[20%] md:w-[15%] hidden md:flex justify-end items-center text-sm">
                            <div className="">
                                <Image alt='logo' height={35} width={35} src="/favicon.ico" />
                            </div>
                            <div className="ml-2">
                                <Text className="text-white">
                                    John Deo
                                </Text>
                                <div className="lg:flex">
                                    <Text className="text-white hover:text-red-600 hover:underline underline-offset-4 cursor-pointer">
                                        logout
                                    </Text>
                                    <Text className="hidden lg:block text-white px-2">
                                        |
                                    </Text>
                                    <Text className="text-white hover:text-gray-300 hover:underline underline-offset-4 cursor-pointer">
                                        My Account
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <Transition transition="pop-top-right" duration={200} mounted={opened}>
                            {(styles) => (
                                <Paper className={`${classes.dropdown} bg-[#6B94B3]/80 md:bg-[#6B94B3]`} style={styles}>
                                    <Stack align="" className="" spacing="xl">
                                        <div className="w-full px-5 py-10 ">
                                            <Stack align="" spacing="xl">
                                                <Link href="#" id="">
                                                    <Text className="text-white hover:text-gray-300 hover:underline underline-offset-4">
                                                        Dashboard
                                                    </Text>
                                                </Link>
                                                <Link href="/" id="">
                                                    <Text className="text-white hover:text-gray-300 hover:underline underline-offset-4">
                                                        Resource Center
                                                    </Text>
                                                </Link>
                                                <Link href="/hazardForms" id="">
                                                    <Text className="text-white hover:text-gray-300 hover:underline underline-offset-4">
                                                        Hazard Forms
                                                    </Text>
                                                </Link>
                                                <Link href="/terabuilder" id="">
                                                    <Text className="text-white hover:text-gray-300 hover:underline underline-offset-4">
                                                        TERABuilder
                                                    </Text>
                                                </Link>

                                            </Stack>
                                        </div>
                                    </Stack>
                                </Paper>
                            )}
                        </Transition>
                    </div>
                </div>
            </Header>
        </div>
    );
};

export default NavigationHeader;
