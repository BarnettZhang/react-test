import React from "react";
import * as z from "zod";

const LEFT_BG_URL = "/GreyBackgroundImage.png";
const BOTTOM_BG_URL = "/BottomWaveBackgroundImage.jpg";

export const layoutId = "index-content-slide";
export const layoutName = "Index Content Slide";
export const layoutDescription = "A clean slide layout with slide index.";

const indexSlideSchema = z.object({
  index: z
    .array(z.string().min(2).max(20))
    .default(["目录1", "目录2", "目录3", "目录4", "目录5"])
    .meta({
      description: "Slide index",
    }),
});

export const Schema = indexSlideSchema;

export type IndexSlideData = z.infer<typeof indexSlideSchema>;

interface IndexSlideLayoutProps {
  data?: Partial<IndexSlideData>;
}

const IndexSlideLayout: React.FC<IndexSlideLayoutProps> = ({
  data: slideData,
}) => {
  return (
    <>
      <div className='relative flex w-full rounded-sm max-w-[1280px] shadow-lg max-h-[720px] aspect-video bg-cover bg-white bg-center z-20 mx-auto overflow-hidden font-["楷体\_GB2312","楷体","Kai","DFKai-SB","serif"]'>
        <img
          className="left-0 top-0 h-full z-50 absolute"
          src={LEFT_BG_URL}
          alt="GreyBackgroundImage"
        />
        <img
          className="bottom-0 left-0 w-full z-30 absolute"
          src={BOTTOM_BG_URL}
          alt="BottomWaveBackgroundImage"
        />

        <div className="absolute top-[20%] left-[12%] z-60">
          <div className="text-[32pt] text-center font-bold text-black">
            目录
          </div>
          <div className="text-[20pt] text-center font-bold text-black">
            CONTENT
          </div>
        </div>

        <div className="m-auto pl-[35%]">
          {slideData?.index?.map((index, i) => (
            <div className="text-left text-[20pt] mb-[10pt]">
              {i + 1 < 10 ? `0${i + 1}` : i + 1} {index}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IndexSlideLayout;
