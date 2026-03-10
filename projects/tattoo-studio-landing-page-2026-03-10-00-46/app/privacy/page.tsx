export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold uppercase tracking-tighter mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mt-4">
          This is a placeholder for the privacy policy. It will outline how we collect, use, and protect your personal information, including data submitted through our contact and booking forms.
        </p>
      </div>
    </div>
  );
}
