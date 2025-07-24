import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function HomePage() {
  const handleEmailClick = () => {
    window.location.href = "mailto:vaestimating@gmail.com?subject=Service%20Inquiry&body=Hi%20VA%20Estimating%20%26%20Drafting,%20I'm%20interested%20in%20your%20services.%20Please%20contact%20me.";
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-8 space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">VA Estimating & Drafting</h1>
        <p className="text-lg">Reliable Estimates. Precise Drafting.</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
            <p>
              VA Estimating & Drafting is a professional service provider with a skilled team of 5 estimators and 5 drafters, all experienced in the Australian construction industry. We support builders, subcontractors, and developers with reliable, efficient, and cost-effective project documentation and pricing.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Quantity Take-offs (All Trades)</li>
              <li>Construction Cost Estimating</li>
              <li>Detailed BOQs and Pricing Schedules</li>
              <li>Shop Drawings and Drafting (AutoCAD, Revit)</li>
              <li>Tender Preparation Support</li>
              <li>Remote or Contract Estimating & Drafting</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s Work Together</h2>
        <p className="mb-4">
          Whether you’re a small builder, subcontractor, or large construction company, we tailor our services to meet your specific needs.
        </p>
        <Button onClick={handleEmailClick} className="text-white bg-blue-600 hover:bg-blue-700">Contact Us</Button>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-8">
        <p>Email: vaestimating@gmail.com | Phone: 084 703 853 061</p>
        <p>&copy; 2025 VA Estimating & Drafting</p>
      </footer>
    </div>
  );
}
