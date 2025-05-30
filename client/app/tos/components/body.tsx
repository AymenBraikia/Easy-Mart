import styles from "./body.module.css";

import Footer from "@/app/components/footer";

function Body() {
	return (
		<div className={styles.pageContainer}>
			<div className={styles.rulesBody}>
				<div className={styles.intro}>
					<h1 className="title">Terms of Use</h1>
					<p className="description">Welcome to Easy Mart. These Terms of Use govern your use of our website and services. By accessing or using Easy Mart, you agree to be bound by these Terms. Please read them carefully.</p>
				</div>
				<ul className={styles.rules}>
					<li className={styles.rule}>
						<div className={styles.ruleTitle}>Acceptance of Terms</div>
						<div className={styles.ruleDescription}>
							By accessing or using our website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
						</div>
					</li>

					<li className={styles.rule}>
						<div className={styles.ruleTitle}>User Accounts</div>
						<div className={styles.ruleDescription}>
							To access certain features of the website, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it
							accurate, current, and complete. <br /> <br />
							You are responsible for safeguarding the password that you use to access the website and for any activities or actions under your password. We encourage you to use &#34;strong&#34; passwords (passwords that use a combination of upper
							and lower case letters, numbers, and symbols) with your account.
						</div>
					</li>

					<li className={styles.rule}>
						<div className={styles.ruleTitle}>Marketplace Conduct</div>
						<div className={styles.ruleDescription}>
							Easy Mart provides a platform for buyers and sellers to connect and conduct transactions. As a user, you agree to:
							<ul className={styles.innerUl}>
								<li>Provide accurate information about products and services</li>
								<li>Honor commitments made through our platform</li>
								<li>Comply with all applicable laws and regulations</li>
								<li>Not engage in fraudulent, deceptive, or misleading practices</li>
								<li>Not use the platform to sell prohibited items</li>
							</ul>
						</div>
					</li>

					<li className={styles.rule}>
						<div className={styles.ruleTitle}>Prohibited Items</div>
						<div className={styles.ruleDescription}>
							The following items may not be listed or sold on Easy Mart:
							<ul className={styles.innerUl}>
								<li>Illegal goods or services</li>
								<li>Counterfeit or unauthorized replica items</li>
								<li>Hazardous materials</li>
								<li>Items that infringe upon intellectual property rights</li>
								<li>Weapons, firearms, and certain weapon accessories</li>
								<li>Adult content or services</li>
								<li>Tobacco products, e-cigarettes, and related items</li>
								<li>Prescription drugs and certain medical devices</li>
							</ul>
						</div>
					</li>

					<li className={styles.rule}>
						<div className={styles.ruleTitle}>Intellectual Property</div>
						<div className={styles.ruleDescription}>
							The website and its original content, features, and functionality are owned by Easy Mart and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.{" "}
						</div>
					</li>

					<li className={styles.rule}>
						<div className={styles.ruleTitle}>User Content</div>
						<div className={styles.ruleDescription}>
							By posting, uploading, or otherwise making available any content on our platform, you grant Easy Mart a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your content in
							any existing or future media. <br />
							You represent and warrant that you own or have the necessary rights to the content you post and that your content does not violate the rights of any third party.{" "}
						</div>
					</li>

					<li className={styles.rule}>
						<div className={styles.ruleTitle}>Fees and Payments</div>
						<div className={styles.ruleDescription}>
							Easy Mart may charge fees for certain services. You agree to pay all fees and charges incurred in connection with your account on the terms and payment method you select. <br />
							For sellers, Easy Mart may charge listing fees, transaction fees, or subscription fees as outlined in our Seller Terms. All fees are non-refundable unless otherwise specified.{" "}
						</div>
					</li>

					<li className={styles.rule}>
						<div className={styles.ruleTitle}>Limitation of Liability</div>
						<div className={styles.ruleDescription}>
							In no event shall Easy Mart, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any:
							<ul className={styles.innerUl}>
								<li>Errors, mistakes, or inaccuracies of content</li>
								<li>Personal injury or property damage related to your use of the service</li>
								<li>Unauthorized access to or use of our servers and/or any personal information stored therein</li>
								<li>Interruption or cessation of transmission to or from our website</li>
								<li>Bugs, viruses, trojan horses, or the like which may be transmitted to or through our website</li>
								<li>Errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available via the website</li>
							</ul>
						</div>
					</li>

					<li className={styles.rule}>
						<div className={styles.ruleTitle}>Indemnification</div>
						<div className={styles.ruleDescription}>
							You agree to defend, indemnify, and hold harmless Easy Mart and its subsidiaries, agents, licensors, managers, and other affiliated companies, and their employees, contractors, agents, officers, and directors, from and against any and
							all claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from your use of the website.{" "}
						</div>
					</li>

					<li className={styles.rule}>
						<div className={styles.ruleTitle}>Governing Law</div>
						<div className={styles.ruleDescription}>These Terms shall be governed and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions. </div>{" "}
					</li>

					<li className={styles.rule}>
						<div className={styles.ruleTitle}>Changes to Terms</div>
						<div className={styles.ruleDescription}>
							We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect.{" "}
						</div>
					</li>

					<li className={styles.rule}>
						<div className={styles.ruleTitle}>Contact Us</div>
						<div className={styles.ruleDescription}>
							If you have any questions about these Terms, please contact us at: <br />
							Email: support@easymart.com <br /> Address: 123 Market Street, Suite 100, San Francisco, CA 94105{" "}
						</div>
					</li>
				</ul>
			</div>
			<Footer />
		</div>
	);
}

export default Body;
