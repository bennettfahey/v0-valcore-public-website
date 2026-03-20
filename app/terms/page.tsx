import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Use | Valcore",
  description: "Valcore terms of use - Review our terms and conditions for using our services.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
        <div className="text-center mb-8">
          <p className="text-sm text-foreground/60 mb-6">Last Updated: March 11, 2026</p>
          <h1 className="text-xl font-semibold text-foreground underline">
            Valcore Terms of Use
          </h1>
        </div>

        <div className="mt-12 space-y-4 text-foreground/80 leading-relaxed text-[15px]">
          <p>
            These <span className="underline">Valcore</span> Terms of Use (these "<strong>Terms</strong>") set forth the conditions that govern your access to and use of <span className="underline">Valcore</span>'s platform and information exchanged in connection with the Purpose (as defined below) (the "<strong>Valcore Platform</strong>"). These Terms constitute a legal agreement between <span className="underline">Valcore</span> Inc. and ("<strong>Valcore</strong>," "<strong>we</strong>" "<strong>our</strong>") and you and the entity you represent ("<strong>you</strong>" or "<strong>your</strong>"). You and <span className="underline">Valcore</span> may each be referred to in these Terms as a "<strong>Party</strong>" and collectively as the "<strong>Parties</strong>."
          </p>
          
          <p className="uppercase text-sm">
            BY CLICKING ON "I AGREE" OR SUBMITTING ANY INFORMATION VIA VALCORE PLATFORM OR IN CONNECTION WITH THE PURPOSE, YOU ACCEPT THESE TERMS AND AGREE TO BE BOUND BY THE TERMS HEREIN. THIS AGREEMENT WILL BE EFFECTIVE ON THE DATE YOU PERFORM THE ACTION TO ACCEPT AS DESCRIBED IN THE IMMEDIATELY PRECEDING SENTENCE ("<strong>Effective Date</strong>") AND THIS AGREEMENT SHALL CONTINUE UNTIL TERMINATED BY EITHER PARTY IN ACCORDANCE WITH SECTION 12. IF YOU ARE ENTERING INTO THESE TERMS ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, YOU REPRESENT THAT YOU HAVE THE AUTHORITY TO BIND YOUR COMPANY OR OTHER LEGAL ENTITY TO THESE TERMS.
          </p>
          
          <p className="uppercase text-sm">
            IF YOU ARE SHARING INFORMATION ON BEHALF OF A COMPANY'S SUBSIDIARIES OR AFFILIATED ENTITIES (each, an "<strong>Affiliated Entity</strong>") OR IF YOU ARE A PRIVATE EQUITY FIRM ("<strong>PE Firm</strong>") SHARING INFORMATION ON BEHALF OF A PORTFOLIO COMPANY OR MANAGED COMPANY (each, a "<strong>Portfolio Company</strong>") YOU REPRESENT THAT YOU HAVE THE AUTHORITY TO SHARE SUCH INFORMATION. YOU AGREE THAT YOU ARE JOINTLY AND SEVERALLY LIABLE FOR ALL ACTIONS, OBLIGATIONS, AND LIABILITIES OF ANY AFFILIATED ENTITIES, PORTFOLIO COMPANIES, OR OTHER ENTITIES ON WHOSE BEHALF YOU ACCESS OR USE THE VALCORE PLATFORM OR SHARE INFORMATION UNDER THESE TERMS, INCLUDING BUT NOT LIMITED TO ANY BREACH OF THESE TERMS, UNAUTHORIZED ACCESS, OR MISUSE OF THE PLATFORM BY SUCH ENTITIES.
          </p>

          {/* Section 1 */}
          <p className="mt-6">
            <strong>1.</strong>{" "}<span className="underline font-semibold">Purpose</span>. The purpose of the <span className="underline">Valcore</span> Platform is: (a) to evaluate your potential membership in <span className="underline">Valcore</span>'s Group Purchasing Organization (GPO), (b) if and as applicable, onboard you and/or Affiliated Entities and Portfolio Companies as a member of <span className="underline">Valcore</span>'s GPO, and (c) facilitate and enhance your use of the <span className="underline">Valcore</span> GPO program provided under your participation agreement, on an ongoing basis (collectively, the "<strong>Purpose</strong>"). We grant you a limited, revocable, nonexclusive, non-sublicensable, non-transferable, license to use the Valcore Platform solely for your internal business purposes use and not for republication, distribution, assignment, sublicense, sale, preparation of derivative works, or other use.
          </p>

          {/* Section 2 */}
          <p className="mt-6">
            <strong>2.</strong>{" "}<span className="underline font-semibold">Account Information & Security</span>. To access and use the Valcore Platform, you will create an account ("<strong>Account</strong>") and associated credentials for accessing your Account ("<strong>Account Credentials</strong>"). When providing information to register for an Account or submit information via the Valcore Platform, you agree to provide true, accurate, current, complete and up-to-date information. If you provide any information that is untrue, inaccurate, noncurrent or incomplete, or we have reasonable grounds to suspect that such information is untrue, inaccurate, noncurrent or incomplete, then we have the right to terminate or refuse any and all current or future access or use of the Valcore Platform (or any portion thereof).
          </p>
          <p>
            We reserve the right to take any action that we deem necessary to ensure the security of the Valcore Platform and your Account, including without limitation changing your password, terminating your Account, or requesting additional information to authorize transactions on your Account. You are solely responsible for keeping your Account Credentials confidential. You are solely liable for any claims, damages, losses, costs or other liabilities resulting from or caused by any failure to keep your Account Credentials confidential, whether such failure occurs with or without your knowledge or consent. You agree to immediately notify us of any suspected or actual unauthorized access to or use of your Account Credentials or any other breach of your Account security.
          </p>

          {/* Section 3 */}
          <p className="mt-6">
            <strong>3.</strong>{" "}<span className="underline font-semibold">Confidentiality</span>. You and <span className="underline">Valcore</span> will disclose to each other certain Confidential Information (defined below).
          </p>
          
          <p className="ml-8 mt-3">
            <strong>a.</strong>{" "}<span className="underline">Definitions</span>. All tangible and intangible non-public information, in any form or medium, including without limitation, commercial, payment, and pricing information (such information, "<strong>Content</strong>"): (i) disclosed pursuant to these Terms; and/or (ii) of which a Party becomes aware in connection with these Terms, shall be deemed to be "<strong>Confidential Information</strong>" whether or not it is labeled as confidential. For clarity, <span className="underline">Valcore</span>'s Confidential Information will include any pricing information under our contracts with vendors and any pricing analysis we provide, including, without limitation, any price savings analysis offered to you by <span className="underline">Valcore</span> ("<strong>Reports</strong>"). "<strong>Recipient</strong>" shall be defined as the Party receiving Confidential Information disclosed and "<strong>Discloser</strong>" shall be defined as the Party disclosing Confidential Information under these Terms. "<strong>Confidential Information</strong>" does not include (other than pricing information in a vendor contract) information that: (i) is now or after the Effective Date becomes publicly known through no breach of these Terms by Recipient; (ii) is properly within the rightful possession of Recipient prior to disclosure under these Terms; (iii) constitutes Content provided to <span className="underline">Valcore</span> which has been de-identified; or (iv) subsequent to disclosure under these Terms, is lawfully received from a third party with no restriction on further disclosure and such third party is not in breach of any non-disclosure obligation with Discloser.
          </p>

          <p className="ml-8 mt-3">
            <strong>b.</strong>{" "}<span className="underline">Legal Obligation to Disclose</span>. If Recipient becomes legally required to disclose any Confidential Information from Discloser, and if Recipient is legally allowed to do so, then Recipient shall provide Discloser with prompt written notice so Discloser, at Discloser's sole expense, may seek a protective order or other appropriate remedy. If such protective order or other remedy is not obtained, Recipient shall disclose only that portion of such Confidential Information it is legally required to disclose.
          </p>

          <p className="ml-8 mt-3">
            <strong>c.</strong>{" "}<span className="underline">Use of Confidential Information</span>. All Confidential Information shall remain the property of Discloser. <span className="underline">Valcore</span> may: (i) share your Confidential Information with third party subcontractor(s) that provide data analysis services for <span className="underline">Valcore</span> and are bound by confidentiality obligations substantially similar to those contained herein; and (ii) share your Confidential Information and any associated data analysis with you or any other authorized party with your consent.
          </p>

          <p className="ml-8 mt-3">
            <strong>d.</strong>{" "}<span className="underline">Disclosure to Related Entities</span>. Any disclosure of <span className="underline">Valcore</span> Confidential Information to any Affiliated Entities, Portfolio Companies, or PE Firm not bound by these Terms will require such entity to execute a confidentiality agreement prepared by <span className="underline">Valcore</span>.
          </p>

          <p className="ml-8 mt-3">
            <strong>e.</strong>{" "}<span className="underline">Disclosure to Other Third Parties</span>. Except as expressly authorized in these Terms, Confidential Information shall not be disclosed to any third party or reproduced in any form without the prior written authorization of Discloser.
          </p>

          <p className="ml-8 mt-3">
            <strong>f.</strong>{" "}<span className="underline">Equitable Relief</span>. Each Party acknowledges and agrees that any breach of these Terms may cause irreparable harm for which monetary damages would be inadequate compensation. Upon breach of these Terms, if <span className="underline">Valcore</span> seeks equitable relief, you waive any requirement for <span className="underline">Valcore</span> to post any bond or security.
          </p>

          <p className="ml-8 mt-3">
            <strong>g.</strong>{" "}<span className="underline">Authority to Disclose</span>. Each Party warrants and represents to the other Party that it possesses all necessary rights and authority to lawfully make disclosures under these Terms.
          </p>

          {/* Section 4 */}
          <p className="mt-6">
            <strong>4.</strong>{" "}<span className="underline font-semibold">Ownership of Content</span>. You retain ownership of the Content that you provide to <span className="underline">Valcore</span>. <span className="underline">Valcore</span> owns any de-identified information or other data derived from the Content that does not identify you.
          </p>

          {/* Section 5 */}
          <p className="mt-6">
            <strong>5.</strong>{" "}<span className="underline font-semibold">Restrictions on Use</span>. You will not use the Valcore Platform for any use other than the Purpose. You will not, and will not permit any third party to: (i) decompile, reverse engineer, disassemble, derive the source code of, or decrypt the Valcore Platform or its related systems or networks; (ii) link to, mirror, or frame any portion of the Valcore Platform except where expressly permitted by <span className="underline">Valcore</span>; (iii) use any robot, spider, scraper, or other automatic or manual means to access the Valcore Platform or copy any content or information on the Valcore Platform; (iv) remove, obscure, or alter any proprietary notices of us or our affiliates, partners, suppliers, or licensors; (v) modify, adapt, improve, enhance, or prepare derivative works based upon the Valcore Platform; (vi) disable, overburden, impair, or otherwise interfere with or interrupt the Valcore Platform or its related systems or networks; (vii) interfere with any other party's use and enjoyment of the Valcore Platform; or (viii) infringe any third party's copyright, trademark, or other proprietary rights.
          </p>

          {/* Section 6 */}
          <p className="mt-6">
            <strong>6.</strong>{" "}<span className="underline font-semibold">Privacy Policy</span>. You may view a copy of our <a href="/privacy-policy" className="text-primary underline hover:no-underline">Privacy Policy</a>, which explains our practices relating to the collection and use of your personal information through or in connection with the Valcore Platform. The Privacy Policy is incorporated into these Terms and governs our use of your information.
          </p>

          {/* Section 7 */}
          <p className="mt-6">
            <strong>7.</strong>{" "}<span className="underline font-semibold">No Warranties</span>. THE VALCORE PLATFORM AND ALL MATERIALS EXCHANGED IN CONNECTION WITH THE PURPOSE, INCLUDING BUT NOT LIMITED TO ANY REPORTS OR ANALYSIS, ARE PROVIDED TO YOU ON AN "AS-IS," "AS-AVAILABLE" BASIS AND WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. WE MAKE NO WARRANTY AS TO THE ACCURACY, COMPLETENESS, CURRENCY OR RELIABILITY OF ANY SERVICES, PRODUCTS, INFORMATION, OPINIONS, REPORTS AND MATERIALS AVAILABLE THROUGH THE VALCORE PLATFORM.
          </p>

          {/* Section 8 */}
          <p className="mt-6">
            <strong>8.</strong>{" "}<span className="underline font-semibold">Trademarks</span>. All trademarks, service marks and logos that are used or displayed on the Valcore Platform are owned by us or our licensors. You must obtain our written permission prior to using any trademark or service mark of ours. Unauthorized use of any trademarks, service marks or logos used on the Valcore Platform may be a violation of state, national and international trademark laws.
          </p>

          {/* Section 9 */}
          <p className="mt-6">
            <strong>9.</strong>{" "}<span className="underline font-semibold">Violation of Rules and Regulations</span>. We reserve the right to seek all remedies available at law and in equity for violations of these Terms, including the right to block access from a particular Internet address to the Valcore Platform. We may cooperate with legal authorities and/or third parties in the investigation of any suspected or alleged crime or civil wrong.
          </p>

          {/* Section 10 */}
          <p className="mt-6">
            <strong>10.</strong>{" "}<span className="underline font-semibold">Indemnity</span>. You agree to indemnify, defend, and hold us and our subsidiaries, affiliates, officers, agents, employees, contractors, partners and licensors harmless from and against any and all suits, actions, losses, claims, proceedings, demands, expenses, damages, settlements, judgments, injuries, liabilities, obligations, risks, and costs relating to or arising out of: (i) your use of the Valcore Platform; (ii) your violation of these Terms; (iii) any Content you provide; (iv) your negligence, fraud, or willful misconduct; (v) your use or misuse of your Account; (vi) your violation of any law or regulation; and/or (vii) your violation of the rights of or obligations to a third party.
          </p>

          {/* Section 11 */}
          <p className="mt-6">
            <strong>11.</strong>{" "}<span className="underline font-semibold">Limitation of Liability</span>. IN NO EVENT WILL VALCORE OR ITS LICENSORS, SUBCONTRACTORS, SUPPLIERS OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, EXEMPLARY, OR SPECIAL DAMAGES, WHETHER BASED IN CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE. ALL LIABILITY OF VALCORE SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNTS PAID BY YOU TO VALCORE IN THE THREE (3) MONTHS PRECEDING THE CLAIM, OR (B) $1,000.
          </p>

          {/* Section 12 */}
          <p className="mt-6">
            <strong>12.</strong>{" "}<span className="underline font-semibold">Termination</span>. Either Party may, at its sole discretion, terminate these Terms at any time by written notice to the other party.
          </p>

          {/* Section 13 */}
          <p className="mt-6">
            <strong>13.</strong>{" "}<span className="underline font-semibold">Additional Agreements & Conflicts</span>. If you and <span className="underline">Valcore</span> have already entered into or at a later date enter into a participation agreement, confidentiality agreement, or any other agreements ("<strong>Additional Agreements</strong>"), these Terms shall be in addition to and not in lieu of those Additional Agreements.
          </p>

          {/* Section 14 */}
          <p className="mt-6">
            <strong>14.</strong>{" "}<span className="underline font-semibold">Survival</span>. The terms, provisions, representations, and warranties contained in these Terms whereby their sense and context are intended to survive the performance and termination of these Terms, shall so survive the termination of these Terms.
          </p>

          {/* Section 15 */}
          <p className="mt-6">
            <strong>15.</strong>{" "}<span className="underline font-semibold">No Fiduciary Relationship</span>. Except to the extent set forth in a separate agreement between you and us, there is no fiduciary relationship between you and us. These Terms do not create any relationship of principal and agent, partnership, joint venture, or employer and employee, between you and us.
          </p>

          {/* Section 16 */}
          <p className="mt-6">
            <strong>16.</strong>{" "}<span className="underline font-semibold">Right to Monitor</span>. We reserve the right to actively monitor the use of the Valcore Platform and use any information gathered during such monitoring for any permissible purpose such as to maintain the security of the Valcore Platform.
          </p>

          {/* Section 17 */}
          <p className="mt-6">
            <strong>17.</strong>{" "}<span className="underline font-semibold">Electronic Communications and Notice</span>. When you visit the Valcore Platform or send e-mails in connection with the Purpose, you are communicating with us electronically and you consent to receive communications from us electronically. We will communicate with you by e-mail at the address we have on file for you, or by posting notices on the Valcore Platform. You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.
          </p>

          {/* Section 18 */}
          <p className="mt-6">
            <strong>18.</strong>{" "}<span className="underline font-semibold">Choice of Law and Arbitration</span>. By using the Valcore Platform, regardless of where you live or are located in the world, you consent to these Terms and any claims relating to the information, services or products made available through the Valcore Platform will be governed by the laws of the State of Delaware, U.S.A., excluding the application of its conflicts of law rules. Any dispute, controversy, or claim arising out of or relating to these Terms shall be finally settled by binding arbitration administered by the American Arbitration Association ("<strong>AAA</strong>") in accordance with its Commercial Arbitration Rules.
          </p>

          {/* Section 19 */}
          <p className="mt-6">
            <strong>19.</strong>{" "}<span className="underline font-semibold">Time Limit on Claims</span>. You agree that any claim you may have arising out of or related to your use of the Valcore Platform or your relationship with us must be filed within one (1) year from the date of the event that gave rise to the claim; otherwise, your claim is permanently barred.
          </p>

          {/* Section 20 */}
          <p className="mt-6">
            <strong>20.</strong>{" "}<span className="underline font-semibold">Severability and Waiver</span>. If any provision of these Terms will be deemed unlawful, void, or for any reason unenforceable, then that provision will be deemed severable from these Terms and will not affect the validity and enforceability of any remaining provisions. Our failure to enforce the strict performance of any provision of these Terms will not constitute a waiver of our right to subsequently enforce such provision or any other provisions of these Terms.
          </p>

          {/* Section 21 */}
          <p className="mt-6">
            <strong>21.</strong>{" "}<span className="underline font-semibold">Assignment</span>. We may assign these Terms or any part of them without restriction or condition. You may not assign or otherwise transfer these Terms or your rights under these Terms without our prior written consent and any assignment in violation of this prohibition will be null and void.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
