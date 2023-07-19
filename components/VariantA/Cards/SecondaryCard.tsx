import { Card } from "@mantine/core";
import Link from "next/link";

export default function SecondaryCard(props: any) {
    return (

        <div className="">
            <Card
                sx={(theme) => ({
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#F5F5F5',
                    color: theme.colorScheme === 'dark' ? 'white' : 'black',
                })}
                p="md"
                pb={0}
                className={`${props.disable ? ' cursor-not-allowed' : 'hover:shadow-2xl'}  rounded-md p-4 w-[18rem] h-[16rem] mb-4 lg:mb-0 cursor-pointer duration-300`}
            >
                <Card.Section>
                    <div>
                        <Link href={`${props.link || '#'}`}>
                            <div className={`rounded-full ${props.iconBgColor} mb-4 mt-6 text-center h-16 w-16 mx-auto flex items-center justify-center text-white`}>{props.icon}</div>
                            <p className={`font-bold text-lg ${props.disable ? 'text-black/50 ' : ''}text-center`}>{props.title}</p>
                        </Link>
                        {props.form && (
                            <p className={`mt-2 text-sm text-center `}><Link href={`${props.form}`} className={`mt-2 text-sm ${props.disable ? 'text-blue-200 !cursor-not-allowed ' : 'text-blue-500 '} text-center `} >New form</Link></p>
                        )}
                    </div>
                </Card.Section>
            </Card>
        </div>

    )
}
