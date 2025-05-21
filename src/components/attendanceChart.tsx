


"use client"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { day: "Monday", present: 186, absent: 80 },
    { day: "Tuesday", present: 305, absent: 200 },
    { day: "Wednesday", present: 237, absent: 120 },
    { day: "Thusday", present: 73, absent: 190 },
    { day: "Friday", present: 209, absent: 130 },
    { day: "Saturday", present: 214, absent: 140 },
]

const chartConfig = {
    present: {
        label: "Present",
        color: "hsl(var(--chart-1))",
    },
    absent: {
        label: "Absent",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export default function AttandanceChart() {
    return (

        <div className="sm:w-full md:w-full lg:w-[100%] xl:w-[188%]">
            <Card className="hover:shadow-xl shadow-sky-200 bg-zinc-800 ">
                <CardHeader>
                    <CardTitle>Attendance</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="day"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="dashed" />}
                            />
                            <Bar dataKey="present" fill="var(--color-present)" radius={4} />
                            <Bar dataKey="absent" fill="var(--color-absent)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm">
                    <div className="flex gap-2 font-medium leading-none">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                    </div>
                </CardFooter>
            </Card>
        </div>

    )
}
