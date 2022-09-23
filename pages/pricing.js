import PricingCard from "../components/pricing/pricingCard";

export default function Pricing() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-row gap-2">
        <PricingCard title={"Monthly"} price={5000} />
        <PricingCard title={"3 Months"} price={13000} />
        <PricingCard title={"Yearly"} price={58000} />
      </div>
    </main>
  );
}
