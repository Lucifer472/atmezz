import { Ad1, Ad2, SmallAd } from "../ads/ads";
import ExtraButton from "../etc/button-extra";
import ArticleViewDemo from "./article-view-demo";

const AbPage = ({
  link,
  data,
  title,
}: {
  link: string;
  data: any;
  title: string;
}) => {
  return (
    <section className="w-full mx-auto max-w-[420px]  flex flex-col rounded-2xl p-2 border-2 border-gray-700 demo">
      <div className="border-y-2 border-gray-700">
        {data.isIndex === "two" ? <Ad2 /> : <Ad1 />}
      </div>
      <h2>{title}</h2>
      <ExtraButton href={link} className="bg-green-700 border-yellow-500">
        Yes ✅
      </ExtraButton>
      <ExtraButton
        href={link}
        className="bg-red-700 mt-4 mb-6 border-yellow-500"
      >
        No ❌
      </ExtraButton>
      <SmallAd />
      <ArticleViewDemo blogData={data?.blog as any} title={data?.title} />
    </section>
  );
};

export default AbPage;
