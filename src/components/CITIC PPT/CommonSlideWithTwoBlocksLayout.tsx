import React from "react";
import * as z from "zod";

const TOP_BG_URL = "/CommonSlideTopBackgroundImage.jpg";

export const layoutId = "common-content-with-two-blocks-slide";
export const layoutName = "Common Content With Two Blocks Slide";
export const layoutDescription =
  "A clean slide layout with title, subtitle, and two blocks of content.";

const CommonSlideWithTwoBlocksSchema = z.object({
  title: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Main title of the slide",
  }),
  subtitle: z.string().min(3).max(40).default("子标题").meta({
    description: "Subtitle of the slide",
  }),
  leftContent: z
    .string()
    .min(2)
    .max(500)
    .default(
      "一是月末，我行全口径授信业务总量万亿元，比上月增加亿元。其中表内贷款增长乏力，比上月增加亿元。二是不良贷款比上月双升，问题贷款和逾期贷款比上月继续双降。月末不良余额亿，比上月增加亿，不良率%，比上月上升个百分点。问题贷款余额亿元，比上月下降亿元。逾期贷款余额亿元，比上月下降亿元。"
    )
    .meta({
      description: "Left content of the slide",
    }),
  rightContent: z
    .string()
    .min(2)
    .max(500)
    .default(
      "一是月末，我行全口径授信业务总量万亿元，比上月增加亿元。其中表内贷款增长乏力，比上月增加亿元。二是不良贷款比上月双升，问题贷款和逾期贷款比上月继续双降。月末不良余额亿，比上月增加亿，不良率%，比上月上升个百分点。问题贷款余额亿元，比上月下降亿元。逾期贷款余额亿元，比上月下降亿元。"
    )
    .meta({
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
        <div className="absolute left-[7%] top-[25%] text-left text-black w-[84%]">
          <div className="text-[20pt] font-bold">
            {slideData?.subtitle || "子标题"}
          </div>
          <div className="w-full flex gap-[20px]">
            <div className="text-[14pt] font-[400] mt-[50px] w-[50%]">
              {slideData?.leftContent || "左内容"}
            </div>
            <div className="text-[14pt] font-[400] mt-[50px] w-[50%]">
              {slideData?.rightContent || "右内容"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonSlideWithTwoBlocksLayout;
