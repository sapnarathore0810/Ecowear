# EcoWear

### AI-Powered Sustainable Circular Fashion Platform

EcoWear is an AI-powered circular fashion platform designed to help users manage their personal wardrobe, discover personalized outfit recommendations, and make more sustainable clothing decisions.

The platform combines artificial intelligence, computer vision, personalized recommendations, and circular-fashion concepts to create a smarter digital wardrobe experience.

---

## Overview

EcoWear aims to address the problem of unused clothing, inefficient wardrobe management, and unsustainable fashion consumption.

Users can create a personalized profile based on their body type, preferred fit, colors, styles, occasions, comfort preferences, and sustainability priorities.

The platform is being developed incrementally, starting with the digital wardrobe and personalization system and gradually integrating AI-powered clothing analysis and recommendation capabilities.

---

## Key Features

### User Profile & Personalization

EcoWear collects user preferences that can be used to personalize clothing recommendations, including:

- Age
- Height
- Weight
- Gender
- Body type
- Preferred fit
- Preferred styles
- Favorite colors
- Colors to avoid
- Clothing categories
- Sleeve preferences
- Bottom styles
- Neckline preferences
- Fabric preferences
- Preferred occasions
- Comfort priority
- Style priority
- Sustainability priority

User profile information is currently stored using a JSON-based data layer during development.

---

### Digital Wardrobe

Users can build their personal digital closet by adding clothing items.

The planned wardrobe system will allow users to:

- Add clothing items
- Organize clothing by category
- Store clothing images
- Store clothing attributes
- View their personal wardrobe
- Track clothing usage
- Use wardrobe items for personalized outfit recommendations

---

### AI Clothing Detection & Segmentation

EcoWear is being developed to automatically identify clothing items from uploaded photographs.

The planned pipeline is:

```text
User Photo
    ↓
Clothing Detection
    ↓
Clothing Segmentation
    ↓
Clothing Extraction
    ↓
Transparent Clothing Image
    ↓
Attribute Extraction
    ↓
Digital Wardrobe
