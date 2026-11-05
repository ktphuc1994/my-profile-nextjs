import type { Metadata } from 'next';

// ✏️ EDIT THESE FOUR VALUES BEFORE PUBLISHING
const APP_NAME = 'My Tasks';
const DEVELOPER_NAME = 'KHUC THIEN PHUC';
const CONTACT_EMAIL = 'khucthienphuc@gmail.com';
const LAST_UPDATED = 'November 5, 2026';

export const metadata: Metadata = {
  title: `Privacy Policy - ${APP_NAME}`,
  description: `Privacy Policy for the ${APP_NAME} Android app.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main
      style={{
        maxWidth: 760,
        margin: '0 auto',
        padding: '48px 20px 80px',
        fontFamily:
          "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        lineHeight: 1.65,
        color: '#1f2937',
      }}
    >
      <h1 style={{ fontSize: 32, marginBottom: 4 }}>Privacy Policy</h1>
      <p style={{ color: '#6b7280', marginTop: 0 }}>
        {APP_NAME} (Android) &middot; Last updated: {LAST_UPDATED}
      </p>

      <p>
        This Privacy Policy explains how <strong>{APP_NAME}</strong> (the
        &ldquo;App&rdquo;), provided by <strong>{DEVELOPER_NAME}</strong>{' '}
        (&ldquo;we&rdquo;, &ldquo;us&rdquo;), handles information when you use
        the App.
      </p>

      <h2>Summary</h2>
      <p>
        {APP_NAME} does not collect, transmit, sell, or share any personal data.
        Everything you enter stays on your device.
      </p>

      <h2>Information we collect</h2>
      <p>
        We do not collect any personal information. The App does not require an
        account, and we do not receive your name, email address, location,
        contacts, device identifiers, or usage analytics.
      </p>

      <h2>Data stored on your device</h2>
      <p>
        The tasks you create are saved in local storage on your device so they
        are available the next time you open the App. This data is never sent to
        us or to any third party. It is deleted when you uninstall the App or
        clear its data in your device settings.
      </p>

      <h2>Third-party services</h2>
      <p>
        The App does not include advertising, analytics, or tracking services,
        and does not share data with third parties.
      </p>

      <h2>Permissions</h2>
      <p>
        The App does not request any special permissions to access your
        contacts, camera, microphone, location, photos, or files.
      </p>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        Because we collect no personal data from anyone, we do not knowingly
        collect personal information from children under 13 (or the applicable
        age in your region).
      </p>

      <h2>Security</h2>
      <p>
        Your data remains on your device and is protected by your device&rsquo;s
        own security features. No data is transmitted over the internet by the
        App.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with a new &ldquo;Last updated&rdquo; date.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have questions about this Privacy Policy, contact{' '}
        {DEVELOPER_NAME} at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </main>
  );
}
