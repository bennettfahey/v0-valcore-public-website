import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Valcore",
  description: "Valcore privacy policy - Learn how we collect, use, and protect your information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-primary lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-foreground/60">
            Last Modified Date: March 2026
          </p>
          
          <div className="mt-12 space-y-6 text-foreground/80 leading-relaxed">
            <p>
              At Valcore Inc. ("Valcore"), we take your privacy seriously. This Policy describes how we collect, use, process, and disclose personally identifiable information that we gather about you. This information comes from our primary website www.valcoregpo.com and other sites we use from time to time for support functions ("Websites"); from usage of the Valcore Web Application and Software through web browsers, APIs, and widgets ("Services"); and from your interactions with Valcore personnel through phone calls, emails, and other methods. This Policy also outlines your rights and choices regarding the information collected about you.
            </p>
            <p>
              This policy applies to all visitors to our website, to all users of our Services, whether you are a paying customer, and to all other individuals that have interactions with Valcore. When you use our Services, access our Websites, or contact Valcore personnel, you are accepting the terms, conditions and practices within this Policy.
            </p>
            <p>
              For EU Residents, this Policy is intended to comply with the EU General Data Protection Regulation ("GDPR"). If you have any questions about this Policy, please contact us at privacy@valcoregpo.com.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">Information We Collect About You</h2>
            <p>
              We receive and process various types of information, including personally identifiable information (such as name and email address) and non-personally identifiable information. This Policy covers any information that either directly identifies you or could reasonably be used to identify you, whether alone or in combination with other information ("Personal Information"). Personal Information includes any information relating to an identified or identifiable natural person.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Content</h3>
            <p>
              Our Services are used by customers and their designated users to create, distribute, and share information ("Content") from a variety of sources. While principally technical in nature, this Content may include personal information about you, obtained by our customers or provided by you through provisioning the Services, through Services features such as comments, transactional activities such as shopping cart and order submittals, and other means. All Content, including your login information under the customer's account, is owned by our customers, and Valcore has no control over this Content. As a provider of the Services, acting under the direction of our customers, Valcore is acting in the role of a "Processor" (as defined by the GDPR) for all Content managed by the Services. Accordingly, the customer's privacy policy, not this privacy policy, applies to information of which we are a processor.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">AI</h3>
            <p>
              We incorporate AI-powered features using an internal Large Language Model (LLM) to enhance our Services to enhance user experience and service delivery. These features utilize machine learning, natural language processing, and other advanced technologies to deliver predictive and autonomous functionalities. Our use of AI technology is designed to improve service delivery while maintaining appropriate safeguards for your information.
            </p>
            <p>
              When you use our AI features, the inputs you provide (such as data, prompts, queries, or uploaded files) and the outputs generated may be processed by our AI systems solely to deliver and improve these features. We do not sell, share, or use your data to train unrelated AI models or for marketing purposes.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Data Usage and Retention:</strong> User-provided inputs are retained only as needed to deliver services. Where applicable, data may be anonymized and aggregated for internal analytics and improvement purposes, in accordance with privacy and legal standards.</li>
              <li><strong>Sensitive Information:</strong> Users are solely responsible for ensuring that they do not include sensitive or regulated data, including but not limited to personal health information, financial records, government-issued IDs, or other Personally Identifiable Information (PII) when interacting with AI Features.</li>
              <li><strong>User Rights and Control:</strong> You may request the deletion of your inputs or outputs generated by the AI features. Contact us to support these requests.</li>
              <li><strong>Security Measures:</strong> AI processing is subject to robust encryption, access controls, and operational logging.</li>
              <li><strong>Compliance and Transparency:</strong> We adhere to applicable data protection laws (e.g., GDPR, CCPA) and governance standards, including auditability of AI interactions.</li>
            </ul>
            <p>
              By utilizing our AI features, you consent to the processing of your data as described in this provision. If you have any questions or require assistance, please contact us at privacy@valcoregpo.com.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Other Information</h3>
            <p>
              Valcore collects data about you through your interactions with our Websites, through your interactions with our Services, and through your interactions with Valcore personnel. We also collect information about you from third-party sources that extend or enrich information that you have provided.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Information You Provide</h3>
            <p>
              When you interact with our websites, you may volunteer information such as name, email address, and other personally identifiable information. You may also provide information through your use of the Services, such as updating your profile or adding an email address. During interactions with Valcore personnel, you may provide any type of information to Valcore at your discretion. If you transact business with us, you may be asked to provide further information such as billing address, credit card number, or other financial information. However, aside from financial information required to transact business, we do not request sensitive information from you. If you attend events such as webinars, whether directly through Valcore or via a Valcore partner, you may provide personal data such as your name, email, and phone number.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Information Others May Provide</h3>
            <p>
              Our customers, through their interaction with the Services, may provide us with information on you that they require for your use of the Services or that is needed to provision your account. In many instances, we act as a data processor (e.g., service provider) for such customers, and as such, will use this information only on behalf of and in accordance with the instructions of such customers. You should refer to the privacy policies of these customers to obtain more information about how your personal data is handled and should direct any related questions or concerns to such customers.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Information from Other Sources</h3>
            <p>
              We may obtain other information about you, including personal and non-personal information, from publicly available sources, or from third parties that provide data enrichment services. We use these sources to obtain additional information about you such as your address and location, your employer, and other demographic data.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-8 mb-3">Information from Tracking Technologies</h3>
            <p>
              Our Websites and Services may use several technologies to enable you to navigate the Websites and Services, as well as to collect information about you, your browser, your computer, and how you are interacting with us.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Our Services and Websites use essential cookies. These cookies are essential to enable you to navigate our Websites and Services and use the features, such as accessing secure areas. Without these cookies, we cannot provide the services you have requested. If any of our Services use other types of cookies, you will be notified of the usage of such cookies before you access the Services. With regard to our Websites only, we may use analytics cookies. Analytics cookies allow us to understand more about how many visitors we have to our Websites, how many times they visit us and how many times a user viewed specific pages within our Websites. We use Google Analytics. For more information about Google Analytics, please refer to "How Google Uses Information From Sites or Apps that Use Our Services", which can be found at www.google.com/policies/privacy/partners/, or any other URL Google may provide from time to time.</li>
              <li><strong>Internet information:</strong> We may use standard internet techniques to collect technical and implicit information about you, such as your IP address, your IP country and location, date/time stamps, referring URL, and other information.</li>
              <li><strong>Website monitoring:</strong> Our Websites may also use technologies to monitor your interactive session, such as tracking the time you spend on various pages, your mouse movements, and your overall navigation through the Websites.</li>
              <li><strong>Beacons:</strong> Emails sent to you by the Websites may contain standard technologies such as web beacons to track your reading of the email and your navigation through any of the links within the email. This tracking enables us to understand the usefulness and effectiveness of these emails and associated campaigns and activities.</li>
            </ul>
            <p>
              Our Websites and Services are intended for business use by adults only. We do not knowingly collect or process any personal information from children under the age of 13. If we become aware that we have inadvertently collected personal information from a child under 13, we will take reasonable steps to promptly delete such information from our records.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">Where We Store Information About You</h2>
            <p>
              Our principal data center is located in the United States. Information may also be sent to servers in other countries around the world.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">How We Use and Share Your Information</h2>
            <p>
              Our usage of your information is based in different contexts upon your consent, our need to perform a contract, our obligations under law, and/or our legitimate interest in conducting our business, which are not overridden by your interests and fundamental rights. We use your information within Valcore (and its subsidiaries and affiliates) for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide you with access to the Services and the functionality contained within them.</li>
              <li>To personalize your experience with the Services and Websites.</li>
              <li>To assist our customers where they are providing support to you.</li>
              <li>To perform normal business operations such as billing, order fulfillment, legal, and administration.</li>
              <li>To notify you regarding the status of the Services and Websites.</li>
              <li>To provide you with support and incident assistance on the Services and Websites.</li>
              <li>To communicate with you by phone, email, postal mail, or other means such as social media and text messages.</li>
              <li>To help us with our marketing and sales efforts.</li>
              <li>To email tailored sales and marketing information to you, if you have not opted out of these communications.</li>
              <li>To compile analytics and statistics on your use of our Services and Websites so that we can better understand how they are used and how we might improve them.</li>
              <li>To detect, resolve, and prevent inappropriate, unauthorized or illegal activity, to preserve your or our rights, or to ensure compliance with our Terms of Use or this Policy.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">How We Share Your Information</h2>
            <p>
              The information we collect about you is primarily used for Valcore and its subsidiaries and affiliates' business purposes. We reserve the right to share, transfer, or disclose your information with third parties as detailed below, or as otherwise permitted by applicable law or with your consent.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Authorized service providers:</strong> We may share information with third party service providers where it is required to perform a business activity, such as processing a credit card, delivering an email, supporting our Websites and Services, or other functions. We share only the information needed to perform the business activity, and the service provider is not permitted to use your personal information for any other purpose.</li>
              <li><strong>Legal authorities:</strong> We may share your information with legal authorities, without your consent, in response to a lawful demand. This could include, for example, subpoenas, warrants, or court orders, compliance with relevant laws, or be in connection with any legal process.</li>
              <li><strong>Mergers and Acquisitions:</strong> If another company acquires, or plans to acquire, our company, business, or our assets, we will also share information with that company, including at the negotiation stage.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">How We Protect Your Information</h2>
            <p>
              We utilize commercially reasonable controls and procedures designed to protect your personal information from unauthorized access and disclosure. Our Websites and Services implement access controls and we maintain internal policies governing employee access to data based on business need.
            </p>
            <p>
              Your information security is a shared responsibility between you and your partner companies, including Valcore. While we implement reasonable technical and organizational measures to protect your information, no system can guarantee absolute security. We expressly disclaim any representations or warranties regarding the security of your information, and you acknowledge and agree that you transmit information to us at your own risk. Please always take care to protect your personal information, avoid unsecure mechanisms such as email when communicating personal information, and notify us immediately at privacy@valcoregpo.com if you suspect any unauthorized access or compromise of your personal information.
            </p>
            <p>
              In the event that we are required by law to inform you of a breach to your personal information, we may notify you electronically, in writing, or by telephone, if permitted to do so by law.
            </p>
            <p>
              In some cases, your information may be stored and managed by third party solution providers. You acknowledge and agree that any information shared with or processed by such third parties will be subject to their respective privacy policies and terms of service, and Valcore shall not be responsible for their handling of your information.
            </p>
            <p>
              As a multi-national company, we transmit information between and among our affiliates. As a result, your information may be processed in a foreign country where privacy laws may be less stringent than the laws in your country. Nonetheless, we will maintain robust privacy protections for personal information consistent with or exceeding the privacy principles of the country in which we first received your information, and will implement additional safeguards as reasonably necessary when transferring such information across borders. Valcore uses Standard Contractual Clauses to legally transfer data out of the EU. By submitting your personal information to us you agree to the transfer, storage and processing of your information in a country other than your country of residence including, but not necessarily limited to, the United States. If you would like more information concerning our attempts to apply the privacy principles applicable in one jurisdiction to data when it goes to another jurisdiction you can contact us using the contact information below.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">How You Can Manage Your Information</h2>
            <p>
              If you have concerns regarding personal or sensitive information that may be contained within Content, or you would like to review, modify, or delete Content, please notify the appropriate Valcore customer directly. We may, at our discretion, assist you with finding and contacting the customer, but assume no obligation to do so. You may request that your data be provided to you in an accessible format so that you may use your data for your own purposes. We reserve the right to retain your personal information as necessary to comply with our legal obligations, resolve disputes, enforce our agreements, protect our legitimate business interests, or as otherwise permitted by applicable law, even if you request deletion.
            </p>
            <p>
              You can utilize features within your web browser to restrict or prevent the use of cookies. If you do so, your ability to utilize the Websites and Services may be substantially limited or impossible, and we assume no responsibility for any resulting loss of functionality.
            </p>
            <p>
              You may opt out of sales and marketing emails by following the instructions in any email that is sent to you or contact Valcore at privacy@valcoregpo.com. We may still send you important transactional, event, or administration emails to you, even if you have opted out of sales and marketing emails.
            </p>
            <p>
              If you would like to review, modify, or delete any of your personal information, please email privacy@valcoregpo.com or file a ticket at support.valcoregpo.com. We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with our legal obligations, resolve disputes, and enforce our agreements, or as otherwise permitted by applicable law. Again, you may request that your data be provided to you in an accessible format so that you may use your data for your own purposes. It may not always be possible to honor all deletion requests because in many situations we must keep your personal information to comply with our legal obligations, resolve disputes, enforce our agreements, or for another one of our business purposes.
            </p>
            <p>
              If you would like to object to our use or disclosure of your personal information, please email privacy@valcoregpo.com or file a ticket at support@valcoregpo.com.
            </p>
            <p>
              If you are not satisfied with our response, and are in the European Union, you may have a right to lodge a complaint with your local supervisory authority.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">How We Update This Policy</h2>
            <p>
              We may update this Policy from time to time to reflect changes to our practices or to ensure compliance with legal frameworks. For significant and material changes, we may notify you by email using the address in your account or post the notice through the Websites and/or Services. Your continued use of the Services following such notification constitutes acceptance of the updated Policy. To the extent that our policy changes in a material way, the policy that was in place at the time that you submitted personal information to us will generally govern that information unless we receive your consent to the new privacy policy. We will note the effective date of the latest version at the beginning of the Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
