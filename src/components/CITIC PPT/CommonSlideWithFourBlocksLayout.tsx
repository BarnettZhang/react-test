import React from "react";
import * as z from "zod";

const TOP_BG_URL = "/CommonSlideTopBackgroundImage.jpg";

export const layoutId = "common-content-with-four-blocks-slide";
export const layoutName = "Common Content With Four Blocks Slide";
export const layoutDescription =
  "A clean slide layout with title, subtitle, and four blocks of content.";

const CommonSlideWithFourBlocksSchema = z.object({
  title: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Main title of the slide",
  }),
  subtitle: z.string().min(3).max(40).default("子标题").meta({
    description: "Subtitle of the slide",
  }),
  leftSubtitle: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Subtitle of the left content",
  }),
  leftContent: z.string().min(2).max(500).default("左内容").meta({
    description: "Left content of the slide",
  }),
  midLeftSubtitle: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Subtitle of the middle content",
  }),
  midLeftContent: z.string().min(2).max(500).default("中内容").meta({
    description: "Middle content of the slide",
  }),
  midRightSubtitle: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Subtitle of the middle content",
  }),
  midRightContent: z.string().min(2).max(500).default("中内容").meta({
    description: "Middle content of the slide",
  }),
  rightSubtitle: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Subtitle of the right content",
  }),
  rightContent: z.string().min(2).max(500).default("右内容").meta({
    description: "Right content of the slide",
  }),
});

export const Schema = CommonSlideWithFourBlocksSchema;

export type CommonSlideWithFourBlocksData = z.infer<
  typeof CommonSlideWithFourBlocksSchema
>;

interface CommonSlideWithFourBlocksLayoutProps {
  data?: Partial<CommonSlideWithFourBlocksData>;
}

const CommonSlideWithFourBlocksLayout: React.FC<
  CommonSlideWithFourBlocksLayoutProps
> = ({ data: slideData }) => {
  // const rand = Math.random();
  const rand = 0;
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
          <div className="absolute left-[5%] top-[20%] text-left text-black w-[90%] flex gap-[20px]">
            <div className="w-[25%] bg-[#f5f5f5] flex flex-col items-center px-[20px] py-[20px] gap-[20px]">
              <div className="text-[18pt] w-[40pt] h-[40pt] bg-[#b02418] text-white flex items-center justify-center">
                01
              </div>
              <div className="text-[18pt] text-[#b02418]">
                {slideData?.leftSubtitle || "左标题"}
              </div>
              <div className="h-[1pt] w-full bg-black"></div>
              <div className="text-[14pt] text-black">
                {slideData?.leftContent || "左内容"}
              </div>
            </div>

            <div className="w-[25%] bg-[#f5f5f5] flex flex-col items-center px-[20px] py-[20px] gap-[20px]">
              <div className="text-[18pt] w-[40pt] h-[40pt] bg-[#b02418] text-white flex items-center justify-center">
                02
              </div>
              <div className="text-[18pt] text-[#b02418]">
                {slideData?.midLeftSubtitle || "左中标题"}
              </div>
              <div className="h-[1pt] w-full bg-black"></div>
              <div className="text-[14pt] text-black">
                {slideData?.midLeftContent || "左中内容"}
              </div>
            </div>

            <div className="w-[25%] bg-[#f5f5f5] flex flex-col items-center px-[20px] py-[20px] gap-[20px]">
              <div className="text-[18pt] w-[40pt] h-[40pt] bg-[#b02418] text-white flex items-center justify-center">
                03
              </div>
              <div className="text-[18pt] text-[#b02418]">
                {slideData?.midRightSubtitle || "右中标题"}
              </div>
              <div className="h-[1pt] w-full bg-black"></div>
              <div className="text-[14pt] text-black">
                {slideData?.midRightContent || "右中内容"}
              </div>
            </div>

            <div className="w-[25%] bg-[#f5f5f5] flex flex-col items-center px-[20px] py-[20px] gap-[20px]">
              <div className="text-[18pt] w-[40pt] h-[40pt] bg-[#b02418] text-white flex items-center justify-center">
                04
              </div>
              <div className="text-[18pt] text-[#b02418]">
                {slideData?.rightSubtitle || "右标题"}
              </div>
              <div className="h-[1pt] w-full bg-black"></div>
              <div className="text-[14pt] text-black">
                {slideData?.rightContent || "右内容"}
              </div>
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

          <div className="absolute left-[5%] top-[13%] text-left text-black w-[90%] flex gap-[20px]">
            <div className="w-[25%] flex flex-col items-center">
              <div className="text-[80pt] text-[#d9d9d9]">01</div>
              <div className="bg-[#f5f5f5] px-[20px] py-[20px] flex flex-col items-center gap-[20px]">
                <div className="text-[18pt] text-[#b02418]">
                  {slideData?.leftSubtitle || "左标题"}
                </div>
                <div className="h-[1pt] w-full bg-black"></div>
                <div className="text-[14pt] text-black">
                  {slideData?.leftContent || "左内容"}
                </div>
              </div>
            </div>

            <div className="w-[25%] flex flex-col items-center">
              <div className="text-[80pt] text-[#d9d9d9]">02</div>
              <div className="bg-[#f5f5f5] px-[20px] py-[20px] flex flex-col items-center gap-[20px]">
                <div className="text-[18pt] text-[#b02418]">
                  {slideData?.midLeftSubtitle || "左中标题"}
                </div>
                <div className="h-[1pt] w-full bg-black"></div>
                <div className="text-[14pt] text-black">
                  {slideData?.midLeftContent || "左中内容"}
                </div>
              </div>
            </div>

            <div className="w-[25%] flex flex-col items-center">
              <div className="text-[80pt] text-[#d9d9d9]">03</div>
              <div className="bg-[#f5f5f5] px-[20px] py-[20px] flex flex-col items-center gap-[20px]">
                <div className="text-[18pt] text-[#b02418]">
                  {slideData?.midRightSubtitle || "右中标题"}
                </div>
                <div className="h-[1pt] w-full bg-black"></div>
                <div className="text-[14pt] text-black">
                  {slideData?.midRightContent || "右中内容"}
                </div>
              </div>
            </div>

            <div className="w-[25%] flex flex-col items-center">
              <div className="text-[80pt] text-[#d9d9d9]">04</div>
              <div className="bg-[#f5f5f5] px-[20px] py-[20px] flex flex-col items-center gap-[20px]">
                <div className="text-[18pt] text-[#b02418]">
                  {slideData?.rightSubtitle || "右标题"}
                </div>
                <div className="h-[1pt] w-full bg-black"></div>
                <div className="text-[14pt] text-black">
                  {slideData?.rightContent || "右内容"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default CommonSlideWithFourBlocksLayout;
