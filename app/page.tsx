import HeroSection from "@/components/home/hero-section";
import ValueSection from "@/components/home/value-section";
import HighlightCards from "@/components/home/highlight-accordian/highlight-accordian";
import StackSection from "@/components/home/stack-section/stack-section";
import DemoPreview from "@/components/home/demo-preview";
import PaymentCards from "@/components/home/payment-cards/payment-cards";
import FaqAccordian from "@/components/home/faq/faq-accordian";

import { Divider } from "@nextui-org/react";

export default function Index() {
  return (
    <div>
      <div className="mt-32 mb-32">
        <HeroSection />
      </div>

      <div className="max-w-md mx-auto mb-32">
        <Divider style={{ backgroundColor: "#71717A" }} />
      </div>

      <div className="mb-12">
        <ValueSection />
      </div>

      <div className="mb-32">
        <HighlightCards />
      </div>

      <div className="mb-32">
        <StackSection />
      </div>

      <div className="max-w-md mx-auto mb-32">
        <Divider style={{ backgroundColor: "#71717A" }} />
      </div>

      <div className="mb-32">
        <DemoPreview />
      </div>

      <div className="mb-32">
        <PaymentCards />
      </div>

      <div className="max-w-md mx-auto mb-32">
        <Divider style={{ backgroundColor: "#71717A" }} />
      </div>

      <div className="mb-32">
        <FaqAccordian />
      </div>
    </div>
  );
}
