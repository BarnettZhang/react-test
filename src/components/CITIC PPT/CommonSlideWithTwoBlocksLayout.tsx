import React from "react";
import * as z from "zod";

const TOP_BG_URL = "/CommonSlideTopBackgroundImage.jpg";

export const layoutId = "common-content-with-two-blocks-slide";
export const layoutName = "Common Content With Two Blocks Slide";
export const layoutDescription =
  "A clean slide layout with title and two blocks of content.";

const CommonSlideWithTwoBlocksSchema = z.object({
  title: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Main title of the slide",
  }),
  leftSubtitle: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Subtitle of the left content",
  }),
  leftContent: z.string().min(2).max(500).default("左内容").meta({
    description: "Left content of the slide",
  }),
  rightSubtitle: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Subtitle of the right content",
  }),
  rightContent: z.string().min(2).max(500).default("右内容").meta({
    description: "Right content of the slide",
  }),
});

export const Schema = CommonSlideWithTwoBlocksSchema;

export type CommonSlideWithTwoBlocksData = z.infer<
  typeof CommonSlideWithTwoBlocksSchema
>;

interface CommonSlideWithTwoBlocksLayoutProps {
  data?: Partial<CommonSlideWithTwoBlocksData>;
}

const CommonSlideWithTwoBlocksLayout: React.FC<
  CommonSlideWithTwoBlocksLayoutProps
> = ({ data: slideData }) => {
  const renderTemplate = () => {
    const rand = Math.random();
    if (rand > 0.5) {
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
            <div className="absolute left-[5%] top-[25%] text-left text-black w-[90%] flex gap-[20px]">
              <div className="relative w-[50%]">
                <div className="text-[18pt] text-white bg-[#b02418] w-full px-[20px] py-[10px] z-[50]">
                  <span className="inline-flex bg-white text-[#b02418] px-[5px] py-[3px] mr-[5px]">
                    01
                  </span>
                  {slideData?.leftSubtitle || "左标题"}
                </div>
                <div className="w-full text-[14pt] font-[400] z-[30] bg-[#f2f2f2] py-[40px] px-[20px] h-full">
                  {slideData?.leftContent || "左内容"}
                </div>
                <div className="w-full h-[3px] bg-[#b02418]"></div>
              </div>
              <div className="relative w-[50%]">
                <div className="text-[18pt] text-white bg-[#b02418] w-full px-[20px] py-[10px] z-[50]">
                  <span className="inline-flex  bg-white text-[#b02418] px-[5px] py-[3px] mr-[5px]">
                    02
                  </span>
                  {slideData?.rightSubtitle || "右标题"}
                </div>
                <div className="w-full text-[14pt] font-[400] z-[30] bg-[#f2f2f2] py-[40px] px-[20px] h-full">
                  {slideData?.rightContent || "右内容"}
                </div>
                <div className="w-full h-[3px] bg-[#b02418]"></div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
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
            <div className="absolute left-[5%] top-[15%] text-left text-black w-[90%] h-[calc(100%-70px)]">
              <div className="absolute top-0 w-full">
                <div className="text-[18pt] text-white bg-[#b02418] w-fit px-[20px] py-[10px] z-[50]">
                  01 ｜ {slideData?.leftSubtitle || "左标题"}
                </div>
                <div className="text-[14pt] font-[400] w-[75%] z-[30] bg-[#f2f2f2] py-[40px] px-[20px]">
                  {slideData?.leftContent || "左内容"}
                </div>
              </div>
              <div className="absolute top-[48%] left-[25%] w-full">
                <div className="text-[18pt] text-white bg-[#b02418] w-fit px-[20px] py-[10px] z-[50]">
                  02 | {slideData?.rightSubtitle || "右标题"}
                </div>
                <div className="text-[14pt] font-[400] w-[75%] z-[30] bg-[#f2f2f2] py-[40px] px-[20px]">
                  {slideData?.rightContent || "右内容"}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return <>{renderTemplate()}</>;
};

export default CommonSlideWithTwoBlocksLayout;
