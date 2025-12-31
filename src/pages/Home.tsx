import { useAppStore } from "../store/useAppStore";
import ExampleSlideLayout from "../components/ExampleSlideLayout";
import CenteredTitleSubtitleBrandLayout from "../components/CenteredTitleSubtitleBrandLayout";
import IntroSlideLayout from "../components/CITIC PPT/IntroSlideLayout";

export default function Home() {
  const { count, increment } = useAppStore();
  const data = {
    title: "工作汇报！",
    presenterName: "财务会计部",
    presentationDate: "2022年x月",
  };
  return (
    <div className="w-[100vw] h-[100vh]">
      {/* <ExampleSlideLayout data={data} /> */}
      {/* <CenteredTitleSubtitleBrandLayout data={data} /> */}
      <IntroSlideLayout data={data} />
    </div>
  );
}
