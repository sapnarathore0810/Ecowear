# EcoWear Style Upgrade

You are modifying an EXISTING website/application. I am providing you with my current complete HTML file.

The current code contains an existing working dashboard and functionality. Your job is to **UPGRADE the existing application**, not rebuild it from scratch.

# 🚨 CRITICAL BRANDING REQUIREMENT

The website/project name is **ECOWEAR**.

The existing code currently uses the name **"REWEAR"** in various visible places.

Replace the visible product branding:

**REWEAR → ECOWEAR**

This includes:

* Browser title

* Logo/brand name

* Landing page

* Navigation/sidebar

* Headers

* Dashboard

* Login/signup

* Profile setup

* Onboarding

* Footer

* Any other visible application branding

The final website must consistently be branded as **ECOWEAR**.

However, DO NOT blindly rename internal variable names, JavaScript functions, CSS classes, localStorage keys, or other internal identifiers if doing so could break existing functionality. The important requirement is that the **visible product name is ECOWEAR**.

---

# 🚨 MOST IMPORTANT RULE: DO NOT REDESIGN THE EXISTING UI

I already like the existing UI.

**KEEP THE EXISTING UI EXACTLY AS IT IS wherever possible.**

Do NOT:

* redesign the dashboard

* change the existing layout

* replace the existing visual style

* change the pixel-art aesthetic

* replace the existing cards

* change the navigation structure

* change existing typography unnecessarily

* change existing spacing unnecessarily

* turn it into a generic SaaS dashboard

* introduce a completely new design system

* remove existing animations

* remove existing features

* rewrite working sections just for the sake of cleaner code

This is a **functional upgrade**, not a redesign.

Only add/change UI where it is genuinely required for the new functionality described below.

Any new screens should visually belong to the existing ECOWEAR design language.

---

# 1. NEW USER FLOW

The application should follow this flow for a new user:

**LANDING PAGE**

↓

**LOGIN / SIGN UP**

↓

**PROFILE SETUP**

↓

**STYLE PERSONALIZATION**

↓

**WARDROBE ONBOARDING**

↓

**UPLOAD CLOTHING PHOTOS**

↓

**PERSONALIZED ECOWEAR DASHBOARD**

For an existing user:

**LOGIN**

↓

If onboarding is complete → **existing dashboard**

If onboarding is incomplete → **continue profile/onboarding**

Do not remove the existing dashboard or its existing features.

---

# 2. LOGIN & SIGNUP

Add a proper login/signup entry point to the application.

The user should be able to:

### Sign Up

Create a new account and then proceed to profile setup.

### Login

Log into an existing account.

For this current prototype, implement the authentication flow on the frontend in a way suitable for demonstration.

Do NOT pretend that localStorage-based authentication is production-grade security.

The prototype should simply allow us to demonstrate the complete user journey.

The application should remember whether a user has completed onboarding.

After signup:

**Signup → Profile Setup**

After login:

* onboarding incomplete → Profile Setup

* onboarding complete → existing ECOWEAR dashboard

Persist the relevant account/onboarding state so refreshing the page does not reset the entire flow.

---

# 3. PROFILE SETUP

After signup, take the user through a profile setup/onboarding process.

The purpose is to create a personalized fashion profile.

Collect information such as:

* Name

* Gender: Female / Male

* Body type

* Favourite colours

* Colours they dislike

* Preferred clothing styles

* Style preferences

* Other useful fashion preferences that can improve outfit recommendations

The profile should become part of the user's application state.

Keep this onboarding simple, intuitive and visually consistent with the existing UI.

---

# 4. GENDER-BASED VISUAL THEME

The gender selection should influence the visual theme of ECOWEAR.

If the user selects:

### FEMALE

Use a tasteful feminine visual theme.

For example:

* softer/pastel accents

* softer colour treatment

* subtle feminine visual details

* appropriate styling of illustrations/icons

### MALE

Use a tasteful masculine visual theme.

For example:

* deeper/neutral colours

* stronger contrast

* slightly more masculine visual treatment

* appropriate styling of illustrations/icons

IMPORTANT:

These should NOT become two completely different websites.

Keep the following identical:

* Layout

* Page structure

* Navigation

* Information architecture

* Existing components

* Functionality

* Dashboard structure

Only the **theme/visual styling** should adapt.

Do not make the themes stereotypical, excessive or childish.

The themes should feel modern, tasteful and cohesive.

The selected theme must persist across:

* page refresh

* login/logout

* returning to the application

The user should also be able to change their profile/theme later from Settings.

---

# 5. WARDROBE ONBOARDING

After completing their profile, guide the user into creating their personal digital wardrobe.

The experience should communicate something similar to:

**"Let's build your wardrobe."**

The user should be able to upload photos of their actual clothes.

Instead of only entering a text name, allow the user to associate an actual image with each clothing item.

Each wardrobe item should support information such as:

* Clothing image

* Item name

* Category

* Colour

* Style/type

* Times worn

* Date added

* Last worn

* Any other attributes useful for recommendations

Allow the user to upload multiple clothing items.

Existing categories should continue to work.

---

# 6. IMAGE-BASED MY CLOSET

Extend the existing My Closet functionality so the uploaded clothing images become the actual visual representation of the user's wardrobe.

Uploaded clothing should appear visually where relevant, including:

* My Closet

* Today's Outfit

* Outfit recommendations

* Style recommendations

* Other wardrobe-related areas

Do not replace the existing wardrobe system unnecessarily.

Extend the existing wardrobe item structure to support images.

The existing application already has a centralized state/persistence system.

**EXTEND THAT EXISTING SYSTEM.**

Do NOT create a completely separate wardrobe database.

Do NOT create duplicate state-management systems.

---

# 7. PERSONALIZED OUTFIT RECOMMENDATIONS

The existing outfit recommendation functionality should be extended to use the user's actual profile and wardrobe.

Recommendations should consider:

1. Body type

2. Gender/theme where relevant

3. Style preferences

4. Favourite colours

5. Disliked colours

6. Clothing preferences

7. Weather

8. Uploaded wardrobe

9. Clothing categories

10. Wear history

The main goal is:

**Recommend outfits using clothes the user actually owns.**

The system should prioritize the user's uploaded clothing rather than generic clothing that does not exist in their wardrobe.

Keep the existing weather and least-worn-item logic where possible.

Extend it rather than unnecessarily replacing it.

---

# 8. EXISTING FEATURES MUST REMAIN FUNCTIONAL

Do NOT remove or break existing features such as:

* Dashboard

* My Closet

* Add Clothes

* Today's Outfit

* Recommendations

* Repair

* Swap

* Resell

* Donate

* Recycle

* My Impact

* Settings

* Help

* Wear tracking

* Circular activity tracking

* Existing recommendation logic

* Existing navigation

* Existing persistence

All existing buttons and navigation must continue working.

If something needs to be modified to support the new functionality, modify it minimally.

---

# 9. DATA & PERSISTENCE

Use and EXTEND the existing application state and persistence architecture.

Do not introduce unnecessary frameworks or libraries.

Persist:

* User account/prototype login state

* Profile information

* Gender/theme

* Body type

* Style preferences

* Favourite colours

* Clothing preferences

* Wardrobe items

* Clothing images

* Wear counts

* Last-worn information

* Circular activity

* Onboarding completion

Refreshing the page should restore the user's state.

If this remains a frontend-only prototype, structure the code so a real backend/database can later replace the local persistence layer without requiring the entire application to be rewritten.

---

# 10. CLOTHING IMAGE STORAGE

For this prototype, implement clothing-image storage in a practical browser-compatible way.

Do NOT pretend that browser localStorage is a scalable production image-storage solution.

If browser storage is used for the prototype:

* handle large images carefully

* validate uploaded files

* handle invalid images gracefully

* avoid crashing the application

* structure the data so cloud storage can later replace the prototype solution

The architecture should make future backend/cloud image storage possible.

---

# 11. PROFILE + WARDROBE + RECOMMENDATION CONNECTION

The important conceptual relationship should be:

**USER PROFILE**

+

**STYLE PREFERENCES**

+

**BODY TYPE**

+

**COLOUR PREFERENCES**

+

**ACTUAL CLOSET**

+

**WEATHER**

+

**WEAR HISTORY**

↓

**PERSONALIZED ECOWEAR EXPERIENCE**

Do not implement these as isolated features.

The profile should actually influence the recommendation logic.

The uploaded wardrobe should actually influence the outfit generation.

The user's preferences should actually influence what is recommended.

---

# 12. RESPONSIVENESS

Preserve the existing responsive behaviour.

Make sure the new:

* Login

* Signup

* Profile Setup

* Onboarding

* Clothing Upload

experiences work properly on:

* Desktop

* Tablet

* Mobile

Do not break the existing mobile navigation.

---

# 13. ERROR HANDLING

Handle cases such as:

* User leaves profile incomplete

* User refreshes during onboarding

* User uploads an invalid image

* User uploads a very large image

* User has no clothes

* User only has one clothing category

* User has no style preferences

* User logs out and logs back in

* Browser storage is unavailable/full

* User has an incomplete profile

The application should fail gracefully and should not crash.

---

# 14. CODE ARCHITECTURE

Before modifying the code:

1. Understand the existing architecture.

2. Understand the existing state-management system.

3. Understand the existing persistence system.

4. Understand the navigation system.

5. Understand how wardrobe items are currently stored.

6. Understand the existing outfit-generation logic.

7. Understand the existing recommendation logic.

8. Integrate the new functionality into those systems.

Then make the **minimum necessary modifications**.

Do NOT rewrite working code simply because you would personally structure it differently.

Do NOT create duplicate functions if existing functions can be extended.

Do NOT remove working functionality.

---

# 15. IMPLEMENTATION PRIORITY

Implement the functionality in this order:

1. ECOWEAR branding

2. Login/signup flow

3. Profile creation

4. Gender-based theme persistence

5. Style personalization

6. Wardrobe onboarding

7. Clothing image upload

8. Image-based closet

9. Personalized outfit recommendations

10. Integration with existing ECOWEAR features

11. Persistence

12. Error handling

---

# 16. FINAL TESTING REQUIREMENT

Before returning the result, logically test the complete flow:

### New user:

Signup

→ Profile Setup

→ Select gender

→ Select body type/preferences

→ Complete profile

→ Upload clothes

→ Enter ECOWEAR dashboard

→ See uploaded clothes

→ Generate outfit

→ Recommendation uses profile + wardrobe

### Existing user:

Login

→ Existing profile restored

→ Correct theme restored

→ Existing wardrobe restored

→ Dashboard works normally

Also verify:

* Existing navigation works

* Existing buttons work

* Existing circular-fashion features work

* Wear tracking works

* Impact tracking works

* Existing recommendations don't break

* Uploaded images remain associated with correct items

* Profile data persists

* Theme persists

* Onboarding status persists

---

# 🚨 FINAL NON-NEGOTIABLE INSTRUCTIONS

This is an **existing working ECOWEAR application**.

I am asking you to **ADD AND EXTEND FUNCTIONALITY**, not redesign it.

### DO:

* Modify the existing code

* Extend existing state

* Extend existing wardrobe logic

* Extend existing recommendation logic

* Preserve existing UI

* Preserve existing functionality

* Preserve existing responsive behaviour

* Add only the UI necessary for the new functionality

* Use the existing architecture wherever possible

### DO NOT:

* Rebuild the application from scratch

* Replace the dashboard

* Redesign the existing UI

* Remove existing pages

* Remove existing functionality

* Replace the pixel-art aesthetic

* Create a generic modern SaaS interface

* Create duplicate state systems

* Create duplicate wardrobe systems

* Replace working logic unnecessarily

The **ONLY major new UI areas** should be the ones genuinely required for:

* Landing/authentication

* Profile setup

* Onboarding

* Clothing upload

Everything else should remain visually consistent with the existing application.

Finally, return the **COMPLETE updated HTML file/code**, including all existing code plus the new functionality.

Do NOT return only snippets.

Do NOT return pseudocode.

Do NOT provide a simplified demo.

Do NOT omit existing sections.

Modify the actual existing application I provided and give me the complete working updated version.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
