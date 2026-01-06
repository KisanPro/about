# Contact Form Setup Instructions

## Overview
Your contact form is now configured to send emails using Web3Forms - a free, reliable email service that requires no backend setup.

## Setup Steps (Takes 2 minutes)

### Step 1: Get Your Free Access Key
1. Go to **https://web3forms.com**
2. Click on "Create Access Key" or "Get Started"
3. Enter your email address: **spanda3@gitam.edu**
4. Click "Create Access Key"
5. Check your email (**spanda3@gitam.edu**) for the verification
6. Click the verification link in the email
7. Copy your **Access Key** (it looks like: `a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6`)

### Step 2: Add the Access Key to Your Website
1. Open the file: `contact.html`
2. Find line 102 (approximately) that says:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key
4. Save the file

### Step 3: Test It!
1. Open http://127.0.0.1:8080/contact.html in your browser
2. Fill out the form with test information
3. Click "Send Message"
4. Check your email (**spanda3@gitam.edu**) - you should receive the message!

## What Happens When Someone Submits the Form?

When a visitor fills out your contact form and clicks "Send Message":

1. ✅ The form validates that all fields are filled
2. ✅ The button changes to "Sending..." (disabled)
3. ✅ The message is sent to Web3Forms via AJAX
4. ✅ Web3Forms forwards it to **spanda3@gitam.edu**
5. ✅ The user sees a green success message
6. ✅ The form resets automatically

## Email Format You'll Receive

**Subject:** New Contact Form Submission from Kisan Pro Website

**From:** Kisan Pro Contact Form

**Body will include:**
- Name: [Visitor's name]
- Email: [Visitor's email]
- Message: [Their message]

## Features
- ✅ No backend required
- ✅ 100% free (up to 250 submissions/month)
- ✅ SPAM protection included
- ✅ Mobile responsive
- ✅ Instant email delivery
- ✅ Professional success/error messages
- ✅ Form validation (all fields required)

## Troubleshooting

**Form not sending?**
- Make sure you replaced `YOUR_ACCESS_KEY_HERE` with your actual key
- Verify your email with Web3Forms
- Check browser console for errors (F12 → Console tab)

**Not receiving emails?**
- Check your spam folder
- Verify the access key is correct
- Make sure the email in Web3Forms matches: spanda3@gitam.edu

**Need help?**
- Web3Forms Documentation: https://docs.web3forms.com
- Web3Forms Support: support@web3forms.com

---

## Optional: Customize the Email Subject/From Name

In `contact.html`, you can change these hidden fields:

```html
<input type="hidden" name="subject" value="New Contact Form Submission from Kisan Pro Website">
<input type="hidden" name="from_name" value="Kisan Pro Contact Form">
```

Change the `value` attributes to whatever you prefer!
