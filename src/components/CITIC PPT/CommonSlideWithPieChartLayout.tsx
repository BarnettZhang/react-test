import React from "react";
import * as z from "zod";
import { ChartContainer } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";

const TOP_BG_URL = "/CommonSlideTopBackgroundImage.jpg";

export const layoutId = "common-content-with-pie-chart-slide";
export const layoutName = "Common Content With Pie Chart Slide";
export const layoutDescription =
  "A clean slide layout with title, subtitle, and content with a pie chart.";

const chartConfig = {
  value: {
    label: "Value",
  },
  name: {
    label: "Name",
  },
};

const PieChartDataSchema = z.object({
  type: z.union([z.literal("pie")]),
  data: z
    .array(
      z.object({
        name: z.string().meta({ description: "Data point name" }),
        value: z.number().meta({ description: "Data point value" }),
      }),
    )
    .min(2)
    .max(5),
});

const CommonSlideWithPieChartSchema = z.object({
  title: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Main title of the slide",
  }),
  subtitle: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Subtitle of the slide content",
  }),
  content: z.string().min(2).max(500).default("内容").meta({
    description: "Content of the slide",
  }),
  chartData: z.union([PieChartDataSchema]).default({
    type: "pie",
    data: [
      { name: "A", value: 400 },
      { name: "B", value: 300 },
      { name: "C", value: 300 },
      { name: "D", value: 200 },
    ],
  }),
});

export const Schema = CommonSlideWithPieChartSchema;

export type CommonSlideWithPieChartData = z.infer<
  typeof CommonSlideWithPieChartSchema
>;

interface CommonSlideWithPieChartLayoutProps {
  data?: Partial<CommonSlideWithPieChartData>;
}

const CommonSlideWithPieChartLayout: React.FC<
  CommonSlideWithPieChartLayoutProps
> = ({ data: slideData }) => {
  const chartData = slideData?.chartData?.data || [];
  const color = "#B02418";
  const yAxis = "value";

  const renderChart = () => {
    const renderPieLabel = (props: any) => {
      const { name, percent, x, y, textAnchor } = props;
      return (
        <text x={x} y={y} textAnchor={textAnchor} fill="black" fontSize={12}>
          {`${name} ${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

    return (
      <PieChart margin={{ top: 20, right: 30, left: 40, bottom: 60 }}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill={color}
          dataKey={yAxis}
          label={renderPieLabel}
        >
          {chartData.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`${color}${Math.round(((10 - (index % 10)) / 10) * 255)
                .toString(16)
                .padStart(2, "0")
                .toUpperCase()}`}
            />
          ))}
        </Pie>
      </PieChart>
    );
  };

  return (
    <>
      <div className='relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-cover bg-white bg-center z-20 mx-auto overflow-hidden font-["楷体\_GB2312","楷体","Kai","DFKai-SB","serif"]'>
        <img
          className="absolute top-0 left-0 w-full"
          src={TOP_BG_URL}
          alt="CommonSlideTopBackgroundImage"
        />
        {/* Title */}
        <div className="absolute left-[5%] top-[3%] text-[24pt] font-bold text-left text-black">
          {slideData?.title || "工作汇报模板"}
        </div>
        <div className="absolute left-[5%] top-[25%] text-black w-[90%] flex gap-[40px] h-[65%]">
          <div className="w-[50%]">
            <ChartContainer config={chartConfig} className="h-full w-full">
              {renderChart()}
            </ChartContainer>
          </div>

          <div className="w-[50%] flex flex-col gap-[20px] justify-center">
            <div className="text-[20pt] font-bold">
              {slideData?.subtitle || "标题"}
            </div>
            <div className="h-[1px] bg-black w-full"></div>
            <div className="text-[14pt] font-[400]">
              {slideData?.content || "内容"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonSlideWithPieChartLayout;
