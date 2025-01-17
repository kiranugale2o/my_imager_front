import DocsCard from "@/components/ui/documents";

export default function MenuItem() {
  return (
    <>
      <div className="lg:px-60 py-20">
        <div className="text-[15px] px-50 text-gray-400 ">
          {"Docs > Intoduction"}
        </div>
        <DocsCard />
      </div>
    </>
  );
}
