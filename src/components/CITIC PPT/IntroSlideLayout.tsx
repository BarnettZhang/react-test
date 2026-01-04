import React from "react";
import * as z from "zod";

const BG_URL = "/IntroBackgroundImage.jpg";
const TOP_LEFT_LOGO_URL = "/IntroTopLeftLogo.png";
const TOP_RIGHT_LOGO_URL = "/IntroTopRightLogo.png";

export const layoutId = "general-intro-slide";
export const layoutName = "Intro Slide";
export const layoutDescription =
  "A clean slide layout with title, description text, presenter info, and a supporting image.";

const introSlideSchema = z.object({
  title: z.string().min(3).max(40).default("工作汇报模板").meta({
    description: "Main title of the slide",
  }),
  presenterName: z.string().min(2).max(50).default("财务会计部").meta({
    description: "Name of the presenter",
  }),
  presentationDate: z.string().min(2).max(50).default("2022年x月").meta({
    description:
      "Date of the presentation must be the latest date like today's date",
  }),
});

export const Schema = introSlideSchema;

export type IntroSlideData = z.infer<typeof introSlideSchema>;

interface IntroSlideLayoutProps {
  data?: Partial<IntroSlideData>;
}

const IntroSlideLayout: React.FC<IntroSlideLayoutProps> = ({
  data: slideData,
}) => {
  return (
    <>
      <div
        className='relative w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-cover bg-white bg-center z-20 mx-auto overflow-hidden font-["楷体\_GB2312","楷体","Kai","DFKai-SB","serif"]'
        style={{ backgroundImage: `url('${BG_URL}')` }}
      >
        <img
          className="absolute top-[6%] left-[3.5%] h-[10%]"
          src={TOP_LEFT_LOGO_URL}
          alt="IntroTopLeftLogo"
        />

        <img
          className="absolute top-[8%] right-[3.5%] h-[6%]"
          src={TOP_RIGHT_LOGO_URL}
          alt="IntroTopRightLogo"
        />
        {/* Title */}
        <div className="absolute left-[7%] top-[38%] text-[44pt] font-bold text-left text-black">
          {slideData?.title || "工作汇报模板"}
        </div>
        <div className="absolute left-[7%] top-[50%] text-[28pt] font-[400] text-left text-black">
          {slideData?.presenterName || "财务会计部"}
        </div>
        <div className="absolute left-[7%] bottom-[15%] text-[20pt] font-[400] text-left text-black">
          {slideData?.presentationDate || "2022年x月"}
        </div>
      </div>
    </>
  );
};

export default IntroSlideLayout;
