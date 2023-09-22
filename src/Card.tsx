import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

interface CardWithLinkProps {
    title: string;
    link: string;
    logo: string;
    description: string;
}

export function CardDefault({ title, link, logo, description }: CardWithLinkProps) {
    return (
        <Card className="mt-6 w-96">
            <CardHeader className="relative h-64 flex items-center justify-center">
                <img
                    src={'/' + logo}
                    alt="card-image"
                    className="h-64"
                />

            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <a href={link}>
                    <Button variant="text" className="flex items-center gap-2">
                        Read More{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </a>
            </CardFooter>
        </Card>
    );
}