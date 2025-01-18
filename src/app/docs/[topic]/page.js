import Changelog from "@/components/ui/documents/changelog";
import Installation from "@/components/ui/documents/installation";
import JsInstallation from "@/components/ui/documents/installation/javascriptinstallation";
import NextInstallation from "@/components/ui/documents/installation/nextjsinstallation";
import ViteInstallation from "@/components/ui/documents/installation/viteinstalltion";

export default async function MenmuItem({ params }) {
  const { topic } = await params;
  return (
    <>
      <div className="item-center lg:px-60 py-20">
        <div className="text-[15px] px-50 text-gray-400 ">
          {"Docs > "}
          {topic}
        </div>
        {topic === "installation" ? <Installation /> : null}
        {topic === "changelog" ? <Changelog /> : null}
        {topic === "nextjs" ? <NextInstallation /> : null}
        {topic === "javascript" ? <JsInstallation /> : null}
        {topic === "vite" ? <ViteInstallation /> : null}
        {topic === "" ? <Installation /> : null}
        {/* {topic === "installation" ? <Installation /> : null}
        {topic === "installation" ? <Installation /> : null}
        {topic === "installation" ? <Installation /> : null}
        {topic === "installation" ? <Installation /> : null}
        {topic === "installation" ? <Installation /> : null}
        {topic === "installation" ? <Installation /> : null} */}
      </div>
    </>
  );
}
