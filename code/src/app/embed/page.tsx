import type { Metadata } from "next";
import MovedTo from "../components/common/movedTo";

// The chat widget frame moved to chatbot0.smalltech.in. Old embed.js copies (cached by browsers or
// customers) still point their iframe here, so this page forwards it with the same query string
// (?host=...&color=...).
const TARGET = "https://chatbot0.smalltech.in/embed/";

export const metadata: Metadata = {
  title: "chatbot0 chat",
  robots: { index: false, follow: false },
  alternates: { canonical: TARGET },
};

export default function Page() {
  return <MovedTo url={TARGET} label="The chatbot0 chat widget" />;
}
