import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import alenceLogo from "@/assets/alence-logo.png";

const TermsAndConditions = () => (
  <div className="min-h-screen bg-background">
    <header className="border-b border-border px-5 py-4 flex items-center gap-4 max-w-3xl mx-auto">
      <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft size={20} />
      </Link>
      <img src={alenceLogo} alt="Aylence" className="h-5" />
    </header>

    <main className="max-w-3xl mx-auto px-5 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-1">Terms And Conditions</h1>
      <p className="text-xs text-muted-foreground mb-6">Last Updated: 28 April, 2025</p>

      <div className="bg-card border border-border rounded-xl p-6 space-y-6 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-foreground mb-2">1. Acceptance of Terms</h2>
          <p>These Terms of Service ("Terms") govern your use of the services provided by Aylence ("Aylence", "we", "us", or "our"). By accessing or using our website https://aylence.com/ and related services (collectively, the "Services"), you agree to comply with and be bound by these Terms and Conditions.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">2. Description of Services</h2>
          <p><strong className="text-foreground">Aylence</strong> is an educational services brand, dedicated to empowering students and working professionals through skill-building workshops and career development programs. The brand organizes hands-on training sessions, industry-focused seminars, and certification courses across areas such as Artificial Intelligence, Cybersecurity, Digital Marketing, Entrepreneurship, and Emerging Technologies. Aylence also provides mentorship opportunities, career counseling, and placement assistance to help individuals advance their professional journeys and achieve long-term success.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">3. Registration and Account Security</h2>
          <p className="mb-3"><strong className="text-foreground">To use the Services you must:</strong></p>
          <ol className="list-[lower-roman] list-inside space-y-1 pl-2 mb-4">
            <li>be at least eighteen (18) years of age;</li>
            <li>have not previously been suspended or removed from the Services; and</li>
            <li>register for and use the Services in compliance with any and all applicable laws and regulations.</li>
          </ol>
          <h3 className="text-sm font-semibold text-foreground mb-1">a. Account Registration</h3>
          <p className="mb-3">To access some features of the Services, you may be required to register for an account. When you register for an account, we may ask you to give us certain identifying information about yourself, including but not limited to your name, email address, phone number, address, and other contact information, and to create a username and password ("Registration Information"). When registering for and maintaining an account, you agree to provide true, accurate, current, and complete information about yourself. You also agree not to impersonate anyone, misrepresent any affiliation with anyone else, use false information, or otherwise conceal your identity from Aylence for any purpose.</p>
          <h3 className="text-sm font-semibold text-foreground mb-1">b. You Are Responsible For Your Account</h3>
          <p>You are solely responsible for maintaining the confidentiality and security of your password and other Registration Information. For your protection and the protection of other users, we ask you not to share your Registration Information with anyone else. If you do share this information with anyone, we will consider their activities to have been authorized by you. If you have reason to believe that your account is no longer secure, you must immediately notify us at contact@aylence.com.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">4. Specific Requirements for Certain Services</h2>
          <p className="mb-3">Your use of the Services constitutes your acknowledgement and acceptance of the following specific requirements and terms of use for certain of the Aylence Services.</p>
          <ol className="list-[lower-alpha] list-inside space-y-2 pl-2">
            <li>Forums. Aylence may offer features that allow users to share content, comments and opinions on financial topics with other users in the Community Forum, as well as other user discussion forum platforms (collectively, the "Forum"). Your use of the Forum is governed by the Terms, as well as our Community Guidelines.</li>
            <li>Forum content is the contributions of independent users not affiliated with Aylence, whose opinions are their own. Aylence does not guarantee the accuracy, integrity or quality of the opinions and advice posted on the Forum.</li>
            <li>Aylence may but is not required to, monitor Forum content and reserves the right to edit, correct or delete any Forum content for any reason at our sole discretion.</li>
            <li>You hereby grant to Aylence a royalty-free, perpetual, irrevocable, non-exclusive right and license to use, reproduce, modify, translate, transmit, display, perform and distribute any content, information or material you submit or post to the Forum, in any medium now in existence or hereafter developed, for any purpose, including commercial uses.</li>
            <li>We may terminate a user's access or ability to use the Forum, immediately, without notice, and at our sole discretion, for the user's failure to comply with any terms or conditions of the Terms or Community Guidelines.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">5. Third Party Services</h2>
          <ol className="list-[lower-alpha] list-inside space-y-2 pl-2">
            <li><strong className="text-foreground">Advice from Third Parties.</strong> Some of the Services involve advice from third parties and third-party content. You agree that any such advice and content is provided for informational, educational, or entertainment purposes only, and does not constitute legal, financial, tax planning, medical, or other advice from Aylence.</li>
            <li>You agree that your decision to make available any sensitive or confidential information to third parties is your sole responsibility and at your sole risk. Aylence has no control and makes no representations regarding the use or disclosure of information provided to third parties.</li>
            <li><strong className="text-foreground">Aylence Does Not Endorse Third Parties.</strong> The Services may contain links to third-party websites and services. Aylence provides such links as a convenience and does not control or endorse these websites and services.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">6. Prohibited Conduct</h2>
          <p className="mb-3"><strong className="text-foreground">You agree not to:</strong></p>
          <ol className="list-[lower-alpha] list-inside space-y-2 pl-2">
            <li>Use the Services for any illegal purpose, or in violation of any local, state, national, or international law;</li>
            <li>Violate or misappropriate or encourage others to violate or misappropriate the rights of third parties, including intellectual property rights;</li>
            <li>Post, upload, or distribute any content that is unlawful, defamatory, libellous, inaccurate, or that a reasonable person could deem to be objectionable, profane, indecent, pornographic, harassing, threatening, hateful, or otherwise inappropriate;</li>
            <li>Interfere in any way with security-related features of the Services or the Site;</li>
            <li>Interfere with the operation or any user's enjoyment of the Services, including by uploading or otherwise disseminating viruses, adware, spyware, worms, or other malicious code;</li>
            <li>Access, monitor or copy any content or information of the Site using any robot, scripts, spider, scraper, or other automated means without Aylence's express written permission;</li>
            <li>Perform any fraudulent activity, including impersonating any person or entity, claiming false affiliations, accessing the accounts of other users without permission;</li>
            <li>Copy, reproduce, rent, lease, sell, transfer, assign, sublicense, modify, publish, disclose, distribute, display or prepare derivative works of the Services;</li>
            <li>Reverse engineer, disassemble, or decompile the Services, including any corresponding source code, without prior written consent from us; or</li>
            <li>Sell or otherwise transfer the access granted herein.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">7. Intellectual Property and User Content</h2>
          <p className="mb-3">The Services are protected by applicable copyright and other intellectual property laws, and no materials from the Services may be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in any way without our express permission. All trademarks and service marks on the Services belong to Aylence, except third-party trademarks or service marks, which are the property of their respective owners.</p>
          <p>You may contact: <a href="mailto:contact@aylence.com" className="text-primary hover:underline">contact@aylence.com</a></p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">8. Indemnification</h2>
          <p>You agree that you will be personally responsible for your use of the Services, and you agree to defend, indemnify, and hold harmless Aylence and its former and current employees, contractors, directors, officers and contractors from and against any and all claims, liabilities, damages, losses, and expenses arising out of or in any way connected with (i) any content you have submitted to or through the Services; (ii) your violation of the Terms or any applicable law or regulation; (iii) your violation of any third party right; or (iv) any disputes or issues between you and any third party.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">9. Termination</h2>
          <p>If you violate the Terms, your permission to use the Services will automatically terminate. In addition, Aylence in its sole discretion may suspend or terminate your user account and/or suspend or terminate some or all of your access to the Services at any time, with or without notice to you. You may terminate your account at any time by contacting Customer Service at <a href="mailto:contact@aylence.com" className="text-primary hover:underline">contact@aylence.com</a>.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">10. Modification of the Terms</h2>
          <p>Aylence may modify the Terms and impose new or additional terms or conditions on any use of the Services. If we do so, we will notify you by revising the date at the top of the Terms and/or in some cases, including where required by law, we may provide you with an additional notice. Your continued use of the Services will constitute your acceptance of the modified terms.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">11. Disclaimers Of Warranties</h2>
          <p className="mb-3">The disclaimers and limitations on our liability in this section apply to the fullest extent permitted by applicable law. The Services are provided "as is" and on an "as available" basis, without warranty or condition of any kind, either express or implied.</p>
          <ol className="list-[lower-alpha] list-inside space-y-2 pl-2">
            <li><strong className="text-foreground">No warranties.</strong> Aylence specifically disclaims (i) any implied warranties of merchantability, fitness for a particular purpose, quiet enjoyment, or non-infringement; and (ii) any warranties arising out of course-of-dealing, usage, or trade.</li>
            <li><strong className="text-foreground">No guarantee of accuracy.</strong> Aylence does not guarantee the accuracy of, and disclaims all liability for, any errors or other inaccuracies in the information, content, recommendations, and materials made available through the Services.</li>
            <li><strong className="text-foreground">Services provided for informational purposes.</strong> The information provided through the Services is provided solely for informational, educational, or entertainment purposes and does not constitute legal, financial, tax planning, medical, or other advice.</li>
            <li><strong className="text-foreground">No warranties regarding third parties.</strong> Aylence makes no representations, warranties, or guarantees, express or implied, regarding any third party service or advice provided by a third party.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">12. LIMITATION OF LIABILITY</h2>
          <p className="mb-3"><strong className="text-foreground">TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW:</strong></p>
          <ol className="list-[lower-alpha] list-inside space-y-2 pl-2">
            <li>In no event will Aylence or its officers, employees, service providers or representatives be liable to you for any incidental, special, consequential, indirect, or punitive damages, or for loss of profits, revenue, data or use.</li>
            <li>In no event shall our cumulative liability to you, whether in contract, tort, or otherwise, exceed the greater of what you paid us for the applicable services (if any) and INR 5000/-.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">13. Governing Law</h2>
          <p>These Terms are governed by the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">14. Refund Policy</h2>
          <p className="mb-3">All sales are final, and payment once received is non-refundable. We do not offer refunds for any products or services after payment has been processed.</p>
          <p className="mb-3">By completing your purchase, you agree to this policy and acknowledge that no refunds will be issued.</p>
          <p>If you have any questions about this policy or our products and services, please contact us at <a href="mailto:contact@aylence.com" className="text-primary hover:underline">contact@aylence.com</a>.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">15. Contact Information</h2>
          <p>For any questions or concerns regarding these Terms, please contact us at <a href="mailto:contact@aylence.com" className="text-primary hover:underline">contact@aylence.com</a>.</p>
        </section>
      </div>
    </main>
  </div>
);

export default TermsAndConditions;
