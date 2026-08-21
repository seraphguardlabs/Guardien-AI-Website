import Header from "../components/hero/Header";
import { Footer } from "../components/footer";

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-[#E4EDF4] pt-24">
      <div className="relative z-50">
        <Header forceLight />
      </div>

      <div className="relative z-10">
        <section className="py-12 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-center mb-8"
              style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
            >
              Request Account Deletion
            </h1>

            <div
              className="space-y-6 text-sm md:text-base"
              style={{
                fontFamily: "var(--font-poppins)",
                color: "#001a2d",
                lineHeight: "1.8",
              }}
            >
              <p>
                We take your privacy seriously. If you wish to permanently
                delete your <strong>Guardien AI</strong> Guardian account and
                all associated data from our servers, you can request deletion
                at any time.
              </p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                How to Request Account Deletion
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Open the Guardien AI app on your device.
                </li>
                <li>
                  Open <strong>Settings</strong> from the side panel.
                </li>
                <li>
                  Scroll down to <strong>Delete Account</strong>.
                </li>
                <li>
                  Confirm by entering your password.
                </li>
                <li>
                  Your account and all associated data are permanently removed
                  from our servers. This action is irreversible.
                </li>
              </ol>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                Data That Is Deleted
              </h2>
              <p>
                When you request account deletion, we delete all details of the
                user from our server. Specifically, the following data is
                permanently deleted:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your Guardian account information (name and email address)</li>
                <li>All associated child profiles and child details</li>
                <li>Location history and location data</li>
                <li>Screen time and app usage data</li>
                <li>Web activity information</li>
                <li>Alerts, notifications, tasks, rewards, and requests</li>
                <li>Device and connection information</li>
                <li>Any other personal data associated with your account</li>
              </ul>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                Data Retention and Processing Time
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Your account and all associated data are permanently deleted
                  from our servers <strong>instantly</strong> once your deletion
                  request is confirmed.
                </li>
                <li>
                  Once deleted, your data cannot be recovered or restored.
                </li>
              </ul>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                Need Help?
              </h2>
              <p>
                If you have any questions about deleting your account or your
                personal data, please contact us at{" "}
                <a
                  href="mailto:tech@seraphguardlabs.com"
                  className="text-[#025794] hover:underline"
                >
                  tech@seraphguardlabs.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
