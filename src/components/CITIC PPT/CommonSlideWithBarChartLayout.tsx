import React from "react";
import * as z from "zod";
import { ChartContainer } from "@/components/ui/chart";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const TOP_BG_URL = "/CommonSlideTopBackgroundImage.jpg";

export const layoutId = "common-content-with-bar-chart-slide";
export const layoutName = "Common Content With Bar Chart Slide";
export const layoutDescription =
  "A clean slide layout with title, subtitle, and content with a bar chart.";

const chartConfig = {
  value: {
    label: "Value",
  },
  name: {
    label: "Name",
  },
};

const BarChartDataSchema = z.object({
  type: z.union([z.literal("bar")]),
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

const CommonSlideWithBarChartSchema = z.object({
  title: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Main title of the slide",
  }),
  subtitle: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Subtitle of the slide content",
  }),
  content: z.string().min(2).max(500).default("内容").meta({
    description: "Content of the slide",
  }),
  chartData: z.union([BarChartDataSchema]).default({
    type: "bar",
    data: [
      { name: "A", value: 400 },
      { name: "B", value: 300 },
      { name: "C", value: 300 },
      { name: "D", value: 200 },
    ],
  }),
});

export const Schema = CommonSlideWithBarChartSchema;

export type CommonSlideWithBarChartData = z.infer<
  typeof CommonSlideWithBarChartSchema
>;

interface CommonSlideWithBarChartLayoutProps {
  data?: Partial<CommonSlideWithBarChartData>;
}

const CommonSlideWithBarChartLayout: React.FC<
  CommonSlideWithBarChartLayoutProps
> = ({ data: slideData }) => {
  const chartData = slideData?.chartData?.data || [];
  const color = "#B02418";
  const yAxis = "value";

  const renderChart = () => {
    const commonProps = {
      data: chartData,
    };

    return (
      <BarChart {...commonProps}>
        <CartesianGrid strokeDasharray="3 3" stroke={color} />
        <XAxis
          dataKey="name"
          tick={{ fill: "var(--text-body-color,#4b5563)", fontWeight: 600 }}
        />
        <YAxis
          tick={{ fill: "var(--text-body-color,#4b5563)", fontWeight: 600 }}
        />
        <Bar dataKey={yAxis} fill={color} />
      </BarChart>
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

export default CommonSlideWithBarChartLayout;
