import { useAppStore } from "../store/useAppStore";
import ExampleSlideLayout from "../components/ExampleSlideLayout";
import CenteredTitleSubtitleBrandLayout from "../components/CenteredTitleSubtitleBrandLayout";
import IntroSlideLayout from "../components/IntroSlideLayout";

export default function Home() {
  const { count, increment } = useAppStore();
  const data = {
    title: "Quarterly Business Review",
    subtitle: "2023 Q1",
    metrics: [
      {
        label: "Revenue",
        value: "$100M",
        trend: "up",
      },
      {
        label: "Expenses",
        value: "$80M",
        trend: "down",
      },
      {
        label: "Profit",
        value: "$20M",
        trend: "stable",
      },
    ],
    chartImage: {
      __image_url__: "https://example.com/chart.png",
      __image_prompt__: "A line chart showing revenue, expenses, and profit",
    },
    trendIcon: {
      up: "arrow_up",
      down: "arrow_down",
      stable: "arrow_right",
    },
  };
  return (
    <div className="w-[100vw] h-[100vh]">
      {/* <ExampleSlideLayout data={data} /> */}
      {/* <CenteredTitleSubtitleBrandLayout data={data} /> */}
      <IntroSlideLayout data={data} />
    </div>
  );
}
