import type { Metadata } from "next";
import MovedTo from "../components/common/movedTo";

const TARGET = "https://chatbot0.smalltech.in/about";

export const metadata: Metadata = {
  title: "About chatbot0",
  robots: { index: false, follow: true },
  alternates: { canonical: TARGET },
  other: { refresh: `0; url=${TARGET}` },
};

export default function Page() {
  return <MovedTo url={TARGET} label="chatbot0" />;
}
