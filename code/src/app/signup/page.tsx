import type { Metadata } from "next";
import MovedTo from "../components/common/movedTo";

const TARGET = "https://chatbot0.smalltech.in/signup";

export const metadata: Metadata = {
  title: "chatbot0 sign-up",
  robots: { index: false, follow: true },
  alternates: { canonical: TARGET },
  other: { refresh: `0; url=${TARGET}` },
};

export default function Page() {
  return <MovedTo url={TARGET} label="chatbot0 sign-up" />;
}
