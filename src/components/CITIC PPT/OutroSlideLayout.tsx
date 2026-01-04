import React from "react";
import * as z from "zod";

const BG_URL = "/OutroSlideBackgroundImage.png";

export const layoutId = "general-outro-slide";
export const layoutName = "Outro Slide";
export const layoutDescription = "A clean slide layout with outro.";

const OutroSlideSchema = z.object({
  Outro: z.string().min(3).max(40).default("汇报完毕").meta({
    description: "Outro of the slide",
  }),
});

export const Schema = OutroSlideSchema;

export type OutroSlideData = z.infer<typeof OutroSlideSchema>;

interface OutroSlideLayoutProps {
  data?: Partial<OutroSlideData>;
}

const OutroSlideLayout: React.FC<OutroSlideLayoutProps> = ({
  data: slideData,
}) => {
  return (
    <>
      <div
        className='relative flex w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-cover bg-white bg-center z-20 mx-auto overflow-hidden font-["楷体\_GB2312","楷体","Kai","DFKai-SB","serif"]'
        style={{ backgroundImage: `url('${BG_URL}')` }}
      >
        {/* Title */}
        <div className="m-auto text-[48pt] font-bold text-black">
          {slideData?.Outro || "汇报完毕"}
        </div>
      </div>
    </>
  );
};

export default OutroSlideLayout;
