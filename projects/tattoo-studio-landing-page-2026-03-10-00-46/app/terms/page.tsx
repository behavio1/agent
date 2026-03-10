export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold uppercase tracking-tighter mb-8">Terms of Service</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mt-4">
          This is a placeholder for the terms of service. It will outline the rules, regulations, and agreements for using our website and services, including deposit policies, cancellation fees, and age requirements.
        </p>
      </div>
    </div>
  );
}
