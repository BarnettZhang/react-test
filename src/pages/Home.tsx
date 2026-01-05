import { useAppStore } from "../store/useAppStore";
import IntroSlideLayout from "../components/CITIC PPT/IntroSlideLayout";
import CommonSlideLayout from "../components/CITIC PPT/CommonSlideLayout";
import IndexSlideLayout from "../components/CITIC PPT/IndexSlideLayout";
import CommonSlideWithImageLayout from "../components/CITIC PPT/CommonSlideWithImageLayout";
import OutroSlideLayout from "../components/CITIC PPT/OutroSlideLayout";
import CommonSlideWithTwoBlocksLayout from "../components/CITIC PPT/CommonSlideWithTwoBlocksLayout";

export default function Home() {
  const { count, increment } = useAppStore();
  const data = {
    title: "主标题文字",
    presenterName: "财务会计部",
    presentationDate: "2022年x月",
    subtitle: "工作汇报模板子标题",
    content:
      "一是月末，我行全口径授信业务总量万亿元，比上月增加亿元。其中表内贷款增长乏力，比上月增加亿元。二是不良贷款比上月双升，问题贷款和逾期贷款比上月继续双降。月末不良余额亿，比上月增加亿，不良率%，比上月上升个百分点。问题贷款余额亿元，比上月下降亿元。逾期贷款余额亿元，比上月下降亿元。",
    index: ["目录1", "目录2", "目录3", "目录4", "目录5目录5目录5目录5目录5"],
    descriptionImage: {
      __image_url__: "/CommonTopRightLogo.png",
      __image_prompt__: "HHHH",
    },
    outro: "汇报完毕",
    leftContent:
      "一是月末，我行全口径授信业务总量万亿元，比上月增加亿元。其中表内贷款增长乏力，比上月增加亿元。二是不良贷款比上月双升，问题贷款和逾期贷款比上月继续双降。月末不良余额亿，比上月增加亿，不良率%，比上月上升个百分点。问题贷款余额亿元，比上月下降亿元。逾期贷款余额亿元，比上月下降亿元。",
    rightContent:
      "一是月末，我行全口径授信业务总量万亿元，比上月增加亿元。其中表内贷款增长乏力，比上月增加亿元。二是不良贷款比上月双升，问题贷款和逾期贷款比上月继续双降。月末不良余额亿，比上月增加亿，不良率%，比上月上升个百分点。问题贷款余额亿元，比上月下降亿元。逾期贷款余额亿元，比上月下降亿元。",
  };
  return (
    <div className="w-[100vw] h-[100vh]">
      <IntroSlideLayout data={data} />
      <div className="w-full h-[20px]"></div>
      <CommonSlideLayout data={data} />
      <div className="w-full h-[20px]"></div>
      <CommonSlideWithImageLayout data={data} />
      <div className="w-full h-[20px]"></div>
      <IndexSlideLayout data={data} />
      <div className="w-full h-[20px]"></div>
      <OutroSlideLayout data={data} />
      <div className="w-full h-[20px]"></div>
      <CommonSlideWithTwoBlocksLayout data={data} />
    </div>
  );
}
