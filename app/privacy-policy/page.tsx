import Header from "../components/hero/Header";
import { Footer } from "../components/footer";

export default function PrivacyPolicyPage() {
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
              Guardien AI Privacy Policy
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
                These Terms and Conditions (&quot;Terms&quot;) constitute a legally
                binding agreement between <strong>SeraphGuard Labs Pvt Ltd</strong>{" "}
                (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) and the
                individual who registers a Guardien AI Guardian account
                (&quot;Guardian&quot;, &quot;you&quot;, or &quot;your&quot;) to use the{" "}
                <strong>Guardien AI</strong> mobile application, companion child
                device application, and related backend services (collectively,
                the &quot;Service&quot;).
              </p>

              <p>
                By creating a Guardian account, pairing a child&apos;s device,
                accessing, or otherwise using the Service, you acknowledge that
                you have read, understood, and agree to be bound by these Terms
                and our Privacy Policy. If you do not agree to these Terms or
                the Privacy Policy, you must not use the Service.
              </p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                1. What Guardien AI Is
              </h2>
              <p>
                Guardien AI is a parental supervision and digital safety platform
                designed to help parents and legal guardians protect, guide, and
                support their children in today&apos;s digital world.
              </p>
              <p>
                The Service enables Guardians to create child profiles, securely
                pair children&apos;s devices, monitor device activity, manage screen
                time, receive safety alerts, access location information (where
                enabled), and configure parental controls that promote healthier
                and safer digital habits.
              </p>
              <p>
                Guardien AI is intended solely for the supervision of minors by
                their parent, legal guardian, or another person who has lawful
                authority to supervise the child.
              </p>
              <p>
                Guardien AI is designed to assist parents in making informed
                decisions regarding their child&apos;s digital wellbeing. It is a
                support tool only and does not replace responsible parenting,
                parental judgment, or active supervision.
              </p>
              <p>
                We do not guarantee that the Service will prevent harm, detect
                every risk, identify every unsafe interaction, or operate
                continuously without interruption or error.
              </p>
              <p>
                Guardien AI is <strong>not an emergency response service</strong> and
                should never be relied upon to contact emergency services or
                obtain immediate assistance. In an emergency, immediately
                contact the appropriate emergency authorities.
              </p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                2. Continuous Improvement
              </h2>
              <p>
                Guardien AI is an evolving technology platform. We are committed
                to continuously improving the Service through ongoing research,
                development, security enhancements, performance optimizations,
                and the introduction of new features and capabilities.
              </p>
              <p>
                As this is the initial public release of Guardien AI, certain
                features may be refined, expanded, modified, or replaced over
                time based on technological advancements, user feedback, safety
                considerations, and regulatory requirements.
              </p>
              <p>
                While we strive to provide a reliable and effective experience,
                no software is entirely free from limitations. Your continued use
                of Guardien AI helps us improve the platform and deliver a safer,
                smarter, and more impactful experience for children and families.
              </p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                3. Eligibility and Guardian Responsibility
              </h2>
              <p>To use Guardien AI:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must be at least <strong>18 years of age</strong>.</li>
                <li>You must have the legal capacity to enter into this agreement.</li>
                <li>
                  You must be the parent, legal guardian, or otherwise have
                  lawful authority to supervise each child profile you create.
                </li>
              </ul>
              <p>
                You are solely responsible for ensuring that your use of Guardien
                AI complies with all applicable laws and regulations within your
                jurisdiction, including laws relating to parental monitoring,
                consent, privacy, and child protection.
              </p>
              <p>You agree that you will not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Monitor another adult without lawful authority.</li>
                <li>Monitor any child who is not under your legal care.</li>
                <li>Pair or monitor any device without authorization.</li>
                <li>
                  Use Guardien AI for stalking, surveillance, harassment, or any
                  unlawful activity.
                </li>
              </ul>
              <p>
                You remain solely responsible for all activity occurring under
                your Guardian account and for maintaining the confidentiality of
                your login credentials.
              </p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                4. Devices, Pairing and Child Profiles
              </h2>
              <p>
                Guardien AI allows Guardians to create child profiles and securely
                pair child devices using time-limited pairing tokens.
              </p>
              <p>For security purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pairing tokens expire after <strong>15 minutes</strong>.</li>
                <li>Pairing tokens may only be used once.</li>
                <li>
                  Only the Guardian who owns a child profile may access that
                  child&apos;s information.
                </li>
                <li>
                  Child profiles may be removed or devices unpaired at any time
                  through the application.
                </li>
              </ul>
              <p>You may permanently delete your Guardian account at any time.</p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                5. Device Requirements and Permissions
              </h2>
              <p>Certain features of Guardien AI require:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A compatible mobile device.</li>
                <li>Internet connectivity.</li>
                <li>GPS availability.</li>
                <li>Device permissions necessary for the selected features.</li>
              </ul>
              <p>
                If required permissions are denied, revoked, or unavailable, some
                features of the Service may not function correctly or may become
                unavailable.
              </p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                6. Information We Collect and Why
              </h2>
              <p>
                To operate Guardien AI, we collect and process information
                necessary to provide the Service. This section explains what we
                collect, why we collect it, and how long we retain it, organized
                by data sensitivity tier.
              </p>

              <h3 className="text-xl font-semibold mt-8">
                Sensitive Personal &amp; Identity Information
              </h3>
              <p>
                This category includes the most sensitive data. We limit
                collection to only what is necessary to provide the Service and
                maintain your account.
              </p>
              <p>
                <strong>Guardian Account Information:</strong> We collect your
                email address to create and verify your account, facilitate
                login, send account notifications, and communicate important
                updates. Your email address is retained until you permanently
                delete your Guardian account. Your password is encrypted and
                hashed using industry-standard cryptographic methods to protect
                your security.
              </p>
              <p>
                We collect your full name for account management and
                identification purposes. This information is retained until you
                delete your account.
              </p>
              <p>
                Your account creation date is maintained for service
                administration and security audit purposes.
              </p>
              <p>
                <strong>Important:</strong> We do not sell, trade, or share this
                tier of data with third parties. All Tier 1 data is accessible
                only to you (the Guardian).
              </p>
              <p>
                <strong>Child Profile Information:</strong> We collect the
                child&apos;s name to create and maintain a profile so you can
                monitor the correct child. This information is retained until you
                delete the profile.
              </p>
              <p>
                We collect the child&apos;s date of birth to verify age and deliver
                age-appropriate features. This information is retained until you
                delete the profile.
              </p>
              <p>
                We collect a profile picture for visual identification within the
                application. This is retained until you delete the profile.
              </p>

              <h3 className="text-xl font-semibold mt-8">
                Device &amp; Connection Information
              </h3>
              <p>
                This category includes technical identifiers and device-specific
                data necessary for the Service to function across your devices.
              </p>
              <p>
                <strong>Device Identifiers and Status:</strong> We collect the
                device name to identify which child&apos;s device is being
                monitored. This is retained until the device is unlinked from the
                profile.
              </p>
              <p>
                We collect the device platform (iOS or Android) to provide
                platform-specific features and ensure compatibility with your
                device. This is retained until the device is unlinked.
              </p>
              <p>
                We collect push notification tokens to deliver real-time alerts
                and secure messages to your devices. These tokens are retained
                until the device is unlinked or the token is refreshed.
              </p>
              <p>
                We record the last active time to show you when the child last
                used their device. This is retained until the device is unlinked.
              </p>
              <p>
                We collect an anonymous pairing identifier to securely link a
                child&apos;s device to their profile without exposing the
                child&apos;s identity in the pairing process. This identifier is
                retained until the device is unlinked.
              </p>
              <p>
                We store a hashed pairing token to verify device ownership and
                prevent unauthorized access during the pairing process. The
                pairing token expires after 15 minutes and is automatically
                deleted after device pairing is complete. The hashed version is
                retained for security and audit purposes.
              </p>

              <h3 className="text-xl font-semibold mt-8">Location Data</h3>
              <p>
                Location information is collected only when you enable location
                features in the application. This category is treated with high
                security due to the sensitive nature of location data.
              </p>
              <p>
                <strong>GPS and Movement Data:</strong> We collect GPS coordinates
                (latitude and longitude) to display the child&apos;s current
                location on a map within the application. The latest known
                location is retained until it is replaced by a newer update or
                until you delete the associated child profile. Location history
                older than 48 hours is automatically deleted.
              </p>
              <p>
                We collect location accuracy (the margin of error in meters) to
                indicate how precise the location information is. This is
                retained for 48 hours before automatic deletion.
              </p>
              <p>
                We collect speed data to show movement patterns and help you
                understand whether the child is stationary or actively
                traveling. This is retained for 48 hours before automatic
                deletion.
              </p>
              <p>
                We collect bearing (direction of movement) to indicate which
                direction the child is moving. This is retained for 48 hours
                before automatic deletion.
              </p>
              <p>
                We collect battery level information from the device to alert you
                if the child&apos;s device battery is low. This is retained for 48
                hours before automatic deletion.
              </p>
              <p>
                We collect movement status (whether the device is stationary or
                moving) to help distinguish between stopped and active travel.
                This is retained for 48 hours before automatic deletion.
              </p>
              <p>
                <strong>Important:</strong> Location history is automatically
                deleted after 48 hours. The latest known location persists until
                replaced by a newer update or until you delete the child profile.
              </p>

              <h3 className="text-xl font-semibold mt-8">
                Activity &amp; Usage Patterns
              </h3>
              <p>
                This category includes data about how the child uses their device.
                This information helps you understand screen time, app usage, and
                web activity.
              </p>
              <p>
                <strong>Application and Screen Time Data:</strong> We collect
                information about installed applications on the child&apos;s device
                to show you which apps are present on the device. This information
                is retained until the app is uninstalled or the profile is
                deleted.
              </p>
              <p>
                We collect per-application screen time data to show you how much
                time the child spends in each application. This information is
                retained until you delete the child profile.
              </p>
              <p>
                We collect daily screen time totals to help you track overall
                device usage trends over time. This is retained until you delete
                the child profile.
              </p>
              <p>
                We store the app time limits that you configure to enforce
                parental controls you have set. These limits are retained until
                you modify or delete them.
              </p>
              <p>
                <strong>Web Activity Data:</strong> We collect visited domain
                information (website names only, not full browsing history) to
                show which websites the child visits. This is retained until you
                delete the profile.
              </p>
              <p>
                We record blocked website attempts when the child tries to visit a
                site that matches your configured website filters. This
                information helps you understand which restricted sites are being
                accessed. It is retained until you delete the profile.
              </p>
              <p>
                <strong>Exam Mode Configuration:</strong> We store Exam Mode
                allowlists that you create to specify which applications the child
                can use during designated study periods. This information is
                retained until you modify or delete the Exam Mode configuration.
              </p>

              <h3 className="text-xl font-semibold mt-8">
                Interactions &amp; Alerts
              </h3>
              <p>
                This category includes data generated from communication and
                activity monitoring within the application.
              </p>
              <p>
                <strong>Alerts and Notifications:</strong> We collect and retain
                alerts triggered by monitored activity (for example, when an app
                exceeds its time limit or when a new application is installed).
                These alerts are retained until you delete the child profile and
                help you stay informed of important events.
              </p>
              <p>
                <strong>Tasks, Rewards, and Requests:</strong> We store tasks that
                you create to assign chores or goals to your child. These are
                retained until you delete the child profile.
              </p>
              <p>
                We retain information about rewards you configure as part of
                incentive systems. This is kept until you delete the child
                profile.
              </p>
              <p>
                We maintain a record of requests exchanged between you and your
                child (such as requests to install applications or requests for
                screen time extensions). These are retained until you delete the
                child profile.
              </p>

              <h3 className="text-xl font-semibold mt-8">
                What We Do Not Collect
              </h3>
              <p>
                To be clear about our privacy approach, Guardien AI explicitly
                does not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Collect the content of messages or phone calls</li>
                <li>Collect social media messages, chats, or communications</li>
                <li>Record audio or video from devices</li>
                <li>Access email contents or messaging app data</li>
                <li>Collect biometric data (fingerprint, face recognition, iris scans, etc.)</li>
                <li>Use advertising networks or behavioral tracking systems</li>
                <li>Collect detailed browsing history beyond domain names</li>
                <li>Sell personal data to advertisers or data brokers</li>
                <li>Share data with third parties for marketing purposes</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8">How We Use Your Data</h3>
              <p>
                All information collected through Guardien AI is used exclusively
                for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and delivering the Service features to you</li>
                <li>Displaying relevant information within your Guardian account</li>
                <li>Enforcing parental controls and settings you have configured</li>
                <li>Synchronizing information across your devices</li>
                <li>Generating alerts and notifications to keep you informed</li>
                <li>Improving the Service based on how it is used</li>
                <li>Diagnosing technical problems and providing customer support</li>
                <li>Ensuring the security and integrity of our systems</li>
                <li>Complying with applicable legal obligations</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8">
                Third-Party Service Providers
              </h3>
              <p>
                Guardien AI uses Firebase Cloud Messaging (a service provided by
                Google) solely to deliver push notifications and secure data
                messages between Guardian and child devices. Firebase processes
                data in accordance with Google&apos;s applicable privacy policies and
                terms of service. We do not currently use third-party advertising
                networks, analytics platforms, crash reporting services, or
                payment processors.
              </p>

              <h3 className="text-xl font-semibold mt-8">
                Your Control Over Your Data
              </h3>
              <p>You maintain control over your information as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You can enable or disable location tracking at any time through
                  the application settings
                </li>
                <li>
                  You can unpair a device from a child profile without deleting
                  the profile itself
                </li>
                <li>You can delete individual child profiles at any time</li>
                <li>
                  You can permanently delete your entire Guardian account at any
                  time
                </li>
              </ul>
              <p>
                When you delete your Guardian account, all associated child
                profiles and related data are permanently deleted and cannot be
                recovered.
              </p>

              <h3 className="text-xl font-semibold mt-8">
                Data Retention Summary
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal &amp; Identity Information:</strong> Retained
                  until account or profile deletion
                </li>
                <li>
                  <strong>Device &amp; Connection Information:</strong> Retained
                  until device is unlinked
                </li>
                <li>
                  <strong>Location Data:</strong> Latest location retained until
                  updated; history deleted after 48 hours
                </li>
                <li>
                  <strong>Activity &amp; Usage Patterns:</strong> Retained until
                  profile deletion
                </li>
                <li>
                  <strong>Interactions &amp; Alerts:</strong> Retained until
                  profile deletion
                </li>
              </ul>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                7. Data Retention
              </h2>
              <p>Unless otherwise required by law:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Location history is automatically deleted after <strong>48 hours</strong>.</li>
                <li>
                  The latest known location is retained until replaced by a newer
                  update or until deletion of the associated child profile or
                  account.
                </li>
                <li>
                  Pairing tokens expire after <strong>15 minutes</strong> and remain
                  stored for security and audit purposes.
                </li>
                <li>
                  Other account and service information is retained until the
                  relevant profile or account is permanently deleted.
                </li>
              </ul>
              <p>
                Deleting your Guardian account permanently deletes all associated
                child profiles and related data. This action is irreversible.
              </p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                8. Third-Party Services
              </h2>
              <p>
                Guardien AI currently uses <strong>Firebase Cloud Messaging (Google)</strong>{" "}
                solely to deliver secure push notifications and data messages
                between Guardian and child devices.
              </p>
              <p>
                We do not currently use third-party advertising networks,
                analytics services, crash reporting platforms, or payment
                providers.
              </p>
              <p>
                Any information processed by Firebase Cloud Messaging is governed
                by Google&apos;s applicable terms and privacy policies.
              </p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                9. Acceptable Use
              </h2>
              <p>You agree that you will not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for any unlawful purpose.</li>
                <li>Monitor individuals without lawful authority.</li>
                <li>Attempt to access another Guardian&apos;s account.</li>
                <li>Attempt to access another family&apos;s child information.</li>
                <li>
                  Reverse engineer, decompile, modify, or interfere with Guardien
                  AI or its backend systems.
                </li>
                <li>Circumvent authentication, pairing, or security mechanisms.</li>
                <li>Use Guardien AI to harass, exploit, abuse, or endanger any child.</li>
              </ul>
              <p>
                We reserve the right to suspend, restrict, or terminate access
                where necessary to protect users, maintain the integrity of the
                Service, investigate suspected misuse, comply with applicable
                law, or enforce these Terms.
              </p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                10. Intellectual Property
              </h2>
              <p>
                Guardien AI, including its software, source code, artificial
                intelligence models, user interface, graphics, logos, trademarks,
                documentation, databases, and all related intellectual property,
                is owned by SeraphGuard Labs Pvt Ltd or its licensors and is
                protected under applicable intellectual property laws.
              </p>
              <p>
                These Terms grant you a limited, non-exclusive, non-transferable,
                revocable license to use the Service solely for its intended
                purpose. No ownership rights are transferred to you.
              </p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                11. Account Deletion and Termination
              </h2>
              <p>
                You may permanently delete your account at any time using the
                application.
              </p>
              <p>Upon deletion:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your Guardian account is permanently removed.</li>
                <li>All associated child profiles are permanently deleted.</li>
                <li>
                  Stored location history, alerts, requests, screen-time
                  information, tasks, and related data are permanently deleted.
                </li>
              </ul>
              <p>
                We may suspend or terminate accounts that violate these Terms or
                applicable law.
              </p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                12. Disclaimer of Warranties
              </h2>
              <p>
                The Service is provided <strong>&quot;AS IS&quot;</strong> and{" "}
                <strong>&quot;AS AVAILABLE.&quot;</strong>
              </p>
              <p>
                To the fullest extent permitted by applicable law, SeraphGuard
                Labs Pvt Ltd disclaims all warranties, whether express, implied,
                or statutory, including warranties of merchantability, fitness
                for a particular purpose, accuracy, availability, and
                non-infringement.
              </p>
              <p>
                We do not guarantee uninterrupted service, continuous
                availability, accurate location information, timely
                notifications, complete monitoring, or successful prevention of
                harmful events.
              </p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                13. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, SeraphGuard
                Labs Pvt Ltd shall not be liable for any indirect, incidental,
                consequential, special, exemplary, or punitive damages arising
                from your use of, inability to use, or reliance upon the Service.
              </p>
              <p>
                Our total aggregate liability arising from any claim relating to
                Guardien AI shall not exceed:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  the total amount paid by you for the Service during the twelve
                  (12) months preceding the claim; or
                </li>
                <li><strong>INR 1,000</strong>, if no fees have been paid by you,</li>
              </ul>
              <p>whichever is greater.</p>
              <p>Nothing in these Terms excludes liability that cannot legally be excluded.</p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                14. Indemnification
              </h2>
              <p>
                You agree to defend, indemnify, and hold harmless SeraphGuard Labs
                Pvt Ltd, its directors, officers, employees, affiliates,
                contractors, licensors, and partners against any claims,
                liabilities, losses, damages, expenses, and legal costs arising
                from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your violation of these Terms.</li>
                <li>Your violation of applicable law.</li>
                <li>Your unauthorized monitoring of another person.</li>
                <li>Misuse of the Service.</li>
              </ul>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                15. Force Majeure
              </h2>
              <p>
                We are not responsible for delays or failures resulting from
                circumstances beyond our reasonable control, including internet
                outages, cloud service interruptions, cyberattacks,
                telecommunications failures, natural disasters, governmental
                actions, labour disputes, or other force majeure events.
              </p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                16. Changes to These Terms
              </h2>
              <p>
                We may revise these Terms from time to time to reflect legal,
                security, technological, or operational changes.
              </p>
              <p>
                Where changes are material, we will notify you through the
                application, by email, or through another reasonable communication
                method.
              </p>
              <p>
                Your continued use of Guardien AI after revised Terms become
                effective constitutes acceptance of the updated Terms.
              </p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                17. Governing Law and Jurisdiction
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with
                the laws of the Republic of India.
              </p>
              <p>
                Any dispute arising from these Terms or the Service shall be
                subject to the exclusive jurisdiction of the competent courts
                located where SeraphGuard Labs Pvt Ltd has its registered office
                in India.
              </p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                18. Severability
              </h2>
              <p>
                If any provision of these Terms is held to be unlawful, invalid,
                or unenforceable, the remaining provisions shall continue in full
                force and effect.
              </p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                19. Entire Agreement
              </h2>
              <p>
                These Terms, together with the Privacy Policy and any additional
                policies expressly incorporated by reference, constitute the
                entire agreement between you and SeraphGuard Labs Pvt Ltd
                regarding your use of Guardien AI and supersede all prior
                agreements relating to the Service.
              </p>

              <h2
                className="text-2xl font-semibold mt-10"
                style={{ fontFamily: "var(--font-caudex)", color: "#001a2d" }}
              >
                20. Contact
              </h2>
              <p>
                If you have any questions regarding these Terms, your account, or
                your personal data, please contact us:
              </p>
              <p>
                <strong>SeraphGuard Labs Pvt Ltd</strong>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@guardienai.com"
                  className="text-[#025794] hover:underline"
                >
                  support@guardienai.com
                </a>
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
