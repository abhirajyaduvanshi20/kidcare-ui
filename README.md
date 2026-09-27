# KidCare - Pediatric Health & Child Wellness (React Android Edition)

A high-fidelity, interactive **React + Vite** implementation of the **KidCare Android** pediatric healthcare application. Designed with pixel-perfect attention to Android Jetpack Compose aesthetics, genuine assets, WHO child growth charts, interactive Flip consultations, multi-child switcher, vaccination tracking, and live video consultation simulator.

---

## 📱 Live Demo & Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview build
npm run preview
```
Visit: `http://127.0.0.1:5173/` or `http://localhost:5173/`

---

## 🎨 Color System & Branding (From Android Source)

| Token Name | Hex Code | Purpose |
|---|---|---|
| **Primary Blue** | `#056DB4` / `#1E73B8` | Primary branding, buttons, active indicators |
| **Dark Blue** | `#012741` | Top bars, header gradients, dark themes |
| **Primary Green** | `#53BF9D` / `#53BE9C` | Health confirmations, success badges, WHO median curve |
| **Card Yellow** | `#F5DC91` | Metric highlights, alert due cards |
| **Warning Red** | `#F94C66` | Emergency badges, allergy alerts, 97th percentile line |
| **Emergency Orange** | `#F7931E` / `#E36A00` | Emergency Flip consultation gradient |
| **Feedback Purple** | `#B24592` / `#8E2DE2` | Feedback Flip consultation gradient |
| **Routine Green** | `#5BBF9B` / `#3AA17E` | Routine Milestone Flip gradient |

---

## 🌟 100% Feature & Screen Coverage

### 1. 🏠 Home Screen (`HomeScreen.kt`)
- **Multi-Child Profile Switcher**: Fast bottom sheet selector between Reyansh, Ananya, or "+ Add Child Profile".
- **Dynamic 3D Child Metric Card**: Age, DOB, Blood Group, Weight (kg), Height (cm), Head Circumference (cm), and calculated BMI.
- **Core Health Trackers**:
  - WHO Growth Curve
  - Vaccination Tracker with "Action Due" badges
  - Pediatric Diet Plans
  - Instant Consultation Booking
- **KidCare "Flip Cards" Consultation System**:
  - 4 Distinct Flip Categories: *Ask a Question*, *Emergency Query*, *Feedback Flip*, *Routine Milestone*.
  - Rich query composer with text tools, photo attachment, and camera simulation.
  - Asynchronous doctor response thread with verified badge from Dr. Ila B.
- **Upcoming Consultation Widget**: Live countdown, token KC-89412, and instant video join button.
- **Health Feeds & Blogs**: Evidence-based parenting advice with read times, tags, and like counters.

### 2. 📅 Doctor Appointments & Consultations (`AppointmentsNavGraph.kt`)
- **Filter Tabs**: *Upcoming*, *Completed*, *Cancelled*.
- **4-Step Booking Wizard**:
  - Step 1: Select Child & Mode (*Online Video Consultation* or *In-Clinic Visit*).
  - Step 2: Interactive Symptom Selector (*Fever, Cough, Rash, Appetite Loss, Ear Pain, Teething, etc.*).
  - Step 3: Available Date & Doctor Slot Picker (Morning, Afternoon, Evening).
  - Step 4: Token generation, booking confirmation, and pre-checkup guidelines.
- **Live Video Consultation Simulation**: WebRTC-style interface with doctor video feed, PIP local camera, audio mute/unmute, video toggle, in-call chat, and live prescription generation.

### 3. 📊 WHO Growth Chart & Tracking (`GrowthChartFocus.kt`)
- **Interactive SVG Multi-Line Growth Chart**:
  - WHO Standard Percentiles: 97th (High / Red), 50th (Median / Green), 3rd (Low / Orange).
  - Child's recorded weight & height growth trajectory.
  - Metric switcher: *Weight-for-Age (kg)* vs *Height-for-Age (cm)*.
- **Historical Growth Logs Table**: Date-wise logs with age in months.
- **Log Metrics Modal**: Quick logging of new measurements.

### 4. 💉 Vaccination & Immunization Tracker (`VaccinationScreen.kt`)
- Complete **Indian Academy of Pediatrics (IAP) / WHO Childhood Schedule**:
  - *At Birth, 6 Weeks, 10 Weeks, 14 Weeks, 6 Months, 9 Months, 12 Months, 15 Months, 18 Months, 2 Years, Boosters*.
- Status Badges: `GIVEN` (Green), `DUE` (Yellow warning), `UPCOMING` (Blue).
- Record Administration: Given date, brand, batch number, doctor signature, and hospital card photo proof.

### 5. 🥗 Nutrition & Diet Schedules (`NutritionScreen.kt`)
- Age-specific categories: *Infant, Weaning, Toddler, Pre-School, School*.
- Daily 4-Meal Schedule: *Breakfast, Lunch, Evening Snack, Dinner* with genuine recipe images, calorie tags, and macro breakdowns (Protein, Carbs, Healthy Fats).
- Daily Hydration Target Tracker.
- Known Allergies Safety Alerts.

### 6. 📄 Prescriptions & Medical Records (`PrescriptionScreen.kt`)
- Filter by Document Type: *Prescriptions, Pathology Blood Tests, Radiology X-Rays*.
- Full-Screen Clinical Document Viewer with detailed dosage timings, instructions, lab reference tables, and digital signatures.
- Upload New Medical Record tool with camera scan attachment.

### 7. ⚙️ Profile & Settings (`ProfileScreen.kt`)
- Parent Profile & Emergency Contact editor.
- Fingerprint / Biometric Security Settings.
- Frequently Asked Questions (FAQ) Accordion.
- 24/7 Pediatric Help Desk & Ticket Support System.
- Privacy Policy & HIPAA Compliance overview.
- Notification Center with unread badges.
- Mobile Phone + OTP Authentication Flow.

---

## 📲 How to Convert to Android Studio (APK / AAB)

You can convert this React project directly into an Android Studio native project in 3 simple commands using **Capacitor**:

```bash
# 1. Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android

# 2. Initialize Capacitor configuration
npx cap init KidCare com.kidcare.app --web-dir=dist

# 3. Build web assets & add Android platform
npm run build
npx cap add android

# 4. Open in Android Studio
npx cap open android
```

In Android Studio, you can now hit **Run** (`Shift + F10`) or **Build Bundle/APK** to generate the signed release APK!
