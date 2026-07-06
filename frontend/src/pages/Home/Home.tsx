import DashboardHeader from "../../components/dashboard/DashboardHeader";
import CycleCard from "../../components/dashboard/CycleCard";
import CycleCalendar from "../../components/calendar/CycleCalendar";
import SummaryCard from "../../components/dashboard/SummaryCard";
import LilacCard from "../../components/dashboard/LilacCard";
import BottomNav from "../../components/navigation/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF9FC] px-6 py-10 pb-28">

      <DashboardHeader />

      <CycleCard />

      <CycleCalendar />

      <SummaryCard />

      <LilacCard />

      <BottomNav />

    </div>
  );
}