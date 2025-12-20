import { vesselColumns } from "./columns";
import { DataTable } from "./data-table";
import { vesselData } from "@/const/vessels";

export default function Vessels() {
  return (
    <section id="vessel" className="container-layout lg:h-dvh flex items-center">
      <div className="w-full">
        <h2 className="font-bold lg:text-3xl text-2xl mb-8">Our Vessels</h2>
        <DataTable columns={vesselColumns} data={vesselData} />
      </div>
    </section>
  );
}
