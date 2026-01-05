import React from "react";
import * as z from "zod";
import { ImageSchema } from "./defaultSchemes";

const BG_URL = "/CommonSlideWithImageBackground.png";

export const layoutId = "common-content-with-image-slide";
export const layoutName = "Common Content With Image Slide";
export const layoutDescription =
  "A clean slide layout with title, subtitle, image, and content.";

const commonSlideWithImageSchema = z.object({
  title: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Main title of the slide",
  }),
  subtitle: z.string().min(3).max(40).default("子标题").meta({
    description: "Subtitle of the slide",
  }),
  content: z
    .string()
    .min(2)
    .max(500)
    .default(
      "一是月末，我行全口径授信业务总量万亿元，比上月增加亿元。其中表内贷款增长乏力，比上月增加亿元。二是不良贷款比上月双升，问题贷款和逾期贷款比上月继续双降。月末不良余额亿，比上月增加亿，不良率%，比上月上升个百分点。问题贷款余额亿元，比上月下降亿元。逾期贷款余额亿元，比上月下降亿元。"
    )
    .meta({
      description: "Content of the slide",
    }),
  descriptionImage: ImageSchema.default({
    __image_url__: "",
    __image_prompt__:
      "An image that helps understand the content of this slide",
  }).meta({
    description: "Description image",
  }),
});

export const Schema = commonSlideWithImageSchema;

export type CommonSlideWithImageData = z.infer<
  typeof commonSlideWithImageSchema
>;

interface CommonSlideWithImageLayoutProps {
  data?: Partial<CommonSlideWithImageData>;
}

const CommonSlideWithImageLayout: React.FC<CommonSlideWithImageLayoutProps> = ({
  data: slideData,
}) => {
  return (
    <>
      <div
        className='relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white bg-cover bg-center z-20 mx-auto overflow-hidden font-["楷体\_GB2312","楷体","Kai","DFKai-SB","serif"]'
        style={{ backgroundImage: `url('${BG_URL}')` }}
      >
        {/* Title */}
        <div className="absolute left-[5%] top-[3%] text-[24pt] font-bold text-left text-black z-60">
          {slideData?.title || "工作汇报模板"}
        </div>
        <div className="absolute left-[7%] top-[25%] text-left text-black w-[36%] z-60">
          <div className="text-[14pt] font-bold">
            {slideData?.subtitle || "子标题"}
          </div>
          <div className="text-[12pt] font-[400] mt-[50px] z-60">
            {slideData?.content || "内容"}
          </div>
        </div>

        {slideData?.descriptionImage?.__image_url__ && (
          <img
            src={slideData.descriptionImage.__image_url__}
            alt={slideData.descriptionImage.__image_prompt__}
            className="absolute w-[40%] h-auto right-[5%] top-[20%] object-contain"
          />
        )}
      </div>
    </>
  );
};

export default CommonSlideWithImageLayout;
