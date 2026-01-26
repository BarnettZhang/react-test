import React from "react";
import * as z from "zod";

const TOP_BG_URL = "/CommonSlideTopBackgroundImage.jpg";

export const layoutId = "common-content-with-three-blocks-slide";
export const layoutName = "Common Content With Three Blocks Slide";
export const layoutDescription =
  "A clean slide layout with title and three blocks of content.";

const CommonSlideWithThreeBlocksSchema = z.object({
  title: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Main title of the slide",
  }),
  leftSubtitle: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Subtitle of the left content",
  }),
  leftContent: z.string().min(2).max(500).default("左内容").meta({
    description: "Left content of the slide",
  }),
  middleSubtitle: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Subtitle of the middle content",
  }),
  middleContent: z.string().min(2).max(500).default("中内容").meta({
    description: "Middle content of the slide",
  }),
  rightSubtitle: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Subtitle of the right content",
  }),
  rightContent: z.string().min(2).max(500).default("右内容").meta({
    description: "Right content of the slide",
  }),
});

export const Schema = CommonSlideWithThreeBlocksSchema;

export type CommonSlideWithThreeBlocksData = z.infer<
  typeof CommonSlideWithThreeBlocksSchema
>;

interface CommonSlideWithThreeBlocksLayoutProps {
  data?: Partial<CommonSlideWithThreeBlocksData>;
}

const CommonSlideWithThreeBlocksLayout: React.FC<
  CommonSlideWithThreeBlocksLayoutProps
> = ({ data: slideData }) => {
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
        <div className="absolute left-[5%] top-[20%] text-left text-black w-[90%] flex gap-[20px] h-[70%]">
          <div className="w-[33%] flex flex-col items-center bg-[#f5f5f5] h-full pt-[20px]">
            <div className="text-[54pt] text-[#b02418]">01</div>
            <div className="text-[18pt] text-white bg-[#b02418] w-fit max-w-full p-[20px] py-[10px]">
              {slideData?.leftSubtitle || "工作汇报模板"}
            </div>
            <div className="text-[14pt] text-black w-full p-[20px]">
              {slideData?.leftContent || "左内容"}
            </div>
          </div>
          <div className="w-[33%] flex flex-col items-center bg-[#f5f5f5] h-full pt-[20px]">
            <div className="text-[54pt] text-[#b02418]">02</div>
            <div className="text-[16pt] text-white bg-[#b02418] w-fit max-w-full px-[20px] py-[10px]">
              {slideData?.middleSubtitle || "工作汇报模板"}
            </div>
            <div className="text-[14pt] text-black w-full p-[20px]">
              {slideData?.middleContent || "中内容"}
            </div>
          </div>
          <div className="w-[33%] flex flex-col items-center bg-[#f5f5f5] h-full pt-[20px]">
            <div className="text-[54pt] text-[#b02418]">03</div>
            <div className="text-[16pt] text-white bg-[#b02418] w-fit max-w-full px-[20px] py-[10px]">
              {slideData?.rightSubtitle || "工作汇报模板"}
            </div>
            <div className="text-[14pt] text-black w-full p-[20px]">
              {slideData?.rightContent || "右内容"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonSlideWithThreeBlocksLayout;
