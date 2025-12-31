import { useAppStore } from "../store/useAppStore";
import ExampleSlideLayout from "../components/ExampleSlideLayout";
import CenteredTitleSubtitleBrandLayout from "../components/CenteredTitleSubtitleBrandLayout";
import IntroSlideLayout from "../components/CITIC PPT/IntroSlideLayout";
import CommonSlideLayout from "../components/CITIC PPT/CommonSlideLayout";

export default function Home() {
  const { count, increment } = useAppStore();
  const data = {
    title: "主标题文字",
    presenterName: "财务会计部",
    presentationDate: "2022年x月",
    subtitle: "工作汇报模板子标题",
    content:
      "一是月末，我行全口径授信业务总量万亿元，比上月增加亿元。其中表内贷款增长乏力，比上月增加亿元。二是不良贷款比上月双升，问题贷款和逾期贷款比上月继续双降。月末不良余额亿，比上月增加亿，不良率%，比上月上升个百分点。问题贷款余额亿元，比上月下降亿元。逾期贷款余额亿元，比上月下降亿元。",
  };
  return (
    <div className="w-[100vw] h-[100vh]">
      {/* <ExampleSlideLayout data={data} /> */}
      {/* <CenteredTitleSubtitleBrandLayout data={data} /> */}
      {/* <IntroSlideLayout data={data} /> */}
      <CommonSlideLayout data={data} />
    </div>
  );
}
