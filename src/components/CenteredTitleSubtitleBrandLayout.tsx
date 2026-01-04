import React from "react";
import * as z from "zod";
import { ImageSchema, IconSchema } from "./CITIC PPT/defaultSchemes";

export const layoutId = "centered-title-subtitle-brand-slide";
export const layoutName = "CenteredTitleSubtitleBrandLayout";
export const layoutDescription =
  "A slide with a centered title block containing a title and subtitle, and a bottom-right brand text.";

// export const ImageSchema = z.object({
// image_url: z.string().url().meta({
// description: "URL to image.",
// }),
// image_prompt: z.string().min(3).max(120).meta({
// description: "Prompt used to generate the image. Max 20 words.",
// }),
// })

// export const IconSchema = z.object({
// icon_url: z.string().url().or(z.string().startsWith("/")).default("/static/icons/placeholder.png").meta({
// description: "URL to icon.",
// }),
// icon_query: z.string().min(1).max(40).default("placeholder icon").meta({
// description: "Query used to search the icon. Max 6 words.",
// }),
// })

export const Schema = z.object({
  title: z.string().min(2).max(10).default("大标题").meta({
    description: "Centered main title text. Max 2 words.",
  }),
  subtitle: z.string().min(2).max(14).default("小标题").meta({
    description: "Centered subtitle text under the title. Max 3 words.",
  }),
  brand: z.string().min(2).max(8).default("中信银行").meta({
    description: "Bottom-right brand text. Max 2 words.",
  }),
});

export type CenteredTitleSubtitleBrandLayoutData = z.infer<typeof Schema>;

interface CenteredTitleSubtitleBrandLayoutProps {
  data?: Partial<CenteredTitleSubtitleBrandLayoutData>;
}

const centeredTitleSubtitleBrandLayout: React.FC<
  CenteredTitleSubtitleBrandLayoutProps
> = ({ data: slideData }) => {
  return (
    <>
      <div className='relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-white z-20 mx-auto overflow-hidden font-["PingFang_SC","Microsoft_YaHei","Helvetica","Arial","sans-serif"]'>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center mt-[60px]">
            <div className="text-[72px] leading-[1.05] font-bold text-[#1f1f1f] text-center">
              {slideData?.title || "大标题"}
            </div>
            <div className="mt-[18px] text-[28px] leading-[1.2] font-medium text-[#6b6b6b] text-center">
              {slideData?.subtitle || "小标题"}
            </div>
          </div>
        </div>
        <div className="absolute right-[84px] bottom-[52px] text-[28px] leading-[1] font-semibold text-[#e60012]">
          {slideData?.brand || "中信银行"}
        </div>
      </div>
    </>
  );
};

export default centeredTitleSubtitleBrandLayout;
