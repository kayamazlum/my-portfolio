import Banner from "@/components/Banner";
import MyRecentWork from "@/components/MyRecentWork";

export default function Home() {
  return (
    <div className="bg-customLight mx-auto ">
      <Banner/>
      <MyRecentWork/>
    </div>
  );
}
