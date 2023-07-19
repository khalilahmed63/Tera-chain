import { Card } from "@mantine/core";

export default function PrimaryCard(props: any) {
    return (
        <Card
            sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#F5F5F5',
                color: theme.colorScheme === 'dark' ? 'white' : 'black',
            })}
            p="md"
            pb={0}
            className=" rounded-md p-4 w-[18rem] h-[18rem] mb-4 lg:mb-0 cursor-pointer hover:shadow-2xl duration-300"
        >
            <Card.Section>
                <div >
                    <div className={`rounded-full ${props.iconBgColor} mb-4 mt-6 text-center h-16 w-16 mx-auto flex items-center justify-center text-white`}>{props.icon}</div>
                    <p className="font-bold text-lg text-center">{props.title}</p>
                    <p className="text-center mt-4">{props.desc}</p>
                </div>
            </Card.Section>
        </Card>

    )
}
