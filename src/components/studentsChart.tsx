"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild, faChildDress } from "@fortawesome/free-solid-svg-icons";

const boys = 550;
const girls = 450;

const chartData = [
  { Students: "Boys", value: boys, fill: "var(--color-Boys)" },
  { Students: "Girls", value: girls, fill: "var(--color-Girls)" },
];

const chartConfig = {
  Students: {
    label: "Students",
  },
  Boys: {
    label: "Boys",
    color: "#2563eb",
  },
  Girls: {
    label: "Girls",
    color: "#EC407A",
  },
} satisfies ChartConfig;

export default function CountChart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return (
    <div className="sm:w-full md:w-full lg:w-[99%] xl:w-[110%]">
      <Card className="flex flex-col hover:shadow-2xl shadow-sky-200 bg-zinc-800">
        <CardHeader className="items-center pb-0">
          <CardTitle>Students</CardTitle>
          <CardDescription>January - June 2025</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="Students"
                innerRadius={80}
                outerRadius={100}
                stroke="none"
                cornerRadius={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="text-white"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="text-white text-3xl font-bold"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="text-white"
                          >
                            Students
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex gap-5 mt-1 mb-2">
            <div className="flex border border-sky-500 rounded gap-4 p-2 w-full">
              <FontAwesomeIcon
                icon={faChild}
                size="xl"
                style={{ color: "#74C0FC" }}
              />
              <h1 className="font-bold">Boys</h1>
              <span>{boys}</span>
            </div>
            <div className="flex border border-pink-400 rounded gap-4 p-2 w-full">
              <FontAwesomeIcon
                icon={faChildDress}
                size="xl"
                style={{ color: "#63E6BE" }}
              />
              <h1 className="font-bold">Girls</h1>
              <span>{girls}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
