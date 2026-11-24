import type { Metadata } from "next";
import MovedTo from "../components/common/movedTo";

const TARGET = "https://chatbot0.smalltech.in/dashboard/";

export const metadata: Metadata = {
  title: "chatbot0 dashboard",
  robots: { index: false, follow: false },
  alternates: { canonical: TARGET },
  other: { refresh: `0; url=${TARGET}` },
};

export default function Page() {
  return <MovedTo url={TARGET} label="The chatbot0 dashboard" />;
}
